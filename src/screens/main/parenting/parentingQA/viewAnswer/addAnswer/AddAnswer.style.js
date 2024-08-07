import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../../constants/theme';

export const styles = StyleSheet.create({
    ansHeader: {
        backgroundColor: Colors.White,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: Colors.AppColor,
        elevation: 5,
        height: 75,
        marginTop: 5,
        paddingHorizontal: 20,
        gap: 20,
    },
    ansHeaderText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size20,
        top: 1,
        color: Colors.AppColor
    },
    contentContainer: {
        marginTop: 20,
        padding: 20,
        // backgroundColor: 'yellow',
        // flex: 2
        height: Dimensions.get('window').height / 1.5,
    },
    userContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    userInfoContainer: {
        flexDirection: 'row',
        gap: 7,
        alignItems: "center"
    },
    userAvatar: {
        width: 47,
        height: 47,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: Colors.AppColor
    },
    userDetails: {
        gap: -6
    },
    userName: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        color: Colors.AppColor
    },
    userRelation: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        color: Colors.BlueViolet
    },
    timeText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.BlackCoral
    },
    ansInputContainer: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        marginTop: 15,
        paddingVertical: 10,
        borderColor: Colors.RomanSilver
    },
    ansInput: {
        color: Colors.AppColor,
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
    },
    attachmentContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderColor: Colors.RomanSilver
    },
    attachmentIconContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: 'center'
    },
    attachmentText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        top: 1,
        color: Colors.AppColor
    },
    btnStyle: {
        paddingVertical: 17,
        backgroundColor: Colors.BlueViolet,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 50,
        marginBottom: 20
        // position: 'absolute',
        // zIndex: 0,
        // bottom: -20
    },
    btnStyleText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size16,
        top: 1,
        color: Colors.White
    }
});
