import React, { useEffect, useState } from "react";
import { StatusBar, View, StyleSheet, Text, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, RefreshControl } from "react-native";
import { Colors, Fonts, Sizes } from "../../../../constants/theme";
import icons from "../../../../constants/icons";
import ParentingAppHeader from "../../../../components/ParentingAppHeader";
import TopTabNavigation from "../../../../navigators/TopTabNavigation";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from "@react-navigation/native";
import GradientText from "../../../../components/GradientText";
import LinearGradient from "react-native-linear-gradient";
import QuizBannerCarousel from "../../../../components/Parenting/QuizBannerCarousel";
import { SafeAreaView } from "react-native-safe-area-context"
import { useSelector, useDispatch } from "react-redux";
import { selectQuizCategories } from "../../../../redux/features/auth/authSelectors";
import { quizCategoryList } from "../../../../redux/features/auth/authThunks";
import FullScreenLoader from "../../../../components/FullScreenLoader";
const ParentingQuiz = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [loading, isLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        if (!loading) {
            isLoading(true);
            setRefreshing(true);
            dispatch(quizCategoryList())
                .then((res) => {
                    console.log('Quiz Category List Loaded Successfully', res)
                })
                .catch((error) => {
                    console.error("Error fetching quiz category list:", error);
                })
                .finally(() => {
                    isLoading(false);
                    setRefreshing(false);
                })
                ;
        }
    };

    const quizCategories = useSelector(selectQuizCategories);

    useEffect(() => {
        console.log('Quizzzz Category-----------------', quizCategories);
    }, [quizCategories]);

    useEffect(() => {
        dispatch(quizCategoryList());
        isLoading(false);
    }, [dispatch]);

    const QuizItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('HomeQuiz', { singleQuizID: item.id })} activeOpacity={0.9} style={{ paddingVertical: 5 }}>
            <LinearGradient
                colors={['rgba(0, 0, 0, 0.00)', Colors.AppColor]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0.4621, 1.0071]}
                style={styles.sectionCardContainer}
            >
                <Image source={{ uri: item.image }} style={styles.sectionImage} resizeMode="cover" />
                <View style={styles.sectionTextContainer}>
                    <Text style={styles.sectionTitle}>{item.name}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
                <StatusBar
                    animated={true}
                    backgroundColor={'transparent'}
                    translucent={true}
                    barStyle={'dark-content'}
                />
                <ParentingAppHeader />
                <TopTabNavigation FocusQuiz />
                {loading ?
                    (
                        <FullScreenLoader />
                    )
                    :
                    (
                        <KeyboardAwareScrollView
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                            }
                            keyboardShouldPersistTaps="handled">
                            <View style={styles.headerContainer}>
                                <View style={styles.userInfoContainer}>
                                    <Text style={styles.userNameText}>Hello, Ahmed</Text>
                                    <Text style={styles.greetingText}>Let’s start fun quiz...</Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.8} style={styles.profileButton}>
                                    <Image
                                        resizeMode="cover"
                                        source={require('../../../../assets/images/Profile/MotherProfile.png')}
                                        style={styles.profileImage}
                                    />
                                    <Text style={styles.profileNameText}>Ahmed</Text>
                                    <icons.DropDownDownIcon height={10} width={10} />
                                </TouchableOpacity>
                            </View>
                            <QuizBannerCarousel />
                            <View style={styles.searchContainer}>
                                <icons.SearchIcon />
                                <View style={styles.searchDivider} />
                                <TextInput
                                    style={styles.searchInput}
                                    placeholder="Search by quiz categories"
                                    placeholderTextColor={Colors.RomanSilver}
                                />
                            </View>
                            {quizCategories?.all_category && quizCategories.all_category.map(category => (
                                <View style={styles.section} key={category.id}>
                                    <View style={styles.sectionHeader}>
                                        <GradientText title={category.name} width={240} size={30} />
                                        {/* <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate('HomeQuiz')}
                                    style={{ paddingLeft: 40 }}
                                >
                                    <Text style={styles.seeAllText}>See All</Text>
                                </TouchableOpacity> */}
                                    </View>
                                    <FlatList
                                        data={category?.quiz || []}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={{ paddingHorizontal: 20, gap: 20 }}
                                        renderItem={({ item }) => <QuizItem item={item} />}
                                    />
                                </View>
                            ))}
                        </KeyboardAwareScrollView>
                    )
                }
            </SafeAreaView>
        </TouchableWithoutFeedback >
    )
}

export default ParentingQuiz;

const styles = StyleSheet.create({
    headerContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    userInfoContainer: {
        flexDirection: "column",
        gap: -7
    },
    userNameText: {
        fontFamily: Fonts.semiBold,
        top: 1,
        color: Colors.BlueViolet,
        fontSize: Sizes.size20
    },
    greetingText: {
        fontFamily: Fonts.medium,
        top: 1,
        fontSize: Sizes.size12,
        color: Colors.BlackCoral
    },
    profileButton: {
        height: 40,
        width: 110,
        backgroundColor: Colors.SurfaceLightBlue,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },
    profileImage: {
        height: 30,
        width: 30,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.AppColor
    },
    profileNameText: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        top: 1,
        fontSize: Sizes.size12
    },
    searchContainer: {
        margin: 20,
        borderWidth: 0.5,
        borderRadius: 50,
        borderColor: Colors.BlackCoral,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 18
    },
    searchDivider: {
        width: 1,
        height: 30,
        backgroundColor: Colors.RomanSilver
    },
    searchInput: {
        width: '73%',
        fontSize: Sizes.size13,
        color: Colors.AppColor,
        top: Platform.OS == 'ios' ? 0 : 2,
        fontFamily: Fonts.regular,
        height: 50,
    },
    section: {
        paddingVertical: 10,
    },
    sectionHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    seeAllText: {
        fontFamily: Fonts.medium,
        color: Colors.AppColor,
        fontSize: Sizes.size12,
        textDecorationLine: "underline"
    },
    sectionCardContainer: {
        width: 240,
        height: 250,
        borderRadius: 16,
        alignItems: 'center',
    },
    sectionImage: {
        borderRadius: 16,
        width: 240,
        height: 250,
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
        marginBottom: -40,
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
})
