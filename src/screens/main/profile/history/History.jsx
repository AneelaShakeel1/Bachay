import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors, Fonts, Sizes } from '../../../../constants/theme'
import GeneralAppHeader from '../../../../components/GeneralAppHeader'
import icons from '../../../../constants/icons'
import { useNavigation } from '@react-navigation/native'

const History = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.screenContainer}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.White}
                barStyle={'dark-content'}
            />
            <GeneralAppHeader />
            <View style={styles.routesContainer}>
                <Text onPress={() => navigation.navigate('Review')} style={styles.toReviewRoute}>To Review</Text>
                <Text style={styles.historyRoute}>History</Text>
            </View>
            <View style={styles.routeIndicator} />
            <View style={styles.historyContainer}>
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
                    <View style={{ gap: -3 }}>
                        <Text style={styles.productName}>Pine Kids Lace Up Casual Shoes Color Block - White</Text>
                        <Text style={styles.productColor}>Color Family: Black</Text>
                        <View style={styles.starContainer}>
                            <icons.YellowStar height={16} width={16} />
                            <icons.YellowStar height={16} width={16} />
                            <icons.YellowStar height={16} width={16} />
                            <icons.YellowStar height={16} width={16} />
                            <icons.WhiteStar height={16} width={16} />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default History

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.White
    },
    routesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5,
    },
    toReviewRoute: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size17,
        top: 1,
        color: Colors.AppColor,
        width: "50%",
        textAlign: 'center',
        paddingTop: 20
    },
    historyRoute: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size17,
        top: 1,
        color: Colors.AppColor,
        width: "50%",
        textAlign: 'center',
        paddingTop: 20,
    },
    routeIndicator: {
        width: '50%',
        backgroundColor: Colors.BlueViolet,
        height: 2,
        alignSelf: 'flex-end'
    },
    historyContainer: {
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
        gap: 15,
        paddingVertical: 20
    },
    productImage: {
        height: 90,
        width: 90,
        borderRadius: 10
    },
    productName: {
        fontFamily: Fonts.medium,
        color: Colors.AppColor,
        top: 1,
        fontSize: Sizes.size15,
        width: '65%',
    },
    productColor: {
        fontFamily: Fonts.regular,
        top: 1,
        color: Colors.AppColor,
        fontSize: Sizes.size12
    },
    starContainer: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 5,
        top: 5
    }
});