import { Text, View, StatusBar, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../../../../constants/theme'
import icons from '../../../../../constants/icons'
import ParentingSingleTitle from '../../../../../components/Parenting/ParentingSingleTitle'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../../../../components/AppButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import GeneralAppHeader from '../../../../../components/GeneralAppHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './HomeQuiz.style'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategoryQuizSingle } from '../../../../../redux/features/auth/authThunks'
import { selectedCategoryQuizSingle } from '../../../../../redux/features/auth/authSelectors'

const HomeQuiz = () => {

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const renderInfoItem = (icon, text) => (
        <View style={styles.infoItemContainer}>
            {icon}
            <Text style={styles.infoItemText}>{text}</Text>
        </View>
    );

    const route = useRoute();
    // const { singleQuizID } = route.params;
    const { singleQuizID } = route.params || {};

    useEffect(() => {
        console.log("Quiz Category ID", singleQuizID);
        dispatch(selectCategoryQuizSingle({ id: singleQuizID }));
    }, [dispatch, singleQuizID]);

    const singleQuizData = useSelector(selectedCategoryQuizSingle);

    useEffect(() => {
        console.log('Quizzzz Category Single Data-----------------', singleQuizData);
    }, [singleQuizData]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.White}
                translucent={true}
                barStyle={'dark-content'}
            />
            <View style={{ zIndex: 1 }}>
                <GeneralAppHeader />
            </View>
            {/* {singleQuizData && (
                <View style={styles.titleContainer}>
                    <ParentingSingleTitle title={singleQuizData.name} />
                </View>
            )} */}
            {singleQuizData && (
                <View style={styles.imageContainer}>
                    <Image
                        resizeMode='cover'
                        source={{ uri: singleQuizData.image }}
                        style={styles.imageStyle}
                    />
                </View>
            )}
            <View style={styles.quizContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.quizContent}>
                        <Text style={styles.quizTitle}>It’s Quiz Time</Text>
                        <LinearGradient
                            colors={['rgba(253, 199, 65, 0.38)', 'transparent']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0.8, y: 0 }}
                            style={styles.gradientView}>
                            <Text style={styles.gradientText}>Complete and Earn upto {'\n'}<Text style={styles.gradientSubText}>1000 Coins.</Text></Text>
                            <icons.CoinBag style={styles.coinBagImg} height={88} width={88} />
                        </LinearGradient>
                        <View style={{ justifyContent: "center", paddingHorizontal: 20 }}>
                            <View style={styles.infoContainer}>
                                {renderInfoItem(<icons.QuizClockIcon />, '60 sec each question.')}
                                {renderInfoItem(<icons.QuizQIcon />, '10 total questions')}
                                {renderInfoItem(<icons.QuizCoinsIcon />, 'Earn 1000 Coins')}
                                {renderInfoItem(<icons.QuizCoinsBoxIcon />, 'Earn 1000 Coins')}
                            </View>
                        </View>
                        <AppButton
                            gradient
                            onPress={() => navigation.navigate('QuizQA')}
                            label={'Let’s Start'}
                            textStyle={styles.buttonTextStyle}
                            buttonContainerStyle={styles.buttonStyle}
                        />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default HomeQuiz;
