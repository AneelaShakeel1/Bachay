import { Text, View, StatusBar, TextInput, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../../constants/theme'
import GeneralAppHeader from '../../../../components/GeneralAppHeader'
import icons from '../../../../constants/icons'
import AppButton from '../../../../components/AppButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import Products from '../../../../components/Home/Products'
import { styles } from './AllProducts.style'

const AllProducts = () => {

    const navigation = useNavigation();

    const [isFollow, setIsFollow] = useState(true);

    const handleFollowPress = () => {
        setIsFollow(!isFollow)
    }

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
                        <Text onPress={() => navigation.navigate('HomePage')} style={styles.homepageRoute}>Homepage</Text>
                        <Text style={styles.allproductsRoute}>All Products</Text>
                    </View>
                    <View style={styles.routeIndicator} />
                    <View style={{ backgroundColor: Colors.FlashWhite }}>
                        <Products />
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView >
        </TouchableWithoutFeedback >
    )
}

export default AllProducts;


