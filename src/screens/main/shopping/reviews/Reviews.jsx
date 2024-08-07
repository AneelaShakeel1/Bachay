import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import icons from '../../../../constants/icons';
import ImageView from 'react-native-image-viewing';

const Reviews = () => {

    const reviewData = [
        {
            reviewerName: 'Ahmad K.',
            reviewTime: '03 Weeks Ago',
            review:
                'Thank you Bachay product show to my door stepts same day and it was same as shown in pictures.',
            images: [
                require('../../../../assets/images/reviews/reviewImage1.jpg'),
                require('../../../../assets/images/reviews/reviewImage2.jpg'),
                require('../../../../assets/images/reviews/reviewImage3.jpg'),
                require('../../../../assets/images/reviews/reviewImage4.jpg'),
                require('../../../../assets/images/reviews/reviewImage5.jpg'),
                require('../../../../assets/images/reviews/reviewImage6.jpg'),
                require('../../../../assets/images/reviews/reviewImage4.jpg'),
                require('../../../../assets/images/reviews/reviewImage5.jpg'),
                require('../../../../assets/images/reviews/reviewImage6.jpg'),
            ],
            status: 5
        },
        {
            reviewerName: 'Hassand A.',
            reviewTime: '05 Weeks Ago',
            review:
                'Thank you Bachay product show to my door stepts same day and it was same as shown in pictures.',
            images: [
                require('../../../../assets/images/reviews/reviewImage1.jpg'),
                require('../../../../assets/images/reviews/reviewImage2.jpg'),
                require('../../../../assets/images/reviews/reviewImage3.jpg'),
                require('../../../../assets/images/reviews/reviewImage4.jpg'),
                require('../../../../assets/images/reviews/reviewImage5.jpg'),
                require('../../../../assets/images/reviews/reviewImage6.jpg'),
                require('../../../../assets/images/reviews/reviewImage4.jpg'),
            ],
            status: 4
        },
        {
            reviewerName: 'Aneela K.',
            reviewTime: '10 Weeks Ago',
            review:
                'Thank you Bachay product show to my door stepts same day and it was same as shown in pictures.',
            images: [
                require('../../../../assets/images/reviews/reviewImage1.jpg'),
                require('../../../../assets/images/reviews/reviewImage2.jpg'),
                require('../../../../assets/images/reviews/reviewImage3.jpg'),
                require('../../../../assets/images/reviews/reviewImage4.jpg'),
            ],
            status: 3
        },
    ];

    const [galleryStates, setGalleryStates] = useState(
        Array.from({ length: reviewData.length }, () => ({ visible: false, selectedIndex: 0 }))
    );

    const openImageView = (userIndex, index) => {
        const updatedGalleryStates = [...galleryStates];
        updatedGalleryStates[userIndex] = { visible: true, selectedIndex: index };
        setGalleryStates(updatedGalleryStates);
    };

    return (
        <SafeAreaView style={styles.screenContainer}>
            <StatusBar animated={true} backgroundColor={Colors.White} barStyle={'dark-content'} />
            <GeneralAppHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerTitle}>Ratings & Reviews</Text>
                        <View style={styles.ratingContainer}>
                            <icons.YellowStar />
                            <Text style={styles.ratingText}>
                                (17)<Text style={styles.soldText}>- 1478 Solds</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: 100 }}>
                        <FlatList
                            data={reviewData}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <>
                                    <View style={styles.separator} />
                                    <View style={styles.reviewContainer}>
                                        <View style={styles.reviewHeader}>
                                            <View style={styles.ratingInfo}>
                                                <View style={styles.starRating}>
                                                    {[...Array(item.status)].map((_, index) => (
                                                        <icons.YellowStar key={index} />
                                                    ))}
                                                    {[...Array(5 - item.status)].map((_, index) => (
                                                        <icons.WhiteStar key={index} />
                                                    ))}
                                                </View>
                                                <Text style={styles.reviewerName}>{item.reviewerName}</Text>
                                            </View>
                                            <Text style={styles.reviewTime}>{item.reviewTime}</Text>
                                        </View>
                                        <Text style={styles.reviewText}>{item.review}</Text>
                                        <View style={styles.reviewImagesContainer}>
                                            <FlatList
                                                data={item.images.slice(0, 6)}
                                                horizontal
                                                showsHorizontalScrollIndicator={false}
                                                contentContainerStyle={styles.reviewImagesContentContainer}
                                                renderItem={({ item: imageItem, index: imageIndex }) => (
                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        key={imageIndex}
                                                        onPress={() => openImageView(index, imageIndex)}
                                                    >
                                                        <Image
                                                            style={styles.reviewImage}
                                                            source={imageItem}
                                                            resizeMode="cover"
                                                        />
                                                        {imageIndex === 5 && item.images.length > 6 && (
                                                            <View style={styles.overlay}>
                                                                <Text style={styles.overlayText}>
                                                                    +{item.images.length - 6}
                                                                </Text>
                                                            </View>
                                                        )}
                                                    </TouchableOpacity>
                                                )}
                                            />
                                        </View>
                                    </View>
                                    <ImageView
                                        images={item.images}
                                        imageIndex={galleryStates[index].selectedIndex}
                                        visible={galleryStates[index].visible}
                                        onRequestClose={() => {
                                            const updatedGalleryStates = [...galleryStates];
                                            updatedGalleryStates[index] = { visible: false, selectedIndex: 0 };
                                            setGalleryStates(updatedGalleryStates);
                                        }}
                                    />
                                </>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Reviews;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.FlashWhite
    },
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        marginTop: 20
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    headerTitle: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size20,
        top: 1,
        color: Colors.AppColor
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    ratingText: {
        fontFamily: Fonts.regular,
        color: Colors.AppColor,
        top: 1,
        fontSize: Sizes.size13
    },
    soldText: {
        fontFamily: Fonts.medium,
        color: 'rgba(0, 0, 0, 0.50)'
    },
    separator: {
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.13)',
        width: '90%',
        alignSelf: "center"
    },
    reviewContainer: {
        paddingVertical: 30
    },
    reviewHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    ratingInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    starRating: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    reviewerName: {
        fontFamily: Fonts.medium,
        top: 1,
        color: Colors.AppColor,
        fontSize: Sizes.size15
    },
    reviewTime: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.RomanSilver
    },
    reviewText: {
        fontFamily: Fonts.light,
        color: Colors.AppColor,
        top: 1,
        fontSize: Sizes.size13,
        paddingVertical: 10,
        lineHeight: 16,
        paddingHorizontal: 20,
    },
    reviewImagesContainer: {
        paddingVertical: 10
    },
    reviewImagesContentContainer: {
        gap: 10,
        paddingHorizontal: 20
    },
    reviewImage: {
        height: 65,
        width: 65,
        borderRadius: 10
    },
    overlay: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        height: 65,
        width: 65,
        borderRadius: 10,
    },
    overlayText: {
        color: Colors.White,
        fontSize: Sizes.size15,
        top: 1,
        fontFamily: Fonts.medium,
        position: "absolute",
        top: '30%',
        right: '35%'
    }
})
