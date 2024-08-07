import React, { useState } from "react";
import { ScrollView, StatusBar, View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Colors } from "../../../../../constants/theme";
import LinearGradient from "react-native-linear-gradient";
import ParentingAppHeader from "../../../../../components/ParentingAppHeader";
import TopTabNavigation from "../../../../../navigators/TopTabNavigation";
import Arrow from '../../../../../assets/images/icons/parenting/orangeArrow.svg'
import AppButton from "../../../../../components/AppButton";
import icons from "../../../../../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Articles.style";



const Articles = () => {

    const [selectedCategory, setSelectedCategory] = useState(1);

    const handleCategoryPress = id => {
        setSelectedCategory(id);
    };

    const exploreCardData = [
        {
            id: '1',
            imageSource: require('../../../../../assets/images/parenting/exploreBG1.png'),
            category: 'Baby Care Tips',
            title: 'A Guide for New Mom'
        },
        {
            id: '2',
            imageSource: require('../../../../../assets/images/parenting/exploreBG1.png'),
            category: 'Read All About',
            title: 'Baby Food & Nutrition'
        },
        {
            id: '3',
            imageSource: require('../../../../../assets/images/parenting/exploreBG1.png'),
            category: 'Baby Care Tips',
            title: 'A Guide for New Mom'
        },
        {
            id: '4',
            imageSource: require('../../../../../assets/images/parenting/exploreBG1.png'),
            category: 'Baby Care Tips',
            title: 'A Guide for New Mom'
        },
        {
            id: '5',
            imageSource: require('../../../../../assets/images/parenting/exploreBG1.png'),
            category: 'Baby Care Tips',
            title: 'A Guide for New Mom'
        },
        {
            id: '6',
            imageSource: require('../../../../../assets/images/parenting/exploreBG1.png'),
            category: 'Baby Care Tips',
            title: 'A Guide for New Mom'
        }
    ]

    const navigation = useNavigation();

    const categoryButtons = [
        {
            id: 1,
            category: 'All',
            background: Colors.SurfaceLightBlue,
            color: Colors.AppColor,
        },
        {
            id: 2,
            category: 'Boys',
            background: Colors.SurfaceLightBlue,
            color: Colors.AppColor,
        },
        {
            id: 3,
            category: 'Girls',
            background: Colors.SurfaceLightBlue,
            color: Colors.AppColor,
        },
        {
            id: 4,
            category: 'Baby Care',
            background: Colors.SurfaceLightBlue,
            color: Colors.AppColor,
        },
        {
            id: 5,
            category: 'Parental Care',
            background: Colors.SurfaceLightBlue,
            color: Colors.AppColor,
        },
    ];

    const videos = [
        {
            id: 1,
            bgImage: require('../../../../../assets/images/parenting/videoBG.jpg'),
            title: 'Winning at SEO for eCommerce',
            viewsCount: 234,
            likeCount: 256
        },
        {
            id: 2,
            bgImage: require('../../../../../assets/images/parenting/videoBG.jpg'),
            title: 'Personalization in eCommerce',
            viewsCount: 190,
            likeCount: 100
        },
        {
            id: 3,
            bgImage: require('../../../../../assets/images/parenting/videoBG.jpg'),
            title: 'The Rise of Subscription eCommerce',
            viewsCount: 350,
            likeCount: 240
        },
        {
            id: 4,
            bgImage: require('../../../../../assets/images/parenting/videoBG.jpg'),
            title: 'Toddler Play & Activity',
            viewsCount: 240,
            likeCount: 278
        },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
            <StatusBar
                animated={true}
                backgroundColor={'transparent'}
                translucent={true}
                barStyle={'dark-content'}
            />
            <View style={styles.root}>
                <ParentingAppHeader />
                <TopTabNavigation FocusRead />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.exploreCardRoot}>
                        <FlatList
                            data={exploreCardData}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 20, gap: 20 }}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('BabyCareTips')}
                                    activeOpacity={0.9}
                                    style={styles.exploreCardBorder}>
                                    <LinearGradient
                                        colors={['rgba(0, 0, 0, 0.40)', Colors.AppColor]}
                                        start={{ x: 0.5, y: 0 }}
                                        end={{ x: 0.5, y: 1 }}
                                        locations={[0.1621, 1.0071]}
                                        style={styles.exploreCardImageContainer}>
                                        <Image source={item.imageSource} style={styles.exploreCardImageStyle} resizeMode="cover" />
                                        <View style={styles.exploreCardTextContainer}>
                                            <Text style={styles.exploreCardCategoryText}>{item.category}</Text>
                                            <Text style={styles.exploreCardTitleText}>{item.title}</Text>
                                            <View style={styles.exploreTextContainer}>
                                                <Text style={styles.exploreText}>Explore</Text>
                                                <Arrow />
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>)}
                        />
                    </View>
                    <View style={styles.categoriesHeaderRoot}>
                        <FlatList
                            horizontal
                            data={categoryButtons}
                            contentContainerStyle={styles.categoriesView}
                            keyExtractor={item => item.id.toString()}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View style={styles.categoryContainer}>
                                    <AppButton
                                        background
                                        onPress={() => handleCategoryPress(item.id)}
                                        label={item.category}
                                        textStyle={[
                                            styles.categoryButtonText,
                                            {
                                                color:
                                                    selectedCategory === item.id
                                                        ? Colors.White
                                                        : item.color,
                                            },
                                        ]}
                                        buttonContainerStyle={[
                                            styles.categoryButton,
                                            {
                                                backgroundColor:
                                                    selectedCategory === item.id
                                                        ? Colors.AppColor
                                                        : item.background,
                                            },
                                        ]}
                                    />
                                </View>
                            )}
                        />
                    </View>
                    <FlatList
                        data={videos}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.cardListContainer}
                        renderItem={({ item }) => (
                            <>
                                <LinearGradient
                                    colors={['rgba(0, 0, 0, 0.40)', Colors.AppColor]}
                                    start={{ x: 0.5, y: 0 }}
                                    end={{ x: 0.5, y: 1 }}
                                    locations={[0.4621, 1.0071]}
                                    style={styles.cardImageContainer}>
                                    <Image source={item.bgImage} style={styles.cardImageStyle} resizeMode="cover" />
                                    <TouchableOpacity activeOpacity={0.8} style={styles.youtubeIconStyle}>
                                        <icons.ParentingYoutubeIcon />
                                    </TouchableOpacity>
                                    <View style={styles.cardContent}>
                                        <Text numberOfLines={2} style={styles.cardTitle}>
                                            {item.title}
                                        </Text>
                                        <View style={styles.cardBottomActionBar}>
                                            <View style={styles.cardActionIconView}>
                                                <icons.ParentingEyeIcon />
                                                <Text style={styles.cardActionText}>{item.viewsCount}</Text>
                                                <icons.ParentingLikeIcon style={{ marginLeft: 8 }} />
                                                <Text style={styles.cardActionText}>{item.likeCount}</Text>
                                            </View>
                                            <View style={styles.cardActionIconView}>
                                                <TouchableOpacity activeOpacity={0.8}>
                                                    <icons.ParentingFacebookIcon />
                                                </TouchableOpacity>
                                                <TouchableOpacity activeOpacity={0.8}>
                                                    <icons.ParentingWhatsAppIcon style={{ marginLeft: 2 }} />
                                                </TouchableOpacity>
                                                <Text style={styles.cardActionText}>Share</Text>
                                            </View>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </>
                        )}
                    />
                </ScrollView >
            </View >
        </SafeAreaView>
    )
}

export default Articles;

