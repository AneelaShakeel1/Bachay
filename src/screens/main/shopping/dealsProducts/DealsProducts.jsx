import React, { useState } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../../constants/theme';
import TopHeader from '../../../../components/MainAppHeader';
import LocationSearchBar from '../../../../components/Home/LocationSearchBar';
import DealProductSlider from '../../../../components/Home/DealProductSlider';
import DiscountCarousel from '../../../../components/Home/DiscountCarousel';
import { useSelector } from 'react-redux';
import { mainSingleFlashDeal } from '../../../../redux/features/Main/mainSelector';

const DealsProducts = () => {

  const selectDeal = useSelector(mainSingleFlashDeal);

  console.log('--------------deal---------------', selectDeal);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={{ backgroundColor: Colors.White, flex: 1 }}>
        <View style={{ paddingTop: 30, backgroundColor: Colors.White }}>
          <TopHeader logo />
        </View>
        <LocationSearchBar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <DiscountCarousel />
          <DealProductSlider title={'For You'} />
        </ScrollView>
      </View>
    </>
  );
};

export default DealsProducts;