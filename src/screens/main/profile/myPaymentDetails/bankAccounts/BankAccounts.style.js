import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1
    },
    bankAccountsContainer: {
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
    bankIconContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        gap: 12
    },
    noBankAccountText: {
        fontFamily: Fonts.medium,
        fontSize: Fonts.size14,
        color: Colors.Black,
        textAlign: 'center',
        width: '90%',
        top: 1
    },
    addNewBankAccBtn: {
        width: Dimensions.get('screen').width / 1.2,
        height: 55,
        backgroundColor: Colors.White,
        borderColor: Colors.BlueViolet,
        borderWidth: 1.5,
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
    },
    addNewBankAccBtnText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        color: Colors.BlueViolet,
        top: 1
    },
});