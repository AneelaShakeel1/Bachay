import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import ParentingAppHeader from '../../../../components/ParentingAppHeader';
import TopTabNavigation from '../../../../navigators/TopTabNavigation';
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../../../../components/AppButton';
import { styles } from './ParentingMemories.style';

const ParentingMemories = () => {

  const [expandedMemories, setExpandedMemories] = useState([]);
  const togglememoriesContent = (index) => {
    const newExpandedMemories = [...expandedMemories];
    newExpandedMemories[index] = !newExpandedMemories[index];
    setExpandedMemories(newExpandedMemories);
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
      category: '#happybaby',
      background: Colors.SurfaceLightBlue,
      color: Colors.AppColor,
    },
    {
      id: 3,
      category: '#cutestbaby',
      background: Colors.SurfaceLightBlue,
      color: Colors.AppColor,
    },
    {
      id: 4,
      category: '#megaphoto',
      background: Colors.SurfaceLightBlue,
      color: Colors.AppColor,
    },
  ];

  const memories = [
    {
      id: '1',
      hashtag: '#happybaby',
      description:
        '#HappyBaby is a celebration of joy and parenthood! Join our community to share the delightful moments of babyhood. From adorable giggles to tiny milestones, use #HappyBaby to connect with parents worldwide. Let`s cherish the happiness that little ones bring into our lives and create a heartwarming tapestry of parenthood together.',
      thumbNailImage: require('../../../../assets/images/parenting/videoBG.jpg'),
      likesCount: '125',
      commentsCount: '1102',
      activeStatus: '01 Hour Ago',
    },
    {
      id: '2',
      hashtag: '#cutestbaby',
      description:
        '#CutestBaby captures the enchanting world of adorable little ones! Share the sweetness with fellow parents by using this hashtag. From charming smiles to heart-melting expressions, let`s showcase the undeniable cuteness of your precious bundle. Join the community, spread joy, and revel in the endless charm of your #CutestBaby moments. 🍼👶💕',
      thumbNailImage: require('../../../../assets/images/parenting/articleBG.jpg'),
      likesCount: '234',
      commentsCount: '12',
      activeStatus: '04 Hour Ago',
    },
    {
      id: '3',
      hashtag: '#megaphoto',
      description:
        '#MegaPhoto is your gateway to an expansive world of captivating visuals! Share and discover awe-inspiring photos that leave a lasting impression. Whether it`s breathtaking landscapes, creative compositions, or candid moments, use #MegaPhoto to contribute to this dynamic community and amplify the beauty of photography. 📷✨',
      thumbNailImage: require('../../../../assets/images/parenting/thumbNailVideo.jpg'),
      likesCount: '24',
      commentsCount: '12',
      activeStatus: '02 Hour Ago',
      feedVideo: true,
    },
    {
      id: '4',
      hashtag: '#happybaby',
      description:
        '#HappyBaby is a celebration of joy and parenthood! Join our community to share the delightful moments of babyhood. From adorable giggles to tiny milestones, use #HappyBaby to connect with parents worldwide. Let`s cherish the happiness that little ones bring into our lives and create a heartwarming tapestry of parenthood together.',
      thumbNailImage: require('../../../../assets/images/parenting/videoBG.jpg'),
      likesCount: '34',
      commentsCount: '12',
      activeStatus: '03 Hour Ago',
    },
  ];

  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = id => {
    setSelectedCategory(id);
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={styles.root}>
        <ParentingAppHeader marginTop={24} />
        <TopTabNavigation FocusQuiz />
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
            data={memories}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View style={styles.memoriesContainer}>
                <View style={styles.profileInfoContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ParentingProfile')}
                    style={styles.profileContainer}
                    activeOpacity={0.8}>
                    <Image
                      style={styles.profileImage}
                      source={require('../../../../assets/images/exploreprofile/userImage.jpg')}
                      resizeMode="cover"
                    />
                    <View style={styles.profileTextContainer}>
                      <Text style={styles.profileName}>Rabia Kausar</Text>
                      <Text style={styles.profileStatus}>
                        Mother Of 3 - 1 Boy 2 Girls
                      </Text>
                      <View style={styles.profileMedalsContainer}>
                        <View style={styles.medalsRow}>
                          <icons.SilverMedal style={styles.medalIcon} />
                          <icons.PlatiniumBlueMedal style={styles.medalIcon} />
                          <Text style={styles.medalCount}>+2</Text>
                        </View>
                        <View style={styles.medalsRow}>
                          <icons.GoldTrophy style={styles.medalIcon} />
                          <Text style={styles.medalText}>Gold</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <icons.ParentingHorizontalToggleIcon />
                </View>
                <View style={styles.memoriesTextContainer}>
                  <Text style={styles.hashtag}>{item.hashtag}</Text>
                  <Text style={styles.memoriesDescription}>
                    {expandedMemories[index]
                      ? item.description
                      : item.description.split(' ').slice(0, 13).join(' ')}
                    <Text
                      style={styles.memoriesDescriptionLink}
                      onPress={() => togglememoriesContent(index)}
                    >
                      {expandedMemories[index] ? ' Read Less' : ' Read More'}
                    </Text>
                  </Text>
                  <View style={styles.imageContainer}>
                    {item.feedVideo ? (
                      <LinearGradient
                        colors={['rgba(0, 0, 0, 0.50)', Colors.AppColor]}
                        start={{ x: 0.5, y: 0.5 }}
                        end={{ x: 0.5, y: 1 }}
                        locations={[0.4621, 1.0071]}
                        style={styles.memoriesVideoContainer}>
                        <Image
                          source={item.thumbNailImage}
                          style={styles.memoriesVideo}
                          resizeMode="cover"
                        />
                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={styles.youtubeIconStyle}>
                          <icons.PlayIcon style={{ left: 2 }} />
                        </TouchableOpacity>
                      </LinearGradient>
                    ) : (
                      <Image
                        style={styles.memoriesImage}
                        resizeMode="cover"
                        source={item.thumbNailImage}
                      />
                    )}
                  </View>
                </View>
                <View style={styles.bottomRowContainer}>
                  <View style={styles.likesCommentsContainer}>
                    <Text style={styles.likesText}>
                      Likes:{' '}
                      <Text style={styles.likesCount}>{item.likesCount}</Text>
                    </Text>
                    <Text style={styles.commentsText}>
                      Comment:{' '}
                      <Text style={styles.commentsCount}>
                        {item.commentsCount}
                      </Text>
                    </Text>
                  </View>
                  <Text style={styles.timeAgoText}>{item.activeStatus}</Text>
                </View>
                <View style={styles.actionsRow}>
                  <View style={styles.actionItem}>
                    <icons.ParentingFeedLikeIcon />
                    <Text style={styles.actionText}>Likes</Text>
                  </View>
                  <View style={styles.actionItem}>
                    <icons.ParentingFeedCommentIcon />
                    <Text style={styles.actionText}>Comments</Text>
                  </View>
                  <View style={styles.actionItem}>
                    <icons.ParentingFeedShareIcon />
                    <Text style={styles.actionText}>Share</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.addButtonContainer}>
          <icons.WhitePlusIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ParentingMemories;
