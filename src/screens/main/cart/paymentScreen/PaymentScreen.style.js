import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    savedMethodsView: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderBottomColor: Colors.SurfaceLightBlue,
        borderBottomWidth: 5,
        borderTopColor: Colors.SurfaceLightBlue,
        gap: 30,
    },
    methodHeadingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    saveText: {
        color: Colors.AppColor,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size18,
        top: 1
    },
    creditBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 0.5,
        borderColor: Colors.RomanSilver,
        borderRadius: 30,
        opacity: 0.4,
        backgroundColor: '#fafafa',
    },
    btnTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9,
    },
    paymentMethodIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnText: {
        top: 1,
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
    },
    recommendedMethodsView: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderBottomColor: Colors.SurfaceLightBlue,
        borderBottomWidth: 5,
        gap: 30,
    },
    otherMethodsView: {
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 30,
        gap: 30,
    },
    methodsBtnView: {
        gap: 18,
    },
    WalletBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: 0.5,
        borderColor: Colors.RomanSilver,
        borderRadius: 30,
    },

    footerRoot: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.White,
        shadowColor: Colors.AppColor,
        elevation: 30,
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
});