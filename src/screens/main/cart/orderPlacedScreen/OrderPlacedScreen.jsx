import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import TopHeader from '../../../../components/TopHeader';
import AppButton from '../../../../components/AppButton';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import { styles } from './OrderPlacedScreen.style';

const OrderPlacedScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        translucent={true}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <View style={{ marginBottom: 5 }}>
        <TopHeader title={'Order Placed'} image imageSource={<icons.ShareIcon />} />
      </View>
      <View style={styles.mainView}>
        <Image
          source={require('../../../../assets/images/orderplaced/orderPlacedGif.gif')}
          style={styles.imgStyle}
        />
        <View style={styles.textView}>
          <Text style={styles.orderText}>Your Order Has Been Placed</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.trackOrderText}>Track Order</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, backgroundColor: Colors.White }}>
        <AppButton
          label="Return to Home"
          background
          image
          imageLeft
          ImageSource={<icons.BackArrow width={9} height={14} />}
          onPress={() => navigation.navigate('ShoppingScreen')}
          buttonContainerStyle={styles.btnStyle}
          textStyle={styles.btnTextStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderPlacedScreen;
