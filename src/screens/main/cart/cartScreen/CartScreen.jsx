import React, { useEffect, useState } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import icons from '../../../../constants/icons';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';
import TopHeader from '../../../../components/TopHeader';
import AppButton from '../../../../components/AppButton';
import { styles } from './CartScreen.style';
import {
  userCartData,
} from '../../../../redux/features/Main/mainSelector';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCartItem,
  getCartData,
  checkoutProduct,
  removeAllCart,
} from '../../../../redux/features/Main/mainThunks';
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from '../../../../redux/features/Main/mainSlice';
import { selectAddressDetails } from '../../../../redux/features/auth/authSelectors';
import LottieView from 'lottie-react-native';
import { addressList } from '../../../../redux/features/auth/authThunks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FullScreenLoader from '../../../../components/FullScreenLoader';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';

const CartScreen = () => {
  const navigation = useNavigation();
  const [checkAll, setCheckAll] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(null);
  const cart = useSelector(userCartData);

  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart && Array.isArray(cart) && selectedItems.length > 0) {
      const calculatedTotalPrice = selectedItems.reduce((total, productId) => {
        const selectedProduct = cart.find(item => item.id === productId);
        if (selectedProduct) {
          const discountPrice =
            selectedProduct.price - (selectedProduct.price * selectedProduct.discount) / 100;
          const roundedDiscountPrice = discountPrice.toFixed(2);
          return total + (roundedDiscountPrice * selectedProduct.quantity);
        }
        return total;
      }, 0);
      setTotalPrice(calculatedTotalPrice);
    } else {
      setTotalPrice(0);
    }
  }, [cart, selectedItems]);

  const toggleItemSelection = productId => {
    setSelectedItems(prevSelectedItems => {
      let updatedSelectedItems;
      if (prevSelectedItems.includes(productId)) {
        updatedSelectedItems = prevSelectedItems.filter(id => id !== productId);
      } else {
        updatedSelectedItems = [...prevSelectedItems, productId];
      }
      setCheckAll(updatedSelectedItems.length === cart.length && updatedSelectedItems.length > 0);
      return updatedSelectedItems;
    });
  };

  console.log('---------------ID---------------', selectedItems);
  console.log('---------------PRICE---------------', totalPrice);

  const [message, setMessage] = useState();
  const dispatch = useDispatch();
  const addressID = useSelector(selectAddressDetails);
  console.log('address id arhi hai bhai', addressID);

  let defaultAddressID;

  if (Array.isArray(addressID) && addressID.length > 0) {
    const defaultAddress = addressID[0];

    if (defaultAddress.is_default === "1") {
      defaultAddressID = defaultAddress.id;
      console.log('The ID of the default address is:', defaultAddressID);
    } else {
      console.log('No default address found.');
    }
  } else {
    console.log('The addressID is not an array, or it is an empty array, or is null/undefined.');
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAddressList = async () => {
      try {
        await dispatch(addressList()).unwrap();
      } catch (error) {
        console.error('Error fetching address list:', error);
        // Handle the error as needed, for example, set a default or show a message
      } finally {
        setLoading(false);
      }
    };
    fetchAddressList();
  }, []);


  useEffect(() => {
    setLoading(true);
    dispatch(getCartData());
    setLoading(false);
  }, []);

  const handleDecreaseQuantity = index => {
    dispatch(decreaseProductQuantity(index));
  };

  const handleIncreaseQuantity = async (index) => {
    const product = cart[index];

    // Check if the quantity is less than the current stock
    if (product.quantity < product.product.current_stock) {
      dispatch(increaseProductQuantity(index));
    } else {
      // Show an error message or handle out-of-stock scenario
      Alert.alert('Out of Stock', 'Sorry, the product is out of stock.');
    }
  };


  const handleDeleteButton = async id => {
    await dispatch(deleteCartItem(id)).then(res => {
      dispatch(getCartData())
        .unwrap()
        .then(res => {
          if (res) {
            setCartEmpty(false);
          } else {
            setMessage('Your Cart Is Empty');
            setCartEmpty(true);
          }
        });
    });
  };

  const onCheckout = async () => {
    const updatedSelectedItems = [...selectedItems];

    if (updatedSelectedItems.length > 0) {
      // Filter cart items based on selected item IDs
      const selectedCartItems = cart.filter(item => updatedSelectedItems.includes(item.id));

      // Save selected cart items to AsyncStorageπ
      await AsyncStorage.setItem('totalPriceCustom', totalPrice.toFixed(2));
      await AsyncStorage.setItem('totalItemsCustom', updatedSelectedItems.length.toString());
      await AsyncStorage.setItem('cartItemsCustom', JSON.stringify(selectedCartItems));

      if (defaultAddressID) {
        navigation.navigate('PlaceOrderScreen');
      } else {
        Alert.alert(
          'Error',
          'Please set a default address before proceeding to checkout.',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Add Your Address',
              onPress: () => navigation.navigate('AddAddress'),
            },
          ],
        );
      }
    } else {
      Alert.alert('Error', 'Please select item(s)', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK' },
      ]);
    }
  };


  const handleSelectAll = () => {
    setCheckAll(prevCheckAll => {
      if (prevCheckAll) {
        setSelectedItems([]);
      } else {
        const allProductIds = cart.map(item => item.id);
        setSelectedItems(allProductIds);
      }
      return !prevCheckAll;
    });
  };

  const deleteAllCart = (cartGroupId) => {
    Alert.alert(
      'Warning',
      'Are you sure you want to delete your cart items?',
      [
        { text: 'No', style: 'default' },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: async () => {
            setLoading(true);
            // Pass the cart group ID directly to removeAllCart
            dispatch(removeAllCart(cartGroupId)).then(() => {
              dispatch(getCartData()).then(() => {
                setLoading(false);
              });
            });
          },
        },
      ]
    );
  };

  console.log('cart data------------------:', cart);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        translucent={true}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <TopHeader title={'My Cart'} />
      {loading ? (
        <FullScreenLoader />
      ) : (
        <>
          {cart && cart.length === 0 ? null : (
            <View style={styles.checkboxContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  value={checkAll}
                  onValueChange={handleSelectAll}
                  tintColors={{ true: Colors.BlueViolet, false: Colors.BlackCoral }}
                  style={[
                    Platform.OS === 'android'
                      ? { transform: [{ scaleX: 1 }, { scaleY: 1 }] }
                      : { height: 24, width: 24 },
                    styles.checkbox,
                  ]}
                  boxType='circle'
                  onCheckColor={Colors.White}
                  onFillColor={Colors.BlueViolet}
                  onTintColor={Colors.BlueViolet}
                />
                <Text style={styles.checkAllText}>{checkAll ? `SELECT ALL (${selectedItems.length} ITEM(S))` : 'SELECT ALL (0 ITEM(S))'}</Text>
              </View>
              <AppButton
                ImageSource={<icons.DeleteIconRed />}
                label="Remove All"
                image
                imageLeft
                background
                buttonContainerStyle={styles.deleteBtnContainerStyle}
                textStyle={styles.deleteTextStyle}
                onPress={() => deleteAllCart(cart[0]?.cart_group_id)}
              />
            </View>
          )
          }
          {cart && cart.length === 0 ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                backgroundColor: Colors.White,
              }}>
              <Text
                style={{
                  fontFamily: Fonts.regular,
                  color: Colors.AppColor,
                  fontSize: Sizes.size20,
                }}>
                Your Cart is Empty
              </Text>
            </View>
          ) : (
            <>
              <FlatList
                style={{ backgroundColor: Colors.White }}
                horizontal={false}
                data={cart}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                  const discountPrice = item.discountType === 'percentage'
                    ? item.price - (item.price * item.discount) / 100
                    : item.price - item.discount;
                  const roundedDiscountPrice = Math.floor(discountPrice);
                  return (
                    <View style={styles.cartRoot}>
                      <View style={styles.cartDetailsRoot}>
                        <TouchableOpacity
                          style={styles.cartDetailsRoot}
                          // onPress={() => navigation.navigate('SingleProduct')}
                          activeOpacity={0.8}>
                          <View style={styles.cartImageView}>
                            <Image
                              source={{ uri: item?.thumbnail }}
                              style={styles.cartImageStyle}
                              resizeMode="cover"
                            />
                            <TouchableOpacity
                              activeOpacity={0.8}
                              onPress={() => toggleItemSelection(item.id)}
                              style={[
                                styles.activeBulletsView,
                                {
                                  backgroundColor: selectedItems.includes(item.id)
                                    ? Colors.BlueViolet
                                    : Colors.SurfaceLightBlue,
                                },
                              ]}>
                            </TouchableOpacity>
                          </View>
                          <View style={styles.cartDetails}>
                            <View style={styles.cartMainText}>
                              <Text
                                numberOfLines={2}
                                style={styles.cartTitleText}>
                                {item.name}
                              </Text>
                              {/* <Text numberOfLines={1} style={styles.cartDesText}>
                              {item.description}
                            </Text> */}
                              <View style={styles.cartRatingView}>
                                <icons.CartRatingIcon
                                  style={styles.cartRatingIcon}
                                />
                                {/* <View style={styles.cartReviewsView}>
                                <Text
                                  style={
                                    styles.reviewText
                                  }>{`(${item.product.rating_count})`}</Text>
                                <Text
                                  style={
                                    styles.soldText
                                  }>{`- ${item.product.number_of_sold} Solds`}</Text>
                              </View> */}
                              </View>
                            </View>
                            <View style={styles.bottomDetailsView}>
                              <View style={styles.priceView}>
                                <Text style={styles.disPrice}>
                                  Rs. {roundedDiscountPrice}
                                </Text>
                                <Text style={styles.origPrice}>
                                  Rs. {item.price}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                        <View style={styles.counterView}>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleDecreaseQuantity(index)}>
                            <icons.MinusIcon />
                          </TouchableOpacity>
                          <Text style={styles.counterText}>
                            {item.quantity < 10
                              ? `0${item.quantity}`
                              : `${item.quantity}`}
                          </Text>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleIncreaseQuantity(index)}>
                            <icons.PlusIcon />
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={styles.separatorView}></View>
                      <View style={styles.buttonsView}>
                        <AppButton
                          ImageSource={<icons.DeleteIconRed />}
                          label="Delete"
                          image
                          imageLeft
                          background
                          buttonContainerStyle={styles.deleteBtnContainerStyle}
                          textStyle={styles.deleteTextStyle}
                          onPress={() => handleDeleteButton(item.id)}
                        />
                      </View>
                    </View>
                  )
                }
                }
              />
              <View style={styles.footerStyle}>
                <View style={styles.footerText}>
                  <Text style={styles.itemText}>{selectedItems.length} item</Text>
                  <Text style={styles.totalPriceText}>
                    Rs. {Math.floor(totalPrice)}
                  </Text>
                </View>
                <AppButton
                  onPress={onCheckout}
                  textStyle={styles.footerBtnTextStyle}
                  background
                  label="Checkout"
                  buttonContainerStyle={styles.footerBtnStyle}
                />
              </View>
            </>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
