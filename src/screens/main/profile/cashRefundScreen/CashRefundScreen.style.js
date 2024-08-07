import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1,
    },
    cashRefundMain: {
        paddingHorizontal: 20
    },
    cashRefundHeading: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size18,
        color: Colors.AppColor,
        borderBottomWidth: 1,
        borderBottomColor: Colors.RomanSilver,
        paddingVertical: 9,
    },
    infoContainer: {
        paddingVertical: 12,
        backgroundColor: Colors.AppColor,
        borderRadius: 100,
        marginTop: 20,
    },
    infoTextContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
    },
    infoText: {
        fontSize: Sizes.size12,
        fontFamily: Fonts.medium,
        color: Colors.AppColor,
    },
    balanceAmountTextContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    btnStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 25,
        backgroundColor: Colors.BlueViolet,
        marginTop: 10,
    },
    btnTextStyle: {
        fontSize: Sizes.size17,
        color: Colors.White,
        fontFamily: Fonts.semiBold,
        top: 1
    },
    inSufficientTextContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
});
