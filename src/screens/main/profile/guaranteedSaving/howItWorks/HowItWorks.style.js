import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';
export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1
    },
    mainView: {
        padding: 20,
        paddingTop: 10,
    },
    savingBannerRoot: {
        paddingVertical: 20
    },
    stepsRoot: {
        gap: 30,
        paddingVertical: 10
    },
    stepsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    stepsText: {
        width: '78%',
        lineHeight: 18,
        fontFamily: Fonts.medium,
        color: Colors.AppColor,
        fontSize: Sizes.size15,
        top: 1,
    }

});
