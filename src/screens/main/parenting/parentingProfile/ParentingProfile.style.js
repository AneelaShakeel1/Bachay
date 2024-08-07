import { StyleSheet,Dimensions } from "react-native"
import { Colors,Fonts,Sizes } from "../../../../constants/theme"

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1
    },
    profilecontainer: {
        padding: 20,
        borderBottomWidth: 5,
        borderColor: Colors.SurfaceLightBlue
    },
    profileRoot: {
        marginTop: 15
    },
    profileContainer: {
        gap: 5,
        alignItems: 'center'
    },
    profileImage: {
        height: 120,
        width: 120,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: Colors.AppColor
    },
    profileDetailsContainer: {
        gap: -9,
        alignItems: "center"
    },
    profileName: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size18,
        top: 1,
        color: Colors.AppColor
    },
    profileBioStatusRow: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 3
    },
    profileStatusText: {
        fontFamily: Fonts.semiBold,
        color: Colors.BlueViolet,
        fontSize: Sizes.size13,
        top: 3
    },
    profileMedalsRow: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 5,
        marginTop: 8
    },
    medalsCount: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        top: 2,
        color: Colors.RomanSilver
    },
    btnStyle: {
        paddingVertical: 12,
        backgroundColor: Colors.BlueViolet,
        marginTop: 20,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.BlueViolet
    },
    btnTextStyle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size15,
        color: Colors.White,
        top: 1
    },
    awardsContainersRoot: {
        paddingVertical: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    awardContainer: {
        width: Dimensions.get('screen').width / 2.3,
        height: 55,
        borderColor: Colors.RomanSilver,
        borderWidth: 1,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: 'center'
    },
    awardContentContainer: {
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center',
    },
    rankImage: {
        height: 28,
        width: 28
    },
    badgeImage: {
        height: 30,
        width: 28
    },
    awardTextColumn: {
        flexDirection: 'column',
        gap: -8,
    },
    label: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        color: Colors.AppColor,
        top: 1,
    },
    value: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size13,
        color: Colors.BlueViolet,
        top: 1,
    },
    profileStatusContainer: {
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Colors.RomanSilver,
        justifyContent: "space-between",
        borderRadius: 50,
        paddingHorizontal: 30,
        marginBottom: 15
    },
    profileStatusRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    ProfileStatusTextsColumn: {
        alignItems: 'center',
        gap: -7
    },
    statusCount: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size16,
        top: 1,
        color: Colors.AppColor
    },
    statusValue: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.BlueViolet
    },
    separatorLine: {
        height: 30,
        width: 1,
        backgroundColor: Colors.MetallicSilver,
        alignSelf: 'center',
    },
    memoriesUploadContainer: {
        padding: 20
    },
    memoriesUploadText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size18,
        top: 1,
        color: Colors.AppColor
    },
    imagesContainer: {
        paddingVertical: 10
    },
    imageContainer: {
        width: '32%',
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 8,
    },
})