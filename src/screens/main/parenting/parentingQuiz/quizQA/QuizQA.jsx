import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';
import icons from '../../../../../constants/icons';
import ParentingSingleTitle from '../../../../../components/Parenting/ParentingSingleTitle';
import AppButton from '../../../../../components/AppButton';
import { useNavigation } from '@react-navigation/native';
import GeneralAppHeader from '../../../../../components/GeneralAppHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './QuizQA.style';
import { useSelector } from 'react-redux';
import { selectedCategoryQuizSingle } from '../../../../../redux/features/auth/authSelectors';

const QuizQA = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const navigation = useNavigation();
    const singleQuizData = useSelector(selectedCategoryQuizSingle);
    const [counter, setCounter] = useState(54);

    useEffect(() => {
        console.log('Quizzzz Category ,,,Single Data-----------------', singleQuizData?.quiz_question);
    }, [singleQuizData]);

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(prevCounter => prevCounter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    const renderOption = (label, text) => {
        const isSelected = selectedOption === text;

        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.option,
                    isSelected && { backgroundColor: Colors.BlueViolet },
                ]}
                onPress={() => setSelectedOption(text)}
            >
                <Text style={[styles.optionLabel, isSelected && { color: Colors.White }]}>
                    {label}
                </Text>
                <View
                    style={[
                        styles.optionDivider,
                        isSelected && { backgroundColor: Colors.White },
                    ]}
                />
                <Text style={[styles.optionText, isSelected && { color: Colors.White }]}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    };

    const currentQuestion = singleQuizData?.quiz_question[currentQuestionIndex];

    // const goToNextQuestion = () => {
    //     if (selectedOption) {
    //     if (currentQuestionIndex < singleQuizData?.quiz_question.length - 1) {
    //         setSelectedOptions([...selectedOptions, selectedOption]);
    //         setCurrentQuestionIndex(currentQuestionIndex + 1);
    //         setSelectedOption(null); 
    //     } else {
    //         setSelectedOptions([...selectedOptions, selectedOption]);
    //         console.log('All Selected Options:', selectedOptions);
    //         navigation.navigate('QuizComplete');
    //     }
    // } else {
    //     alert('Please choose an answer before moving to the next question.');
    // }
    // };
    const goToNextQuestion = () => {
        if (selectedOption) {
            if (currentQuestionIndex < singleQuizData?.quiz_question.length - 1) {
                setSelectedOptions(prevOptions => [...prevOptions, selectedOption]);
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOption(null);
                setCounter(54);
            } else {
                setSelectedOptions(prevOptions => [...prevOptions, selectedOption]);
                console.log('All Selected Options:', [...selectedOptions, selectedOption]);
                navigation.navigate('QuizComplete');
            }
        } else {
            alert('Please choose an answer before moving to the next question.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.White}
                translucent={true}
                barStyle={'dark-content'}
            />
            <View style={{ zIndex: 1 }}>
                <GeneralAppHeader />
            </View>
            {singleQuizData?.quiz_question.length > 0 ?
                (
                    <>
                        <ParentingSingleTitle title={singleQuizData?.name} />
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.contentContainer}>
                                <View style={styles.questionContainer}>
                                    <Text style={styles.questionCounter}>{`Question ${currentQuestionIndex + 1}/${singleQuizData?.quiz_question.length}`}</Text>
                                    <Text style={styles.questionText}>{currentQuestion?.question}</Text>
                                    <View style={styles.timerContainer}>
                                        <icons.QuizClockIcon height={20} width={20} />
                                        <Text style={styles.timerText}> {counter} Sec</Text>
                                    </View>
                                </View>
                                <View style={styles.optionsContainer}>
                                    {currentQuestion?.answer.map((ans, index) => (
                                        renderOption(String.fromCharCode(65 + index), ans.answer)
                                    ))}
                                </View>
                                <AppButton
                                    onPress={goToNextQuestion}
                                    textStyle={styles.btnTextStyle}
                                    background
                                    label={currentQuestionIndex < singleQuizData?.quiz_question.length - 1 ? "Next" : "Finish"}
                                    buttonContainerStyle={styles.btnStyle}
                                />
                            </View>
                        </ScrollView>
                    </>
                )
                :
                (
                    <View style={{ flex: 1, backgroundColor: Colors.White, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontFamily: Fonts.semiBold, fontSize: Sizes.size20, color: Colors.Black }}>No Quiz For this Category</Text>
                    </View>
                )
            }
        </SafeAreaView>
    );
};

export default QuizQA;
