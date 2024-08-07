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
import MainTitle from '../../../../components/Profile/MainTitle';
import { styles } from './MyRefunds.style';

const MyRefunds = () => {
  const refundData = [
    {
      id: '1',
      amount: '1900',
      date: '12-Oct-2020',
      status: 'Refunded',
      statusColor: Colors.BlueViolet,
    },
    {
      id: '2',
      amount: '1900',
      date: '12-Oct-2020',
      status: 'Processing',
      statusColor: Colors.BeerColor,
    },
    {
      id: '3',
      amount: '1900',
      date: '12-Oct-2020',
      status: 'Cancelled',
      statusColor: Colors.RedColor,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <View style={styles.root}>
        <GeneralAppHeader />
        <MainTitle title={'My Refunds'} />
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
          <View style={styles.cashRefundMain}>
            {/* <Text style={styles.noRefunds}>
              You Currently have no Refund Request.
            </Text> */}
            <FlatList
              data={refundData}
              horizontal={false}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View style={styles.details}>
                    <View style={styles.detailsRow}>
                      <Text style={styles.detailsText}>Amount:</Text>
                      <Text
                        style={[
                          styles.detailsText,
                          { fontFamily: Fonts.medium },
                        ]}>
                        {item.amount}
                      </Text>
                    </View>
                    <View style={styles.detailsRow}>
                      <Text style={styles.detailsText}>Date:</Text>
                      <Text
                        style={[
                          styles.detailsText,
                          { fontFamily: Fonts.medium },
                        ]}>
                        {item.date}
                      </Text>
                    </View>
                    <View style={[styles.detailsRow, { marginTop: 5 }]}>
                      <Text style={styles.detailsText}>Status:</Text>
                      <Text
                        style={[
                          styles.detailsText,
                          {
                            color: item.statusColor,
                            fontFamily: Fonts.semiBold,
                          },
                        ]}>
                        {item.status}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyRefunds;