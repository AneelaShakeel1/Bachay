
import React from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../../../constants/icons';
import { Colors, Sizes } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import MainTitle from '../../../../components/Profile/MainTitle';
import AppButton from '../../../../components/AppButton';
import { styles } from './QuickOrders.style';


const productData = {
  title: 'Pine Kids Lace Up Casual Shoes Color Block - White',
  price: '17789',
};

const QuickOrders = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <MainTitle title={'Quick Orders'} />
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
        <View style={styles.quickOrdersContainer}>
          {/* 1 */}
          <Text style={styles.msgText}>
            Looks like none of the products you have bought are available for
            re-order.
          </Text>
          <AppButton
            label={'Continue Shopping'}
            background
            buttonContainerStyle={styles.continueBtnStyle}
            textStyle={styles.continueBtnTextStyle}
          />
          {/* 1 */}
          {/* 2 */}
          <View style={styles.productInfoView}>
            <Image
              style={styles.productImage}
              resizeMode="cover"
              source={require('../../../../assets/images/product/ProductImage1.jpg')}
            />
            <View style={styles.productDetailsView}>
              <Text
                style={[styles.productDetailText, { fontSize: Sizes.size14 }]}>
                {productData.title}
              </Text>
              <Text
                style={[styles.productDetailText, { fontSize: Sizes.size12 }]}>
                Rs.{productData.price}
              </Text>
            </View>
          </View>
          <AppButton
            label={'Reorder'}
            image
            imageLeft
            ImageSource={<icons.ShoppingIconWhite />}
            background
            buttonContainerStyle={styles.reorderBtnStyle}
            textStyle={styles.reorderBtnTextStyle}
          />
          {/* 2 */}
          {/* 3 */}
          <View style={styles.noQueriesFound}>
            <icons.QueryFoundIcon />
            <Text style={styles.noQueriesFoundText}>No Open Queries Found</Text>
          </View>
          <AppButton
            label={'Continue Shopping'}
            background
            buttonContainerStyle={styles.continueBtnStyle}
            textStyle={styles.continueBtnTextStyle}
          />
          {/* 3 */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuickOrders;


