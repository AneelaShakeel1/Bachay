import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
    },
    addBankAccContainer: {
        padding: 20,
        paddingTop: 10,
    },
    accountBtnsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 25,
    },
    bankAccBtn: {
        width: Dimensions.get('screen').width / 2.3,
        height: 47,
        backgroundColor: Colors.BlueViolet,
        borderColor: Colors.BlueViolet,
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
    },
    bankAccBtnText: {
        fontSize: Sizes.size12,
        color: Colors.White,
        fontFamily: Fonts.semiBold,
        top: 1,
    },
    saveCardBtn: {
        width: Dimensions.get('screen').width / 2.3,
        height: 47,
        backgroundColor: Colors.White,
        borderColor: Colors.RomanSilver,
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
    },
    saveCardBtnText: {
        fontSize: Sizes.size12,
        color: Colors.AppColor,
        fontFamily: Fonts.medium,
        top: 1,
    },
    creditBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderWidth: 0.5,
        borderColor: Colors.BlackCoral,
        borderRadius: 30,
    },
    btnTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9,
    },
    btnText: {
        top: 1,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
    },
    radio: {
        height: 24,
        width: 24,
        borderRadius: 25,
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    radioBg: {
        backgroundColor: Colors.BlueViolet,
        height: 15,
        width: 15,
        borderRadius: 25,
    },
    fieldsRoot: {
        paddingVertical: 25,
        gap: 15,
    },
    field: {
        borderColor: Colors.BlackCoral,
        borderWidth: 0.5,
        borderRadius: 25,
        paddingHorizontal: 20,
        backgroundColor: Colors.White,
    },
    input: {
        color: Colors.AppColor,
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        top: 1
    },
    agreementView: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingHorizontal: 5
    },
    agreementText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        color: Colors.AppColor,
        width: '90%'
    },
    OTPBtnsView: {
        paddingVertical: 20,
        gap: 13,
        paddingBottom: 20
    },
    getOTPBtn: {
        height: 55,
        backgroundColor: Colors.BlueViolet,
        borderColor: Colors.BlueViolet,
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
    },
    getOTPBtnText: {
        fontSize: Sizes.size12,
        color: Colors.White,
        fontFamily: Fonts.semiBold,
        top: 1,
    },
    cancelBtn: {
        height: 55,
        backgroundColor: Colors.White,
        borderColor: Colors.RomanSilver,
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
    },
    cancelBtnText: {
        fontSize: Sizes.size12,
        color: Colors.AppColor,
        fontFamily: Fonts.medium,
        top: 1,
    },

});