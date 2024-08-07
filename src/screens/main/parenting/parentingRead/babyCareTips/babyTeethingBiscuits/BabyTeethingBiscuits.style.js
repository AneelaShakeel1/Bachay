import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../../constants/theme';

const imageSize = Dimensions.get('window');

export const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1,
    },
    foodHeader: {
        backgroundColor: Colors.White,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: Colors.AppColor,
        elevation: 5,
        height: 75,
        marginTop: 5,
    },
    footTextRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    foodText: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        fontSize: Sizes.size20,
        lineHeight: 27,
        top: 1,
        textAlign: "center",
    },
    shareTextRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    shareText: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        fontSize: Sizes.size13,
        top: 1,
        lineHeight: 22
    },
    categoriesRoot: {
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    categoriesTextRow: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    categoriesText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size16,
        color: Colors.AppColor,
        top: 1,
    },
    navigationRow: {
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center',
        paddingTop: 20,
    },
    navigationText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.AppColor,
    },
    articleMainTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size22,
        color: Colors.AppColor,
        top: 1,
        lineHeight: 25,
        paddingTop: 20,
    },
    articleMainImageContainer: {
        alignItems: 'center',
        paddingTop: 20
    },
    articleMainImageStyle: {
        width: imageSize.width / 1.13,
        height: 240,
        borderRadius: 16,
    },
    articleListContainer: {
        paddingTop: 30,
    },
    articleListTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size16,
        top: 1,
        color: Colors.AppColor,
    },
    articleListRoot: {
        paddingTop: 10,
        gap: 15,
    },
    articleList: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bullet: {
        height: 8,
        width: 8,
        borderRadius: 50,
        backgroundColor: Colors.BlueViolet,
        top: 1,
    },
    articleListText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        lineHeight: 16,
        width: '94%',
    },
    articleContent: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size14,
        color: Colors.AppColor,
        lineHeight: 21.6,
        top: 1,
        paddingTop: 15
    },
    typographyText: {
        fontFamily: Fonts.semiBold,
        color: Colors.BlueViolet,
    },
    articleTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size22,
        lineHeight: 24,
        top: 1,
        color: Colors.BlueViolet,
        paddingTop: 30
    },
    articleTitleSmall: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size16,
        lineHeight: 24,
        top: 1,
        color: Colors.AppColor,
        paddingTop: 10
    },
    authorInfoRoot: {
        paddingVertical: 40
    },
    authorInfoContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 15,
        borderColor: Colors.AppColor,
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    authorlabelText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        lineHeight: 18,
        color: Colors.AppColor,
        top: 1
    },
    authorNameText: {
        color: Colors.BlueViolet,
        fontSize: Sizes.size14,
        fontFamily: Fonts.semiBold
    },
    dateTimeText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size12,
        lineHeight: 18,
        color: Colors.AppColor,
        top: 1,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: Colors.AppColor
    },
    navigationButtons: {
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: Colors.AppColor
    },
    navigationButton: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 5
    },
    previousNavText: {
        fontFamily: Fonts.medium,
        lineHeight: 21.6,
        top: 1,
        color: Colors.AppColor,
        fontSize: Sizes.size14
    },
    nextNavText: {
        fontFamily: Fonts.semiBold,
        lineHeight: 21.6,
        top: 1,
        color: Colors.BlueViolet,
        fontSize: Sizes.size14
    },
    relatedPostTitle: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size16,
        lineHeight: 20,
        top: 1,
        color: Colors.AppColor
    },
    relatedPostContainer: {
        paddingTop: 20,
        gap: 20,
        paddingBottom: 50
    },
    relatedPostCard: {
        width: imageSize.width / 1.13,
        height: 240,
        borderRadius: 16,
    },
    relatedPostImage: {
        width: imageSize.width / 1.13,
        height: 240,
        borderRadius: 16,
        position: 'absolute',
        zIndex: -1,
    },
    relatedPostContent: {
        position: 'absolute',
        bottom: 0,
        padding: 20,
        width: '100%'
    },
    relatedPostTitleText: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size14,
        color: Colors.White,
        lineHeight: 18
    },
});
