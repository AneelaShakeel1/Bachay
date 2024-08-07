import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../../../constants/theme";

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 40
    },
    headerStatusView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 40,
        justifyContent: "center"
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
    separatorLine: {
        borderWidth: 0.3,
        borderColor: 'rgba(255, 255, 255, 0.15)',
        width: "100%"
    },
    loginRootContainer: {
        alignItems: "center",
        marginTop: 20
    },
    leagueRewardsText: {
        fontFamily: Fonts.medium,
        color: Colors.White,
        fontSize: Sizes.size19
    },
    loginTextTitle: {
        fontFamily: Fonts.regular,
        color: Colors.White,
        fontSize: Sizes.size12,
        marginBottom: 15,
        top: -5
    },
    pointsView: {
        paddingTop: 20,
        paddingBottom: 10,
        alignItems: 'center',
        gap: -7
    },
    pointsLabel: {
        fontFamily: Fonts.light,
        color: Colors.White,
        fontSize: Sizes.size14
    },
    pointsValue: {
        fontFamily: Fonts.semiBold,
        color: Colors.BeerColor,
        fontSize: Sizes.size28
    },
    bplActivityBtnStyle: {
        justifyContent: 'center',
        borderRadius: 100,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 40,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.40)',
        width: '100%'
    },
    bplActivityBtnText: {
        fontSize: Sizes.size14,
        color: Colors.White,
        fontFamily: Fonts.medium,
        top: 1
    },
    convertBPLPointsContainer: {
        paddingTop: 12,
        borderRadius: 12,
        borderWidth: 0.8,
        borderColor: 'rgba(255, 255, 255, 0.40)',
        marginTop: 40
    },
    convertBPLPointsInnerContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 25,
        paddingHorizontal: 15
    },
    convertBPLPointsTextContainer: {
        gap: -3,
        width: '76%'
    },
    convertBPLPointsLabel: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        color: Colors.White,
        top: 1
    },
    convertBPLPointsNote: {
        fontFamily: Fonts.light,
        fontSize: Sizes.size11,
        color: Colors.White,
        top: 1
    },
    viewAllText: {
        fontFamily: Fonts.medium,
        color: Colors.BeerColor,
        fontSize: Sizes.size13
    },
    filterMainViewBG: {
        paddingHorizontal: 20,
        backgroundColor: Colors.White,
        paddingVertical: 10,
        borderRadius: 8
    },
    shadow: {
        shadowColor: Colors.BlueViolet,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    filterMainView: {
        borderWidth: 1.5,
        borderColor: Colors.BlueViolet,
        marginVertical: 15,
        borderRadius: 8,
        backgroundColor: Colors.White,
        padding: 20
    },
    filterTextRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.AppColor,
        paddingBottom: 10
    },
    filterText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size17,
        color: Colors.AppColor,
        top: 1
    },
    radioRow: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: 'row',
        paddingVertical: 15,
        borderBottomColor: Colors.AppColor,
        paddingBottom: 10
    },
    radioTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.AppColor
    },
    radioView: {
        borderColor: Colors.ColorGrey,
        borderWidth: 1,
        padding: 2,
        borderRadius: 80,
    },
    radioBg: {
        backgroundColor: Colors.BlueViolet,
        padding: 7,
        margin: 1,
        borderRadius: 80,
    },
    radioOff: {
        padding: 6,
    },
    filterImageRoot: {
        marginVertical: 15
    },
    filterImage: {
        borderRadius: 8,
        width: '100%',
        height: 180,
        alignSelf: 'center'
    },
    lockedView: {
        position: 'absolute',
        top: 15,
        left: 12,
        backgroundColor: 'rgba(41, 45, 50, 0.80)',
        width: 80,
        height: 25,
        borderRadius: 2,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        gap: 6
    },
    lockedText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size13,
        color: Colors.White,
        top: 1
    },
    rewardsDetailsContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: Colors.White,
        marginHorizontal: 15,
        width: '90%',
        height: 35,
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 15,
        borderRadius: 4,
    },
    redeemNowText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        color: Colors.BlueViolet,
        top: 1
    },
    viewDetailsText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size11,
        color: Colors.AppColor,
        top: 1
    },
    verticalSeparatorLine: {
        height: 18,
        width: 1,
        backgroundColor: Colors.MetallicSilver,
        alignSelf: 'center',
    },
    awardDetailsRow: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 7
    },
    awardCountText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.AppColor
    },
    sliderDetailsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        paddingLeft: 10
    },
    rangeColumn: {
        alignItems: "center",
        gap: -5
    },
    rangeValue: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size10,
        color: Colors.White
    },
    rangeLabel: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size10,
        color: Colors.White
    },
    rangeMarkLine: {
        height: 12,
        width: 1,
        backgroundColor: Colors.White
    },
    sliderRightDetails: {
        flexDirection: "row",
        gap: 27,
        marginTop: -35
    },
    sliderDetailsColumn: {
        alignItems: "center",
        gap: 5
    }
});
