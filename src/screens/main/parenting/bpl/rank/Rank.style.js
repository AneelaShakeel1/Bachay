import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../../../constants/theme";

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    level: {
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    levelTitle: {
        fontFamily: Fonts.PoetsenOne,
        fontSize: Sizes.size28,
        color: Colors.White,
        paddingVertical: 20
    },
    rewardContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7
    },
    rewardText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        color: Colors.RedColor,
        top: 1,
        paddingVertical: 15
    },
    rewardValue: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        top: 1,
        color: Colors.White
    },
    congratulationsText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        top: 1,
        color: Colors.DeepOrange,
        textAlign: 'center',
        lineHeight: 16,
        paddingVertical: 15,
        width: "75%"
    },
    userInfoText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        top: 1,
        color: Colors.White,
        textAlign: "center",
        width: '50%',
        lineHeight: 16
    },
    servicesContainer: {
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    serviceButtonContainer: {
        alignItems: "center",
        justifyContent: 'center',
        width: '60%',
        height: 90
    },
    serviceButtonIcon: {
        position: 'absolute',
    },
    serviceButtonText: {
        fontFamily: Fonts.PoetsenOne,
        fontSize: Sizes.size18,
        textAlign: 'center',
    },
    slider: {
        width: '100%',
        height: 30,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.20)',
        borderRadius: 20
    },
    thumStyle: {
        height: 0,
        width: 0
    },
    trackStyle: {
        height: 28,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
    trackMarkersContainer: {
        flexDirection: 'row',
        marginTop: -30,
        justifyContent: "space-between"
    },
    trackMarker: {
        width: 0.5,
        height: 28,
        backgroundColor: 'white',
        top: 1,
    },
    sliderLabelsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 10,
    },
    sliderLabel: {
        fontFamily: Fonts.semiBold,
        color: Colors.White,
        top: 1,
        fontSize: Sizes.size12,
    },

});