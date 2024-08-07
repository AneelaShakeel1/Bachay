import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1
    },
    giftCertificateContainer: {
        paddingTop: 10,
        padding: 20,
    },
    btnsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 25,
    },
    giftedToBtn: {
        width: Dimensions.get('screen').width / 2.3,
        height: 47,
        backgroundColor: Colors.BlueViolet,
        borderColor: Colors.BlueViolet,
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
    },
    giftedToBtnText: {
        fontSize: Sizes.size12,
        color: Colors.White,
        fontFamily: Fonts.semiBold,
        top: 1,
    },
    giftedByBtn: {
        width: Dimensions.get('screen').width / 2.3,
        height: 47,
        backgroundColor: Colors.White,
        borderColor: Colors.RomanSilver,
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
    },
    giftedByBtnText: {
        fontSize: Sizes.size12,
        color: Colors.AppColor,
        fontFamily: Fonts.medium,
        top: 1,
    },
    msgText: {
        paddingVertical: 30,
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        fontSize: Sizes.size14,
        textAlign: 'center',
        paddingHorizontal: 20,
        lineHeight: 16.8
    },
    intelliBtn: {
        width: Dimensions.get('screen').width / 1.2,
        height: 55,
        backgroundColor: Colors.White,
        borderColor: Colors.BlueViolet,
        borderWidth: 1.5,
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
    },
    intelliBtnText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        color: Colors.BlueViolet,
        top: 1
    },
});