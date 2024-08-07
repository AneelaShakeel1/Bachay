import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../../constants/theme";

export const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.White
    },
    productInfoContainer: {
        flexDirection: "row",
        gap: 15,
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
        width: '65%',
    },
    productColor: {
        fontFamily: Fonts.regular,
        top: 1,
        color: Colors.AppColor,
        fontSize: Sizes.size12
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginTop: 10,
    },
    ratingLabel: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size16,
        top: 1,
        color: Colors.AppColor,
    },
    ratingStarsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    ratingText: {
        fontFamily: Fonts.medium,
        color: Colors.BeerColor,
        top: 1,
        fontSize: Sizes.size12,
        width: "30%"
    },
    feedbackContainer: {
        backgroundColor: '#E4F5D3',
        marginTop: 30,
        borderRadius: 20,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    feedbackText: {
        fontFamily: Fonts.regular,
        top: 1,
        fontSize: Sizes.size12,
        color: '#274606',
        width: '88%',
        lineHeight: 15
    },
    serviceRatingsContainer: {
        marginTop: 40,
        marginBottom: 20,
        gap: 20
    },
    serviceRating: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 20
    },
    serviceRatingLabel: {
        fontFamily: Fonts.medium,
        top: 1,
        color: Colors.AppColor,
        fontSize: Sizes.size15
    },
    serviceRatingStarsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7
    },
    serviceRatingText: {
        fontFamily: Fonts.medium,
        color: Colors.BeerColor,
        top: 1,
        fontSize: Sizes.size13,
        width: "30%"
    },
    uploadContainer: {
        borderTopWidth: 5,
        borderColor: Colors.SurfaceLightBlue,
        padding: 20,
        borderBottomWidth: 5
    },
    uploadLabel: {
        fontFamily: Fonts.medium,
        top: 1,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        marginTop: 5
    },
    uploadBox: {
        marginVertical: 15,
        paddingVertical: 30,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 8,
        borderColor: Colors.BlueViolet,
        justifyContent: 'center',
        alignItems: "center"
    },
    uploadIconContainer: {
        alignItems: "center",
        gap: 3
    },
    uploadText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.BlueViolet
    },
    reviewContainer: {
        padding: 20
    },
    reviewHeader: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    reviewLabel: {
        fontFamily: Fonts.medium,
        top: 1,
        color: Colors.AppColor,
        fontSize: Sizes.size15
    },
    validationText: {
        fontFamily: Fonts.regular,
        marginTop: 5,
        color: Colors.RedColor,
        fontSize: Sizes.size12
    },
    characterCount: {
        fontFamily: Fonts.medium,
        top: 1,
        color: Colors.AppColor,
        fontSize: Sizes.size13
    },
    reviewField: {
        borderColor: Colors.MetallicSilver,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginTop: 20
    },
    input: {
        color: Colors.AppColor,
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
    },
    btnStyle: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 13,
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: Colors.BlueViolet,
    },
    btnTextStyle: {
        fontSize: Sizes.size17,
        color: Colors.White,
        fontFamily: Fonts.semiBold,
        top: 1,
    },
})