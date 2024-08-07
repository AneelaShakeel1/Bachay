import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1,
    },
    mainView: {
        borderTopWidth: 5,
        borderTopColor: Colors.SurfaceLightBlue,
        // paddingVertical: 40
        // marginVertical: 30
    },
    cardRoot: {
        alignItems: "center",
    },
    cardBorder: {
        borderWidth: 3,
        borderColor: Colors.AppColor,
        borderRadius: 100,
        padding: 2,
    },
    cardImageContainer: {
        width: 310,
        height: 72,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardImageStyle: {
        borderRadius: 100,
        width: 310,
        height: 72,
        position: 'absolute',
        zIndex: -1,
    },
    cardTitle: {
        fontFamily: Fonts.semiBold,
        color: Colors.White,
        fontSize: Sizes.size16,
        top: 1
    }
})