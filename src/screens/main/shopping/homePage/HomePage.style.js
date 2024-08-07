import { Dimensions, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../../constants/theme";

export const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.White
    },
    searchContainer: {
        borderWidth: 1,
        borderColor: Colors.BlackCoral,
        borderRadius: 25,
        width: '90%',
        paddingHorizontal: 20,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 20,
        height:40
    },
    textInput: {
        width: '90%',
        fontSize: Sizes.size11,
        color: Colors.AppColor,
        fontFamily: Fonts.regular,
        // top: 2,
    },
    profileContainer: {
        borderTopWidth: 20,
        borderColor: Colors.FlashWhite,
        padding: 20
    },
    profileRow: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    profileInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    profileImage: {
        height: 65,
        width: 65,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Colors.Black
    },
    profileTextContainer: {
        gap: -3
    },
    profileName: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        top: 1,
        color: Colors.AppColor
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 5
    },
    rating: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size10,
        top: 1,
        color: Colors.AppColor
    },
    sellerRating: {
        fontFamily: Fonts.medium,
        color: Colors.AppColor,
        top: 3,
        fontSize: Sizes.size10
    },
    followBtn: {
        justifyContent: 'center',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: Colors.SurfaceLightBlue,
    },
    followBtnText: {
        fontFamily: Fonts.semiBold,
        top: 1,
        fontSize: Sizes.size12
    },
    routesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5,
    },
    homepageRoute: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size13,
        top: 1,
        color: Colors.AppColor,
        width: "50%",
        textAlign: 'center',
        paddingTop: 20
    },
    allproductsRoute: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size13,
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
    bannerContainer: {
        borderTopWidth: 20,
        borderColor: Colors.FlashWhite
    },
    banner: {
        height: 220,
        width: Dimensions.get('screen').width
    },
    latestAdditionsTextContainer: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: Colors.FlashWhite
    },
    latestAdditionsText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size18,
        top: 1,
        color: Colors.AppColor
    },
    latestAdditionsContainer: {
        backgroundColor: Colors.White,
        paddingVertical: 30,
        flexDirection: "row",
    },
    SingleProductContainer: {
        gap: 10,
        width: '50%',
    },
    SingleProductImage: {
        height: 165,
        width: 165,
        borderRadius: 5,
        alignSelf: "center"
    },
    SingleProductTitle: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        top: 1,
        color: Colors.AppColor,
        paddingHorizontal: 20
    },
    SingleProductPriceContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 20
    },
    SingleProductDisPrice: {
        fontFamily: Fonts.semiBold,
        color: Colors.BlueViolet,
        top: 1,
        fontSize: Sizes.size15
    },
    SingleProductOrgPrice: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        top: 1,
        color: Colors.RomanSilver,
        textDecorationLine: 'line-through'
    },
    ProductsContainer: {
        borderLeftWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.10)',
        width: '50%',
        alignItems: "center"
    },
    ProductItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    ProductItemImage: {
        width: 50,
        height: 50,
        borderRadius: 5
    },
    ProductItemInfoContainer: {
        gap: -3
    },
    ProductItemTitle: {
        fontFamily: Fonts.medium,
        top: 1,
        color: Colors.AppColor,
        fontSize: Sizes.size11
    },
    ProductItemPriceContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    productItemDisPrice: {
        fontFamily: Fonts.semiBold,
        color: Colors.BlueViolet,
        top: 1,
        fontSize: Sizes.size12
    },
    productItemOrgPrice: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size10,
        top: 1,
        color: Colors.RomanSilver,
        textDecorationLine: 'line-through'
    },
    productsCategoriesContainer: {
        backgroundColor: Colors.FlashWhite,
        paddingVertical: 20
    }
});