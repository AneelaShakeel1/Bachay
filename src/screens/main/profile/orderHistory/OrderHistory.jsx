import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../../../constants/icons';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import DropDown from '../../../../components/DropDown';
import MainTitle from '../../../../components/Profile/MainTitle';
import { styles } from './OrderHistory.style';
import { useDispatch, useSelector } from 'react-redux';
import OrderHistoryDetails from '../orderHistoryDetails/OrderHistoryDetails';
import { getOrderHistoryDetails, getOrderHistoryDetailsID } from '../../../../redux/features/Main/mainThunks';
import { orderDetails } from '../../../../redux/features/Main/mainSelector';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import SkeletonLoader from './Skeleton';

const OrderHistory = () => {
  const navigation = useNavigation();
  const [pending, setPending] = useState('Pending');
  const [allOrders, setAllOrders] = useState('All Orders');
  const dispatch = useDispatch();
  const orderHistoryData = useSelector(orderDetails);
  console.log('order----------------------------------', orderHistoryData);
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    dispatch(getOrderHistoryDetails(pending))
      .unwrap()
      .then(res => {
        isLoading(false);
      });
  }, [pending]);
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  };
  const handleOnPress = async (id) => {
    try {
      await dispatch(getOrderHistoryDetailsID(id));
      navigation.navigate('OrderHistoryDetails');
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <MainTitle title={'Order History'} />
      {loading ? (
        <SkeletonLoader />
      )
        :
        (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: Colors.White }}>
            <View style={styles.OrderHistoryContainer}>
              <View style={styles.dropDownMain}>
                <View style={styles.dropDown}>
                  <DropDown
                    dropdownData={[{ key: 'pending' }, { key: 'delivered' }]}
                    value={pending}
                    onValueChange={selectedValue => {
                      isLoading(true);
                      setPending(selectedValue);
                      dispatch(getOrderHistoryDetails(selectedValue))
                        .unwrap()
                        .then(res => {
                          isLoading(false);
                        });
                    }}
                  />
                </View>
                <View style={styles.dropDown}>
                  <DropDown
                    placeholder
                    dropdownData={[{ key: 'All Orders' }, { key: 'Recent Order' }]}
                    value={allOrders}
                    onValueChange={selectedValue => {
                      console.log(selectedValue);
                      setAllOrders(selectedValue);
                    }}
                  />
                </View>
              </View>
            </View>
            {orderHistoryData?.length > 0 ? (
              <FlatList
                data={orderHistoryData}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <View>
                    <View style={styles.ordersRoot}>
                      <View style={styles.orderDetailsView}>
                        <Text style={styles.orderDetailsText}>
                          Order:{' '}
                          <Text
                            style={[
                              styles.orderDetailsText,
                              { fontFamily: Fonts.semiBold },
                            ]}>
                            {item.id}{' '}
                          </Text>
                          <Text style={styles.orderDetailsText}> - </Text>
                          <Text style={styles.orderDetailsText}>
                            {formatDate(item.created_at)}
                          </Text>
                        </Text>
                        <TouchableOpacity onPress={() => handleOnPress(item.id)} activeOpacity={0.8}>
                          <Text style={styles.viewDetailsText}>
                            View Details
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <FlatList
                          data={item.details}
                          horizontal={false}
                          showsVerticalScrollIndicator={false}
                          renderItem={({ item: prodItem, index }) => {
                            const discountPrice = prodItem.product.unit_price - (prodItem.product.unit_price * prodItem.product.discount) / 100;
                            const roundedDiscountPrice = Math.floor(discountPrice);
                            return (
                              <View
                                style={[
                                  styles.productInfoView,
                                  index === item.details.length - 1
                                    ? { borderBottomWidth: 0 }
                                    : { borderBottomWidth: 1 },
                                ]}>
                                <Image
                                  style={styles.productImage}
                                  resizeMode="cover"
                                  source={{ uri: prodItem.product.thumbnail }}
                                />
                                <View style={styles.productDetailsView}>
                                  <Text
                                    numberOfLines={1}
                                    style={styles.productDetailText}>
                                    {prodItem.product.name}
                                  </Text>
                                  <Text
                                    style={[
                                      styles.productStatusText,
                                      { color: Colors.BlueViolet },
                                    ]}>
                                    Rs.{roundedDiscountPrice}
                                  </Text>
                                  {/* <View style={styles.arrivalDateView}>
                                      <Text style={styles.productDetailText}>Arrived On</Text>
                                      <Text style={styles.productDetailText}>
                                        {prodItem.arrivalDate}
                                      </Text>
                                    </View> */}
                                  <Text style={styles.productDetailText}>
                                    Quantity: {prodItem.qty}
                                  </Text>
                                </View>
                                <TouchableOpacity
                                  activeOpacity={0.8}
                                  style={styles.iconView}>
                                  <icons.NextArrow width={11} height={11} />
                                </TouchableOpacity>
                              </View>
                            );
                          }}
                        />
                      </View>
                    </View>
                  </View>
                )}
              />
            ) : (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: Dimensions.get('screen').height / 2,
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.regular,
                    fontSize: Sizes.size16,
                    color: Colors.AppColor,
                  }}>
                  No Orders Found
                </Text>
              </View>
            )}
          </ScrollView>
        )}

    </SafeAreaView>
  );
};

export default OrderHistory;