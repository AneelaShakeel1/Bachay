import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../../../constants/icons';
import { Colors } from '../../../../../constants/theme';
import ParentingAppHeader from '../../../../../components/ParentingAppHeader';
import ParentingSingleTitle from '../../../../../components/Parenting/ParentingSingleTitle';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../../../../../components/AppButton';
import DropShadow from 'react-native-drop-shadow';
import { styles } from './ViewAnswer.style';

const quesAnswer = [
  {
    userStatus: 'Guardian of 3',
    userChilds: '1 Boy 2 Girls',
    userQuestion:
      'What is the significance of mobile responsiveness in an eCommerce platform?',
    avatarImage: require('../../../../../assets/images/exploreprofile/userImage.jpg'),
    userName: 'Usman Sami',
    userRelation: 'Father of 3',
    userActive: '01 Hour Ago',
    answer:
      'Mobile responsiveness ensures that an eCommerce website is optimized for viewing and functionality on various devices, especially smartphones and tablets. This is crucial as a significant portion of online shoppers uses mobile devices.',
  },
];
const ViewAnswer = () => {
  const navigation = useNavigation();
  const [quesAnsContent, setQuesAnsContent] = useState(false);
  const toggleQuesAnsContent = () => {
    setQuesAnsContent(!quesAnsContent);
  };

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
        <ParentingSingleTitle title={'Questions'} icon iconImage={<icons.BackArrow onPress={() => navigation.goBack()} />} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.addAnsRoot}>
            <View style={styles.userStatusRow}>
              <Text style={styles.addAnsStatus}>
                {quesAnswer[0].userStatus} - {quesAnswer[0].userChilds}
              </Text>
              <TouchableOpacity activeOpacity={0.8}>
                <icons.ParentingHorizontalToggleIcon style={{ top: -1 }} />
              </TouchableOpacity>
            </View>
            <View style={styles.addAnsQuestionView}>
              <icons.QuestionIcon />
              <Text style={styles.addAnsQuestionText}>
                {quesAnswer[0].userQuestion}
              </Text>
            </View>
            <View style={styles.articleImageContainer}>
              <Image
                style={styles.articleImageStyle}
                resizeMode="cover"
                source={require('../../../../../assets/images/parenting/videoBG.jpg')}
              />
            </View>
            <View style={styles.addAnsSeparatorLine} />
            <View style={styles.addAnsAnswerView}>
              <View style={styles.addAnsAnswerViewLeft}>
                <icons.ParentingEditIcon />
                <Text style={styles.addAnsAnswerText}>
                  Answer {'   '}
                  <Text
                    onPress={() => navigation.navigate('ViewAnswer')}
                    style={styles.addAnsAnswerTextLink}>
                    View Answer
                  </Text>
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.addAnsSmallBtn}>
                <Text style={styles.addAnsSmallBtnLink}>+ Follow</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.addAnsSeparatorLine} />
            <View style={styles.addAnsUserHeader}>
              <View style={styles.addAnsUserHeaderLeft}>
                <Image
                  style={styles.addAnsUserAvatar}
                  source={quesAnswer[0].avatarImage}
                  resizeMode="cover"
                />
                <View style={styles.addAnsUserDetails}>
                  <Text style={styles.addAnsUserName}>
                    {quesAnswer[0].userName}
                  </Text>
                  <Text style={styles.addAnsUserRelation}>
                    {quesAnswer[0].userRelation}
                  </Text>
                </View>
              </View>
              <Text style={styles.addAnsUserActive}>
                {quesAnswer[0].userActive}
              </Text>
            </View>
            <Text style={styles.addAnsUserAnswerTitle}>Answer:</Text>
            {quesAnswer[0].answer.split(' ').length > 30 ? (
              <Text style={styles.addAnsUserAnswerDescription}>
                {quesAnsContent
                  ? quesAnswer[0].answer
                  : quesAnswer[0].answer.split(' ').slice(0, 30).join(' ')}
                {quesAnswer[0].answer.split(' ').length > 30 && (
                  <Text
                    style={styles.addAnsUserAnswerDescriptionLink}
                    onPress={toggleQuesAnsContent}>
                    {' '}
                    {quesAnsContent ? 'Read Less' : 'Read More'}
                  </Text>
                )}
              </Text>
            ) : (
              <Text style={styles.addAnsUserAnswerDescription}>
                {quesAnswer[0].answer}
              </Text>
            )}
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
            <View style={styles.loadBtnRoot}>
              <AppButton
                textStyle={styles.loadBtnTextStyle}
                background
                image
                imageRight
                ImageSource={<icons.DownArrowIcon />}
                label="Load More Answers"
                buttonContainerStyle={styles.loadBtnStyle}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <DropShadow
        style={{
          shadowColor: Colors.ColorGrey,
          shadowOffset: { width: 3, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 9,
        }}>
        <View style={styles.footerContainer}>
          <AppButton
            onPress={() => navigation.navigate('AddAnswer')}
            textStyle={styles.btnTextStyle}
            background
            label="Add Answer"
            buttonContainerStyle={styles.btnStyle}
          />
        </View>
      </DropShadow>
    </SafeAreaView>
  );
};

export default ViewAnswer;
