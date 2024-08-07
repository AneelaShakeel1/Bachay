import { Text, View, StatusBar, TextInput, Image, TouchableWithoutFeedback, Keyboard, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../../constants/theme'
import GeneralAppHeader from '../../../../components/GeneralAppHeader'
import icons from '../../../../constants/icons'
import AppButton from '../../../../components/AppButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ProductSlider from '../../../../components/Home/ProductSlider'
import { useNavigation } from '@react-navigation/native'
import { styles } from './HomePage.style'

const HomePage = () => {

    const navigation = useNavigation();

    const [isFollow, setIsFollow] = useState(false);

    const handleFollowPress = () => {
        setIsFollow(!isFollow)
    }

    const [selectedProduct, setSelectedProduct] = useState(null);

    latestProducts = [
        {
            productImage: require('../../../../assets/images/reviews/reviewImage1.jpg'),
            productTitle: 'Yellow Leather Shoes',
            orgPrice: '4000',
            disPrice: '1999'
        },
        {
            productImage: require('../../../../assets/images/reviews/reviewImage2.jpg'),
            productTitle: 'Pink  Stylist Shoes',
            orgPrice: '3000',
            disPrice: '1500'
        },
        {
            productImage: require('../../../../assets/images/reviews/reviewImage3.jpg'),
            productTitle: 'Multi Color Leather Shoes',
            orgPrice: '2000',
            disPrice: '1000'
        },
        {
            productImage: require('../../../../assets/images/reviews/reviewImage4.jpg'),
            productTitle: 'Formal Shoes',
            orgPrice: '5000',
            disPrice: '2500'
        }
    ]
    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.ProductItemContainer}
            key={index}
            onPress={() => setSelectedProduct(item)}
        >
            <Image
                source={item.productImage}
                resizeMode='cover'
                style={styles.ProductItemImage}
            />
            <View style={styles.ProductItemInfoContainer}>
                <Text style={styles.ProductItemTitle}>{item.productTitle.slice(0, 13) + '....'}</Text>
                <View style={styles.ProductItemPriceContainer}>
                    <Text style={styles.productItemDisPrice}>Rs. {item.disPrice}</Text>
                    <Text style={styles.productItemOrgPrice}>Rs. {item.orgPrice}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.screenContainer}>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.White}
                    barStyle={'dark-content'}
                />
                <GeneralAppHeader />
                <View style={styles.searchContainer}>
                    <icons.SearchIcon height={17} />
                    <icons.Separator />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search in Store"
                        placeholderTextColor={Colors.RomanSilver}
                    />
                </View>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                    <View style={styles.profileContainer}>
                        <View style={styles.profileRow}>
                            <View style={styles.profileInfo}>
                                <Image
                                    source={require('../../../../assets/images/Profile/storeProfile.png')}
                                    resizeMode='cover'
                                    style={styles.profileImage}
                                />
                                <View style={styles.profileTextContainer}>
                                    <Text style={styles.profileName}>{'Prime Wearables'}</Text>
                                    <View style={styles.ratingContainer}>
                                        <icons.YellowStar />
                                        <icons.YellowStar />
                                        <icons.YellowStar />
                                        <icons.YellowStar />
                                        <icons.YellowStar />
                                        <Text style={styles.rating}>4.7</Text>
                                    </View>
                                    <Text style={styles.sellerRating}>80% Positive Seller Ratings</Text>
                                </View>
                            </View>
                            <AppButton
                                background
                                label={isFollow ? 'Following' : 'Follow'}
                                textStyle={[styles.followBtnText, { color: isFollow ? Colors.BlueViolet : Colors.AppColor }]}
                                buttonContainerStyle={styles.followBtn}
                                onPress={handleFollowPress}
                            />
                        </View>
                    </View>
                    <View style={styles.routesContainer}>
                        <Text style={styles.homepageRoute}>Homepage</Text>
                        <Text onPress={() => navigation.navigate('AllProducts')} style={styles.allproductsRoute}>All Products</Text>
                    </View>
                    <View style={styles.routeIndicator} />
                    <View style={styles.bannerContainer}>
                        <Image
                            source={require('../../../../assets/images/discount/CarouselImage.png')}
                            style={styles.banner}
                            resizeMode='cover'
                        />
                    </View>
                    <View style={styles.latestAdditionsTextContainer}>
                        <Text style={styles.latestAdditionsText}>Latest Additions</Text>
                    </View>
                    <View style={styles.latestAdditionsContainer}>
                        <View style={styles.SingleProductContainer}>
                            <Image
                                source={selectedProduct ? selectedProduct.productImage : require('../../../../assets/images/product/productImage.jpg')}
                                resizeMode='cover'
                                style={styles.SingleProductImage}
                            />
                            <Text numberOfLines={3} style={styles.SingleProductTitle}>
                                {selectedProduct ? selectedProduct.productTitle : 'Elegant Leather Shoes Avaialble in All Colors'}
                            </Text>
                            <View style={styles.SingleProductPriceContainer}>
                                <Text style={styles.SingleProductDisPrice}>Rs. {selectedProduct ? selectedProduct.disPrice : '1999'}</Text>
                                <Text style={styles.SingleProductOrgPrice}>Rs. {selectedProduct ? selectedProduct.orgPrice : '2000'}</Text>
                            </View>
                        </View>
                        <View style={styles.ProductsContainer}>
                            <FlatList
                                data={latestProducts}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ gap: 22 }}
                                renderItem={renderItem}
                            />
                        </View>
                    </View>
                    <View style={styles.productsCategoriesContainer}>
                        <ProductSlider title={'Toys & Games'} />
                        <ProductSlider title={'Learning & Education'} />
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView >
        </TouchableWithoutFeedback >
    )
}

export default HomePage;


