import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Animated
} from 'react-native';
import { Colors, Fonts } from '../../constants/theme';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../GradientText';
import { useDispatch, useSelector } from 'react-redux';
import { mainAllCategories } from '../../redux/features/Main/mainSelector';
import { getAllCategories } from '../../redux/features/Main/mainThunks';

const CategoryCardSlider = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const scrollX = useRef(new Animated.Value(0)).current;

  const newCatData = useSelector(mainAllCategories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    console.log('new categories data:', newCatData);
  }, [newCatData]);

  const blackColor = [
    Colors.AppColor,
    Colors.AppColor,
    Colors.AppColor,
    Colors.AppColor,
    Colors.AppColor,
  ];

  const handleCategoryPress = (categoryId) => {
    navigation.navigate('SubCategories', { categoryID: categoryId });
  };

  const renderCategoryItem = ({ item, index }) => {
    const categoryId = item.id; // Get the category ID
    return (
      <TouchableOpacity onPress={() => handleCategoryPress(categoryId)} activeOpacity={0.8}>
        <View style={styles.categoriesContainer}>
          <View style={{ flexDirection: 'column' }}>
            <LinearGradient
              colors={index === 0 ? Colors.gradientColor : blackColor}
              locations={[0, 0.3, 0.7, 1, 1]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              style={styles.gradientContainer}>
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
              {item.name.length > 10 ? `${item.name.substring(0, 10)}...` : item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.headerStyle}>
        <View style={{ marginBottom: -15 }}>
          <GradientText title={'Categories'} width={200} size={36} />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('AllCategories')}
          style={{ paddingLeft: 40 }}
        >
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={newCatData}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, marginTop: 10 }}
        renderItem={renderCategoryItem}
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
    marginVertical: 10
  },
  headerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  seeAllText: {
    textDecorationLine: 'underline',
    alignSelf: 'center',
    color: Colors.AppColor,
    fontFamily: Fonts.medium,
    top: 4,
    textTransform: 'capitalize',
  },
  categoriesContainer: {
    paddingHorizontal: 10,
  },
  gradientContainer: {
    width: 85,
    height: 85,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.White,
  },
  imageTitle: {
    textAlign: 'center',
    fontFamily: Fonts.semiBold,
    marginVertical: 5,
    color: Colors.AppColor,
    textTransform: 'capitalize',
  },
});