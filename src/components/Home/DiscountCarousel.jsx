import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native';
import { Colors } from '../../constants/theme';
import { useDispatch, useSelector } from 'react-redux';
import { mainBannerData } from '../../redux/features/Main/mainSelector';
import { getMainBannerData } from '../../redux/features/Main/mainThunks';

const DEVICE_WIDTH = Dimensions.get('window').width;
const imageSize = Dimensions.get('window');

const DiscountCarousel = () => {
  const scrollRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const bannerData = useSelector(mainBannerData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMainBannerData())
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, [dispatch]);

  useEffect(() => {
    console.log('main banner data:', bannerData);
  }, [bannerData]);

  useEffect(() => {
    let intervalId;

    if (bannerData && Array.isArray(bannerData) && bannerData.length > 0) {
      intervalId = setInterval(() => {
        setSelectedIndex((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
        scrollRef.current.scrollTo({
          animated: true,
          x: DEVICE_WIDTH * selectedIndex,
          y: 0,
        });
      }, 5000);
    }

    return () => clearInterval(intervalId);
  }, [bannerData, selectedIndex]);

  const handleMomentumScrollEnd = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const index = Math.floor(contentOffset.x / viewSize.width);
    setSelectedIndex(index);
  };

  return (
    <View style={{ marginTop: -40 }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        ref={scrollRef}
      >
        {bannerData && Array.isArray(bannerData) && bannerData.length > 0 && bannerData.map((uri, index) => (
          <Image
            style={styles.backgroundImage}
            source={{ uri }}
            key={index}
            resizeMode="cover"
          />
        ))}
      </ScrollView>
      <View style={styles.circleDiv}>
        {bannerData && Array.isArray(bannerData) && bannerData.length > 0 && bannerData.map((_, index) => (
          <View
            style={[
              styles.whiteCircle,
              {
                opacity: index === selectedIndex ? 1 : 0.5,
                width: index === selectedIndex ? 15 : 6,
              },
            ]}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: imageSize.width,
    height: imageSize.width * (650 / 750),
  },
  circleDiv: {
    bottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 10,
    alignSelf: 'center',
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 3,
    backgroundColor: Colors.White,
  },
});

export default DiscountCarousel;
