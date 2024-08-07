import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
    },
    mainView: {
        gap: 25,
        padding: 20,
        paddingVertical: 20
    },
    dropdownTitle: {
        fontSize: Sizes.size15,
        fontFamily: Fonts.regular,
        color: Colors.AppColor,
    },
    dropdownValueText: { fontFamily: Fonts.semiBold, fontSize: Sizes.size15 },

    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 25,
        borderColor: Colors.BlackCoral,
        paddingVertical: 15,
        borderWidth: 0.5,
    },
    listView: {
        paddingVertical: 15,
    },
    listText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size15,
        paddingHorizontal: 25,
        color: Colors.AppColor,
    },
    dropDownContainer: {
        borderBottomColor: Colors.BlackCoral,
        borderWidth: 0.5,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    couponDetailHeading: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
    },
    couponDetailText: {
        width: '70%',
        textAlign: 'right',
        fontFamily: Fonts.regular,
        fontSize: Sizes.size14,
    },
    btnStyle: {
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
    },
    btnTextStyle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size17,
        color: Colors.White,
        top: 1
    },
    couponAvailableText: {
        textAlign: 'center',
        paddingHorizontal: 30,
        fontFamily: Fonts.regular,
        fontSize: Sizes.size16,
        color: Colors.AppColor,
    },
    shopText: {
        color: Colors.BlueViolet,
        fontFamily: Fonts.semiBold,
    },
    couponDetailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});