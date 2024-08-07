import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    cashCouponMain: {
        padding: 20,
        paddingTop: 10
    },
    couponInfoContainer: {
        paddingVertical: 12,
        backgroundColor: Colors.AppColor,
        borderRadius: 100,
        marginTop: 20,
    },
    couponInfoTextContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
    },
    couponInfoText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        color: Colors.White,
    },
    couponDetailsContainer: {
        marginVertical: 15,
    },
    couponDetailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        color: Colors.AppColor,
    },
    btnStyle: {
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: Colors.BlueViolet,
    },
    btnTextStyle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size17,
        color: Colors.White,
        top: 1
    },
});
