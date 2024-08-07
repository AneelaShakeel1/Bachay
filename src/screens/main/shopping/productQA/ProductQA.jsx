import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import icons from '../../../../constants/icons';
import AppButton from '../../../../components/AppButton';

const ProductQA = () => {

    const productQs = [
        {
            Que: 'are these available in size 11?',
            Ans: 'Yes, Size 11 is available for both boys and girls and in 4 different colors as well.',
            date: '03 days ago?',
        },
        {
            Que: 'Can we return this if not fit?',
            Ans: 'Yes, Size 11 is available for both boys and girls and in 4 different colors as well.',
            date: '06 days ago?',
        },
        {
            Que: 'are these available in size 11?',
            Ans: 'Yes, Size 11 is available for both boys and girls and in 4 different colors as well.',
            date: '03 days ago?',
        },
        {
            Que: 'are these available in size 11?',
            Ans: 'Yes, Size 11 is available for both boys and girls and in 4 different colors as well.',
            date: '03 days ago?',
        },
        {
            Que: 'are these available in size 11?',
            Ans: 'Yes, Size 11 is available for both boys and girls and in 4 different colors as well.',
            date: '03 days ago?',
        },
    ]
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.screenContainer}>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.White}
                    barStyle={'dark-content'}
                />
                <GeneralAppHeader />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <Text style={styles.headerTitle}>Questions about product <Text style={styles.qsCount}>(20)</Text></Text>
                        <FlatList
                            data={productQs}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <View style={styles.questionContainer} key={index}>
                                    <View style={styles.questionRow}>
                                        <View style={styles.questionInfo}>
                                            <icons.MyQsPurpleIcon />
                                            <Text style={styles.questionText}>{item.Que}</Text>
                                        </View>
                                        <Text style={styles.dateText}>{item.date}</Text>
                                    </View>
                                    <View style={styles.answerRow}>
                                        <icons.MyAnswersIcon />
                                        <Text style={styles.answerText}>{item.Ans}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </ScrollView>
                <View style={styles.footerStyle}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your questions here."
                            placeholderTextColor={Colors.RomanSilver}
                        />
                    </View>
                    <AppButton
                        label={'Ask'}
                        image
                        imageRight
                        ImageSource={<icons.PostAnsIcon />}
                        background
                        buttonContainerStyle={styles.btnStyle}
                        textStyle={styles.btnTextStyle}
                    />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.FlashWhite
    },
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        marginTop: 20,
        padding: 20
    },
    headerTitle: {
        fontFamily: Fonts.semiBold,
        top: 1,
        color: Colors.AppColor,
        fontSize: Sizes.size18
    },
    qsCount: {
        fontFamily: Fonts.medium,
        top: 1,
        color: Colors.RomanSilver,
        fontSize: Sizes.size13
    },
    questionContainer: {
        paddingVertical: 30,
        borderTopWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.13)',
        marginTop: 15,
        gap: 20
    },
    questionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    questionInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    questionText: {
        fontFamily: Fonts.medium,
        top: 1,
        color: Colors.AppColor,
        fontSize: Sizes.size13,
        width: '70%'
    },
    dateText: {
        fontFamily: Fonts.medium,
        top: 1,
        fontSize: Sizes.size10,
        color: Colors.RomanSilver
    },
    answerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    answerText: {
        fontFamily: Fonts.regular,
        fontSize: Sizes.size13,
        top: 1,
        color: Colors.AppColor,
        lineHeight: 17,
        width: '91%'
    },
    footerStyle: {
        backgroundColor: Colors.White,
        width: Dimensions.get('screen').width,
        gap: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: Colors.AppColor,
        elevation: 30,
        height: 90,
        alignItems: "center"
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: Colors.BlackCoral,
        borderRadius: 25,
        width: '60%',
        paddingHorizontal: 20,
    },
    textInput: {
        width: '100%',
        fontSize: Sizes.size12,
        color: Colors.AppColor,
        fontFamily: Fonts.regular,
        top: 2
    },
    btnStyle: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        backgroundColor: Colors.BlueViolet,
        borderRadius: 40
    },
    btnTextStyle: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size12,
        top: 1,
        color: Colors.White
    },
});

export default ProductQA;
