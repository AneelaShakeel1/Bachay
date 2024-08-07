import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        alignItems: 'center',
        marginTop: 40,
    },
    logo: {
        marginBottom: 40,
    },
    shapeLine: {
        marginBottom: 10,
    },
    separatorLine: {
        width: '90%',
        borderWidth: 0.7,
        borderColor: 'rgba(255, 255, 255, 0.15)',
        marginTop: 30,
        marginBottom: 40
    },
    mainSubtitleItalic: {
        fontFamily: Fonts.mediumItalic,
        fontSize: Sizes.size10,
        color: Colors.White,
        marginBottom: 10,
        marginTop: 3,
    },
    mainSubtitle: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size11,
        color: Colors.White,
        marginBottom: 10,
        marginTop: -5
    },
    mainSubtitleLink: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size11,
        color: Colors.White,
    },
    mainTitleSmall: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        color: Colors.White,
        marginBottom: 10
    },
    mainTitleBig: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size16,
        color: Colors.White,
    },
    headerStatusView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 20
    },
    headerStatusInnerView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
    },
    headerStatusTextView: {
        gap: -10,
        paddingTop: 5,
    },
    headerStatusText: {
        fontFamily: Fonts.light,
        fontSize: Sizes.size14,
        color: Colors.White,
        top: 1,
    },
    headerStatusComing: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size19,
        color: Colors.BeerColor,
        top: 1,
    },
    rewardFlatlist: {
        paddingHorizontal: 30,
    },
    rewardTrendingFlatlist: {
        paddingHorizontal: 30,
        marginTop: 5,
        marginBottom: 10,
    },
    rewardContainer: {
        width: Dimensions.get('window').width * 0.9,
        borderRadius: 10,
        marginTop: 15,
        paddingHorizontal: 20,
        overflow: 'hidden',
    },
    rewardContainerMargin: {
        marginRight: 30,
    },
    lastRewardContainer: {
        marginRight: 0,
    },
    overlayContainer: {
        justifyContent: 'center',
        paddingVertical: 10
    },
    overlayCircleSmall: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        width: 90,
        height: 90,
        borderRadius: 100,
        position: 'absolute',
    },
    overlayCircleLarge: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        width: 120,
        height: 120,
        borderRadius: 100,
        position: 'absolute',
        left: -15,
    },
    rewardContainerInner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        marginBottom: -5,
    },
    rewardImage: {
        width: 75,
        height: 75,
        left: -10,
        top: -2
    },
    rewardAvatarImage: {
        width: 75,
        height: 75,
        left: -10,
        top: -2,
        borderRadius: 100
    },
    rewardText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size13,
        color: Colors.White,
        width: '60%',
        left: 7
    },
    exclusiveContainer: {
        backgroundColor: Colors.White,
        width: '90%',
        marginTop: 40,
        borderRadius: 20,
        paddingVertical: 20,
        marginBottom: 40
    },
    exclusiveTitle: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size15,
        color: Colors.AppColor,
        textAlign: 'center',
        marginBottom: 15,
    },
    exclusiveBottomTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size15,
        color: Colors.BeerColor,
        textAlign: 'center',
    },
    exclusiveFlatlist: {
        paddingHorizontal: 20,
        gap: 20
    },
    exclusiveImageContainer: {
        alignItems: 'center',
        overflow: 'hidden',
        width: 190,
        height: 250,
        borderRadius: 10,
        elevation: 3,
        shadowColor: Colors.ColorGrey,
        marginBottom: 20,
    },
    exclusiveBottomContainer: {
        width: 95,
        height: 45,
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: -65
    },
    exclusiveMainImage: {
        width: 190,
        height: 220,
        borderRadius: 8,
        zIndex: -1,
    },
    exclusiveLogo: {
        width: 85,
        height: 35,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: Colors.BeerColor,
        padding: 10,
        zIndex: 1
    },
    exclusiveAdditionalCircle: {
        width: 210,
        height: 140,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: Colors.BeerColor,
        backgroundColor: Colors.White,
        top: -12,
        zIndex: -1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    exclusiveCircleTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        width: '60%',
        textAlign: 'center',
        marginTop: 18
    },
    ranksContainer: {
        width: '85%',
        marginTop: 5
    },
    ranksInner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        marginVertical: 15
    },
    ranksNumberTextRight: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size24,
        color: Colors.BeerColor,
        top: 1,
        marginLeft: 10
    },
    ranksNumberTextLeft: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size24,
        color: Colors.BeerColor,
        top: 1,
        marginRight: 10
    },
    ranksSubtitleRight: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        color: Colors.White,
        width: '55%',
        lineHeight: 17,
        textAlign: 'right'
    },
    ranksSubtitleLeft: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        color: Colors.White,
        width: '55%',
        lineHeight: 17,
        textAlign: 'left'
    },
    ranksImage: {
        width: 75,
        height: 75
    },
    rankArrowStyleRight: {
        position: 'absolute',
        right: 0,
        top: 70,
    },
    rankArrowStyleLeft: {
        position: 'absolute',
        left: 0,
        top: 70,
    },
    bplActivityContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 7,
        paddingVertical: 7,
        borderRadius: 100,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.15)',
    },
    bplActivityTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        color: Colors.White,
        marginLeft: 10
    },
    bplActivityCountText: {
        fontFamily: Fonts.semiBold,
        fontSize: 7,
        color: Colors.White,
        top: 1
    },
    bplTickIcon: {
        width: 35,
        height: 35,
        backgroundColor: Colors.BlueViolet,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bplActivityBtnStyle: {
        justifyContent: 'center',
        borderRadius: 100,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.40)',
        width: '80%'
    },
    bplActivityBtnText: {
        fontSize: Sizes.size14,
        color: Colors.White,
        fontFamily: Fonts.medium,
        top: 1
    },
    badgeRoot: {
        marginTop: '27%',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    badgeContainer: {
        backgroundColor: 'white',
        width: '47%',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    badgeInner: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 140,
        height: 140,
        borderRadius: 100,
        backgroundColor: Colors.White,
        borderWidth: 6,
        borderColor: Colors.BlueViolet,
        position: 'absolute',
        top: '-20%',
    },
    badgeInnerGrey: {
        backgroundColor: Colors.SurfaceLightBlue,
        height: 200,
        width: '100%',
        zIndex: -1,
        position: 'absolute',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        justifyContent: 'flex-end',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(41, 45, 50, 0.50)'
    },
    badgeInnerOrangeRoot: {
        overflow: 'hidden',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
        borderRadius: 12
    },
    badgeInnerOrange: {
        backgroundColor: Colors.Fulvous,
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        width: '150%',
        height: 160,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
    badgeBottomRoot: {
        height: 'auto',
        width: '100%',
        zIndex: -1,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        marginTop: '32%',
    },
    badgeBottomHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    badgeBottomFooter: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 2,
        marginBottom: 15
    },
    badgeBottomPoints: {
        backgroundColor: Colors.SurfaceLightBlue,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        borderRadius: 2,
        gap: 5,
        marginVertical: 5,
        height: 27
    },
    badgeTitleStyle1: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        color: Colors.White,
        textAlign: 'center',
    },
    badgeTitleStyle2: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size10,
        color: Colors.White,
        textAlign: 'center',
        marginTop: -2
    },
    badgeTitleStyle3: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        color: Colors.White,
        textAlign: 'center',
        marginTop: -5
    },
    badgeSubtitle: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size10,
        color: Colors.AppColor,
        textAlign: 'center',
        top: 1
    },
    badgeBottomTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size11,
        color: Colors.RedColor,
        top: 1
    },
    badgeCountText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.White,
        textAlign: 'center',
        position: 'absolute',
        bottom: 3
    },
    cardHeader: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardBody: {
        backgroundColor: Colors.White,
        width: '90%',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        marginTop: 15
    },
    cardFixedImage: {
        position: 'absolute',
        height: 180,
        width: 180,
        left: -60,
        opacity: 0.1,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    cardTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
    },
    cardDescription: {
        fontFamily: Fonts.light,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        lineHeight: 22,
        marginTop: 7
    },
    cardDescriptionLink: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.BlueViolet,
    },
});