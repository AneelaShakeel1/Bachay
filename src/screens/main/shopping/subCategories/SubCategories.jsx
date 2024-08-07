import React, { useEffect, useState } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../constants/theme';
import LocationSearchBar from '../../../../components/Home/LocationSearchBar';
import CategoryBannerSlider from '../../../../components/Categories/CategoryBannerSlider';
import CategoryBestSeller from '../../../../components/Categories/CategoryBestSeller';
import DiscountSlider from '../../../../components/Home/DiscountSlider';
import ParentingTools from '../../../../components/Home/ParentingTools';
import ProductSlider from '../../../../components/Home/ProductSlider';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import { useRoute } from '@react-navigation/native';
import { getSubCategories } from '../../../../redux/features/Main/mainThunks';
import { useDispatch } from 'react-redux';
import SkeletonLoader from './Skeleton';

const SubCategories = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const { categoryID } = route.params;

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      await dispatch(getSubCategories({ id: categoryID }));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = async () => {
    setLoading(true);
    setRefreshing(true);

    try {
      await dispatch(getSubCategories({ id: categoryID }));
      console.log('Child List Loaded Successfully');
    } catch (error) {
      console.error("Error fetching child list:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch, categoryID]);

  useEffect(() => {
    if (refreshing) {
      fetchData();
    }
  }, [refreshing]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      {loading ? (
        <SkeletonLoader />
      ) : (
        <View style={{ backgroundColor: Colors.FlashWhite, flex: 1 }}>
          <GeneralAppHeader />
          <LocationSearchBar />
          <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <CategoryBestSeller categoryID={categoryID} />
            <CategoryBannerSlider />
            <DiscountSlider />
            <View style={{ backgroundColor: Colors.White, paddingTop: 5 }}>
              <ParentingTools />
            </View>
            <View style={{ backgroundColor: Colors.White, paddingTop: 10 }}>
              <ProductSlider title={'For You'} />
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SubCategories;
