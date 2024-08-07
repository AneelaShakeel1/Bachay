import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Colors, Fonts, Sizes } from '../../constants/theme';
import { mainFlashDealsData } from '../../redux/features/Main/mainSelector';
import { getFlashDealsData, getSingleFlashDeal } from '../../redux/features/Main/mainThunks';
import { useDispatch, useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const DiscountSlider = () => {
  const flashDealsData = useSelector(mainFlashDealsData);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getFlashDealsData());
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    console.log('main flash deals data:', flashDealsData);
  }, [flashDealsData]);

  const handleOnPress = (id) => {
    console.log('Fetching data for flash deal ID:------------', id);
    dispatch(getSingleFlashDeal(id)).then((res) => {
      console.log('API Response:', res);
      navigation.navigate('DealsProducts');
    });
  };

  return flashDealsData && flashDealsData.length > 0 ? (
    <View style={styles.mainView}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingStyle}>Flash Sales For Child Product</Text>
        <Text style={styles.headingStyle}>Get Crazy Discounts</Text>
      </View>
      <FlatList
        horizontal
        data={flashDealsData}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.discountRoot}>
              <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.discountSaleView}>
                <Text style={styles.discountSaleTextStyle}>-{item.discount_percent}%</Text>
              </Animatable.View>
              <TouchableOpacity activeOpacity={0.8} onPress={() => handleOnPress(item.id)} >
                <Image
                  style={styles.discountImageStyle}
                  source={{ uri: item.banner }}
                  resizeMode="cover"
                />
                <View style={styles.bottomTextView}>
                  <Text numberOfLines={2} style={styles.bottomTextStyle}>
                    {item.title.length > 40 ? `${item.title.substring(0, 40)}...` : item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  ) : null;
};

export default DiscountSlider;

const styles = StyleSheet.create({
  mainView: {
    width: Dimensions.get('screen').width,
    backgroundColor: Colors.Lumber,
    paddingBottom: 20,
    marginTop: 15,
  },
  headingContainer: {
    marginTop: 20,
    justifyContent: 'center',
  },
  headingStyle: {
    textAlign: 'center',
    fontSize: Sizes.size24,
    fontFamily: 'Aristotelica Display DemiBold Trial',
    color: Colors.AppColor,
    lineHeight: 28,
    paddingHorizontal: 20,
    textTransform: 'capitalize',
  },
  discountRoot: {
    borderColor: Colors.PaleSilver,
    borderWidth: 3,
    borderRadius: 25,
    justifyContent: 'space-between',
    marginTop: 25,
  },
  discountImageStyle: {
    borderRadius: 22,
    width: 250,
    height: 264,
  },
  bottomTextView: {
    backgroundColor: 'rgba(249, 147, 39, 0.75)',
    height: 52,
    width: 250,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 21,
    borderBottomRightRadius: 21,
    paddingHorizontal: 10
  },
  bottomTextStyle: {
    color: Colors.White,
    fontSize: Sizes.size16,
    fontFamily: Fonts.semiBold,
    top: 1,
    textAlign: 'center'
  },
  discountSaleView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: -20,
    right: -20,
    borderWidth: 3,
    color: Colors.White,
    borderColor: Colors.White,
    zIndex: 1,
    backgroundColor: Colors.RedColor,
    borderRadius: 50,
    textAlign: 'center',
    height: 56,
    width: 56,
  },
  discountSaleTextStyle: {
    color: Colors.White,
    fontSize: Sizes.size14,
    fontFamily: Fonts.semiBold,
    top: 2,
  },
});