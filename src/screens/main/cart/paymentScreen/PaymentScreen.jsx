import React, { useEffect, useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import TopHeader from '../../../../components/TopHeader';
import { styles } from './PaymentScreen.style';
import { useDispatch, useSelector } from 'react-redux';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteCartItem, getCartData, orderPlaced } from '../../../../redux/features/Main/mainThunks';
import { userCartData } from '../../../../redux/features/Main/mainSelector';

const PaymentScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cart = useSelector(userCartData);

  const [totalPrice, setTotalPrice] = useState();
  const [totalItems, setTotalItems] = useState();
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    const totalCartItems = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem('cartItemsCustom');
        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
        }
      } catch (error) {
        console.error('Error araha hai cart items:', error);
      }
    };

    totalCartItems();
  }, []);

  const cartGroupID = cartItems && cartItems.length > 0 ? cartItems[0].cart_group_id : null;
  console.log("first cart group id", cartGroupID);
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
  console.log('-------------------cart group ID-------------------', cartGroupID)

  console.log('-------------------cart previous data-------------------', cart)

  const orderPlace = async () => {
    try {
      if (cartItems && cartItems.length > 0) {
        await dispatch(orderPlaced(cartItems[0].cart_group_id)).unwrap().then(res=>{
          console.log("opooopoppopopopopopop",res);
        }).catch(err=>{
          console.log("agya error",err);
        });
        const idToDelete = cartItems[0].id;

        await dispatch(deleteCartItem(idToDelete)).then(async res => {
          const updatedCart = await dispatch(getCartData()).unwrap();

          const asyncStorageCart = JSON.parse(await AsyncStorage.getItem('cartItemsCustom')) || [];
          const asyncStorageProductIds = asyncStorageCart.map(item => item.id);

          const filteredCart = updatedCart.filter(item => asyncStorageProductIds.includes(item.id));

          dispatch({ type: 'SET_CART_DATA', payload: filteredCart });
        });
        console.log("llldjiwenhwdhufbrehifniejdncijewnfiew",cartItems[0].cart_group_id);
      
        navigation.replace('OrderPlacedScreen');
      } else {
        console.log('No items in the cart');
      }
    } catch (err) {
      console.log('ERR', err.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        translucent={true}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <TopHeader
        title={'Payment Method'}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: Colors.White }}>
        <View style={styles.recommendedMethodsView}>
          <View style={styles.methodHeadingView}>
            <Text style={styles.saveText}>Recommended</Text>
          </View>
          <View style={styles.methodsBtnView}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => orderPlace()} style={styles.WalletBtn}>
              <View style={styles.btnTextView}>
                <icons.CodIcon />
                <Text style={styles.btnText}>Cash On Delivery</Text>
              </View>
              <icons.ForwardArrow />
            </TouchableOpacity>
            {/* <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('CreditCardScreen')} style={styles.creditBtn}> */}
            <View style={styles.creditBtn}>
              <View style={styles.btnTextView}>
                <icons.CreditcardIcon />
                <Text style={styles.btnText}>Credit/Debit Card</Text>
              </View>
              <View style={styles.paymentMethodIcon}>
                <icons.MastercardIcon />
                <icons.VisaIcon />
              </View>
              <icons.ForwardArrow style={styles.forwardArrow} />
            </View>
            {/* </TouchableOpacity> */}
            {/* <TouchableOpacity activeOpacity={0.8} style={styles.WalletBtn}>
              <View style={styles.btnTextView}>
                <icons.CreditcardIcon />
                <Text style={styles.btnText}>Bachay Wallet</Text>
              </View>
              <icons.ForwardArrow style={styles.forwardArrow} />
            </TouchableOpacity> */}
          </View>
        </View>
        {/* <View style={styles.savedMethodsView}>
          <View style={styles.methodHeadingView}>
            <Text style={styles.saveText}>Saved Methods</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('CreditCardScreen')} style={styles.creditBtn}>
            <View style={styles.btnTextView}>
              <icons.CreditcardIcon />
              <Text style={styles.btnText}>Credit/Debit Card</Text>
            </View>
            <View style={styles.paymentMethodIcon}>
              <icons.MastercardIcon />
              <icons.VisaIcon />
            </View>
            <icons.ForwardArrow />
          </TouchableOpacity>
        </View>
        <View style={styles.otherMethodsView}>
          <View style={styles.methodHeadingView}>
            <Text style={styles.saveText}>Other Payments Methods</Text>
          </View>
          <View style={styles.methodsBtnView}>
            <TouchableOpacity activeOpacity={0.8} style={styles.WalletBtn}>
              <View style={styles.btnTextView}>
                <icons.EasyPaisaIcon />
                <Text style={styles.btnText}>Easypaisa</Text>
              </View>
              <icons.ForwardArrow style={styles.forwardArrow} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.WalletBtn}>
              <View style={styles.btnTextView}>
                <icons.JazzcashIcon />
                <Text style={styles.btnText}>JazzCash</Text>
              </View>
              <icons.ForwardArrow style={styles.forwardArrow} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.WalletBtn}>
              <View style={styles.btnTextView}>
                <icons.NayapayIcon />
                <Text style={styles.btnText}>NayaPay</Text>
              </View>
              <icons.ForwardArrow style={styles.forwardArrow} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.WalletBtn}>
              <View style={styles.btnTextView}>
                <icons.CodIcon />
                <Text style={styles.btnText}>Cash On Delivery</Text>
              </View>
              <icons.ForwardArrow />
            </TouchableOpacity>
          </View>
        </View> */}
      </ScrollView>
      <View style={styles.footerRoot}>
        <View style={styles.finalPaymentdetails}>
          <View style={styles.paymentInfoView}>
            <Text style={styles.paymentInfoText}>Subtotal ({totalItems} items)</Text>
            <Text style={styles.subTotalText}>Rs. {totalPrice}</Text>
          </View>
          <View style={styles.paymentInfoView}>
            <Text style={styles.paymentInfoText}>Shipping Fee</Text>
            <Text style={styles.shippingFeeText}>FREE</Text>
          </View>
          {/* <View style={styles.paymentInfoView}>
            <Text style={styles.paymentInfoText}>Vat (10%)</Text>
            <Text style={styles.vatText}>299</Text>
          </View> */}
        </View>
        <View style={styles.totalPaymentInfoView}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>Rs. {totalPrice}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
