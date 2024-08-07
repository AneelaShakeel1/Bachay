import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, View, Text, TouchableOpacity, Image, RefreshControl } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import icons from "../../../../constants/icons";
import { Colors } from "../../../../constants/theme";
import ParentingAppHeader from "../../../../components/ParentingAppHeader";
import TopTabNavigation from "../../../../navigators/TopTabNavigation";
import { styles } from "./ParentingQA.style";
import { useDispatch, useSelector } from "react-redux";
import { selectQuestionList } from "../../../../redux/features/Main/mainSelector";
import { questionList } from "../../../../redux/features/Main/mainThunks";
import FullScreenLoader from "../../../../components/FullScreenLoader";
import { SafeAreaView } from "react-native-safe-area-context";
import { selectUserDetails } from "../../../../redux/features/auth/authSelectors";
import AppButton from "../../../../components/AppButton";
import { formatDistanceToNow } from "date-fns";

const ParentingQA = () => {
    const questionData = useSelector(selectQuestionList);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const userData = useSelector(selectUserDetails);

    const [loading, isLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const loadQuestionList = async () => {
        isLoading(true);
        await dispatch(questionList());
        isLoading(false);
    };

    useFocusEffect(
        React.useCallback(() => {
            loadQuestionList();
        }, [])
    );
    const onRefresh = () => {
        if (!loading) {
            isLoading(true);
            setRefreshing(true);
            dispatch(questionList())
                .then((res) => {
                    console.log('Question List Loaded Successfully', res)
                })
                .catch((error) => {
                    console.error("Error fetching question list:", error);
                })
                .finally(() => {
                    isLoading(false);
                    setRefreshing(false);
                })
                ;
        }
    };

    useEffect(() => {
        dispatch(questionList()).then(res => {
            isLoading(false);
        });
        console.log('question dataaaaaaaaaaaa', questionData);
    }, []);

    // const [quesAnsContent, setQuesAnsContent] = useState(false);

    // const toggleQuesAnsContent = () => {
    //     setQuesAnsContent(!quesAnsContent);
    // };

    console.log('question list:', questionData)

    return (
        <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.White}
                barStyle={'dark-content'}
            />
            <ParentingAppHeader />
            <TopTabNavigation FocusQuesAnswer />
            {loading ? (
                <FullScreenLoader />
            ) : (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
                    {questionData && questionData.length > 0 && (
                        questionData.map((item, index) => (
                            <View
                                key={item.id}
                                style={[
                                    styles.addAnsRoot,
                                    questionData.length > 1 && index !== questionData.length - 1 && {
                                        borderBottomWidth: 5,
                                        borderColor: Colors.SurfaceLightBlue,
                                    },
                                ]}
                            >
                                <View style={styles.userStatusRow}>
                                    <Text style={styles.addAnsStatus}>
                                        Guardian of 3 - 1 Boy 2 Girls
                                    </Text>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <icons.ParentingHorizontalToggleIcon style={{ top: -1 }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.addAnsUserHeader}>
                                    <View style={styles.addQuesUserHeaderLeft}>
                                        <Image
                                            style={styles.addAnsUserAvatar}
                                            resizeMode="cover"
                                            source={
                                                item.user.avatar
                                                    ? { uri: item.user.avatar }
                                                    : require('../../../../assets/images/userAvatar.png')
                                            }
                                        />
                                        {/* <Image
                                                    style={styles.addAnsUserAvatar}
                                                    source={{ uri: item.user.avatar }}
                                                    resizeMode="cover"
                                                /> */}
                                        <View style={styles.addAnsUserDetails}>
                                            <Text style={styles.addAnsUserName}>{item.user.f_name + ' ' + item.user.l_name}</Text>
                                            <Text style={styles.addAnsUserRelation}>
                                                Father of 3
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.addAnsQuestionView}>
                                    <icons.QuestionIcon />
                                    <Text style={styles.addAnsQuestionText}>{item.question}</Text>
                                </View>
                                {/* {item.imageStatus ?
                                            (
                                                <View style={styles.articleImageContainer}>
                                                    <Image
                                                        style={styles.articleImageStyle}
                                                        resizeMode="cover"
                                                        source={require("../../../../assets/images/parenting/videoBG.jpg")}
                                                    />
                                                </View>
                                            )
                                            :
                                            null
                                        } */}
                                <View style={styles.addAnsSeparatorLine} />
                                <View style={styles.addAnsAnswerView}>
                                    <View style={styles.addAnsAnswerViewLeft}>
                                        <TouchableOpacity onPress={() => navigation.navigate("AddAnswer", { questionId: item.id })} activeOpacity={0.8}>
                                            <View style={styles.addAnsAnswerViewLeftInner}>
                                                <icons.ParentingEditIcon />
                                                <Text style={styles.addAnsAnswerText}>Add Answer</Text>
                                            </View>
                                        </TouchableOpacity>
                                        {/* {item.answers.length > 0 && (
                                                    <TouchableOpacity onPress={() => navigation.navigate("ViewAnswer")} activeOpacity={0.8}>
                                                        <Text style={styles.addAnsAnswerTextLink}>View Answer</Text>
                                                    </TouchableOpacity>
                                                )} */}
                                    </View>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={styles.addAnsSmallBtn}
                                    >
                                        <Text style={styles.addAnsSmallBtnLink}>+ Follow</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.addAnsSeparatorLine} />
                                {item.answers && item.answers.length > 0 && (
                                    item.answers.map((answer, answerIndex) => (
                                        <>
                                            <View style={[styles.addAnsUserHeader, { marginBottom: 0 }]}>
                                                <View style={styles.addAnsUserHeaderLeft}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                                        <View key={answerIndex}>
                                                            <Image
                                                                style={[styles.addAnsUserAvatar, { width: 37, height: 37 }]}
                                                                resizeMode="cover"
                                                                source={
                                                                    answer.user && answer.user.avatar
                                                                        ? { uri: answer.user.avatar }
                                                                        : require('../../../../assets/images/userAvatar.png')
                                                                }
                                                            />
                                                        </View>
                                                        <View style={styles.addAnsUserDetails}>
                                                            <Text style={[styles.addAnsUserName, { fontSize: 12 }]}>{answer.user.f_name + ' ' + answer.user.l_name}</Text>
                                                            <Text style={[styles.addAnsUserRelation, { fontSize: 10 }]}>
                                                                Father of 3
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    <Text style={styles.addAnsUserActive}>
                                                        {formatDistanceToNow(new Date(item.created_at), {
                                                            addSuffix: true,
                                                            includeSeconds: true,
                                                        }).replace('about ', '')}
                                                    </Text>
                                                </View>
                                                <Text style={styles.addAnsUserActive}>{item.answers.created_at}</Text>
                                            </View>
                                            <Text style={styles.addAnsUserAnswerTitle}>Answer:</Text>
                                            <View key={answerIndex}>
                                                <Text style={styles.addAnsUserAnswerDescription}>{answer.answer}</Text>
                                            </View>
                                            <View style={styles.addAnsSeparatorLine} />
                                            <View style={styles.addAnsStatusRoot}>
                                                <View style={styles.addAnsStatusLeft}>
                                                    <icons.ParentingFeedLikeIcon />
                                                    <Text style={styles.addAnsStatusTextLink}>24</Text>
                                                </View>
                                                <View style={styles.addAnsStatusRight}>
                                                    <TouchableOpacity activeOpacity={0.8}>
                                                        <icons.ParentingFacebookIcon width={20} height={20} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={0.8}>
                                                        <icons.ParentingWhatsAppIcon width={22} height={22} />
                                                    </TouchableOpacity>
                                                    <Text style={styles.addAnsStatusText}>Share</Text>
                                                </View>
                                            </View>
                                            <View style={styles.addAnsSeparatorLine} />
                                        </>
                                    ))
                                )}
                            </View>
                        ))
                    )}
                </ScrollView>
            )}
            {!loading && (
                <TouchableOpacity
                    onPress={() => navigation.navigate('AddQuestion')}
                    activeOpacity={0.8}
                    style={styles.addButtonContainer}>
                    <icons.WhitePlusIcon />
                </TouchableOpacity>
            )}
        </SafeAreaView>
    );
};

export default ParentingQA;
