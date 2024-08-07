import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  RefreshControl
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import LocationSearchBar from '../../../../components/Home/LocationSearchBar';
import CategoryBannerSlider from '../../../../components/Categories/CategoryBannerSlider';
import CategoryList from '../../../../components/Categories/CategoryList';
import { styles } from './AllCategories.style';
import { Colors } from '../../../../constants/theme';
import { useDispatch } from 'react-redux';
import FullScreenLoader from '../../../../components/FullScreenLoader';
import { getAllCategories, getMainSectionBannerData } from '../../../../redux/features/Main/mainThunks';
const AllCategories = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const onRefresh = async () => {
    if (!loading) {
      setLoading(true);
      setRefreshing(true);
      try {
        await dispatch(getMainSectionBannerData());
        await dispatch(getAllCategories());
        console.log('Categories and banner data loaded successfully');
      } catch (error) {
        console.error('Error fetching categories and banner data:', error);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    }
  };
  useEffect(() => {
    dispatch(getMainSectionBannerData());
    dispatch(getAllCategories());
    setLoading(false);
  }, [dispatch])


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={styles.root}>
        <GeneralAppHeader />
        <LocationSearchBar />
        {loading ? (
          <FullScreenLoader />
        ) : (
          <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            showsVerticalScrollIndicator={false}
          >
            <CategoryBannerSlider />
            <CategoryList />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default AllCategories;
