import React, { useState } from 'react';
import {
  View,
  StatusBar,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import icons from '../../../../constants/icons';
import { Colors, Fonts } from '../../../../constants/theme';
import AppButton from '../../../../components/AppButton';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import { styles } from './ExploreScreen.style';

const ExploreScreen = () => {
  const navigation = useNavigation();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const handleFollowPress = () => {
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);
  };
  const handleSavePress = () => {
    setIsSaved((prevIsSaved) => !prevIsSaved);
  };

  const [selectedCategory, setSelectedCategory] = useState(1);
  const handleCategoryPress = id => {
    setSelectedCategory(id);
  };

  const description = 'Explore a world of fashion and style. Discover the latest trends and curated collections from top designers. Immerse yourself in a blend of elegance and sophistication. Elevate your wardrobe with timeless pieces that redefine fashion. Join us on a journey of self-expression and creativity. Your style, your identity. Let\'s make a statement together!'

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const categoryButtons = [
    {
      id: 1,
      category: 'Following',
      background: Colors.White,
      color: Colors.AppColor,
      borderRadius: 0,
    },
    {
      id: 2,
      category: 'Trending',
      background: Colors.White,
      color: Colors.AppColor,
      borderRadius: 0,
    },
    {
      id: 3,
      category: 'Discover',
      background: Colors.White,
      color: Colors.AppColor,
      borderRadius: 0,
    },
    {
      id: 4,
      category: 'Saved',
      background: Colors.White,
      color: Colors.AppColor,
      borderRadius: 0,
    },
  ];

  const cardData = [
    {
      id: '1',
      footer: 'Buy Now',
      image: require('../../../../assets/images/product/ProductImage1.jpg'),
      discountPrice: 'PKR 2,999',
      originalPrice: '3,999',
    },
    {
      id: '2',
      footer: 'Buy Now',
      image: require('../../../../assets/images/product/ProductImage1.jpg'),
      discountPrice: 'PKR 2,999',
      originalPrice: '3,999',
    },
    {
      id: '3',
      footer: 'Buy Now',
      image: require('../../../../assets/images/product/ProductImage1.jpg'),
      discountPrice: 'PKR 2,999',
      originalPrice: '3,999',
    },
    {
      id: '4',
      footer: 'Buy Now',
      image: require('../../../../assets/images/product/ProductImage1.jpg'),
      discountPrice: 'PKR 2,999',
      originalPrice: '3,999',
    },
    {
      id: '5',
      footer: 'Buy Now',
      image: require('../../../../assets/images/product/ProductImage1.jpg'),
      discountPrice: 'PKR 2,999',
      originalPrice: '3,999',
    },
    {
      id: '6',
      footer: 'Buy Now',
      image: require('../../../../assets/images/product/ProductImage1.jpg'),
      discountPrice: 'PKR 2,999',
      originalPrice: '3,999',
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <View style={styles.root}>
        <GeneralAppHeader />
        <View style={styles.headerRoot}>
          <View style={styles.header}>
            <FlatList
              horizontal
              data={categoryButtons}
              contentContainerStyle={styles.categoriesView}
              keyExtractor={item => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <View style={styles.categories}>
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
                      {
                        borderRadius:
                          selectedCategory === item.id ? 50 : item.borderRadius,
                      },
                    ]}
                  />
                  {index !== categoryButtons.length - 1 && (
                    <View style={styles.separatorView} />
                  )}
                </View>
              )}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.00)', Colors.AppColor]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.2458, 1.0071]}
            style={styles.gradientView}>
            <Image
              style={{ position: 'absolute', zIndex: -1, height: '100%', width: '100%' }}
              resizeMode="cover"
              source={require('../../../../assets/images/backgroundImage.png')}
            />
          </LinearGradient>
        </View>
        <View style={{ position: 'absolute', bottom: 0 }}>
          <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.profileInfo}>
              <View
                style={styles.profile}>
                <Image
                  style={styles.profileImage}
                  resizeMode="contain"
                  source={require('../../../../assets/images/Profile/MotherProfile.png')}
                />
                <Text
                  onPress={() => navigation.navigate('ExploreProfile')}
                  style={styles.profileViewTexts}>Talha Ahmed</Text>
                <View style={styles.separatorView}></View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => handleFollowPress()}>
                  <Text style={styles.profileViewTexts}>
                    {isFollowing ? 'Following' : 'Follow'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.profileActionsContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.actionButtonContainer}>
                  <icons.UnFilledArrowIcon />
                  <Text style={styles.profileInfoTexts}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.actionButtonContainer}
                  onPress={handleSavePress}
                >
                  {isSaved ? <icons.UnFilledSaveIcon /> : <icons.UnFilledSaveIcon />}
                  <Text style={styles.profileViewTexts}>
                    Save
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.actionButtonContainer}>
                  <icons.UnFilledLikeIcon />
                  <Text style={styles.profileInfoTexts}>234</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.profileDesContainer}>
              <Text style={styles.descText}>
                {showFullDescription
                  ? description
                  : (description ?? '').split(' ').length > 13
                    ? `${description.slice(0, 170) + ' ...... '}`
                    : description}
                <Text
                  style={{ fontFamily: Platform.OS == 'ios' ? Fonts.bold : Fonts.semiBold }}
                  onPress={toggleDescription}>
                  {showFullDescription ? ' Show Less' : ' Show More'}
                </Text>
              </Text>
            </View>
          </View>
          <View style={{ paddingVertical: 7 }}>
            <FlatList
              data={cardData}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 20,
                paddingHorizontal: 20,
                paddingBottom: Platform.OS == 'ios' ? 20 : 0
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.cardContainer}>
                  <TouchableOpacity activeOpacity={0.8} style={styles.iconView}>
                    <icons.WishlistIcon />
                  </TouchableOpacity>
                  <Image
                    style={styles.cardImage}
                    source={item.image}
                    resizeMode="contain"
                  />
                  <View style={styles.priceView}>
                    <Text style={styles.disPriceText}>
                      {item.discountPrice}
                    </Text>
                    <Text style={styles.origPriceText}>
                      {item.originalPrice}
                    </Text>
                  </View>
                  <View style={styles.footer}>
                    <Text style={styles.footerText}>{item.footer}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;