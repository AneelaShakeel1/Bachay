import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';
const imageSize = Dimensions.get('window');

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1,
    },
    categoriesHeaderRoot: {
        backgroundColor: Colors.White,
        marginTop: 10,
        paddingVertical: 20,
        paddingBottom: 30,
        borderBottomWidth: 5,
        borderColor: Colors.SurfaceLightBlue,
    },
    categoriesView: {
        paddingHorizontal: 20,
        gap: 15,
    },
    categoryContainer: {
        flexDirection: 'row',
        gap: 15,
    },
    categoryButton: {
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 25,
    },
    categoryButtonText: {
        fontSize: Sizes.size12,
        fontFamily: Fonts.semiBold,
        top: 1,
    },
    memoriesContainer: {
        padding: 20,
        borderBottomWidth: 5,
        borderColor: Colors.SurfaceLightBlue,
        paddingBottom: 30,
    },
    profileInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 25,
        borderBottomWidth: 0.5,
        borderColor: Colors.RomanSilver,
    },
    profileContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    profileImage: {
        width: 47,
        height: 47,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: Colors.AppColor,
        top: 2,
    },
    profileTextContainer: {
        gap: -6,
    },
    profileName: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size16,
        color: Colors.AppColor,
        top: 1,
    },
    profileStatus: {
        fontFamily: Fonts.semiBold,
        color: Colors.BlueViolet,
        fontSize: Sizes.size12,
        top: 1,
    },
    profileMedalsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    medalsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        top: 2,
    },
    medalIcon: {
        top: 1,
    },
    medalCount: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        top: 2,
        color: Colors.RomanSilver,
    },
    medalText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        top: 2,
        color: Colors.RomanSilver,
    },
    memoriesTextContainer: {
        paddingVertical: 10,
    },
    hashtag: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.AppColor,
    },
    memoriesDescription: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.AppColor,
        lineHeight: 16,
    },
    memoriesDescriptionLink: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        color: Colors.BlueViolet,
    },
    imageContainer: {
        alignItems: 'center',
        paddingTop: 20,
    },
    memoriesImage: {
        width: imageSize.width / 1.13,
        height: 300,
        borderRadius: 8,
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
    bottomRowContainer: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: Colors.RomanSilver,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    likesCommentsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    likesText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.AppColor,
    },
    likesCount: {
        fontFamily: Fonts.medium,
        color: Colors.BlueViolet,
    },
    commentsText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.AppColor,
    },
    commentsCount: {
        fontFamily: Fonts.medium,
        color: Colors.BlueViolet,
    },
    timeAgoText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.BlackCoral,
    },
    actionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderColor: Colors.RomanSilver,
    },
    actionItem: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    actionText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        top: 1,
    },
    memoriesVideoContainer: {
        marginHorizontal: 10,
        width: imageSize.width / 1.13,
        height: 300,
        borderRadius: 8,
        justifyContent: 'center',
    },
    memoriesVideo: {
        width: imageSize.width / 1.13,
        height: 300,
        borderRadius: 8,
        position: 'absolute',
        zIndex: -1,
    },
    youtubeIconStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.60)',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
});