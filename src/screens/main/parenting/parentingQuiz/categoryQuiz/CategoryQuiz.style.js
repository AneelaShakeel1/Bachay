import { StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../../../../constants/theme";

export const styles = StyleSheet.create({
    categoriesHeaderRoot: {
        backgroundColor: Colors.White,
        marginVertical: 30,
        zIndex: 1
    },
    categoriesView: {
        paddingHorizontal: 20,
        gap: 15,
    },
    categoryContainer: {
        flexDirection: 'row',
        gap: 15,
    },
    categoryButton: {
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 25,
    },
    categoryButtonText: {
        fontSize: Sizes.size12,
        fontFamily: Fonts.semiBold,
        top: 1,
    },
    listContainer: {
        paddingHorizontal: 10,
        gap: 20,
        backgroundColor: Colors.White,
        marginBottom: 30
    },
    gradientView: {
        marginHorizontal: 8,
        height: 170,
        flex: 1 / 2,
        borderRadius: 10,
        alignItems: 'center',
    },
    imageStyle: {
        borderRadius: 10,
        width: '100%',
        height: Platform.OS == 'ios' ? 270 : 170,
        position: 'absolute',
        zIndex: -1,
    },
    textStyle: {
        position: 'absolute',
        bottom: 15,
        textAlign: 'left',
        color: Colors.White,
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        zIndex: 1,
        paddingHorizontal: 10,
    },
})
