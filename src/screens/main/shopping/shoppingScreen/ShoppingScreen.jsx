import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  RefreshControl,
} from 'react-native';
import MainAppHeader from '../../../../components/MainAppHeader';
import LocationSearchBar from '../../../../components/Home/LocationSearchBar';
import CategorySlider from '../../../../components/Categories/CategorySlider';
import DiscountCarousel from '../../../../components/Home/DiscountCarousel';
import CategoryCardSlider from '../../../../components/Categories/CategoryCardSlider';
import ExploreSlider from "../../../../components/Home/ExploreSlider";
import CategoryBannerSlider from '../../../../components/Categories/CategoryBannerSlider';
import DiscountSlider from '../../../../components/Home/DiscountSlider';
import ParentingTools from '../../../../components/Home/ParentingTools';
import ProductSlider from '../../../../components/Home/ProductSlider';
import { styles } from './ShoppingScreen.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonLoader from './Skeleton';
import {
  mainShoppingData,
  shoppingError,
} from '../../../../redux/features/Main/mainSelector';
import { getShoppingData } from '../../../../redux/features/Main/mainThunks';
import { Colors } from '../../../../constants/theme';
const Components = {
  CategorySlider,
  DiscountCarousel,
  CategoryCardSlider,
  ExploreSlider,
  CategoryBannerSlider,
  DiscountSlider,
  ParentingTools,
  ProductSlider,
};

const ShoppingScreen = () => {
  const dispatch = useDispatch();

  const shoppingData = useSelector(mainShoppingData);
  const [loading, isLoading] = useState(true);
  const error = useSelector(shoppingError);
  const selectedId = useSelector(state => state.main.selectedId);
  const [refreshing, setRefreshing] = useState(false);
  const renderItem = ({ item }) => {
    const ComponentToRender = Components[item.section_name];
    if (!ComponentToRender) {
      return null;
    }
    return <ComponentToRender data={item} />;
  };
  const onRefresh = () => {
    if (!loading) {
      isLoading(true);
      setRefreshing(true);

      if (selectedId !== null) {
        dispatch(getShoppingData({ id: selectedId, isLoading }))
          .unwrap()
          .then((res) => {
            console.log('Shopping data loaded successfully', res);
          })
          .catch((err) => {
            console.log('Error loading shopping data', err);
          })
          .finally(() => {
            isLoading(false);
            setRefreshing(false);
          });
      } else {
        dispatch(getShoppingData({ id: null, isLoading }))
          .unwrap()
          .then((res) => {
            console.log('Shopping data loaded successfully', res);
          })
          .catch((err) => {
            console.log('Error loading shopping data', err);
          })
          .finally(() => {
            isLoading(false);
            setRefreshing(false);
          });
      }
    }
  };

  useEffect(() => {

    if (selectedId !== null) {
      dispatch(getShoppingData({ id: selectedId, isLoading }))
        .unwrap()
        .then((res) => {
          isLoading(true)
          console.log('Shopping data loaded successfully', res);
          isLoading(false)
        })
        .catch((err) => {
          isLoading(false)
          console.log('Error loading shopping data', err);
        });
    } else {
      dispatch(getShoppingData({ id: null, isLoading })).unwrap()
        .then((res) => {
          isLoading(true)
          console.log('Shopping data loaded successfully', res);
          isLoading(false)
        })
        .catch((err) => {
          isLoading(false)
          console.log('Error loading shopping data', err);
        });
    }
  }, [selectedId, dispatch, isLoading]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
        currentHeight={30}
      />
      {loading ? (
        <SkeletonLoader />
      ) : (
        <>
          <View style={styles.mainView}>
            <MainAppHeader />
            <LocationSearchBar />
            <FlatList
              data={shoppingData}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default ShoppingScreen;
