import React, { useState } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import LocationSearchBar from '../../../../components/Home/LocationSearchBar';
import ProductSlider from '../../../../components/Home/ProductSlider';
import DiscountCarousel from '../../../../components/Home/DiscountCarousel';
import AppButton from '../../../../components/AppButton';
import Products from '../../../../components/Home/Products';
import { styles } from './CategoriesProducts.style'

const CategoriesProducts = () => {
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleCategoryPress = id => {
    setSelectedCategory(id);
  };

  const categoryButtons = [
    {
      id: 1,
      category: '0-6 Months',
      background: Colors.ChineseWhite,
      color: Colors.AppColor,
    },
    {
      id: 2,
      category: 'Boys Fashion',
      background: Colors.ChineseWhite,
      color: Colors.AppColor,
    },
    {
      id: 3,
      category: '01 Years Old',
      background: Colors.ChineseWhite,
      color: Colors.AppColor,
    },
    {
      id: 4,
      category: 'Girls Fashion',
      background: Colors.ChineseWhite,
      color: Colors.AppColor,
    },
    {
      id: 5,
      category: '1 Years Old',
      background: Colors.ChineseWhite,
      color: Colors.AppColor,
    },
    {
      id: 6,
      category: 'Girls Fashion',
      background: Colors.ChineseWhite,
      color: Colors.AppColor,
    },
    {
      id: 7,
      category: 'Category 6',
      background: Colors.ChineseWhite,
      color: Colors.AppColor,
    },
    {
      id: 8,
      category: 'Category 7',
      background: Colors.ChineseWhite,
      color: Colors.AppColor,
    },
    {
      id: 9,
      category: 'Category 8',
      background: Colors.ChineseWhite,
      color: Colors.AppColor,
    },
    {
      id: 10,
      category: 'Category 9',
      background: Colors.ChineseWhite,
      color: Colors.AppColor,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={{ backgroundColor: Colors.White, flex: 1 }}>
        <GeneralAppHeader />
        <LocationSearchBar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 20, marginBottom: 30 }}>
            <FlatList
              horizontal
              data={categoryButtons}
              contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
              keyExtractor={item => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <AppButton
                  background
                  onPress={() => handleCategoryPress(item.id)}
                  label={item.category}
                  textStyle={[
                    styles.categoryButtonText,
                    {
                      color:
                        selectedCategory === item.id
                          ? Colors.White
                          : item.color,
                    },
                  ]}
                  buttonContainerStyle={[
                    styles.categoryButton,
                    {
                      backgroundColor:
                        selectedCategory === item.id
                          ? Colors.AppColor
                          : item.background,
                    },
                  ]}
                />
              )}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <DiscountCarousel />
          </View>
          <View style={{ marginTop: 20, marginBottom: 30 }}>
            <ProductSlider title={'Best Sellers'} />
            <ProductSlider title={'For You'} />
            <Products title={'Recommended'} />
          </View>
        </ScrollView>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SearchFilter')}
            style={styles.filterContainer}>
            <View style={styles.filterIconContainer}>
              <icons.FilterIcon />
            </View>
            <Text style={styles.filterTitle}>Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoriesProducts;