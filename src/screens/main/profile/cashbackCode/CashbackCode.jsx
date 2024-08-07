import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import AppButton from '../../../../components/AppButton';
import MainTitle from '../../../../components/Profile/MainTitle';
import DropDown from '../../../../components/DropDown';
import { styles } from './CashbackCode.style';

const CashbackCode = () => {
  const [value, setValue] = useState('Active');
  const [couponAvail, setCouponAvail] = useState(true);
  const couponData = {
    code: 'FFHYJ190BGFEAD',
    validTill: '02-Oct-2023 (1 Day Left)',
    amount: 'Rs.1900',
    description: 'Flat Rs.1900 Off on Baby Gear orders worth Rs.4999 & above',
    textColor: value === 'Active' ? Colors.AppColor : Colors.RomanSilver,
    btnColor: value === 'Active' ? Colors.BlueViolet : Colors.RomanSilver,
    btnText: value === 'Active' ? 'Redeem Now' : 'Expired!',
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <MainTitle title={'Cashback Codes'} />
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <DropDown
            placeholder
            placeholderText={'Sorted By:'}
            dropdownData={[{ key: 'Active' }, { key: 'Expired' }]}
            value={value}
            onValueChange={selectedValue => {
              console.log(selectedValue);
              setValue(selectedValue);
            }}
          />
          {couponAvail ? (
            <View style={{ gap: 12 }}>
              <View>
                <View style={styles.couponDetailRow}>
                  <Text
                    style={[
                      styles.couponDetailHeading,
                      { color: couponData.textColor },
                    ]}>
                    Code:
                  </Text>
                  <Text
                    style={[
                      styles.couponDetailText,
                      { color: couponData.textColor },
                    ]}>
                    {couponData.code}
                  </Text>
                </View>
                <View style={styles.couponDetailRow}>
                  <Text
                    style={[
                      styles.couponDetailHeading,
                      { color: couponData.textColor },
                    ]}>
                    Valid Till:
                  </Text>
                  <Text
                    style={[
                      styles.couponDetailText,
                      { color: couponData.textColor },
                    ]}>
                    {couponData.validTill}
                  </Text>
                </View>
                <View style={styles.couponDetailRow}>
                  <Text
                    style={[
                      styles.couponDetailHeading,
                      { color: couponData.textColor },
                    ]}>
                    Amount:
                  </Text>
                  <Text
                    style={[
                      styles.couponDetailText,
                      { color: couponData.textColor },
                    ]}>
                    {couponData.amount}
                  </Text>
                </View>
              </View>
              <View style={styles.couponDetailRow}>
                <Text
                  style={[
                    styles.couponDetailHeading,
                    { color: couponData.textColor },
                  ]}>
                  Description:
                </Text>
                <Text
                  style={[
                    styles.couponDetailText,
                    { color: couponData.textColor },
                  ]}>
                  {couponData.description}
                </Text>
              </View>
              <AppButton
                label={couponData.btnText}
                background
                buttonContainerStyle={[
                  styles.btnStyle,
                  { backgroundColor: couponData.btnColor },
                ]}
                textStyle={styles.btnTextStyle}
              />
            </View>
          ) : (
            <Text style={styles.couponAvailableText}>
              {value === 'Active'
                ? 'You Don’t have Cash Coupons Available with you. '
                : 'There are no Expired Code. '}
              <Text style={styles.shopText}>Shop Now</Text>
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CashbackCode;