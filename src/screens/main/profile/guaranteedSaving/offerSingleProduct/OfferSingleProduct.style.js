import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1
    },
    offerSingleProductRoot: {
        padding: 20,
        paddingTop: 10,
    },
    savingBannerRoot: {
        paddingTop: 20
    },
    productHeaderContainer: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 12,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    productTitleText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size16,
        color: Colors.AppColor,
        top: 1,
        lineHeight: 17.5,
        width: '60%',
    },
    offerContainer: {
        borderTopWidth: 1,
        borderColor: Colors.RomanSilver
    },
    offerTextContainer: {
        paddingTop: 30,
        paddingBottom: 35
    },
    offerTitleText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        top: 1,
        lineHeight: 20
    },
    offerRowsContainer: {
        paddingVertical: 20,
        gap: 10
    },
    offerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    rowTextLabel: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        top: 1,
        lineHeight: 16.8
    },
    rowTextValue: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.BlueViolet,
        top: 1,
        lineHeight: 16.8,
    },
    btnStyle: {
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.BlueViolet,
        borderWidth: 1,
        borderColor: Colors.BlueViolet,
        borderRadius: 50,
        marginTop: 8
    },
    btnTextStyle: {
        fontFamily: Fonts.semiBold,
        color: Colors.White,
        top: 1,
        fontSize: Sizes.size17,
    },
    FAQsView: {
        paddingHorizontal: 20,
        borderTopColor: Colors.SurfaceLightBlue,
        borderTopWidth: 5,
        paddingVertical: 30
    },
    questionBtn: {
        justifyContent: "space-between",
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: Colors.BlackCoral,
        paddingVertical: 20,
        borderRadius: 50,
        paddingHorizontal: 25,
        alignItems: 'center',
        backgroundColor: Colors.White
    },
    questionText: {
        fontFamily: Fonts.medium,
        color: Colors.AppColor,
        fontSize: Sizes.size12,
    }
});
