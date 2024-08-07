import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';

export const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: Colors.White,
        gap: 15,
        elevation: 5
    },
    headerText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size20,
        color: Colors.AppColor,
        top: 1
    },
    imgStyle: {
        width: 300,
        height: 300,
    },
    quizText: {
        color: Colors.AppColor,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size20,
        top: 5
    },
    btnStyle: {
        padding: 13,
        backgroundColor: Colors.White,
        justifyContent: 'center',
        gap: 10,
        borderRadius: 50,
        borderColor: Colors.AppColor,
        borderWidth: 1,
        bottom: 20,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    btnTextStyle: {
        color: Colors.AppColor,
        fontSize: Sizes.size16,
        fontFamily: Fonts.semiBold,
        top: 2,
    },
});  