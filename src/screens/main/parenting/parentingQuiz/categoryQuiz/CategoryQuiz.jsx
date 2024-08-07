
import React, { useEffect, useState } from 'react';
import {
    StatusBar,
    ScrollView,
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Colors } from '../../../../../constants/theme';
import icons from '../../../../../constants/icons';
import ParentingAppHeader from '../../../../../components/ParentingAppHeader';
import ParentingSingleTitle from '../../../../../components/Parenting/ParentingSingleTitle';
import AppButton from '../../../../../components/AppButton';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './CategoryQuiz.style';
import { selectCategoryQuiz } from '../../../../../redux/features/auth/authThunks';
import { selectedCategoryQuizDetails } from '../../../../../redux/features/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';

const CategoryQuiz = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState(1);

    const handleCategoryPress = id => {
        setSelectedCategory(id);
    };

    const categoryButtons = [
        {
            id: 1,
            category: 'All',
            background: Colors.SurfaceLightBlue,
            color: Colors.AppColor,
        },
        {
            id: 2,
            category: 'Math',
            background: Colors.SurfaceLightBlue,
            color: Colors.AppColor,
        },
        {
            id: 3,
            category: 'knowledge',
            background: Colors.SurfaceLightBlue,
            color: Colors.AppColor,
        },
        {
            id: 4,
            category: 'History',
            background: Colors.SurfaceLightBlue,
            color: Colors.AppColor,
        },
        {
            id: 5,
            category: 'Reflexive',
            background: Colors.SurfaceLightBlue,
            color: Colors.AppColor,
        },
    ];

    const route = useRoute();
    const { quizCategoryID } = route.params;

    useEffect(() => {
        console.log("Quiz Category", quizCategoryID);
        dispatch(selectCategoryQuiz({ id: quizCategoryID }));
    }, [dispatch, quizCategoryID]);

    const singleQuizCatData = useSelector(selectedCategoryQuizDetails);

    useEffect(() => {
        console.log('Quizzzz Category Single Data-----------------', singleQuizCatData);
    }, [singleQuizCatData]);

    return (
        <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
            <StatusBar
                animated={true}
                backgroundColor={'transparent'}
                translucent={true}
                barStyle={'dark-content'}
            />
            <ParentingAppHeader />
            <ParentingSingleTitle title={singleQuizCatData?.name} icon iconImage={<icons.BackArrow />} />
            <ScrollView showsVerticalScrollIndicator={false}>
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
                    data={singleQuizCatData?.quiz || []}
                    numColumns={2}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({ item }) => (
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('HomeQuiz', { singleQuizID: item.id })} style={{ flex: 1 / 2 }}>
                            <LinearGradient
                                colors={['rgba(0, 0, 0, 0.00)', Colors.AppColor]}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                locations={[0.4621, 1.0071]}
                                style={styles.gradientView}
                            >
                                <Image source={{ uri: item.image }} style={styles.imageStyle} />
                                <Text numberOfLines={2} style={styles.textStyle}>
                                    {item.name}
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
        </SafeAreaView>

    );
};

export default CategoryQuiz;