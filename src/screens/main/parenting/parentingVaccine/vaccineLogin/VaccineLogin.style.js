import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1,
    },
    vaccineContainer: {
        padding: 20,
        borderBottomWidth: 5,
        borderBottomColor: Colors.SurfaceLightBlue,
    },
    childInfoContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    childImage: {
        height: 70,
        width: 70,
        borderRadius: 40,
        borderColor: Colors.AppColor,
        borderWidth: 2,
    },
    childDetailsContainer: {
        width: '75%',
        gap: -2,
    },
    childName: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        fontSize: Sizes.size16,
        top: 1,
        width: '70%',
        lineHeight: 17
    },
    childDetailsText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        top: 1,
        color: Colors.AppColor,
    },
    childAge: {
        color: Colors.TextPinkColor,
        textTransform: 'capitalize',
    },
    childGender: {
        color: Colors.BlueViolet,
    },
    navigationIconContainer: {
        position: 'absolute',
        right: 0,
        borderRadius: 50,
        backgroundColor: Colors.BlueViolet,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
    },
    vaccineTrackerContainer: {
        paddingVertical: 18,
        gap: 20
    },
    vaccineTrackerView: {
        paddingVertical: 13,
        paddingHorizontal: 25,
        backgroundColor: Colors.SurfaceLightBlue,
        borderRadius: 25,
        borderColor: Colors.SurfaceLightBlue,
        borderWidth: 0.5
    },
    vaccineTrackerText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size16,
        color: Colors.AppColor,
        top: 1
    },
    cardRoot: {
        borderColor: Colors.BlackCoral,
        borderWidth: 0.5,
        borderRadius: 25
    },
    cardMain: {
        padding: 20,
        paddingVertical: 30
    },
    headerText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size13,
        top: 1,
        color: Colors.AppColor,
        paddingBottom: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.RomanSilver
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cardHeaderLeftRow: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 5
    },
    cardHeaderLeftText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size11,
        color: Colors.AppColor,
        top: 1
    },
    cardHeaderRightText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size11,
        color: Colors.BlueViolet,
        top: 1
    },
    growthChartRoot: {
        paddingTop: 20
    },
    upcomingVaccinationView: {
        paddingVertical: 10,
        borderColor: Colors.BlackCoral,
        borderWidth: 0.5,
        paddingHorizontal: 20,
        borderRadius: 25,
        backgroundColor: Colors.White
    },
    upcomingVaccinationText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        top: 1,
        color: Colors.AppColor
    },
    vaccineInfoContainer: {
        paddingVertical: 20,
        gap: 10
    },
    vaccineInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    vaccineInfoRowLeftRow: {
        gap: 7,
        flexDirection: "row",
        alignItems: "center"
    },
    vaccineInfoText: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        top: 1,
        fontSize: Sizes.size14
    },
    vaccineInfoDate: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.BlackCoral,
        opacity: 0.6
    },
    vaccinationSummaryView: {
        paddingVertical: 10,
        borderColor: Colors.BlackCoral,
        borderWidth: 0.5,
        paddingHorizontal: 20,
        borderRadius: 25,
        backgroundColor: Colors.White
    },
    vaccinationSummaryText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        top: 1,
        color: Colors.AppColor
    },
    statusContainer: {
        backgroundColor: Colors.White,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20
    },
    statusCountRoot: {
        alignItems: "center",
        gap: 5
    },
    statusCountView: {
        borderRadius: 50,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusCount: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size16,
        color: Colors.White,
        top: 1,
    },
    statusText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        color: Colors.BlueViolet,
        top: 1
    },
    btnStyle: {
        paddingVertical: 13,
        backgroundColor: Colors.BlueViolet,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Colors.BlueViolet
    },
    btnTextStyle: {
        fontFamily: Fonts.semiBold,
        color: Colors.White,
        fontSize: Sizes.size14,
        top: 1
    },
    growthChartContainer: {
        paddingVertical: 18,
        gap: 20
    },
    growthChartView: {
        paddingVertical: 13,
        paddingHorizontal: 25,
        backgroundColor: Colors.SurfaceLightBlue,
        borderRadius: 25,
        borderColor: Colors.SurfaceLightBlue,
        borderWidth: 0.5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    growthChartText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size16,
        color: Colors.AppColor,
        top: 1
    },
    viewSampleChartText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        color: Colors.BlueViolet,
        top: 1,
        textDecorationLine: 'underline'
    },
    head: {
        borderWidth: 0.5,
        borderColor: Colors.BlackCoral,
        borderRadius: 25,
        padding: 10
    },
    columnText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        top: 1,
        color: Colors.AppColor,
        paddingLeft: 6
    },
    rowsRoot: {
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    rowText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size13,
        top: 1,
        color: Colors.AppColor,
        paddingVertical: 5,
        paddingLeft: 8
    },
    featuresRoot: {
        paddingVertical: 20,
        gap: 15,
    },
    featuresRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    featureText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        color: Colors.AppColor,
    },
});
