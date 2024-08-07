import React, { useEffect, useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import TopHeader from '../../../../components/TopHeader';
import AppButton from '../../../../components/AppButton';
import AppInput from '../../../../components/AppInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './PlaceOrderScreen.style';
import { placeOrder, shippingMethod } from '../../../../redux/features/Main/mainThunks';
import { useDispatch, useSelector } from 'react-redux';
import { addressList } from '../../../../redux/features/auth/authThunks';
import { selectshippingMethodID, userCartData } from '../../../../redux/features/Main/mainSelector';
import { selectAddressDetails, selectUserDetails } from '../../../../redux/features/auth/authSelectors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';

const PlaceOrderScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(selectUserDetails);

  const phoneNumber = userData?.phone;
  let formattedNumber;
  if (phoneNumber) {
    const trimmedNumber = phoneNumber.replace(/^0+/, '');
    formattedNumber = `+92${trimmedNumber}`;
  } else {
    console.log("Phone number is not available.");
  }

  const addressID = useSelector(selectAddressDetails);
  console.log("address id arhi hai bhai", addressID);

  useEffect(() => {
    dispatch(addressList()).unwrap();
  }, []);

  let defaultAddressID;
  let addressDetail;
  if (Array.isArray(addressID) && addressID.length > 0) {
    const defaultAddress = addressID[0]
    if (defaultAddress.is_default === "1") {
      defaultAddressID = defaultAddress.id;
      console.log('The ID of the default address is:', defaultAddressID);

      addressDetail = `${defaultAddress.contact_person_name ?? ""}, ${defaultAddress.appartment_no ?? ""}, ${defaultAddress.street_address ?? ""}, ${defaultAddress.city ?? ""}, ${defaultAddress.state ?? ""}${defaultAddress.zip ? ` - ${defaultAddress.zip}` : ""}`;
      console.log("The complete address detail:", addressDetail);
    } else {
      console.log("No default address found.");
    }
  } else {
    console.log('The addressID is not an array, or it is an empty array, or is null/undefined.');
  }

  // const onCheckout = async () => {
  //   if (defaultAddressID) {
  //     try {
  //       const respone = await dispatch(
  //         placeOrder({
  //           address_id: defaultAddressID,
  //           shipping_method_id: shippingID,
  //         }),
  //       ).unwrap();
  //       console.log('haan theek hai', respone);
  //       navigation.navigate('OrderPlacedScreen');
  //     } catch (err) {
  //       console.log('ERR', err);
  //     }
  //   } else {
  //     Alert.alert('Error', 'Please set a default address before proceeding to checkout.', [
  //       {
  //         text: 'Cancel',
  //         style: 'cancel',
  //       },
  //       { text: 'Add Your Address', onPress: () => navigation.navigate('AddAddress') },
  //     ]);
  //   }
  // };

  const [totalPrice, setTotalPrice] = useState();
  const [totalItems, setTotalItems] = useState();
  const [cartItems, setCartItems] = useState();

  const totalPriceCalc = async () => {
    await AsyncStorage.getItem('totalPriceCustom').then(res => {
      setTotalPrice(res)
    });
  }

  const totalItemsCalc = async () => {
    await AsyncStorage.getItem('totalItemsCustom').then(res => {
      setTotalItems(res)
    });
  }

  const totalCartItems = async () => {
    try {
      const storedCartItems = await AsyncStorage.getItem('cartItemsCustom');
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    } catch (error) {
      console.error('Error retrieving cart items:', error);
    }
  }


  useEffect(() => {
    totalPriceCalc();
    totalItemsCalc();
    totalCartItems();
  }, []);

  console.log('-------------------total price-------------------', totalPrice)
  console.log('-------------------total items-------------------', totalItems)
  console.log('-------------------total cart items-------------------', cartItems)

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor={Colors.White}
          translucent={true}
          barStyle={'dark-content'}
        />
        <GeneralAppHeader />
        <TopHeader
          title={'Checkout'}
        />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View style={styles.userDetailsRoot}>
            <TouchableOpacity onPress={() => navigation.navigate('AddressBook')} activeOpacity={0.8} style={styles.addressContainer}>
              <Text style={styles.deliverText}>Deliver to:</Text>
              <View style={styles.addressView}>
                <Text style={styles.addressText}>{addressDetail}</Text>
                <TouchableOpacity activeOpacity={0.8} style={{ top: -15 }}>
                  <icons.ForwardArrow />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View style={styles.infoView}>
              <Text style={styles.numberText}>{formattedNumber}</Text>
              <TouchableOpacity activeOpacity={0.8}>
                <icons.ForwardArrow />
              </TouchableOpacity>
            </View>
            <View style={styles.infoView}>
              <Text style={styles.numberText}>Billing Information</Text>
              <TouchableOpacity activeOpacity={0.8}>
                <icons.ForwardArrow />
              </TouchableOpacity>
            </View>
            <View style={styles.emailView}>
              <Text style={styles.emailText}>{userData?.email}</Text>
              <TouchableOpacity activeOpacity={0.8}>
                <icons.ForwardArrow />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.itemHeaderStyle}>
            <View style={styles.itemHeaderSepView}>
              <Text style={styles.itemHeaderHeadingStyle}>Your Items</Text>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('CartScreen')}>
                <Text style={styles.itemHeaderTextStyle}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.listView}>
            <FlatList
              horizontal={false}
              data={cartItems}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => {
                const discountPrice = item.price - (item.price * item.discount) / 100;
                const roundedDiscountPrice = Math.floor(discountPrice);
                return (
                  <View style={styles.itemRoot}>
                    <View style={styles.itemDetailsRoot}>
                      <View style={styles.itemImageView}>
                        <Image
                          source={{ uri: item.thumbnail }}
                          style={styles.itemImageStyle}
                          resizeMode="cover"
                        />
                      </View>

                      <View style={styles.itemDetails}>
                        <View style={styles.itemMainText}>
                          <Text numberOfLines={2} style={styles.itemTitleText}>
                            {item.name}
                          </Text>
                          {/* <Text numberOfLines={1} style={styles.itemDesText}>
                            {item.description}
                          </Text> */}
                          {/* <View style={styles.itemRatingView}>
                            <icons.CartRatingIcon style={styles.itemRatingIcon} />
                            <View style={styles.itemReviewsView}>
                              <Text
                                style={
                                  styles.reviewText
                                }>{`(${item.product.rating_count})`}</Text>
                              <Text
                                style={styles.soldText}>{`- ${item.product.number_of_sold} Solds`}</Text>
                            </View>
                          </View> */}
                        </View>
                        <View style={styles.bottomDetailsView}>
                          <View style={styles.priceView}>
                            <Text style={styles.disPrice}>Rs. {roundedDiscountPrice}</Text>
                            <Text style={styles.origPrice}>Rs. {item.price}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
            />

          </View>
          <View style={styles.couponMainView}>
            <View style={styles.couponCodeView}>
              <AppInput
                placeholder={'Enter Coupon Code'}
                styles={styles.couponInputStyle}
                inputTextStyle={styles.couponInputTextStyle}
              />
              <AppButton
                background
                label="Apply"
                buttonContainerStyle={styles.couponBtnStyle}
                textStyle={styles.couponBtnText}
              />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.offerRoot}>
              <View style={styles.offerView}>
                <icons.OfferIcon />
                <Text style={styles.offerText}>View Available Offers</Text>
              </View>
              <icons.OfferArrow style={styles.offerArrow} />
            </TouchableOpacity>
          </View>
          <View style={styles.paymentRoot}>
            <View style={styles.finalPaymentdetails}>
              <View style={styles.paymentInfoView}>
                <Text style={styles.paymentInfoText}>Subtotal ({totalItems} items)</Text>
                <Text style={styles.subTotalText}>Rs. {Math.floor(totalPrice)}</Text>
              </View>
              <View style={styles.paymentInfoView}>
                <Text style={styles.paymentInfoText}>Shipping Fee</Text>
                <Text style={styles.shippingFeeText}>FREE</Text>
              </View>
              <View style={styles.paymentInfoView}>
                <Text style={styles.paymentInfoText}>Vat</Text>
                <Text style={styles.vatText}>0</Text>
              </View>
            </View>
            <View style={styles.totalPaymentInfoView}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalText}>Rs. {Math.floor(totalPrice)}</Text>
            </View>
            <View style={styles.paymentOptions}>
              <icons.MastercardIcon />
              <icons.VisaIcon width={40} height={18} />
              <icons.EasyPaisaLogo />
              <icons.JazzcashLogo />
              <icons.NayapayLogo />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.footerStyle}>
          <View style={styles.footerText}>
            <Text style={styles.itemText}>{totalItems} items</Text>
            <Text style={styles.totalPriceText}>Rs. {Math.floor(totalPrice)}</Text>
          </View>
          <AppButton
            onPress={() => navigation.replace('PaymentScreen')}
            textStyle={styles.footerBtnTextStyle}
            background
            label="Place Order"
            buttonContainerStyle={styles.footerBtnStyle}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default PlaceOrderScreen;
