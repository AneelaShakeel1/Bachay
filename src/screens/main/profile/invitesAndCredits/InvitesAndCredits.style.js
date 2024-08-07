import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
    },
    main: {
        padding: 20,
        paddingTop: 0,
    },
    inviteImageRoot: {
        paddingHorizontal: 5,
        paddingVertical: 25,
        borderBottomWidth: 1,
        borderBottomColor: Colors.RomanSilver,
    },
    inviteImageContainer: {
        paddingVertical: 40,
        borderRadius: 20,
        elevation: 5,
        backgroundColor: Colors.White,
        alignItems: 'center',
        shadowColor: Colors.AppColor,
    },
    inviteImageStyle: {
        width: Dimensions.get('screen').width / 1.2,
        height: Dimensions.get('screen').width * (350 / 1285),
    },
    inputsRoot: {
        paddingVertical: 30,
        gap: 20,
    },
    emailField: {
        borderColor: Colors.BlackCoral,
        borderWidth: 0.5,
        borderRadius: 25,
        paddingHorizontal: 20,
    },
    input: {
        color: Colors.AppColor,
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
    },
    msgField: {
        borderColor: Colors.BlackCoral,
        borderWidth: 0.5,
        borderRadius: 15,
        paddingHorizontal: 20,
    },
    btnStyle: {
        paddingVertical: 14,
        backgroundColor: Colors.BlueViolet,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: Colors.BlueViolet,
        marginBottom: 30
    },
    btnStyleText: {
        color: Colors.White,
        fontSize: Sizes.size17,
        fontFamily: Fonts.medium,
        top: 1
    },
    creditsRoot: {
        paddingVertical: 30,
    },
    creditsContainer: {
        borderColor: Colors.BlackCoral,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    creditLabel: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        lineHeight: 14,
        color: 'rgba(41, 45, 50, 0.50)',
    },
    separatorView: {
        height: 15,
        width: 1.5,
        backgroundColor: Colors.MetallicSilver,
        alignSelf: 'center',
    },
    stepContainer: {
        paddingVertical: 15,
    },
    stepRow: {
        flexDirection: 'row',
        gap: 5,
    },
    stepLabel: {
        fontFamily: Fonts.regular,
        color: Colors.AppColor,
        top: 1,
        lineHeight: 21.6,
    },
    stepDescription: {
        fontFamily: Fonts.regular,
        color: Colors.AppColor,
        lineHeight: 21.6,
        fontSize: 14,
        top: 1,
        width: '95%',
    },
    giftCertificateContainer: {
        paddingVertical: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.RomanSilver,
        justifyContent: 'center',
    },
    giftCertificateText: {
        fontFamily: Fonts.medium,
        color: Colors.AppColor,
        top: 1,
        fontSize: Sizes.size12,
        lineHeight: 14,
        textAlign: 'center',
    },
});  