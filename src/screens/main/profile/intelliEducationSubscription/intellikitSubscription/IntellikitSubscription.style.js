import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1
    },
    intellikitContainer: {
        padding: 20,
        paddingTop: 10,
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
    btnStyle: {
        paddingVertical: 14,
        backgroundColor: Colors.BlueViolet,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: Colors.BlueViolet,
    },
    btnStyleText: {
        color: Colors.White,
        fontSize: Sizes.size12,
        top: 1,
        fontFamily: Fonts.medium,
    },
});  