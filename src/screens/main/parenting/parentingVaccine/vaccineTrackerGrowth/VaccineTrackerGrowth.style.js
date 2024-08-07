import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../../../constants/theme";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.White
    },
    vaccineHeader: {
        paddingVertical: 30,
        backgroundColor: Colors.White,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: Colors.SurfaceLightBlue,
    },
    periodsView: {
        paddingHorizontal: 20,
        gap: 30
    },
    periodBtnStyle: {
        width: 130,
        paddingVertical: 7,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    periodBtnTextStyle: {
        fontSize: Sizes.size11,
        fontFamily: Fonts.semiBold,
        top: 1,
    },
    measTitleContainer: {
        paddingVertical: 13,
        paddingHorizontal: 25,
        backgroundColor: Colors.SurfaceLightBlue,
        borderRadius: 25,
        borderColor: Colors.SurfaceLightBlue,
        borderWidth: 0.5
    },
    measTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size16,
        color: Colors.AppColor,
        top: 1
    },
    cardRoot: {
        borderColor: Colors.BlackCoral,
        borderWidth: 0.5,
        borderRadius: 25,
        marginVertical: 20
    },
    cardMain: {
        padding: 10,
        paddingVertical: 20,
        marginRight: -50,
        paddingHorizontal: 20
    },
    head: {
        // padding: 10,
    },
    columnText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        top: 1,
        color: Colors.AppColor,
    },
    rowsRoot: {
        marginVertical: 10
    },
    rowText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        top: 1,
        color: Colors.AppColor,
        paddingVertical: 15,
    },
    bottomBtnsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    emailVaccNGrowthChartView: {
        paddingVertical: 13,
        paddingHorizontal: 25,
        backgroundColor: Colors.SurfaceLightBlue,
        borderRadius: 25,
        borderColor: Colors.SurfaceLightBlue,
        borderWidth: 0.5,
        marginVertical: 10,
        alignItems: "center"
    },
    emailVaccNGrowthChartTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        top: 1
    },
    footerContainer: {
        padding: 15,
        backgroundColor: Colors.White,
    },
    btnStyle: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 13,
        alignItems: 'center',
        marginVertical: 13,
        backgroundColor: Colors.BlueViolet,
    },
    btnTextStyle: {
        fontSize: Sizes.size16,
        color: Colors.White,
        fontFamily: Fonts.semiBold,
        top: 1,
    },
    FAQsContainer: {
        paddingVertical: 13,
        paddingHorizontal: 20,
        backgroundColor: Colors.SurfaceLightBlue,
        borderRadius: 25,
        borderColor: Colors.SurfaceLightBlue,
        borderWidth: 0.5
    },
    FAQsTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        top: 1
    },
    disclaimerContainer: {
        paddingVertical: 13,
        paddingHorizontal: 20,
        backgroundColor: Colors.SurfaceLightBlue,
        borderRadius: 25,
        borderColor: Colors.SurfaceLightBlue,
        borderWidth: 0.5
    },
    disclaimerTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        top: 1
    },
    feedbackContainer: {
        paddingVertical: 13,
        paddingHorizontal: 20,
        backgroundColor: Colors.SurfaceLightBlue,
        borderRadius: 25,
        borderColor: Colors.SurfaceLightBlue,
        borderWidth: 0.5
    },
    feedbackTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        top: 1
    },
    graphInfoContainer: {
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: "space-between",
        marginTop: 40
    },
    updateWeightInfoText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.AppColor,
        width: '65%'
    },
    entriesRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    yourEntriesBullet: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: Colors.BlueViolet
    },
    yourEntriesText: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        top: 1,
        fontSize: Sizes.size12
    },
    averageBullet: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: '#E8E8E8'
    },
    averageInfoText: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        top: 1,
        fontSize: Sizes.size12
    },
    yAxisLabel: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        top: 1,
        fontSize: Sizes.size12,
        paddingHorizontal: 20,
        marginTop: 10
    },
    xAxisLabel: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        top: 1,
        color: Colors.AppColor,
        textAlign: "center",
        marginTop: -30
    },

});