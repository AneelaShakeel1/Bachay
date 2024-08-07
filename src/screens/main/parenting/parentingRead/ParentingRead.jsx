import React, { useState, useEffect } from "react";
import { ScrollView, StatusBar, View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Colors } from "../../../../constants/theme";
import LinearGradient from 'react-native-linear-gradient';
import ParentingAppHeader from "../../../../components/ParentingAppHeader";
import TopTabNavigation from "../../../../navigators/TopTabNavigation";
import GradientText from "../../../../components/GradientText";
import Arrow from '../../../../assets/images/icons/parenting/orangeArrow.svg'
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../../../../components/AppButton";
import { styles } from "./ParentingRead.style";

import { useDispatch, useSelector } from "react-redux";
import { getArticlesCategories } from "../../../../redux/features/parent/parentThunks";
import { articleCategories } from "../../../../redux/features/parent/parentSelector";
import { getArticlesDetails } from "../../../../redux/features/parent/parentThunks";

const ParentingRead = () => {

    const dispatch = useDispatch();

    const categoriesData = useSelector(articleCategories);
    console.log('categoriesData---------------', categoriesData);

    useEffect(() => {
        dispatch(getArticlesCategories());
    }, [dispatch]);


    const handleOnPress = id => {
        dispatch(getArticlesDetails(id)).then(res => {
            navigation.navigate('BabyCareTips');
        });
    };


    const [selectedCategory, setSelectedCategory] = useState(1);


    const handleCategoryPress = id => {
        setSelectedCategory(id);
    };

    const categoryList = {
        'Baby': [
            {
                id: 1,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/baby.jpg')
            },
            {
                id: 2,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/baby.jpg')
            },
            {
                id: 3,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/baby.jpg')
            },
            {
                id: 4,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/baby.jpg')
            },
        ],
        'Toddler': [
            {
                id: 1,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/toddler.jpg')
            },
            {
                id: 2,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/toddler.jpg')
            },
            {
                id: 3,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/toddler.jpg')
            },
            {
                id: 4,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/toddler.jpg')
            },
        ],
        'Preschooler': [
            {
                id: 1,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/preschooler.jpg')
            },
            {
                id: 2,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/preschooler.jpg')
            },
            {
                id: 3,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/preschooler.jpg')
            },
            {
                id: 4,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/preschooler.jpg')
            },
        ],
        'Big Kid': [
            {
                id: 1,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/bigKid.jpg')
            },
            {
                id: 2,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/bigKid.jpg')
            },
            {
                id: 3,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/bigKid.jpg')
            },
            {
                id: 4,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/bigKid.jpg')
            },
        ],
        'Getting Pregnant': [
            {
                id: 1,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/gettingPregnant.jpg')
            },
            {
                id: 2,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/gettingPregnant.jpg')
            },
            {
                id: 3,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/gettingPregnant.jpg')
            },
            {
                id: 4,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/gettingPregnant.jpg')
            },
        ],
        'Pregnancy': [
            {
                id: 1,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/pregnancy.jpg')
            },
            {
                id: 2,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/pregnancy.jpg')
            },
            {
                id: 3,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/pregnancy.jpg')
            },
            {
                id: 4,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/pregnancy.jpg')
            },
        ],
        'Magazine': [
            {
                id: 1,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/magazine.jpg')
            },
            {
                id: 2,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/magazine.jpg')
            },
            {
                id: 3,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/magazine.jpg')
            },
            {
                id: 4,
                title: 'Development Month by Month',
                imageSource: require('../../../../assets/images/parenting/magazine.jpg')
            },
        ]
    }

    const navigation = useNavigation();
    const CategoryItem = ({ item }) => (
        <TouchableOpacity activeOpacity={0.9} style={{ paddingVertical: 5 }}>
            <LinearGradient
                colors={['rgba(0, 0, 0, 0.20)', Colors.AppColor]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0.1621, 1.0071]}
                style={styles.sectionCardContainer}>
                <Image source={item.imageSource} style={styles.sectionImage} resizeMode="cover" />
                <View style={styles.sectionTextContainer}>
                    <Text style={styles.sectionTitle}>{item.title}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );

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
                        {categoriesData && categoriesData.length > 0 ?
                            (
                                <FlatList
                                    data={categoriesData}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ paddingHorizontal: 20, gap: 20 }}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            onPress={() => handleOnPress(item.id)}
                                            activeOpacity={0.9}
                                            style={styles.exploreCardBorder}>
                                            <LinearGradient
                                                colors={['rgba(0, 0, 0, 0.40)', Colors.AppColor]}
                                                start={{ x: 0.5, y: 0 }}
                                                end={{ x: 0.5, y: 1 }}
                                                locations={[0.1621, 1.0071]}
                                                style={styles.exploreCardImageContainer}>
                                                <Image source={{ uri: item.image }} style={styles.exploreCardImageStyle} resizeMode="cover" />
                                                <View style={styles.exploreCardTextContainer}>
                                                    <Text style={styles.exploreCardCategoryText}>{item.name}</Text>
                                                    <Text style={styles.exploreCardTitleText}>{item.tag_line.length > 10 ? `${item.tag_line.substring(0, 10)}...` : item.tag_line}</Text>
                                                    <View style={styles.exploreTextContainer}>
                                                        <Text style={styles.exploreText}>Explore</Text>
                                                        <Arrow />
                                                    </View>
                                                </View>
                                            </LinearGradient>
                                        </TouchableOpacity>)}
                                />
                            )
                            :
                            (
                                <View style={{ marginTop: 20 }}>
                                    <Text style={styles.comingText}>Coming Soon.</Text>
                                </View>
                            )
                        }

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
                    {Object.keys(categoryList).map(category => (
                        <View style={styles.section} key={category}>
                            <View style={styles.sectionHeader}>
                                <GradientText title={category} width={250} size={26} />
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{ paddingLeft: 40 }}
                                    onPress={() => navigation.navigate('CategoryList')}>
                                    <Text style={styles.viewAllText}>View All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={categoryList[category]}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingHorizontal: 20, gap: 20 }}
                                renderItem={({ item }) => <CategoryItem item={item} />}
                            />
                        </View>
                    ))}
                </ScrollView >
            </View >
        </SafeAreaView>
    )
}

export default ParentingRead;
