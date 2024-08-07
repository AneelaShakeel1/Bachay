import { StyleSheet } from "react-native";
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
        paddingBottom: 5
    },
    homepageRoute: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size13,
        top: 1,
        color: Colors.AppColor,
        width: '50%',
        textAlign: "center",
        paddingTop: 20,
    },
    allproductsRoute: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size13,
        top: 1,
        color: Colors.AppColor,
        width: '50%',
        textAlign: "center",
        paddingTop: 20,
    },
    routeIndicator: {
        width: '50%',
        backgroundColor: Colors.BlueViolet,
        height: 2,
        alignSelf: 'flex-end'
    },
});