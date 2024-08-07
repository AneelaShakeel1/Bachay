import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomSheetComponent from '../components/BottomSheetComponent';
import icons from '../constants/icons';
import { Colors, Fonts, Sizes } from '../constants/theme';
import DropShadow from 'react-native-drop-shadow';
import { selectChildDetails } from '../redux/features/auth/authSelectors';
import { useSelector } from 'react-redux';
import { selectUserDetails } from '../redux/features/auth/authSelectors';

const TopTabNavigation = ({
  FocusFeed,
  FocusRead,
  FocusQuesAnswer,
  FocusMemories,
  FocusVaccine,
  FocusQuiz
}) => {
  const navigation = useNavigation();
  const childData = useSelector(selectChildDetails);
  const userData = useSelector(selectUserDetails);

  console.log('childddddddddddddddddddataaaaaaaaaaaa', childData);

  const [isOpened, setisOpened] = useState(false);

  const OptionSelect = () => {
    return (
      <View style={styles.btnsContainer}>
        <DropShadow style={styles.shadow}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ParentingRead')}
            activeOpacity={0.8}
            style={styles.btnStyle}>
            <View style={styles.btnTextRow}>
              <icons.ArticlesIcon />
              <Text style={styles.btnText}>Articles</Text>
            </View>
            <icons.NavigationIcon />
          </TouchableOpacity>
        </DropShadow>
        <DropShadow style={styles.shadow}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Articles')}
            activeOpacity={0.8}
            style={styles.btnStyle}>
            <View style={styles.btnTextRow}>
              <icons.VideosIcon />
              <Text style={styles.btnText}>Videos</Text>
            </View>
            <icons.NavigationIcon />
          </TouchableOpacity>
        </DropShadow>
      </View>
    );
  };

  return (
    <>
      {isOpened ? (
        <BottomSheetComponent
          onPressMenu={() => setisOpened(!isOpened)}
          Component={OptionSelect}
          BGSheetColor={Colors.White}
          HEIGHT={200}
        />
      ) : null}
      <View style={[styles.iconRoot, { opacity: userData ? 1 : 0.5, }]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ParentingFeed')}
          activeOpacity={0.8}
          disabled={userData ? false : true}
          style={styles.iconContainer}>
          {userData && FocusFeed ? <icons.FeedIconA /> : <icons.FeedIconIA />}
          <Text
            style={[
              styles.tabNavigationText,
              { color: userData && FocusFeed ? Colors.BlueViolet : Colors.AppColor },
            ]}>
            Feed
          </Text>
          {userData && FocusFeed ? (
            <icons.BottomFlatIcon style={styles.bottomFlatIcon} />
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setisOpened(!isOpened);
          }}
          activeOpacity={0.8}
          disabled={userData ? false : true}
          style={styles.iconContainer}>
          {FocusRead ? <icons.ReadIconA /> : <icons.ReadIconIA />}
          <Text
            style={[
              styles.tabNavigationText,
              { color: FocusRead ? Colors.BlueViolet : Colors.AppColor },
            ]}>
            Read
          </Text>
          {FocusRead ? (
            <icons.BottomFlatIcon style={styles.bottomFlatIcon} />
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ParentingQA')}
          activeOpacity={0.8}
          disabled={userData ? false : true}
          style={styles.iconContainer}>
          {FocusQuesAnswer ? (
            <icons.QuesAnswerIconA />
          ) : (
            <icons.QuesAnswerIconIA />
          )}
          <Text
            style={[
              styles.tabNavigationText,
              { color: FocusQuesAnswer ? Colors.BlueViolet : Colors.AppColor },
            ]}>
            Q&A
          </Text>
          {FocusQuesAnswer ? (
            <icons.BottomFlatIcon style={styles.bottomFlatIcon} />
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ParentingQuiz')}
          activeOpacity={0.8}
          disabled={userData ? false : true}
          style={styles.iconContainer}>
          {FocusQuiz ? <icons.QuizIconA /> : <icons.QuizIconIA />}
          <Text
            style={[
              styles.tabNavigationText,
              { color: FocusQuiz ? Colors.BlueViolet : Colors.AppColor },
            ]}>
            Quiz
          </Text>
          {FocusQuiz ? (
            <icons.BottomFlatIcon style={styles.bottomFlatIcon} />
          ) : null}
        </TouchableOpacity>
        {/* <TouchableOpacity
        onPress={() => navigation.navigate('ParentingMemories')}
        activeOpacity={0.8} style={styles.iconContainer}>
        {FocusMemories ? <icons.MemoriesIconA /> : <icons.MemoriesIconIA />}
        <Text
          style={[
            styles.tabNavigationText,
            { color: FocusMemories ? Colors.BlueViolet : Colors.AppColor },
          ]}>
          Memories
        </Text>
        {FocusMemories ? (
          <icons.BottomFlatIcon style={styles.bottomFlatIcon} />
        ) : null}
      </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            if (childData?.length > 0) {
              navigation.replace('VaccineLogin');
            } else {
              navigation.navigate('ParentingVaccine');
            }
          }}
          activeOpacity={0.8}
          disabled={userData ? false : true}
          style={styles.iconContainer}>
          {FocusVaccine ? <icons.VaccineIconA /> : <icons.VaccineIconIA />}
          <Text
            style={[
              styles.tabNavigationText,
              { color: FocusVaccine ? Colors.BlueViolet : Colors.AppColor },
            ]}>
            Vaccine
          </Text>
          {FocusVaccine ? (
            <icons.BottomFlatIcon style={styles.bottomFlatIcon} />
          ) : null}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconRoot: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    shadowColor: Colors.AppColor,
    elevation: 5,
    height: 75,
    marginTop: 5,
  },
  iconContainer: {
    alignItems: 'center',
  },
  bottomFlatIcon: {
    position: 'absolute',
    bottom: 0,
  },
  tabNavigationText: {
    position: 'absolute',
    zIndex: 1,
    bottom: 10,
    fontSize: Sizes.size11,
    width: '220%',
    textAlign: 'center',
    fontFamily: Fonts.semiBold,
  },
  btnsContainer: {
    padding: 20,
    gap: 20
  },
  shadow: {
    shadowColor: Colors.AppColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  btnStyle: {
    backgroundColor: Colors.White,
    borderColor: Colors.BlackCoral,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 50,
    justifyContent: "space-between"
  },
  btnTextRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 7
  },
  btnText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size15,
    top: 1,
    color: Colors.AppColor
  }
});

export default TopTabNavigation;
