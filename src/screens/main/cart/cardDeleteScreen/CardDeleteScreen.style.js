import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    saveCardsRoot: {
        backgroundColor: Colors.White,
        paddingHorizontal: 20,
        paddingVertical: 30,
        flex: 1,
        gap: 25,
    },
    cardHeadingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    cardHeadingText: {
        color: Colors.AppColor,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size18,
        top: 1
    },
    methodsBtnView: {
        gap: 18,
    },
    creditBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderWidth: 0.5,
        borderColor: Colors.BlackCoral,
        borderRadius: 30,
    },
    btnTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9,
    },

    btnText: {
        top: 1,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
    },
    radioView: {
        borderColor: Colors.AppColor,
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
    DeletebtnStyle: {
        padding: 15,
        backgroundColor: Colors.RedColor,
        justifyContent: 'center',
        borderRadius: 50,
        position: 'absolute',
        bottom: 15,
        zIndex: 1,
        gap: 8,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    DeletetxtStyle: {
        top: 3,
        color: Colors.White,
        fontSize: Sizes.size16,
        fontFamily: Fonts.semiBold,
    },
});