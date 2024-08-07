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
import { styles } from './TrackingOrderDetails.style';

const TrackingOrderDetails = () => {

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
      title: 'Shipment Ready',
      date: 'Sunday, 8th Oct-23, 05:45 PM',
      status: 'true',
      icon: <icons.GreenCheckIcon />,
    },
    {
      id: '2',
      title: 'Dispatched',
      date: 'Monday, 8th Oct-23, 05:45 PM',
      status: 'true',
      icon: <icons.GreenCheckIcon />,
    },
    {
      id: '3',
      title: 'Product In Transit',
      date: 'Sunday, 8th Oct-23, 05:45 PM',
      status: 'true',
      icon: <icons.GreenCheckIcon />,
    },
    {
      id: '4',
      title: 'Leave the Warehouse',
      date: 'Friday, 8th Oct-23, 05:45 PM',
      status: 'true',
      icon: <icons.RedCancelIcon />,
    },
    {
      id: '5',
      title: 'On the Way',
      date: 'Sunday, 8th Oct-23, 05:45 PM',
      status: 'true',
      icon: <icons.ErrorIcon />,
    },
    {
      id: '6',
      title: 'Delivered',
      date: 'Sunday, 8th Oct-23, 05:45 PM',
      status: 'false',
      icon: <icons.DeliveredIcon />,
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainTitle title={'Track Order Details'} />
        <View style={styles.trackOrderDetailsContainer}>
          <View style={styles.productRoot}>
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

export default TrackingOrderDetails;