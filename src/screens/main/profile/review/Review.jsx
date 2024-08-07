import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Colors, Fonts, Sizes } from '../../../../constants/theme'
import GeneralAppHeader from '../../../../components/GeneralAppHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
const Review = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.screenContainer}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.White}
                barStyle={'dark-content'}
            />
            <GeneralAppHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                    <View style={styles.routesContainer}>
                        <Text style={styles.toReviewRoute}>To Review</Text>
                        <Text onPress={() => navigation.navigate('History')} style={styles.historyRoute}>History</Text>
                    </View>
                    <View style={styles.routeIndicator} />
                    <View style={styles.reviewContainer}>
                        <View style={styles.reviewerInfoContainer}>
                            <Text style={styles.reviewerTitle}>Prime Wearables</Text>
                            <Text style={styles.productPurchasedInfoText}>Purchased 18 Nov 2023</Text>
                        </View>
                        <View style={styles.productInfoContainer}>
                            <Image
                                resizeMode='cover'
                                source={require('../../../../assets/images/product/ProductImage1.jpg')}
                                style={styles.productImage}
                            />
                            <View>
                                <Text style={styles.productName}>Pine Kids Lace Up Casual Shoes Color Block - White</Text>
                                <Text style={styles.productColor}>Color Family: Black</Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('AddReview')}
                                style={styles.reviewTextContainer}>
                                <Text style={styles.reviewText}>Review</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: Colors.RomanSilver, borderRadius: 25, paddingHorizontal: 20, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: "row", marginVertical: 20 }}>
                            <Text style={{ fontFamily: Fonts.semiBold, fontSize: Sizes.size15, top: 1, color: Colors.AppColor, width: "50%" }}>SpeedX</Text>
                            <Text style={{ fontFamily: Fonts.regular, fontSize: Sizes.size13, top: 1, color: Colors.AppColor, width: '50%' }}>Purchased 18 Nov 2023</Text>
                        </View>
                        <View style={styles.productInfoContainer}>
                            <Image
                                resizeMode='cover'
                                source={require('../../../../assets/images/product/ProductImage1.jpg')}
                                style={styles.productImage}
                            />
                            <View>
                                <Text style={styles.productName}>Pine Kids Lace Up Casual Shoes Color Block - White</Text>
                                <Text style={styles.productColor}>Color Family: Black</Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('ReviewProduct')}
                                style={styles.reviewTextContainer}>
                                <Text style={styles.reviewText}>Review</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.productInfoContainer}>
                            <Image
                                resizeMode='cover'
                                source={require('../../../../assets/images/product/ProductImage1.jpg')}
                                style={styles.productImage}
                            />
                            <View>
                                <Text style={styles.productName}>Pine Kids Lace Up Casual Shoes Color Block - White</Text>
                                <Text style={styles.productColor}>Color Family: Black</Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('ReviewProduct')}
                                style={styles.reviewTextContainer}>
                                <Text style={styles.reviewText}>Review</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.productInfoContainer}>
                            <Image
                                resizeMode='cover'
                                source={require('../../../../assets/images/product/ProductImage1.jpg')}
                                style={styles.productImage}
                            />
                            <View>
                                <Text style={styles.productName}>Pine Kids Lace Up Casual Shoes Color Block - White</Text>
                                <Text style={styles.productColor}>Color Family: Black</Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('ReviewProduct')}
                                style={styles.reviewTextContainer}>
                                <Text style={styles.reviewText}>Review</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Review

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.White
    },
    root: {
        borderTopWidth: 20,
        borderColor: Colors.SurfaceLightBlue,
    },
    reviewContainer: {
        padding: 20
    },
    reviewerInfoContainer: {
        borderWidth: 1,
        borderColor: Colors.RomanSilver,
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        marginVertical: 20
    },
    reviewerTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size15,
        top: 1,
        color: Colors.AppColor,
        width: "50%"
    },
    productPurchasedInfoText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size13,
        top: 1,
        color: Colors.AppColor,
        width: '50%'
    },
    productInfoContainer: {
        flexDirection: "row",
        gap: 20,
        paddingVertical: 20
    },
    productImage: {
        height: 70,
        width: 70,
        borderRadius: 10
    },
    productName: {
        fontFamily: Fonts.medium,
        color: Colors.AppColor,
        top: 1,
        fontSize: Sizes.size15,
        width: '60%'
    },
    productColor: {
        fontFamily: Fonts.regular,
        top: 1,
        color: Colors.AppColor,
        fontSize: Sizes.size12
    },
    reviewTextContainer: {
        position: 'absolute',
        top: '50%',
        right: 0
    },
    reviewText: {
        fontFamily: Fonts.semiBold,
        top: 1,
        color: Colors.FilterColor,
        fontSize: Sizes.size13,
        textDecorationLine: 'underline'
    },
    routesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5,
    },
    toReviewRoute: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size17,
        top: 1,
        color: Colors.AppColor,
        width: "50%",
        textAlign: 'center',
        paddingTop: 20
    },
    historyRoute: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size17,
        top: 1,
        color: Colors.AppColor,
        width: "50%",
        textAlign: 'center',
        paddingTop: 20
    },
    routeIndicator: {
        width: '50%',
        backgroundColor: Colors.BlueViolet,
        height: 2
    },
})