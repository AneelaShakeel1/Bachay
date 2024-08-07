import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import MainTitle from '../../../../components/Profile/MainTitle';
import AppButton from '../../../../components/AppButton';
import { styles } from './ReturnsDetails.style';

const ReturnsDetails = () => {

  const orderData = {
    orderNo: '18833462IZTF58B012',
    date: 'Sun, 8th Oct 23, 12:38 AM',
    quantity: '4',
    status: 'Shipped',
    totalRefPrice: '3900',
  };

  const productData = {
    title: 'Pine Kids Lace Up Casual Shoes Color Block - White',
    price: '17789',
    orderQuantity: '02',
    arrivaldate: 'Tuesday 10 Oct 2023',
    trackingID: '111856544875',
  };

  const stepsData = [
    {
      id: '1',
      title: 'Request Received',
      date: 'Sunday, 8th Oct-23, 05:45 PM',
      status: 'true',
      icon: <icons.GreenCheckIcon />,
    },
    {
      id: '2',
      title: 'Pick Up Address',
      date: 'Monday, 8th Oct-23, 05:45 PM',
      status: 'true',
      icon: <icons.GreenCheckIcon />,
    },
    {
      id: '3',
      title: 'Logistic Facility',
      date: 'Sunday, 8th Oct-23, 05:45 PM',
      status: 'true',
      icon: <icons.GreenCheckIcon />,
    },
    {
      id: '4',
      title: 'Package Recived',
      date: 'Friday, 8th Oct-23, 05:45 PM',
      status: 'true',
      icon: <icons.RedCancelIcon />,
    },
    {
      id: '5',
      title: 'Refund Processing',
      date: 'Sunday, 8th Oct-23, 05:45 PM',
      status: 'true',
      icon: <icons.ErrorIcon />,
    },
    {
      id: '6',
      title: 'Refund Approved',
      date: 'Sunday, 8th Oct-23, 05:45 PM',
      status: 'false',
      icon: <icons.RefundApproved />,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <MainTitle title={'Returns Details'} />
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
        <View style={styles.returnsDetailsContainer}>
          <View style={styles.orderDetailsContainer}>
            <Text style={styles.orderDetailsTitle}>
              Order Number:{' '}
              <Text style={styles.orderDetailsValue}>{orderData.orderNo}</Text>
            </Text>
            <Text style={styles.orderDetailsTitle}>
              Return On:{' '}
              <Text style={styles.orderDetailsValue}>
                {orderData.date} - {orderData.quantity} Items
              </Text>
            </Text>
            <Text style={styles.orderDetailsTitle}>
              Return Status:{' '}
              <Text style={styles.orderDetailsValue}>{orderData.status}</Text>
            </Text>
            <Text style={styles.orderDetailsTitle}>
              Total Refund:{' '}
              <Text style={styles.orderDetailsValue}>
                Rs. {orderData.totalRefPrice}
              </Text>
            </Text>
            <Text style={[styles.orderDetailsValue, { paddingVertical: 10 }]}>
              Returned Via Bachay Wallet
            </Text>
          </View>
          <AppButton
            label={'Print Labels'}
            background
            buttonContainerStyle={styles.btnStyle}
            textStyle={styles.btnTextStyle}
          />
        </View>
        <View style={styles.productRoot}>
          <View style={styles.productMain}>
            <Image
              style={styles.productImage}
              resizeMode="cover"
              source={require('../../../../assets/images/product/ProductImage1.jpg')}
            />
            <View style={styles.productDetails}>
              <Text style={[styles.textColor, styles.title]}>
                {productData.title}
              </Text>
              <Text style={[styles.textColor, styles.price]}>
                Rs.{productData.price}
              </Text>
              <Text style={[styles.textColor, styles.quantity]}>
                Order Quantity:{productData.orderQuantity}
              </Text>
              <Text style={[styles.textColor, styles.arrivalDate]}>
                Arrived on {productData.arrivaldate}
              </Text>
              <Text style={[styles.textColor, styles.trackingID]}>
                Tracking ID: {productData.trackingID}
              </Text>
            </View>
          </View>
          <View style={styles.btnRoot}>
            <AppButton
              label={'Reorder'}
              image
              imageLeft
              ImageSource={<icons.ShoppingIconWhite />}
              background
              buttonContainerStyle={[
                styles.orderBtnStyle,
                {
                  backgroundColor: Colors.BlueViolet,
                  borderColor: Colors.BlueViolet,
                  borderWidth: 1,
                },
              ]}
              textStyle={[
                styles.orderBtnTextStyle,
                {
                  color: Colors.White,
                },
              ]}
            />
            <AppButton
              label={'Raise Your Concern'}
              image
              imageLeft
              ImageSource={<icons.MyQuickReadsIcon />}
              background
              buttonContainerStyle={[
                styles.orderBtnStyle,
                {
                  backgroundColor: Colors.White,
                  borderColor: Colors.RomanSilver,
                  borderWidth: 1,
                },
              ]}
              textStyle={[styles.orderBtnTextStyle, { color: Colors.AppColor }]}
            />
          </View>
        </View>
        <View style={styles.stepsRoot}>
          <FlatList
            data={stepsData}
            keyExtractor={item => item.id}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View
                style={[
                  styles.step,
                  item.status === 'true' ? { opacity: 1 } : { opacity: 0.5 },
                ]}>
                <View>
                  {item.icon}
                  {index !== stepsData.length - 1 && (
                    <View
                      style={[
                        styles.separatorLine,
                        index === stepsData.length - 2
                          ? { opacity: 0.2 }
                          : { opacity: 1 },
                      ]}
                    />
                  )}
                </View>
                <View style={styles.stepInfo}>
                  <Text style={[styles.textColor, styles.stepTitle]}>
                    {item.title}
                  </Text>
                  <Text style={[styles.textColor, styles.stepDate]}>
                    {item.date}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReturnsDetails;