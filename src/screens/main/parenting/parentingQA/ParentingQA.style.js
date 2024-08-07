import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';
const imageSize = Dimensions.get('window');

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1
    },
    addAnsRoot: {
        backgroundColor: Colors.White,
        padding: 20,
        marginVertical: 10,
    },
    userStatusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addAnsStatus: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        color: Colors.AppColor,
        top: 1
    },
    addAnsQuestionView: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    addAnsQuestionText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size16,
        color: Colors.AppColor,
        top: -4,
        width: '90%'
    },
    addAnsAnswerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15
    },
    addAnsAnswerViewLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    addAnsAnswerViewLeftInner: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7
    },
    addAnsAnswerText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        top: 2
    },
    addAnsAnswerTextLink: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size13,
        color: Colors.BlueViolet,
        top: 2,
    },
    addAnsSmallBtn: {
        backgroundColor: Colors.BlueVioletLight,
        borderWidth: 1,
        borderColor: Colors.BlueViolet,
        borderRadius: 50,
        paddingVertical: 2,
        paddingHorizontal: 20
    },
    addAnsSmallBtnLink: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size11,
        color: Colors.BlueViolet,
        top: 1
    },
    addAnsUserHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    addAnsUserHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
        // gap: 10,
    },
    addQuesUserHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    addAnsUserAvatar: {
        width: 47,
        height: 47,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: Colors.AppColor
    },
    addAnsUserDetails: {
        gap: -6
    },
    addAnsUserName: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        color: Colors.AppColor
    },
    addAnsUserRelation: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        color: Colors.BlueViolet
    },
    addAnsUserActive: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        color: Colors.BlackCoral,
    },
    addAnsUserAnswerTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        color: Colors.BlueViolet,
        marginTop: 15
    },
    addAnsUserAnswerDescription: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        color: Colors.AppColor,
        marginBottom: 10
    },
    addAnsUserAnswerDescriptionLink: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        color: Colors.BlueViolet,
        marginBottom: 10
    },
    addAnsStatusRoot: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15
    },
    addAnsStatusLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    addAnsStatusRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    addAnsStatusText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        top: 1
    },
    addAnsStatusTextLink: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        color: Colors.BlueViolet,
        top: 1
    },
    addAnsMainBtnStyle: {
        justifyContent: 'center',
        borderRadius: 50,
        padding: 13,
        alignItems: 'center',
        backgroundColor: Colors.BlueViolet,
        marginTop: 15
    },
    addAnsMainBtnText: {
        fontSize: Sizes.size14,
        color: Colors.White,
        fontFamily: Fonts.semiBold,
        top: 1
    },
    addAnsSeparatorLine: {
        borderWidth: 0.5,
        borderColor: Colors.RomanSilver,
        opacity: 0.5,
    },
    articleImageContainer: {
        alignItems: 'center',
        paddingBottom: 15
    },
    articleImageStyle: {
        width: imageSize.width / 1.13,
        height: 240,
        borderRadius: 16,
    },
    addButtonContainer: {
        height: 55,
        width: 55,
        position: 'absolute',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: Colors.White,
        backgroundColor: Colors.BlueViolet,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10,
        right: 10
    },
    noQuesContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: '50%',
        paddingHorizontal: 40
    },
    noQuesText: {
        fontFamily: Fonts.medium,
        color: Colors.AppColor,
        fontSize: Sizes.size20,
        textAlign: "center"
    },
    btnStyle: {
        padding: 13,
        backgroundColor: Colors.White,
        justifyContent: 'center',
        gap: 10,
        borderRadius: 50,
        borderColor: Colors.AppColor,
        borderWidth: 2,
        marginTop: 20,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 50
    },
    btnTextStyle: {
        color: Colors.AppColor,
        fontSize: Sizes.size16,
        fontFamily: Fonts.semiBold,
        top: 2,
    },
    noQuestionText: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        textAlign: 'center',
        fontSize: Sizes.size15,
        marginTop: 50
    }
});