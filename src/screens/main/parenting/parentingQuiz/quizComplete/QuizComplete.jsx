import React, { useEffect } from 'react';
import {
    StatusBar,
    View,
    Image,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../../../constants/icons';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';
import AppButton from '../../../../../components/AppButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './QuizComplete.style';
import { useSelector } from 'react-redux';
import { selectedCategoryQuizSingle } from '../../../../../redux/features/auth/authSelectors';
const QuizComplete = () => {
    const navigation = useNavigation();
    const singleQuizData = useSelector(selectedCategoryQuizSingle);

    useEffect(() => {
        console.log('Quizzzz Category ,,,Single Data-----------------', singleQuizData?.quiz_question);
    }, [singleQuizData]);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.White}
                translucent={true}
                barStyle={'dark-content'}
            />
            <View style={styles.header}>
                <icons.BlackCrossIcon onPress={() => navigation.navigate('ParentingQuiz')} />
                <Text style={styles.headerText}>Result</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: "center", flex: 1 }}>
                <Image
                    source={require('../../../../../assets/images/parenting/quiz/quizCompletedGif.gif')}
                    style={styles.imgStyle}
                />
                <Text style={styles.quizText}>You completed your Quiz</Text>
                <Text style={{ fontFamily: Fonts.semiBold, fontSize: Sizes.size17, color: Colors.BlueViolet, paddingVertical: 10 }}>
                    Total Points: 2/{singleQuizData?.quiz_question.length}
                </Text>
            </View>
            <View style={{ paddingHorizontal: 20, backgroundColor: Colors.White }}>
                <AppButton
                    label="Return to Quiz"
                    background
                    image
                    imageLeft
                    ImageSource={<icons.BackArrow width={9} height={14} />}
                    onPress={() => navigation.navigate('ParentingQuiz')}
                    buttonContainerStyle={styles.btnStyle}
                    textStyle={styles.btnTextStyle}
                />
            </View>
        </SafeAreaView >
    );
};

export default QuizComplete;
