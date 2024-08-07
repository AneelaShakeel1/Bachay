import React, { useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import AppButton from '../../../../components/AppButton';
import MainTitle from '../../../../components/Profile/MainTitle';
import { styles } from './CashRefundScreen.style';

const CashRefundScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <MainTitle title={'Cash Refund'} />
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
        <View style={styles.cashRefundMain}>
          <View style={styles.infoContainer}>
            <View style={styles.infoTextContainer}>
              <Text style={[styles.infoText, { color: Colors.White }]}>
                {`You have Rs.${2500} Cash Refund`}
              </Text>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.infoText,
                    {
                      color: Colors.DarkPinkColor,
                      fontFamily: Fonts.semiBold,
                    },
                  ]}>
                  Shop Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.balanceAmountTextContainer}>
            <Text style={styles.infoText}>Balance Amount:</Text>
            <Text
              style={[
                styles.infoText,
                { color: Colors.BlueViolet, fontFamily: Fonts.semiBold },
              ]}>{` Rs. ${2500}`}</Text>
          </View>
          <AppButton
            background
            label={'Refund Amount'}
            textStyle={styles.btnTextStyle}
            buttonContainerStyle={styles.btnStyle}
          />
          <View style={styles.inSufficientTextContainer}>
            <Text style={[styles.infoText, { color: Colors.AppColor }]}>
              You have insufficient balance to initiate cash refund.
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.infoText,
                  {
                    color: Colors.BlueViolet,
                    lineHeight: 7,
                    fontFamily: Fonts.semiBold,
                  },
                ]}>
                {'\n'}Refund Policy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CashRefundScreen;