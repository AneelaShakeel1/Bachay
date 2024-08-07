import React, { useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import MainTitle from '../../../../components/Profile/MainTitle';
import DropDown from '../../../../components/DropDown';
import { styles } from './ManageReturns.style';

const productData = {
  title: 'Pine Kids Lace Up Casual Shoes Color Block - White',
  status: 'Return Successfully',
  date: '10 oct 23',
  quantity: '02',
};

const ManageReturns = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <MainTitle title={'Manage Returns'} />
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
        <View style={styles.manageReturnsContainer}>
          <View style={styles.returnInfoContainer}>
            <View style={styles.returnInfo}>
              <icons.IIcon />
              <Text style={styles.returnInfoText}>
                You can track and manage your return requests in this section.
                Return Request details will get updated only after 15 minutes
                from the request submission time.{' '}
                <TouchableOpacity activeOpacity={0.8}>
                  <Text style={styles.returnPolicyText}>Return Policy</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
          <View style={styles.dropDownMain}>
            <DropDown
              placeholder
              placeholderText={'Return Status:'}
              dropdownData={[{ key: 'True' }, { key: 'False' }]}
              value={value}
              onValueChange={selectedValue => {
                console.log(selectedValue);
                setValue(selectedValue);
              }}
            />
          </View>
          <View style={styles.productInfoView}>
            <Image
              style={styles.productImage}
              resizeMode="cover"
              source={require('../../../../assets/images/product/ProductImage1.jpg')}
            />
            <View style={styles.productDetailsView}>
              <Text numberOfLines={1} style={styles.productDetailText}>
                {productData.title}
              </Text>
              <Text
                style={[styles.productStatusText, { color: Colors.BlueViolet }]}>
                {productData.status}
              </Text>
              <View style={styles.returnDate}>
                <Text style={styles.productDetailText}>Return on</Text>
                <Text style={styles.productDetailText}>{productData.date}</Text>
              </View>
              <Text style={styles.productDetailText}>
                Quantity: {productData.quantity}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ReturnsDetails')}
              activeOpacity={0.8}
              style={styles.iconView}>
              <icons.NextArrow width={11} height={11} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManageReturns;
