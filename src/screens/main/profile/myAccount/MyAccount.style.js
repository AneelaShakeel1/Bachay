import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SurfaceLightBlue,
    },
    root: {
        backgroundColor: Colors.White,
        borderTopWidth: 5,
        borderColor: Colors.SurfaceLightBlue,
        flex: 1,
    },
    mainView: {
        paddingHorizontal: 25,
        backgroundColor: Colors.White,
    },
    accountView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        gap: 10,
    },
    myAccountText: {
        color: Colors.AppColor,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size17,
        top: 1,
    },
    footerContainer: {
        padding: 15,
        backgroundColor: Colors.White,
    },
    btnStyle: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 13,
        alignItems: 'center',
        marginVertical: 13,
        backgroundColor: Colors.BlueViolet,
    },
    btnTextStyle: {
        fontSize: Sizes.size17,
        color: Colors.White,
        fontFamily: Fonts.semiBold,
        top: 1,
    },
});