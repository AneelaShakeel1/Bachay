import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

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
        padding: 5
    },
    exploreCardCategoryText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        color: Colors.White,
        top: 1,
    },
    exploreCardTitleText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size16,
        color: Colors.White,
        top: 1,
        textAlign: 'center',
        lineHeight: 17,
        marginVertical: 10
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
    section: {
        borderTopWidth: 5,
        borderColor: Colors.SurfaceLightBlue,
        paddingVertical: 30,
    },
    sectionHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        // marginBottom: -10
    },
    viewAllText: {
        fontFamily: Fonts.medium,
        color: Colors.AppColor,
        fontSize: Sizes.size12,
        textDecorationLine: "underline"
    },
    sectionCardContainer: {
        width: 240,
        height: 150,
        borderRadius: 16,
        alignItems: 'center',
    },
    sectionImage: {
        borderRadius: 16,
        width: 240,
        height: 150,
        zIndex: -1,
    },
    sectionTextContainer: {
        bottom: 15,
        position: 'absolute'
    },
    sectionTitle: {
        fontFamily: Fonts.medium,
        color: Colors.White,
        fontSize: Sizes.size14,
    },
    categoriesHeaderRoot: {
        backgroundColor: Colors.White,
        paddingVertical: 30,
        borderTopWidth: 5,
        borderTopColor: Colors.SurfaceLightBlue,
        marginBottom: -30,
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
    comingText: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        fontSize: Sizes.size20,
        top: 1,
        textAlign: "center"
    }
});