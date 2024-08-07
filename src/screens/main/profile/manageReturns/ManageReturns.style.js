import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    manageReturnsContainer: {
        padding: 20,
        paddingTop: 10,
    },
    returnInfoContainer: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.RomanSilver,
    },
    returnInfo: {
        backgroundColor: 'rgba(249, 147, 39, 0.25)',
        padding: 20,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    returnInfoText: {
        width: '87%',
        fontFamily: Fonts.regular,
        color: Colors.AppColor,
        fontSize: Sizes.size12,
    },
    returnPolicyText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        color: Colors.BlueViolet,
    },
    dropDownMain: {
        paddingVertical: 30,
    },
    productInfoView: {
        gap: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    productImage: {
        height: 80,
        width: 80,
        borderRadius: 8.091,
    },
    productDetailsView: {
        flexDirection: 'column',
        width: '59%',
    },
    productDetailText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        color: Colors.AppColor,
    },
    productStatusText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size13,
    },
    returnDate: {
        flexDirection: 'row',
        gap: 3,
    },
    iconView: {
        position: 'absolute',
        right: 0,
        borderRadius: 50,
        backgroundColor: Colors.FilterColor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
    },
});