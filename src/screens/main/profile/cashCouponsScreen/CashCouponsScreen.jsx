import React, { useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import AppButton from '../../../../components/AppButton';
import MainTitle from '../../../../components/Profile/MainTitle';
import { styles } from './CashCouponsScreen.style';

const CashCouponsScreen = () => {

  const couponData = [
    {
      id: '1',
      couponCode: 'FFHYJ190BGFEAD',
      validTill: '02-Oct-2023 (1 Day Left)',
      amount: 'Rs 1900',
      description: 'Flat Rs.2500 Off on Baby Gear orders worth Rs.495756 & above',
    },
    {
      id: '2',
      couponCode: 'FFHYJ190BGFEAD',
      validTill: '02-Oct-2023 (1 Day Left)',
      amount: 'Rs 1900',
      description: 'Flat Rs.2500 Off on Baby Gear orders worth Rs.495756 & above',
    },
    {
      id: '3',
      couponCode: 'FFHYJ190BGFEAD',
      validTill: '02-Oct-2023 (1 Day Left)',
      amount: 'Rs 1900',
      description: 'Flat Rs.2500 Off on Baby Gear orders worth Rs.495756 & above',
    },
    {
      id: '4',
      couponCode: 'FFHYJ190BGFEAD',
      validTill: '02-Oct-2023 (1 Day Left)',
      amount: 'Rs 1900',
      description: 'Flat Rs.2500 Off on Baby Gear orders worth Rs.495756 & above',
    },
    {
      id: '5',
      couponCode: 'FFHYJ190BGFEAD',
      validTill: '02-Oct-2023 (1 Day Left)',
      amount: 'Rs 1900',
      description: 'Flat Rs.2500 Off on Baby Gear orders worth Rs.495756 & above',
    },
    {
      id: '6',
      couponCode: 'FFHYJ190BGFEAD',
      validTill: '02-Oct-2023 (1 Day Left)',
      amount: 'Rs 1900',
      description: 'Flat Rs.2500 Off on Baby Gear orders worth Rs.495756 & above',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar backgroundColor={Colors.White} barStyle={'dark-content'} />
      <GeneralAppHeader />
      <MainTitle title={'Cash Coupons'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.root}>
        <View style={styles.cashCouponMain}>
          <View style={styles.couponInfoContainer}>
            <View style={styles.couponInfoTextContainer}>
              <Text style={styles.couponInfoText}>You have Rs.</Text>
              <Text
                style={[
                  styles.couponInfoText,
                  {
                    color: Colors.DarkPinkColor,
                    fontFamily: Fonts.semiBold,
                  },
                ]}>
                0.00
              </Text>
              <Text style={styles.couponInfoText}>
                worth of Cash Coupouns.
              </Text>
            </View>
          </View>
          <FlatList
            data={couponData}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <View style={{ gap: 12, paddingVertical: 15 }}>
                  <View>
                    <View style={styles.couponDetailRow}>
                      <Text style={styles.couponDetailHeading}>
                        Coupon Code:
                      </Text>
                      <Text style={styles.couponDetailText}>
                        {item.couponCode}
                      </Text>
                    </View>
                    <View style={styles.couponDetailRow}>
                      <Text style={styles.couponDetailHeading}>
                        Valid Till:
                      </Text>
                      <Text style={styles.couponDetailText}>
                        {item.validTill}
                      </Text>
                    </View>
                    <View style={styles.couponDetailRow}>
                      <Text style={styles.couponDetailHeading}>Amount:</Text>
                      <Text style={styles.couponDetailText}>
                        {item.amount}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.couponDetailRow}>
                    <Text style={styles.couponDetailHeading}>
                      Description:
                    </Text>
                    <Text style={styles.couponDetailText}>
                      {item.description}
                    </Text>
                  </View>
                  <AppButton
                    label={'View Details'}
                    background
                    buttonContainerStyle={styles.btnStyle}
                    textStyle={styles.btnTextStyle}
                  />
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CashCouponsScreen;