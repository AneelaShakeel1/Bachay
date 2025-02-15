import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.White
    },
    cashRoot: {
        padding: 20,
        paddingTop: 10,
        gap: 25
    },
    blackGradientView: {
        paddingHorizontal: 25,
        paddingVertical: 20,
        borderRadius: 18,
        backgroundColor: Colors.AppColor,
        flexDirection: 'row',
        marginTop: 10
    },
    shopBtnStyle: {
        paddingVertical: 10,
        backgroundColor: Colors.BlueViolet,
        alignItems: 'center',
        borderRadius: 8,
    },
    shopBtnText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        color: Colors.White,
    },
    balanceText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        color: Colors.White,
    },
    price: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size20,
        color: Colors.White,
    },
    blueGradient: {
        backgroundColor: Colors.ColorPurple,
        paddingTop: 25,
        paddingBottom: 20,
        gap: 10,
        borderRadius: 18,
        justifyContent: 'flex-start',
    },
    clubText: {
        paddingLeft: 25,
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        color: Colors.White,
    },
    addBtnStyle: {
        paddingVertical: 3,
        paddingHorizontal: 30,
        backgroundColor: Colors.BlueViolet,
        alignItems: 'center',
        borderRadius: 4,
    },
    coinBagImg: { position: 'absolute', right: 7, bottom: 0 },
    joinRoot: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        paddingHorizontal: 20,
    },
    joinView: {
        backgroundColor: '#E6DFF3',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    monthText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        top: 6,
    },
    priceTextView: { alignItems: 'center', gap: -3 },
    joinPrice: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        color: Colors.BlueViolet,
    },
    discountView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    discountPrice: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size10,
        color: Colors.RomanSilver,
        textDecorationLine: 'line-through',
    },
    offText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size10,
        color: Colors.RedColor,
    },
    addBtnText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size10,
        color: Colors.White,
        top: 1,
    },
    earnCashView: {
        paddingHorizontal: 21,
        backgroundColor: Colors.White,
        marginTop: 10,
        paddingVertical: 20,
        gap: 20,
    },
    earnCashHeading: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size17,
        color: Colors.AppColor,
    },
    earnCashDescripView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    earnCashWelcome: {
        width: 90,
        height: 90,
        borderRadius: 50,
        borderColor: Colors.AppColor,
        borderWidth: 1,
    },
    earnCashDesText: {
        width: '73%',
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        fontSize: Sizes.size13,
    },
    planHeading: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size17,
        color: Colors.AppColor,
    },
    planDescription: {
        fontFamily: Fonts.regular,
        fontSize: 12.5,
        color: Colors.AppColor,
    },
    pointerArrow: { position: 'absolute', left: -21, top: '43%' },
    stepsView: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: Colors.White,
        marginTop: 10,
        gap: 5,
    },
    stepsText: {
        color: Colors.AppColor,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        textAlign: 'center',
    },
    separatorView: {
        height: 50,
        width: 2,
        backgroundColor: Colors.AppColor,
    },
    questionView: {
        paddingHorizontal: 20,
        paddingVertical: 25,
        backgroundColor: Colors.White,
        gap: 15,
        marginTop: 10,
        paddingBottom: 50,
    },
    questionHeading: {
        fontSize: Sizes.size16,
        fontFamily: Fonts.medium,
        color: Colors.AppColor,
        paddingBottom: 8,
    },
    questionBtnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 25,
        borderColor: Colors.BlackCoral,
        paddingVertical: 15,
        borderWidth: 0.5,
    },
    questionBtnText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        color: Colors.AppColor,
    },
    ansText: {
        paddingHorizontal: 25,
        marginVertical: -15,
        borderBottomColor: Colors.BlackCoral,
        borderWidth: 0.5,
        borderTopWidth: -0.5,
        paddingVertical: 15,
        marginBottom: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
});  