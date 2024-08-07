import React, { useEffect, useRef, useState } from 'react';
import { Image, FlatList, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { mainSectionBannerData } from '../../redux/features/Main/mainSelector';
import { getMainSectionBannerData } from '../../redux/features/Main/mainThunks';

const CategoryBannerSlider = () => {
  const sectionBannerData = useSelector(mainSectionBannerData);
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getMainSectionBannerData());
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    // Log main section banners data
    console.log('main section banners data:', sectionBannerData);
  }, [sectionBannerData]);

  // Autoplay scroll
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (sectionBannerData.length > 0) {
        const newIndex = (currentIndex + 1) % sectionBannerData.length;
        setCurrentIndex(newIndex);
        flatListRef.current.scrollToIndex({ animated: true, index: newIndex });
      }
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(autoplayInterval);
  }, [currentIndex, sectionBannerData]);

  return (
    <FlatList
      ref={flatListRef}
      data={sectionBannerData}
      contentContainerStyle={{ paddingHorizontal: 10, marginTop: 10 }}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={{
            width: Dimensions.get('screen').width / 1.3,
            height: (Dimensions.get('screen').width * 205) / 1285,
            borderRadius: 15,
            marginHorizontal: 20,
          }}
          resizeMode='cover'
        />
      )}
      keyExtractor={(item, index) => `${index}_${item}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      onEndReachedThreshold={0.1}
    />
  );
};

export default CategoryBannerSlider;
