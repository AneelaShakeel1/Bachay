import { StyleSheet, Dimensions } from "react-native"
import { Colors, Fonts, Sizes } from "../../../../../constants/theme"

const imageSize = Dimensions.get('window');

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1
    },
    exploreCardRoot: {
        marginTop: 40,
        paddingBottom: 30,
        backgroundColor: Colors.White,
    },
    exploreCardBorder: {
        borderWidth: 3,
        borderColor: Colors.AppColor,
        borderRadius: 16,
        padding: 2
    },
    exploreCardImageContainer: {
        width: 196,
        height: 118,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    exploreCardImageStyle: {
        borderRadius: 16,
        width: 196,
        height: 118,
        position: 'absolute',
        zIndex: -1,
    },
    exploreCardTextContainer: {
        gap: -6,
        alignItems: 'center',
    },
    exploreCardCategoryText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        color: Colors.White,
        top: 1
    },
    exploreCardTitleText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size16,
        color: Colors.White,
        top: 1
    },
    exploreTextContainer: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 5
    },
    exploreText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size13,
        color: Colors.BeerColor,
        top: 1
    },
    categoriesHeaderRoot: {
        backgroundColor: Colors.White,
        paddingVertical: 30,
        borderTopWidth: 5,
        borderTopColor: Colors.SurfaceLightBlue,
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
    cardListContainer: {
        // marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        paddingHorizontal: 10,
        gap: 20,
        paddingBottom: 40
    },
    cardImageContainer: {
        marginHorizontal: 10,
        width: imageSize.width / 1.1,
        height: 240,
        borderRadius: 20,
        justifyContent: 'center'
    },
    cardImageStyle: {
        borderRadius: 20,
        width: imageSize.width / 1.1,
        height: 240,
        position: 'absolute',
        zIndex: -1,
    },
    youtubeIconStyle: {
        alignItems: 'center',
        marginTop: -30
    },
    cardContent: {
        position: 'absolute',
        bottom: 0,
        padding: 20,
        width: '100%'
    },
    cardTitle: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size16,
        color: Colors.White,
        lineHeight: 20
    },
    cardDescription: {
        fontFamily: Fonts.light,
        fontSize: Sizes.size10,
        color: Colors.White,
        lineHeight: 14,
        marginTop: 7
    },
    cardBottomActionBar: {
        backgroundColor: 'rgba(41, 45, 50, 0.50)',
        borderWidth: 1,
        marginTop: 10,
        zIndex: 1,
        borderColor: Colors.ColorGrey,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    cardActionIconView: {
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center'
    },
    cardActionText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size13,
        color: Colors.White,
        top: 2
    },
})
