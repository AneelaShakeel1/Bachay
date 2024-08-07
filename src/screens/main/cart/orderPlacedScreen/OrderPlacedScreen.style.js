import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.White,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgStyle: {
        width: 300,
        height: 300,
        top: '-10%'
    },
    textView: {
        position: 'absolute',
        bottom: '25%',
        alignItems: 'center',
        gap: 6,
    },
    orderText: {
        color: Colors.AppColor,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size20,
        top: 5
    },
    trackOrderText: {
        color: Colors.BlueViolet,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size15,
        top: -5,
        textDecorationLine: 'underline',
    },
    btnStyle: {
        padding: 13,
        backgroundColor: Colors.White,
        justifyContent: 'center',
        gap: 10,
        borderRadius: 50,
        borderColor: Colors.AppColor,
        borderWidth: 1,
        bottom: 20,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    btnTextStyle: {
        color: Colors.AppColor,
        fontSize: Sizes.size16,
        fontFamily: Fonts.semiBold,
        top: 2,
    },
});  