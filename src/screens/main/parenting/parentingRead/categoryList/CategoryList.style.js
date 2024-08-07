import { StyleSheet } from "react-native"
import { Colors, Fonts, Sizes } from "../../../../../constants/theme"

export const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: Colors.White,
        gap: 15,
    },
    headerText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size20,
        color: Colors.AppColor,
        top: 1
    },
    root: {
        backgroundColor: Colors.White,
        flex: 1
    },
    accordiansContainer: {
        padding: 20,
        borderTopWidth: 5,
        borderTopColor: Colors.SurfaceLightBlue
    }
})