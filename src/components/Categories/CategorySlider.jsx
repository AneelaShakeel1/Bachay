import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import { Colors, Fonts, Sizes } from '../../constants/theme';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { promoCategories } from '../../redux/features/Main/mainSelector';
import { CustomPageScreen, getCategoriesPromo } from '../../redux/features/Main/mainThunks';
import { useNavigation } from '@react-navigation/native';
const CategoryCardSlider = () => {
  const newCatPromoData = useSelector(promoCategories);
  const dispatch = useDispatch();
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getCategoriesPromo());
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleOnPress = (ids) => {
    dispatch(CustomPageScreen(ids)).then((res) => {
      navigation.navigate('CustomScreen');
    });
  };



  useEffect(() => {
    console.log('newCatPromoData:', newCatPromoData);
  }, [newCatPromoData]);

  const blackColor = [
    Colors.AppColor,
    Colors.AppColor,
    Colors.AppColor,
    Colors.AppColor,
    Colors.AppColor,
  ];

  return (
    <View style={styles.mainView}>
      <FlatList
        horizontal
        data={newCatPromoData}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleOnPress(item.id)}
          >
            <View key={item.id} style={styles.categoriesContainer}>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <LinearGradient
                  colors={index === 0 ? Colors.gradientColor : blackColor}
                  locations={[0, 0.3, 0.7, 1, 1]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 0 }}
                  style={styles.gradientContainer}
                >
                  <Animated.Image
                    resizeMode='cover'
                    style={[
                      styles.imageContainer,
                      {
                        transform: [
                          {
                            scale: scrollX.interpolate({
                              inputRange: [0, 100],
                              outputRange: index === 0 ? [1, 1.1] : [1, 1],
                              extrapolate: 'clamp',
                            }),
                          },
                        ],
                      },
                    ]}
                    source={{ uri: item.image }}
                  />
                </LinearGradient>
                <Text style={styles.imageTitle}>
                  {item.name.length > 10
                    ? `${item.name.substring(0, 10)}...`
                    : item.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default CategoryCardSlider;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.White,
  },
  categoriesContainer: {
    paddingHorizontal: 10,
  },
  gradientContainer: {
    width: 125,
    height: 85,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 120,
    height: 80,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: Colors.White,
  },
  imageTitle: {
    textAlign: 'center',
    fontFamily: Fonts.semiBold,
    color: Colors.AppColor,
    textTransform: 'capitalize',
    marginTop: 5,
    fontSize: Sizes.size14,
  },
});
