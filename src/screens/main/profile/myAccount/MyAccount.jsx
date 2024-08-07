import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import AppButton from '../../../../components/AppButton';
import Accordion from '../../../../components/Profile/Accordion';
import { styles } from './MyAccount.style';

import { logout } from '../../../../redux/features/auth/authThunks';
import { useDispatch } from 'react-redux';

const MyAccount = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = useCallback(() => {
    Alert.alert(
      'Are you sure?',
      'Are you sure you want to log out?',
      [
        { text: 'No', style: 'default' },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: async () => {
            dispatch(logout({ setModalVisible }));
            navigation.replace('BottomTabNavigation');
          }
        }
      ]
    )
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <GeneralAppHeader />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
          <View style={styles.mainView}>
            <View style={styles.accountView}>
              <icons.MyAccountIcon />
              <Text style={styles.myAccountText}>My Account</Text>
            </View>
            <Accordion
              title={'Cash in My Account'}
              flatlistData={[
                {
                  key: 'Club Cash',
                  onPress: () => navigation.navigate('ClubCashScreen')
                },
                {
                  key: 'Cash Refund',
                  onPress: () => navigation.navigate('CashRefundScreen'),
                },
                {
                  key: 'Cash Coupons',
                  onPress: () => navigation.navigate('CashCouponsScreen'),
                },
              ]}
            />
            <Accordion title={'Cashback Codes'} onPress={() => { navigation.navigate("CashbackCode") }} />
            <Accordion
              onPress={() => navigation.navigate('MyRefunds')}
              title={'My Refunds'}
            />
            <Accordion
              title={'My Orders'}
              flatlistData={[
                {
                  key: 'Order History',
                  onPress: () => navigation.navigate('OrderHistory'),
                },
                {
                  key: 'Manage Returns',
                  onPress: () => navigation.navigate('ManageReturns'),
                },
                {
                  key: 'Quick Reorder',
                  onPress: () => navigation.navigate('QuickOrders'),
                },
                {
                  key: 'Track Order',
                  onPress: () => navigation.navigate('TrackingOrderDetails'),
                },
                {
                  key: 'Your Queries',
                  onPress: () => navigation.navigate('OrderHistoryDetails'),
                },
              ]}
            />
            <Accordion
              title={'My Profile'}
              flatlistData={[
                {
                  key: 'Contact Details',
                  onPress: () => navigation.navigate('ContactDetails'),
                },
                {
                  key: 'Personal Details'
                },
                {
                  key: 'Child Details',
                  onPress: () => navigation.navigate('ChildList')
                },
              ]}
            />
            <Accordion title={'Address Book'} onPress={() => { navigation.navigate("AddressBook") }} />
            <Accordion title={'My Payment Details'} onPress={() => { navigation.navigate("BankAccounts") }} />
            <Accordion title={'Guaranteed Savings'} onPress={() => navigation.navigate("GuaranteedSaving")} />
            <Accordion
              title={'Intelli Education Subscription'}
              flatlistData={[
                { key: 'Intellibaby Subscription', onPress: () => navigation.navigate('IntellibabySubscription') },
                { key: 'Intellikit Subscription', onPress: () => navigation.navigate('IntellikitSubscription') },
              ]}
            />
            <Accordion
              title={'FitJunior Subscription'}
              onPress={() => navigation.navigate('FitJuniorSubscription')}
            />
            <Accordion
              title={'Gift Certificate'}
              onPress={() => navigation.navigate('GiftCertificate')}
            />
            <Accordion
              title={'My Reviews'}
              onPress={() => navigation.navigate('Reviews')}
            />
            <Accordion
              title={'Invites & Credits'}
              onPress={() => navigation.navigate('InvitesAndCredits')}
            />
            <Accordion
              title={'Notify Me'}
              onPress={() => navigation.navigate('Notifications')}
            />
            <Accordion title={'My Shortlist'} />
            <Accordion title={'My Recently Viewed'} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <AppButton
          onPress={handleLogout}
          textStyle={styles.btnTextStyle}
          background
          label="Logout"
          buttonContainerStyle={styles.btnStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyAccount;