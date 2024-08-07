import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts, Sizes } from "../../../../../constants/theme";

const imageSize = Dimensions.get('window');

export const styles = StyleSheet.create({
    titleContainer: {
        marginBottom: -10,
        marginTop: -30
    },
    imageContainer: {
        flex: 1,
    },
    imageStyle: {
        width: imageSize.width,
        height: imageSize.height / 2,
    },
    quizContainer: {
        flex: 1,
        backgroundColor: Colors.White,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    quizContent: {
        paddingVertical: 20
    },
    quizTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size18,
        color: Colors.AppColor,
        top: 1,
        marginBottom: 15,
        textAlign: "center",
    },
    gradientView: {
        borderRadius: 18,
        backgroundColor: Colors.AppColor,
        flexDirection: 'row',
        height: 88,
        width: 320,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignSelf: "center",
    },
    gradientText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.White,
        paddingVertical: 20,
        width: '70%'
    },
    gradientSubText: {
        color: Colors.BeerColor,
    },
    coinBagImg: {
        height: 88,
        width: 88,
    },
    infoContainer: {
        paddingVertical: 25,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    infoItemContainer: {
        gap: 5,
        width: '20%',
        alignItems: "center",
    },
    infoItemText: {
        fontSize: Sizes.size10,
        textAlign: 'center',
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        lineHeight: 12,
    },
    buttonStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 50,
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'center',
        marginHorizontal: 20
    },
    buttonTextStyle: {
        fontWeight: '600',
        fontSize: Sizes.size22,
        color: Colors.White,
        fontFamily: 'Aristotelica Display DemiBold Trial',
    },
});
