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
    questionView: {
        paddingTop: 10,
        backgroundColor: Colors.White,
        gap: 15,
        paddingBottom: 20,
    },
    questionBtn: {
        justifyContent: "space-between",
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: Colors.BlackCoral,
        paddingVertical: 20,
        borderRadius: 50,
        paddingHorizontal: 25,
        alignItems: 'center',
        backgroundColor: Colors.White
    },
    questionText: {
        fontFamily: Fonts.medium,
        color: Colors.AppColor,
        fontSize: Sizes.size12,
    }
});
