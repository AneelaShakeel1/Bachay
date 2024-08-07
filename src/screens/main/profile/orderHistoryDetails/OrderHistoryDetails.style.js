import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.White
    },
    helpRoot: {
        gap: 25,
        padding: 20,
        paddingTop: 10,
    },
    helpContainer: {
        backgroundColor: 'rgba(249, 147, 39, 0.25)',
        borderRadius: 25,
        gap: 5,
        paddingHorizontal: 25,
        paddingVertical: 20,
    },
    helpIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    helpText: {
        color: Colors.AppColor,
        paddingRight: 30,
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
    },
    needHelpButton: {
        paddingHorizontal: 20,
        width: '40%',
        paddingVertical: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderColor: 'rgba(255, 107, 0, 0.5)',
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    needHelpButtonText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        color: Colors.AppColor,
    },
    orderDetailsContainer: {
        marginTop: 10,
        paddingVertical: 25,
        paddingHorizontal: 20,
        gap: 13,
        backgroundColor: Colors.White,
    },
    orderInfo: {
        gap: 6,
    },
    orderInfoText: {
        fontFamily: Fonts.light,
        fontSize: Sizes.size13,
        color: Colors.AppColor,
    },
    orderInfoValue: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size13,
        color: Colors.AppColor,
    },
    emailInvoiceContainer: {
        gap: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    emailInvoiceText: {
        color: Colors.AppColor,
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        top: 1,
    },
    orderButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        width: Dimensions.get('screen').width / 2.3,
        height: 45,
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
        paddingHorizontal: 53,
        paddingVertical: 15,
        backgroundColor: Colors.LightRedColor,
        borderColor: Colors.RedColorBorder,
        borderRadius: 50,
        justifyContent: 'center'
    },
    cancelButtonText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        color: Colors.RedColor,
        top: -1
    },
    reorderButton: {
        width: Dimensions.get('screen').width / 2.3,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40,
        gap: 6,
        paddingVertical: 15,
        backgroundColor: Colors.BlueViolet,
        borderRadius: 50,
        justifyContent: "center"
    },
    reorderButtonText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        color: Colors.White,
        top: -1
    },
    productListContainer: {
        marginTop: 10,
        paddingVertical: 25,
        backgroundColor: Colors.White,
    },
    productRoot: {
        flexDirection: 'column',
        backgroundColor: Colors.White,
        paddingHorizontal: 20,
        gap: 20,
    },
    productMain: {
        flexDirection: 'row',
        gap: 15,
    },
    productImage: {
        height: 140,
        width: 130,
        borderRadius: 15,
    },
    productDetails: {
        width: '59%',
    },
    productTitle: {
        color: Colors.AppColor,
        fontSize: Sizes.size12,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
    },
    productPrice: {
        color: Colors.AppColor,
        fontSize: Sizes.size12,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
    },
    productAttributesContainer: {
        gap: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
    },
    productAttribute: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    productAttributeLabel: {
        color: Colors.AppColor,
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        top: 1
    },
    colorIndicator: {
        padding: 6,
        borderRadius: 100,
        borderColor: Colors.AppColor,
        borderWidth: 0.8,
    },
    sizeIndicator: {
        paddingHorizontal: 4,
        borderRadius: 3,
        gap: 2,
        flexDirection: 'row',
        paddingVertical: 1,
        borderColor: Colors.Black,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sizeText: {
        color: Colors.Black,
        fontFamily: Fonts.medium,
        fontSize: Sizes.size10,
    },
    sizeLengthText: {
        // top: 2,
        color: 'rgba(0, 0, 0, 0.50)',
        fontFamily: Fonts.regular,
        fontSize: 8.5,
    },
    productQuantity: {
        color: Colors.AppColor,
        fontSize: Sizes.size12,
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
    },
    productArrivalDate: {
        color: Colors.AppColor,
        fontSize: Sizes.size12,
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
    },
    statusButtonsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statusInfo: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 6,
    },
    statusIcon: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
    },
    statusTextContainer: {
        gap: -5,
    },
    statusLabel: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        top: 1
    },
    statusDate: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size11,
        color: Colors.AppColor,
    },
    raiseConcernContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 4,
    },
    raiseConcernText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        color: Colors.AppColor,
        paddingRight: 6,
    },
    orderActionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelProductButton: {
        width: Dimensions.get('screen').width / 2.3,
        height: 45,
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
        paddingHorizontal: 53,
        paddingVertical: 15,
        backgroundColor: Colors.LightRedColor,
        borderColor: Colors.RedColorBorder,
        borderRadius: 50,
        justifyContent: 'center'
    },
    cancelProductButtonText: {
        top: -1,
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        color: Colors.RedColor,
    },
    reorderProductButton: {
        width: Dimensions.get('screen').width / 2.3,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 49,
        gap: 6,
        paddingVertical: 15,
        backgroundColor: Colors.BlueViolet,
        borderRadius: 50,
        justifyContent: 'center'
    },
    reorderProductButtonText: {
        top: -1,
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        color: Colors.White,
    },
    trackingDetailsContainer: {
        // alignItems: 'center',
        borderColor: Colors.SurfaceLightBlue,
    },
    viewTrackingDetailsText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size13,
        color: Colors.BlueViolet,
    },
    addReviewText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size13,
        color: Colors.BlueViolet,
    },
    relatedProductsContainer: {
        backgroundColor: Colors.White,
        paddingBottom: 40,
        marginTop: 10,
    },
    addressRoot: { paddingHorizontal: 20, backgroundColor: Colors.White },
    addressView: {
        gap: 20,
        borderColor: Colors.RomanSilver,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 25,
    },
    addressHeadingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addressHeading: {
        fontFamily: Fonts.semiBold,
        fontSize: 16,
        color: Colors.AppColor,
    },
    changeText: {
        fontFamily: Fonts.semiBold,
        fontSize: 12,
        color: Colors.FilterColor,
        textDecorationLine: 'underline',
    },
    nameText: {
        fontFamily: Fonts.semiBold,
        fontSize: 14,
        color: Colors.AppColor,
    },
    mobileText: {
        fontFamily: Fonts.regular,
        fontSize: 14,
        color: Colors.Black,
    },
    numText: {
        fontFamily: Fonts.semiBold,
        fontSize: 14,
        color: Colors.Black,
    },
    addressText: {
        color: Colors.Black,
        fontSize: 14,
        fontFamily: Fonts.regular,
    },
    paymentRoot: {
        paddingHorizontal: 20,
        paddingVertical: 25,
        backgroundColor: Colors.White,
    },
    paymentHeading: {
        fontFamily: Fonts.semiBold,
        fontSize: 16,
        color: Colors.AppColor,
        paddingBottom: 10,
    },
    paymentDetailText: {
        fontFamily: Fonts.regular,
        fontSize: 14,
        color: Colors.Black,
    },
    paymentDetailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    priceText: {
        fontFamily: Fonts.semiBold,
        fontSize: 14,
    },
    separator: {
        borderBottomColor: 'rgba(41, 45, 50, 0.5)',
        borderBottomWidth: 1,
        borderStyle: 'dashed',
    },
    instructionText: {
        fontFamily: Fonts.regular,
        fontSize: 12,
        color: Colors.Black,
    },
    clickText: {
        fontFamily: Fonts.semiBold,
        textDecorationLine: 'underline',
        fontSize: 12,
        color: Colors.FilterColor,
    }
});