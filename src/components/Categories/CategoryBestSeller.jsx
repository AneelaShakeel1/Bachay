import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Dimensions,
  ScrollView
} from 'react-native';
import { Colors, Fonts, Sizes } from '../../constants/theme';
import GradientText from '../GradientText';
import { getSubCategories } from '../../redux/features/Main/mainThunks';
import { selectedCatData } from '../../redux/features/Main/mainSelector';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../constants/icons';

const DEVICE_WIDTH = Dimensions.get('window').width;
const imageSize = Dimensions.get('window');

const CategoryBestSeller = ({ categoryID }) => {
  const dispatch = useDispatch();

  const scrollRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectCatData = useSelector(selectedCatData);
  const [categoryNames, setCategoryNames] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const memoizedCategoryNames = useMemo(() => categoryNames, [categoryNames]);

  useEffect(() => {
    console.log("Category ID--------", categoryID);

    const fetchData = async () => {
      try {
        const response = await dispatch(getSubCategories({ id: categoryID }));
        console.log('API Response:', response);

        if (response?.payload?.categories) {
          const newCategoryNames = Object.keys(response.payload.categories);
          setCategoryNames(newCategoryNames);
          setSubCategories(response.payload.sub_categories);
        } else {
          console.error('API Error: Invalid response structure');
        }
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchData();
  }, [dispatch, categoryID]);

  useEffect(() => {
    if (selectCatData && selectCatData.banners && selectCatData.banners["Main Banner"]) {
      const bannerCount = selectCatData.banners["Main Banner"].length;

      const intervalId = setInterval(() => {
        setSelectedIndex((prev) => (prev === bannerCount - 1 ? 0 : prev + 1));
        scrollRef.current.scrollTo({
          animated: true,
          x: DEVICE_WIDTH * selectedIndex,
          y: 0,
        });
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [selectCatData, selectedIndex]);

  const handleMomentumScrollEnd = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const index = Math.floor(contentOffset.x / viewSize.width);
    setSelectedIndex(index);
  };

  const renderCategoryItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} key={item.id}>
        <View style={styles.categoriesContainer}>
          <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              resizeMode='cover'
              style={styles.cardImageContainer}
              source={require('../../assets/images/categories/CategoriesImage1.png')}
            />
            <Text style={styles.imageTitle}>
              {item.name.length > 10 ? `${item.name.substring(0, 10)}...` : item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {selectCatData?.banners?.["Main Banner"] && (
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          ref={scrollRef}
        >
          {selectCatData.banners["Main Banner"].map((banner, index) => (
            <Image
              style={styles.backgroundImage}
              source={{ uri: banner.photo }}
              key={index}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
      )}

      {selectCatData?.banners?.["Main Banner"] && (
        <View style={styles.circleDiv}>
          {selectCatData.banners["Main Banner"].map((_, index) => (
            <View
              style={[
                styles.whiteCircle,
                {
                  opacity: index === selectedIndex ? 0.5 : 1,
                  width: index === selectedIndex ? 6 : 15,
                },
              ]}
              key={index}
            />
          ))}
        </View>
      )}

      {memoizedCategoryNames.length > 0 && (
        <View style={styles.mainView}>
          <View style={styles.headerStyle}>
            <GradientText title={selectCatData.name} width={200} size={36} />
          </View>
          {memoizedCategoryNames.map((categoryName, index) => (
            <TouchableOpacity activeOpacity={0.8} key={index}>
              <View style={styles.divider} />
              <View style={styles.rowContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    resizeMode="cover"
                    style={styles.categoryImage}
                    source={require('../../assets/images/categories/CategoriesImage1.png')}
                  />
                  <Text style={styles.categoryText}>
                    {categoryName}
                  </Text>
                </View>
                <icons.RightArrowBlack width={17} height={17} />
              </View>
            </TouchableOpacity>
          ))}
          <View style={styles.divider} />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10, marginTop: 10 }}
            data={selectCatData.sub_categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderCategoryItem}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.White,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 5,
    marginTop: -10
  },
  headerStyle: {
    paddingHorizontal: 20,
    marginBottom: -15
  },
  divider: {
    borderTopWidth: 1,
    marginVertical: 18,
    borderColor: Colors.AppColor,
    opacity: 0.25,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  categoryImage: {
    borderWidth: 2,
    borderColor: Colors.AppColor,
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  categoryText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size16,
    color: Colors.AppColor,
    top: 1,
  },
  categoriesContainer: {
    paddingHorizontal: 10,
  },
  cardImageContainer: {
    borderWidth: 2,
    borderColor: Colors.AppColor,
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  imageTitle: {
    textAlign: 'center',
    fontFamily: Fonts.semiBold,
    marginVertical: 5,
    color: Colors.AppColor,
    textTransform: 'capitalize',
  },
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

export default CategoryBestSeller;
