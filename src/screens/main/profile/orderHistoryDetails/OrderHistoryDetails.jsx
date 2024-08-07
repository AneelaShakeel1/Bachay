import { View, Text, ScrollView, StatusBar, Image, FlatList, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../../../constants/icons';
import { Colors, Fonts } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import MainTitle from '../../../../components/Profile/MainTitle';
import AppButton from '../../../../components/AppButton';
import ProductSlider from '../../../../components/Home/ProductSlider';
import { styles } from './OrderHistoryDetails.style';
import { useDispatch, useSelector } from 'react-redux';
import { selectedOrderDetails } from '../../../../redux/features/Main/mainSelector';
import { selectAddressDetails, selectUserDetails } from '../../../../redux/features/auth/authSelectors';
import { addressList } from '../../../../redux/features/auth/authThunks';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const OrderHistoryDetails = () => {
  const navigation = useNavigation();

  const orderDetailData = useSelector(selectedOrderDetails);
  console.log('order detail with ID data:', orderDetailData);

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
  let addressContactName;
  if (Array.isArray(addressID) && addressID.length > 0) {
    const defaultAddress = addressID[0]
    if (defaultAddress.is_default === "1") {
      defaultAddressID = defaultAddress.id;
      console.log('The ID of the default address is:', defaultAddressID);

      addressDetail = `${defaultAddress.appartment_no ?? ""}, ${defaultAddress.street_address ?? ""}, ${defaultAddress.city ?? ""}, ${defaultAddress.state ?? ""}${defaultAddress.zip ? ` - ${defaultAddress.zip}` : ""}`;
      addressContactName = `${defaultAddress.contact_person_name ?? ""}`;
      console.log("The complete address detail:", addressDetail);
    } else {
      console.log("No default address found.");
    }
  } else {
    console.log('The addressID is not an array, or it is an empty array, or is null/undefined.');
  }

  const getOrdinalSuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const formattedDate = (() => {
    const orderCreatedAt = new Date(orderDetailData?.created_at);

    if (isNaN(orderCreatedAt.getTime())) {
      return "Invalid Date";
    }

    const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(orderCreatedAt);
    const date = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(orderCreatedAt);
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(orderCreatedAt);
    const year = new Intl.DateTimeFormat('en-US', { year: '2-digit' }).format(orderCreatedAt);
    const time = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).format(orderCreatedAt);

    return `${day}, ${date}${getOrdinalSuffix(date)} ${month} ${year}, ${time}`;
  })();

  const orderAmount = orderDetailData?.order_amount;
  const totalDiscount = Math.floor(orderDetailData?.details[0]?.discount);
  const totalTax = Math.floor(orderDetailData?.details[0]?.tax);
  const subTotal = orderAmount - totalDiscount + totalTax;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <MainTitle title={'Order Details'} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
        <View style={styles.helpRoot}>
          <View style={styles.helpContainer}>
            <View style={styles.helpIconContainer}>
              <icons.HelpIcon />
              <Text style={styles.helpText}>
                If you need any additional help related to your order, please
                click on 'Need Help,' select the product, and refer to the
                related FAQs.
              </Text>
            </View>

            <AppButton
              background
              label="Need Help?"
              buttonContainerStyle={styles.needHelpButton}
              textStyle={styles.needHelpButtonText}
            />
          </View>
        </View>
        <View style={styles.orderDetailsContainer}>
          <View style={styles.orderInfo}>
            <Text style={styles.orderInfoText}>
              Order Number:
              <Text style={styles.orderInfoValue}>
                {` ${orderDetailData?.id}`}
              </Text>
            </Text>
            <Text style={styles.orderInfoText}>
              Order Placed:
              <Text style={styles.orderInfoValue}>
                {` ${formattedDate}`} - {`${orderDetailData?.no_of_items}`}{' '}Items
              </Text>
            </Text>
            <Text style={styles.orderInfoText}>
              Order Status:
              <Text style={[styles.orderInfoValue, { textTransform: 'capitalize' }]}>
                {` ${orderDetailData?.order_status}`}
              </Text>
            </Text>
            <Text style={styles.orderInfoText}>
              Order Total:
              <Text style={styles.orderInfoValue}>
                {' '}Rs.{orderAmount}
              </Text>
            </Text>
          </View>
          <View style={styles.emailInvoiceContainer}>
            <icons.OrderEmailIcon />
            <Text style={styles.emailInvoiceText}>Email Invoice</Text>
          </View>
          <View style={styles.orderButtonsContainer}>
            <AppButton
              image
              label="Cancel"
              ImageSource={<icons.CrossIcon />}
              imageLeft
              background
              buttonContainerStyle={styles.cancelButton}
              textStyle={styles.cancelButtonText}
            />
            <AppButton
              image
              label="Reorder All"
              ImageSource={<icons.CartIcon />}
              imageLeft
              background
              buttonContainerStyle={styles.reorderButton}
              textStyle={styles.reorderButtonText}
            />
          </View>
        </View>
        <FlatList
          data={orderDetailData?.details}
          contentContainerStyle={styles.productListContainer}
          renderItem={({ item: prodItem, index }) => {
            const discountPrice = prodItem.product.unit_price - (prodItem.product.unit_price * prodItem.product.discount) / 100;
            const roundedDiscountPrice = Math.floor(discountPrice);
            return (
              <View
                style={[
                  styles.productRoot,
                  {
                    paddingTop: index !== 0 ? 25 : 0,
                  },
                ]}>
                <View style={styles.productMain}>
                  <Image
                    style={styles.productImage}
                    resizeMode="cover"
                    source={{ uri: prodItem.product.thumbnail }}
                  />
                  <View style={styles.productDetails}>
                    <Text style={styles.productTitle}>{prodItem.product.name}</Text>
                    <Text style={styles.productPrice}>Rs.{roundedDiscountPrice}</Text>
                    <View style={styles.productAttributesContainer}>
                      {/* <View style={styles.productAttribute}>
                        <Text style={styles.productAttributeLabel}>Colors</Text>
                        <View
                          style={[
                            styles.colorIndicator,
                            { backgroundColor: item.color },
                          ]}
                        />
                      </View>
                      <View style={styles.productAttribute}>
                        <Text style={styles.productAttributeLabel}>Size</Text>
                        <View style={styles.sizeIndicator}>
                          <Text style={styles.sizeText}>{item.size}</Text>
                          <Text style={styles.sizeLengthText}>
                            ({item.length})
                          </Text>
                        </View>
                      </View> */}
                    </View>
                    <Text style={styles.productQuantity}>
                      Order Quantity: {prodItem.qty}
                    </Text>
                    {/* <Text style={styles.productArrivalDate}>
                      Arrived on {item.arrivaldate}
                    </Text> */}
                  </View>
                </View>
                {/* <View style={styles.statusButtonsContainer}>
                  <View style={styles.statusInfo}>
                    {item.statusIcon}
                    <View style={styles.statusTextContainer}>
                      <Text style={styles.statusLabel}>{item.status}</Text>
                      <Text style={styles.statusDate}>{item.date}</Text>
                    </View>
                  </View>
                  <View style={styles.raiseConcernContainer}>
                    <icons.MyQuickReadsIcon />
                    <Text style={styles.raiseConcernText}>
                      Raise Your Concern
                    </Text>
                  </View>
                </View> */}
                <View style={styles.orderActionButtonsContainer}>
                  <AppButton
                    image
                    label="Cancel"
                    ImageSource={<icons.CrossIcon />}
                    imageLeft
                    background
                    buttonContainerStyle={styles.cancelProductButton}
                    textStyle={styles.cancelProductButtonText}
                  />
                  <AppButton
                    image
                    label="Reorder"
                    ImageSource={<icons.CartIcon />}
                    imageLeft
                    background
                    buttonContainerStyle={styles.reorderProductButton}
                    textStyle={styles.reorderProductButtonText}
                  />
                </View>
                <View
                  style={[
                    styles.trackingDetailsContainer,
                    {
                      paddingBottom: index !== orderDetailData.details.length - 1 ? 25 : 0,
                      borderBottomWidth:
                        index !== orderDetailData.details.length - 1 ? 1.5 : 0,
                    },
                  ]}>
                  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text
                      onPress={() => navigation.navigate('History')}
                      style={styles.viewTrackingDetailsText}>
                      {'View All Tracking Details ->'}
                    </Text>
                    <Text
                      onPress={() => navigation.navigate('Review')}
                      style={styles.addReviewText}>
                      Add Your Review
                    </Text>
                  </View>
                </View>
              </View>
            )
          }}
        />
        <View style={styles.relatedProductsContainer}>
          <ProductSlider title={'Related Products'} />
        </View>
        <View style={styles.addressRoot}>
          <View style={styles.addressView}>
            <View style={styles.addressHeadingView}>
              <Text style={styles.addressHeading}>Shipping Address</Text>
              <TouchableOpacity onPress={() => navigation.navigate('AddressBook')} activeOpacity={0.8}>
                <Text style={styles.changeText}>Change</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.nameText}>{addressContactName}</Text>
            <Text style={styles.mobileText}>
              Mobile Number:{' '}
              <Text style={styles.numText}>{formattedNumber}</Text>
            </Text>
            <Text style={styles.addressText}>
              {/* R-153, Tikona Park, N I T, R-153, Tikona Park, N I T,, Faislabad,
              Pakistan - 121001 */}

              {addressDetail}
            </Text>
            <View style={styles.helpContainer}>
              <View style={[styles.helpIconContainer, { alignItems: 'none' }]}>
                <icons.IIcon style={{ top: 5 }} />
                <Text style={styles.helpText}>
                  The Address of the order cannot be changed if the order is an
                  Exchange or a Replacement Order , or if the status of the
                  order is Shipped or Delivered.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.paymentRoot}>
          <Text style={styles.paymentHeading}>Payment Information</Text>
          <View style={{ gap: 20 }}>
            <View style={{ gap: 6 }}>
              <View style={styles.paymentDetailRow}>
                <Text style={styles.paymentDetailText}>
                  Value of Product(s)
                </Text>
                <Text style={[styles.priceText, { color: Colors.Black }]}>
                  Rs. {orderAmount}
                </Text>
              </View>
              <View style={styles.paymentDetailRow}>
                <Text style={styles.paymentDetailText}>Discount</Text>
                <Text style={[styles.priceText, { color: Colors.GreenColor }]}>
                  Rs. {totalDiscount}
                </Text>
              </View>
              <View style={styles.paymentDetailRow}>
                <View
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <Text style={styles.paymentDetailText}>
                    Estimated GST (+)
                  </Text>
                  <icons.CVVIcon style={{ top: -1 }} />
                </View>
                <Text style={[styles.priceText, { color: Colors.DarkRed }]}>
                  Rs. {totalTax}
                </Text>
              </View>
              <View style={styles.paymentDetailRow}>
                <Text style={styles.paymentDetailText}>Shipping (+)</Text>
                <Text style={[styles.priceText, { color: Colors.GreenColor }]}>
                  FREE
                </Text>
              </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.paymentDetailRow}>
              <Text style={styles.paymentDetailText}>Sub Total</Text>
              <Text style={[styles.priceText, { color: Colors.Black }]}>
                Rs.{subTotal}
              </Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.paymentDetailRow}>
              <Text
                style={[
                  styles.paymentDetailText,
                  { color: Colors.Black },
                  { fontFamily: Fonts.semiBold },
                ]}>
                Final Payment
              </Text>
              <Text style={[styles.priceText, { color: Colors.Black }]}>
                Rs.{subTotal}
              </Text>
            </View>
            <View style={{ gap: 4 }}>
              <View style={styles.paymentDetailRow}>
                <Text
                  style={[styles.paymentDetailText, { color: Colors.Black }]}>
                  Payment Mode
                </Text>
                <Text style={[styles.priceText, { color: Colors.Black }]}>
                  Cash On Delivery
                </Text>
              </View>
              <View style={styles.paymentDetailRow}>
                <Text
                  style={[styles.paymentDetailText, { color: Colors.Black }]}>
                  Payment Status
                </Text>
                <Text style={[styles.priceText, { color: Colors.CarrotOrange }]}>
                  Pending
                </Text>
              </View>
            </View>
            <Text style={styles.instructionText} onPress={() => { }}>
              Stay Alert! Stay Safe. Bachay only accepts payments through its
              official App/Website.{' '}
              <Text style={styles.clickText}>Click to know more</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderHistoryDetails;