import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        // borderTopWidth: 5,
        borderColor: Colors.SurfaceLightBlue
    },
    mainView: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: Colors.White
    },
    btnStyle: {
        paddingVertical: 20,
        borderRadius: 30,
        flexDirection: 'row',
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: Colors.BlackCoral,
        borderWidth: 0.5,
        marginTop: 20
    },
    btnText: {
        color: Colors.AppColor,
        fontSize: Sizes.size15,
        fontFamily: Fonts.semiBold,
        top: 1
    },
    radioView: {
        borderColor: Colors.BlackCoral,
        borderWidth: 1,
        padding: 2,
        borderRadius: 80,
    },
    radioBg: {
        backgroundColor: Colors.BlueViolet,
        padding: 7,
        margin: 2,
        borderRadius: 80,
    },
    radioOff: {
        padding: 9,
    },
});  