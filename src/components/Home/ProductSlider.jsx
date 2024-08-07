import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Colors, Fonts, Sizes } from '../../constants/theme';
import icons from '../../constants/icons';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../GradientText';
import { mainproductslist } from '../../redux/features/Main/mainSelector';
import { getProductDetails } from '../../redux/features/Main/mainThunks';
import { useDispatch, useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import { selectUserDetails } from '../../redux/features/auth/authSelectors';

const ProductSlider = ({ title }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState();
  const [loadingStates, setLoadingStates] = useState({});
  const userData = useSelector(selectUserDetails);

  const handleWishlistPress = () => {
    if (userData) {
      navigation.navigate('MyShortlist');
    } else {
      Alert.alert(
        'Login Required',
        'Please log in to add to wishlist.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ],
        { cancelable: false }
      );
    }
  };


  const handleOnPress = async (id, index) => {
    try {
      setIsLoading(true);
      const updatedLoadingStates = { ...loadingStates, [index]: true };
      setLoadingStates(updatedLoadingStates);
      await dispatch(getProductDetails(id));
      navigation.navigate('SingleProduct');
    } catch (error) {
      // Handle any errors here
      console.error('Error fetching product details:', error);
    } finally {
      setIsLoading(false);
      const updatedLoadingStates = { ...loadingStates, [index]: false };
      setLoadingStates(updatedLoadingStates);
    }
  };



  const productsData = useSelector(mainproductslist);
  // console.log('productsData---------------', productsData);

  if (!productsData || productsData.length === 0) {
    return null;
  }

  return (
    <View style={{ marginBottom: 30 }}>
      <View style={styles.headerStyle}>
        <View style={{ marginBottom: -20 }}>
          <GradientText title={title || 'Featured'} width={200} size={30} />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('CategoriesProducts')}
          style={{ paddingLeft: 40 }}>
          <Text style={styles.headerTextStyle}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={productsData}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item, index }) => {
          const discountPrice = item.unit_price - (item.unit_price * item.discount) / 100;
          const roundedDiscountPrice = Math.floor(discountPrice);
          return (
            <>
              <TouchableHighlight
                style={styles.prodRootMain}
                activeOpacity={1}
                underlayColor="rgba(255, 255, 255, 0.2)"
                onPress={() => handleOnPress(item.id, index)}>
                <View style={styles.prodRoot}>
                  <View style={styles.prodContainer}>
                    <View>
                      <Image
                        resizeMode='cover'
                        style={styles.prodImageStyle}
                        source={{ uri: item.thumbnail }} />
                      {/* {productImages[0].saleContainer && (
                      <View style={[styles.prodSaleView, { backgroundColor: Colors.GreenColor }]}>
                        <Text style={[styles.saleText, { color: Colors.White }]}>{productImages[0].saleText}</Text>
                      </View>
                    )} */}
                      <TouchableOpacity
                        onPress={() => handleWishlistPress(item.id)}
                        activeOpacity={0.8}
                        style={styles.prodWishlistView}>
                        <icons.WishlistIcon style={styles.wishlistIconStyle} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.prodDetailsView}>
                      <Text numberOfLines={2} style={styles.descriptionTextStyle}>
                        {item.name}
                      </Text>
                      <View style={styles.prodPriceDetailsView}>
                        <View style={styles.prodPriceView}>
                          <Text style={styles.priceTextStyle}>Rs. {roundedDiscountPrice}</Text>
                          {/* <View style={styles.prodStockView}>
                          <Text style={styles.prodStockText}>{productImages[0].stock}</Text>
                        </View> */}
                        </View>
                        {item.discount > 0 && (
                          <View style={styles.prodDisPriceView}>
                            <Text style={styles.origPriceText}>Rs. {item.unit_price}</Text>
                            <Text style={styles.discountTextStyle}>
                              - {item.discount}% Off
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>
                    <View style={styles.bottomView}>
                      <View style={[styles.deliveryView, { backgroundColor: Colors.AppColor }]}>
                        <Text style={styles.deliveryText}>Standard Delivery</Text>
                      </View>
                      {item.reviews.length > 0 && item.reviews[0].rating !== 0 && (
                        <View style={styles.ratingView}>
                          <Text style={styles.ratingText}>
                            {item.reviews[0].rating + '.0'}
                          </Text>
                          <icons.RatingIcon style={styles.ratingIcon} />
                        </View>
                      )}
                      {item.reviews_count > 0 && (
                        <View style={styles.reviewContainer}>
                          <Text style={styles.reviewText}>({item.reviews_count})</Text>
                        </View>
                      )}
                      {item.reviews.length === 0 && item.reviews_count === 0 && (
                        <Text style={styles.reviewText}>No reviews</Text>
                      )}
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
              {loadingStates[index] && (
                <LottieView
                  style={{ width: 100, height: 100, position: 'absolute', top: '40%', left: '25%' }}
                  source={require('../../assets/LottieFiles/loader.json')}
                  autoPlay
                  loop
                />
              )}
            </>
          )
        }
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width,
    paddingHorizontal: 20,
    marginTop: 8,
  },
  headerTextStyle: {
    textDecorationLine: 'underline',
    alignSelf: 'center',
    color: Colors.AppColor,
    fontFamily: Fonts.medium,
    top: 4,
  },
  prodRootMain: {
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: -2,
    backgroundColor: Colors.SurfaceLightBlue,
  },
  prodRoot: {
    alignItems: 'center',
    borderRadius: 15,
  },
  prodContainer: {
    flexDirection: 'column',
    padding: 10,
    height: 355,
  },

  prodImageStyle: {
    height: 188,
    width: 190,
    borderRadius: 10,
  },
  prodSaleView: {
    position: 'absolute',
    top: 5,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  saleText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size10,
    top: 1,
    textTransform: 'capitalize',
  },
  prodWishlistView: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    top: 10,
    right: 10,
    borderColor: 'rgba(255, 255, 255, 0.50)',
    borderWidth: 1,
    borderRadius: 50,
    padding: 6,
    justifyContent: 'center',
  },
  prodDetailsView: {
    flexDirection: 'column',
    gap: 10,
    paddingVertical: 10,
  },
  descriptionTextStyle: {
    textAlign: 'left',
    color: Colors.AppColor,
    fontSize: Sizes.size14,
    width: 190,
    fontFamily: Fonts.medium,
  },
  prodPriceDetailsView: {
    flexDirection: 'column',
    marginTop: -5,
  },
  prodPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  priceTextStyle: {
    fontSize: Sizes.size19,
    color: Colors.AppColor,
    fontFamily: Fonts.semiBold,
    top: 2,
  },
  prodStockView: {
    alignItems: 'center',
    backgroundColor: Colors.FilterColor,
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 1,
  },
  prodStockText: {
    fontFamily: Fonts.medium,
    color: Colors.White,
    fontSize: Sizes.size9,
    top: 1,
  },
  prodDisPriceView: {
    flexDirection: 'row',
    gap: 3,
  },
  origPriceText: {
    fontFamily: Fonts.medium,
    color: 'rgba(0, 0, 0, 0.70)',
    fontSize: Sizes.size12,
    textDecorationLine: 'line-through',
  },
  discountTextStyle: {
    fontFamily: Fonts.bold,
    color: Colors.GreenColor,
    fontSize: Sizes.size12,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    left: 10,
    gap: 7
  },
  deliveryText: {
    color: Colors.White,
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size9,
    top: 1,
    textTransform: 'capitalize',
  },
  deliveryView: {
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingView: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 2,
    alignItems: 'center',
    backgroundColor: Colors.BeerColor,
    borderRadius: 50,
  },
  ratingText: {
    fontSize: Sizes.size10,
    color: Colors.White,
    fontFamily: Fonts.semiBold,
    top: 1,
  },
  ratingIcon: {
    top: -0.5,
    left: 2,
  },
  reviewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewText: {
    fontFamily: Fonts.semiBold,
    textAlign: 'center',
    fontSize: Sizes.size12,
    alignItems: 'center',
    color: Colors.AppColor,
    top: 1,
  },
});

export default ProductSlider;