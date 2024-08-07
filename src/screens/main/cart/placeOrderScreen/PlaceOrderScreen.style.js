import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    userDetailsRoot: {
        padding: 20,
        borderBottomColor: Colors.SurfaceLightBlue,
        borderBottomWidth: 5,
        borderTopColor: Colors.SurfaceLightBlue,
    },
    deliverText: {
        color: Colors.AppColor,
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14
    },
    numberText: {
        color: Colors.AppColor,
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        top: 1
    },
    emailText: {
        color: Colors.AppColor,
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        top: 1
    },

    emailView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 15,
    },
    addressContainer: {
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 1,
    },
    addressView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addressText: {
        width: '90%',
        color: Colors.AppColor,
        fontFamily: Fonts.light,
        fontSize: Sizes.size14,
        marginBottom: 10
    },
    infoView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 1,
        paddingVertical: 15,
    },

    itemHeaderStyle: {
        padding: 20,
    },
    itemHeaderSepView: {
        paddingVertical: 10,
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemHeaderHeadingStyle: {
        color: Colors.AppColor,
        fontFamily: Fonts.medium,
        fontSize: Sizes.size18,
        top: 1
    },
    itemHeaderTextStyle: {
        textDecorationLine: 'underline',
        color: Colors.BlueViolet,
        fontSize: Sizes.size16,
        fontFamily: Fonts.medium,
    },
    listView: {
        borderBottomColor: Colors.SurfaceLightBlue,
        borderBottomWidth: 5,
    },
    itemRoot: {
        paddingBottom: 20,
        paddingHorizontal: 20,
        gap: 20,
    },
    itemDetailsRoot: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9,
    },

    itemImageView: {
        width: '35%',
    },
    itemImageStyle: {
        width: 120,
        borderRadius: 15,
        height: 115,
    },
    itemDetails: {
        width: '63%',
    },
    itemMainText: { flexDirection: 'column', gap: 6 },
    itemTitleText: {
        color: Colors.AppColor,
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        textAlign: 'left',
    },

    itemDesText: {
        color: 'rgba(0, 0, 0, 0.75)',
        fontFamily: Fonts.regular,
        fontSize: Sizes.size10,
        textAlign: 'left',
    },
    itemRatingView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    itemRatingIcon: {
        top: -2,
    },
    itemReviewsView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    reviewText: {
        fontSize: Sizes.size10,
        color: Colors.AppColor,
        fontFamily: Fonts.regular,
    },
    soldText: {
        color: Colors.ColorGrey,
        fontFamily: Fonts.medium,
        fontSize: Sizes.size10,
    },
    bottomDetailsView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    priceView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    disPrice: {
        color: Colors.BlueViolet,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        top: 1
    },
    origPrice: {
        top: 1,
        fontFamily: Fonts.regular,
        color: Colors.ColorGrey,
        textDecorationLine: 'line-through',
        fontSize: Sizes.size11,
    },
    couponMainView: {
        paddingHorizontal: 20,
        borderBottomColor: Colors.SurfaceLightBlue,
        borderBottomWidth: 5,
    },
    couponCodeView: {
        paddingVertical: 25,
        borderBottomColor: Colors.SurfaceLightBlue,
        borderBottomWidth: 1,
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    couponBtnStyle: {
        backgroundColor: Colors.AppColor,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 30,
    },
    couponBtnText: {
        top: 1,
        fontFamily: Fonts.medium,
        color: Colors.White,
        fontSize: Sizes.size15,
    },
    couponInputTextStyle: {
        top: 2,
        paddingVertical: 8,
        paddingHorizontal: 15,
        fontFamily: Fonts.regular,
        color: Colors.AppColor,
    },
    couponInputStyle: {
        width: '70%',
        borderRadius: 30,
        borderColor: Colors.BlackCoral,
        borderWidth: 0.5,
    },
    offerRoot: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    offerArrow: {
        top: 6,
    },
    offerView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        gap: 5,
    },
    offerText: {
        fontFamily: Fonts.semiBold,
        color: Colors.FilterColor,
        fontSize: Sizes.size13,
        top: 1
    },
    paymentRoot: {
        padding: 20,
    },
    finalPaymentdetails: {
        paddingVertical: 10,
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 1,
        gap: 10,
    },
    paymentInfoView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    paymentInfoText: {
        color: Colors.AppColor,
        fontFamily: Fonts.regular,
        fontSize: Sizes.size14,
    },
    subTotalText: {
        top: 1,
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        fontSize: Sizes.size14,
    },
    shippingFeeText: {
        fontFamily: Fonts.Bold,
        color: Colors.GreenColor,
        fontSize: Sizes.size14,
    },
    vatText: {
        top: 1,
        fontFamily: Fonts.medium,
        color: Colors.AppColor,
        fontSize: Sizes.size14,
    },
    totalText: {
        top: 1,
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        fontSize: Sizes.size16,
    },
    totalPaymentInfoView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
    },

    paymentOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingVertical: 20,
    },
    footerStyle: {
        shadowColor: Colors.AppColor,
        elevation: 30,
        backgroundColor: Colors.White,
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingTop: 20,
        gap: 12,
    },
    footerText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemText: {
        color: Colors.AppColor,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size15,
    },
    totalPriceText: {
        color: Colors.AppColor,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size19,
    },
    footerBtnStyle: {
        padding: 15,
        backgroundColor: Colors.BlueViolet,
        justifyContent: 'center',
        borderRadius: 30,
        alignItems: 'center',
    },
    footerBtnTextStyle: {
        color: Colors.White,
        fontSize: Sizes.size16,
        fontFamily: Fonts.semiBold,
        top: 1
    },
});