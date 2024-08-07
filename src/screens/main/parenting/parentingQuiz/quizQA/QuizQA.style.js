import { StyleSheet, Platform } from "react-native";
import { Colors, Fonts, Sizes } from "../../../../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        flex: 1,
    },
    titleContainer: {
        // marginTop: -15,
    },
    contentContainer: {
        padding: 20,
        paddingTop: 40
    },
    image: {
        width: '100%',
        height: 220,
        borderRadius: 25,
        zIndex: -1
    },
    questionContainer: {
        // position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 220,
        // alignSelf: 'center',
        // width: '100%',
        paddingVertical: 15,
        backgroundColor: Colors.White,
        borderRadius: 25,
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: Colors.BlueViolet
    },
    questionCounter: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.ColorGrey,
    },
    questionText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size16,
        top: 1,
        color: Colors.ColorGrey,
        lineHeight: 18,
        // width: '50%',
    },
    timerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '22%',
        justifyContent: 'space-between',
    },
    timerText: {
        fontFamily: Fonts.semiBold,
        top: 1,
        fontSize: Sizes.size12,
        color: Colors.VenetianRed,
        width: '65%',
    },
    optionsContainer: {
        paddingVertical: 40,
        gap: 30,
    },
    option: {
        paddingVertical: 12,
        borderWidth: 0.5,
        borderColor: Colors.BlackCoral,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        justifyContent: 'space-between',
    },
    optionLabel: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size16,
        top: 1,
        color: Colors.BlackCoral,
    },
    optionDivider: {
        width: 1,
        height: 25,
        alignSelf: 'center',
        backgroundColor: Colors.BlackCoral,
    },
    optionText: {
        fontFamily: Fonts.medium,
        top: 1,
        fontSize: Sizes.size14,
        color: Colors.BlackCoral,
        width: '85%',
    },
    btnStyle: {
        padding: Platform.OS == 'ios' ? 20 : 15,
        backgroundColor: Colors.BlueViolet,
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10,
    },
    btnTextStyle: {
        color: Colors.White,
        fontSize: Sizes.size16,
        fontFamily: Fonts.semiBold,
        top: 1,
    },
});