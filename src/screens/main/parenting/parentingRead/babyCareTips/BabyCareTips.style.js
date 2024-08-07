import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';
const imageSize = Dimensions.get('window');

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1
    },
    categoriesRoot: {
        padding: 20,
    },
    categoriesTextRow: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingVertical: 10
    },
    categoriesText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size16,
        color: Colors.AppColor,
        top: 1
    },
    imageRoot: {
        marginVertical: 20
    },
    imageStyle: {
        width: imageSize.width / 1.13,
        height: 240,
        borderRadius: 16,
    },
    imageInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
    },
    imageInfoTitle: {
        fontFamily: Fonts.bold,
        fontSize: Sizes.size12,
        color: Colors.BlueViolet,
        top: 1
    },
    imageInfoDate: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        color: Colors.AppColor,
        top: 1
    },
    imageInfoHeading: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        fontSize: Sizes.size22,
        lineHeight: 26,
        marginTop: -10,
        marginBottom: 4
    },
    imageInfoDescription: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        color: Colors.AppColor,
        lineHeight: 20
    },
    separator: {
        borderWidth: 0.5,
        borderColor: Colors.AppColor,
        opacity: 0.25,
    },
    btnStyle: {
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.BlueViolet,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Colors.BlueViolet,
        flexDirection: "row",
        gap: 5,
    },
    btnTextStyle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size13,
        color: Colors.White,
        top: 1
    },
    noArticleText: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        fontSize: Sizes.size20,
        top: 1,
        textAlign: "center"
    }
});