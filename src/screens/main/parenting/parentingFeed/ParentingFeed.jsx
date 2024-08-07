import React, { useState } from "react";
import { ScrollView, StatusBar, View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Colors } from "../../../../constants/theme";
import icons from "../../../../constants/icons";
import ParentingAppHeader from "../../../../components/ParentingAppHeader";
import TopTabNavigation from "../../../../navigators/TopTabNavigation";
import BannerCarousel from "../../../../components/Parenting/BannerCarousel";
import GradientText from "../../../../components/GradientText";
import AppButton from "../../../../components/AppButton";
import { selectUserDetails } from "../../../../redux/features/auth/authSelectors";
import { useSelector } from "react-redux";
import FullScreenLoader from "../../../../components/FullScreenLoader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./ParentingFeed.style";

const ParentingFeed = () => {
  const userData = useSelector(selectUserDetails);
  const [vaccineContent, setVaccineContent] = useState(null);
  const navigation = useNavigation();
  const [loading, isLoading] = useState(false);

  const toggleVaccineContent = (index) => {
    if (vaccineContent === index) {
      setVaccineContent(null);
    } else {
      setVaccineContent(index);
    }
  };

  const [quesAnsContent, setQuesAnsContent] = useState(false);
  const toggleQuesAnsContent = () => {
    setQuesAnsContent(!quesAnsContent);
  };

  const [expandedIndex, setExpandedIndex] = useState([]);
  const toggleExpand = index => {
    setExpandedIndex(prevIndices => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter(i => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  const articles = [
    {
      id: 1,
      bgImage: require('../../../../assets/images/parenting/articleBG.jpg'),
      title: 'The Future of eCommerce: Trends Shaping the Industry',
      viewsCount: 234,
      likeCount: 256
    },
    {
      id: 2,
      bgImage: require('../../../../assets/images/parenting/articleBG.jpg'),
      title: 'Optimizing Your Product Pages for Maximum Conversions',
      viewsCount: 190,
      likeCount: 100
    },
    {
      id: 3,
      bgImage: require('../../../../assets/images/parenting/articleBG.jpg'),
      title: 'Building Trust in eCommerce: Strategies for Credibility',
      viewsCount: 350,
      likeCount: 240
    },
    {
      id: 4,
      bgImage: require('../../../../assets/images/parenting/articleBG.jpg'),
      title: 'The Power of Social Commerce: Integrating Social Media into Your Strategy',
      viewsCount: 240,
      likeCount: 278
    },
  ];

  const suggestArticles = [
    {
      bgImage: require('../../../../assets/images/parenting/articleBG.jpg'),
      title: 'Navigating International eCommerce: A Guide to Global Expansion',
      description: 'Expand your eCommerce business globally with confidence. This article covers key considerations such as localization, international shipping, and adapting to diverse cultural preferences.',
      viewsCount: 234,
      likeCount: 256
    },
  ];

  const videos = [
    {
      id: 1,
      bgImage: require('../../../../assets/images/parenting/videoBG.jpg'),
      title: 'Winning at SEO for eCommerce',
      viewsCount: 234,
      likeCount: 256
    },
    {
      id: 2,
      bgImage: require('../../../../assets/images/parenting/videoBG.jpg'),
      title: 'Personalization in eCommerce',
      viewsCount: 190,
      likeCount: 100
    },
    {
      id: 3,
      bgImage: require('../../../../assets/images/parenting/videoBG.jpg'),
      title: 'The Rise of Subscription eCommerce',
      viewsCount: 350,
      likeCount: 240
    },
    {
      id: 4,
      bgImage: require('../../../../assets/images/parenting/videoBG.jpg'),
      title: 'Toddler Play & Activity',
      viewsCount: 240,
      likeCount: 278
    },
  ];

  const vaccineItems = [
    {
      id: '1',
      title: 'MMR',
      description: "The MMR vaccine, encompassing protection against measles, mumps, and rubella, stands as a shield against highly contagious and potentially severe diseases. This short but powerful combination of vaccines is a cornerstone of public health, contributing to the prevention of outbreaks and fostering community immunity.",
      dueDate: "03 Sep 2023",
      reminderDate: "01 Sep 2024"
    },
    {
      id: '2',
      title: 'Varicella',
      description: "The varicella vaccine, commonly known as the chickenpox vaccine, is a crucial tool in protecting individuals from the highly contagious varicella-zoster virus. This immunization not only prevents the discomfort of chickenpox but also reduces the risk of more severe complications.",
      dueDate: "03 Sep 2023",
      reminderDate: "01 Sep 2024"
    },
    {
      id: '3',
      title: 'DTP B2',
      description: "The DTP (Diphtheria, Tetanus, Pertussis) and B2 (Haemophilus influenzae type b) vaccines play a crucial role in fortifying the immune system against serious bacterial infections. By combining protection against diphtheria, tetanus, pertussis, and Haemophilus influenzae type b, this vaccine duo provides a comprehensive defense for infants and young children.",
      dueDate: "03 Sep 2023",
      reminderDate: "01 Sep 2024"
    }
  ];

  const BPLActivities = [
    {
      id: 1,
      title: 'Complete Total 25 Quizzes',
      totalTask: 25,
      completedTask: 14
    },
    {
      id: 2,
      title: 'Participate in 10 Contests!',
      totalTask: 10,
      completedTask: 10
    },
    {
      id: 3,
      title: 'Complete Total 50 Quizzes',
      totalTask: 50,
      completedTask: 25
    },
    {
      id: 4,
      title: 'Participate in 3 Contests!',
      totalTask: 3,
      completedTask: 1
    }
  ]

  const popularMemory = [
    {
      avatarImage: require('../../../../assets/images/exploreprofile/userImage.jpg'),
      userName: 'Usman Sami',
      userRelation: 'Father Of 3',
      userActive: '01 Hour Ago',
      description: 'Expand your eCommerce business globally with confidence. This article covers key considerations such as localization, international shipping, and adapting to diverse cultural preferences.',
      feedImage: require('../../../../assets/images/parenting/videoBG.jpg'),
      likeCount: 256,
      commentsCount: 234,
    },
  ];

  const quesAnswer = [
    {
      userStatus: 'Guardian of 3',
      userChilds: '1 Boy 2 Girls',
      userQuestion: 'What is an eCommerce platform?',
      userAnswerCount: "01",
      avatarImage: require('../../../../assets/images/exploreprofile/userImage.jpg'),
      userName: 'Usman Sami',
      userRelation: 'Father of 3',
      userActive: '01 Hour Ago',
      answer: 'An eCommerce platform is a software application that enables businesses to conduct online transactions. It includes features such as product listing, shopping cart functionality, secure payment gateways, and order management, providing a complete solution for selling products or services online.',
    },
  ];

  console.log(quesAnswer[0].answer.split(' ').slice(0, 13).join(' '))

  const renderVaccineItem = ({ item, index }) => (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => toggleExpand(index)}
        style={[
          styles.accordionBtnView,
          {
            borderBottomLeftRadius: expandedIndex.includes(index) ? 0 : 30,
            borderBottomRightRadius: expandedIndex.includes(index) ? 0 : 30,
            borderBottomWidth: expandedIndex.includes(index) ? 0 : 0.5,
          },
        ]}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7 }}>
          <icons.ParentingSyringeIcon width={20} height={20} />
          <Text style={styles.accordionTitle}>{item.title}</Text>
        </View>
        {expandedIndex.includes(index) ? (
          <icons.UpwardArrowIcon width={12} height={12} />
        ) : (
          <icons.DownwardArrowIcon width={12} height={12} />
        )}
      </TouchableOpacity>
      {expandedIndex.includes(index) && (
        <View style={styles.accordionDescView}>
          {item.description.split(' ').length > 13 ? (
            <>
              <Text style={styles.accordionDesc}>
                {vaccineContent === index
                  ? item.description
                  : item.description.split(' ').slice(0, 13).join(' ')}
                {vaccineContent === index ? (
                  <>
                    <Text
                      style={styles.accordionDescLink}
                      onPress={() => toggleVaccineContent(index)}
                    >
                      {''} Read Less
                    </Text>
                  </>
                ) : (
                  <>
                    <Text
                      style={styles.accordionDescLink}
                      onPress={() => toggleVaccineContent(index)}
                    >
                      {''} Read More
                    </Text>
                  </>
                )}
              </Text>
            </>
          ) : (
            <Text style={styles.accordionDesc}>{item.description}</Text>
          )}
          <View style={styles.accordionDescChild}>
            <Text style={styles.accordionDescTitle}>Due on: {''}
              <Text style={styles.accordionDescLink}>{item.dueDate}</Text>
            </Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.accordionDescBtn}>
              <Text style={styles.accordionDescBtnLink}>Mark Done</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.accordionDescChild}>
            <Text style={styles.accordionDescTitle}>Reminder set for: {''}
              <Text style={styles.accordionDescLink}>{item.reminderDate}</Text>
            </Text>
            <icons.ParentingDateIcon width={18} height={18} style={{ top: 3 }} />
          </View>
        </View>
      )}
    </>
  );

  const storiesData = [
    {
      profile: require('../../../../assets/images/categories/CategoriesImage1.png'),
      name: 'Ahsan'
    },
    {
      profile: require('../../../../assets/images/categories/CategoriesImage2.png'),
      name: 'Talha'
    },
    {
      profile: require('../../../../assets/images/categories/CategoriesImage3.png'),
      name: 'Usman'
    },
    {
      profile: require('../../../../assets/images/categories/CategoriesImage4.png'),
      name: 'Aneela'
    },
    {
      profile: require('../../../../assets/images/categories/CategoriesImage5.png'),
      name: 'Talha'
    },
    {
      profile: require('../../../../assets/images/categories/CategoriesImage1.png'),
      name: 'Usman'
    }
  ]

  return (
    <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={styles.root}>
        <ParentingAppHeader />
        <TopTabNavigation FocusFeed />
        {userData && loading ?
          (
            <FullScreenLoader />
          )
          :
          (
            <ScrollView showsVerticalScrollIndicator={false}>
              {userData && !loading ?
                (
                  <>
                    <View style={styles.mainView}>
                      <FlatList
                        horizontal
                        data={storiesData}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        renderItem={({ item }) => (
                          <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.categoriesContainer}>
                              <View style={{ flexDirection: 'column' }}>
                                <LinearGradient
                                  colors={Colors.gradientColor}
                                  locations={[0, 0.3, 0.7, 1, 1]}
                                  start={{ x: 1, y: 0 }}
                                  end={{ x: 0, y: 0 }}
                                  style={styles.gradientContainer}>
                                  <Image
                                    resizeMode="cover"
                                    style={styles.imageContainer}
                                    source={item.profile}
                                  />
                                </LinearGradient>
                                <Text style={styles.imageTitle}>{item.name}</Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        )}
                      />
                    </View>
                    <BannerCarousel />
                    <View style={styles.cardRoot}>
                      <View style={styles.cardHeadingView}>
                        <GradientText title={'Highlight of The Week'} width={270} size={26} />
                        <Text style={[styles.cardMainTitle, { marginTop: -10 }]}>New Article for you</Text>
                      </View>
                      <FlatList
                        data={articles}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.cardListContainer}
                        renderItem={({ item }) => (
                          <TouchableOpacity activeOpacity={0.9}>
                            <LinearGradient
                              colors={['rgba(0, 0, 0, 0.40)', Colors.AppColor]}
                              start={{ x: 0.5, y: 0 }}
                              end={{ x: 0.5, y: 1 }}
                              locations={[0.4621, 1.0071]}
                              style={styles.cardImageContainer}>
                              <Image source={item.bgImage} style={styles.cardImageStyle} resizeMode="cover" />
                              <View style={styles.cardContent}>
                                <Text numberOfLines={2} style={styles.cardTitle}>
                                  {item.title}
                                </Text>
                                <View style={styles.cardBottomActionBar}>
                                  <View style={styles.cardActionIconView}>
                                    <icons.ParentingEyeIcon />
                                    <Text style={styles.cardActionText}>{item.viewsCount}</Text>
                                    <TouchableOpacity
                                      activeOpacity={0.8}
                                      onPress={handleLikePress}
                                      style={{ flexDirection: 'row', alignItems: "center", gap: 5 }}>
                                      {isLiked ? <icons.OrangeLikeIcon style={{ marginLeft: 8 }} /> : <icons.ParentingLikeIcon style={{ marginLeft: 8 }} />}
                                      <Text style={[styles.cardActionText, { color: isLiked ? Colors.BeerColor : Colors.White }]}>{item.likeCount}</Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={styles.cardActionIconView}>
                                    <TouchableOpacity activeOpacity={0.8}>
                                      <icons.ParentingFacebookIcon />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8}>
                                      <icons.ParentingWhatsAppIcon style={{ marginLeft: 2 }} />
                                    </TouchableOpacity>
                                    <Text style={styles.cardActionText}>Share</Text>
                                  </View>
                                </View>
                              </View>
                            </LinearGradient>
                          </TouchableOpacity>
                        )}
                      />
                    </View>
                    <View style={styles.cardRoot}>
                      <View style={styles.cardHeadingView}>
                        <Text style={styles.cardMainTitle}>Video you might be interested in</Text>
                      </View>
                      <FlatList
                        data={videos}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.cardListContainer}
                        renderItem={({ item }) => (
                          <>
                            <LinearGradient
                              colors={['rgba(0, 0, 0, 0.40)', Colors.AppColor]}
                              start={{ x: 0.5, y: 0 }}
                              end={{ x: 0.5, y: 1 }}
                              locations={[0.4621, 1.0071]}
                              style={styles.cardImageContainer}>
                              <Image source={item.bgImage} style={styles.cardImageStyle} resizeMode="cover" />
                              <TouchableOpacity activeOpacity={0.8} style={styles.youtubeIconStyle}>
                                <icons.ParentingYoutubeIcon />
                              </TouchableOpacity>
                              <View style={styles.cardContent}>
                                <Text numberOfLines={2} style={styles.cardTitle}>
                                  {item.title}
                                </Text>
                                <View style={styles.cardBottomActionBar}>
                                  <View style={styles.cardActionIconView}>
                                    <icons.ParentingEyeIcon />
                                    <Text style={styles.cardActionText}>{item.viewsCount}</Text>
                                    <TouchableOpacity
                                      activeOpacity={0.8}
                                      onPress={handleLikePress}
                                      style={{ flexDirection: 'row', alignItems: "center", gap: 5 }}>
                                      {isLiked ? <icons.OrangeLikeIcon style={{ marginLeft: 8 }} /> : <icons.ParentingLikeIcon style={{ marginLeft: 8 }} />}
                                      <Text style={[styles.cardActionText, { color: isLiked ? Colors.BeerColor : Colors.White }]}>{item.likeCount}</Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={styles.cardActionIconView}>
                                    <TouchableOpacity activeOpacity={0.8}>
                                      <icons.ParentingFacebookIcon />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8}>
                                      <icons.ParentingWhatsAppIcon style={{ marginLeft: 2 }} />
                                    </TouchableOpacity>
                                    <Text style={styles.cardActionText}>Share</Text>
                                  </View>
                                </View>
                              </View>
                            </LinearGradient>
                          </>
                        )}
                      />
                    </View>
                    <View style={styles.cardRoot}>
                      <View style={styles.cardHeadingView}>
                        <Text style={styles.cardMainTitle}>Vaccination Tracker</Text>
                      </View>
                      <View style={styles.vaccTrackRoot}>
                        <LinearGradient
                          colors={['rgba(0, 0, 0, 0.09)', Colors.AppColor]}
                          style={styles.vaccTrackGradient}>
                          <Image source={require('../../../../assets/images/parenting/ageBG.jpg')} style={styles.vaccTrackImage} resizeMode="cover" />
                          <Text style={styles.vaccTrackTitle}>
                            4 to 6 Years
                          </Text>
                        </LinearGradient>
                        <View style={{ width: '100%', marginTop: 20 }}>
                          <FlatList
                            data={vaccineItems}
                            keyExtractor={item => item.id}

                            renderItem={renderVaccineItem}
                            contentContainerStyle={{ gap: 15 }}
                          />
                        </View>
                        <View style={styles.statusContainer}>
                          <View style={styles.statusCountViewRow}>
                            <View style={[styles.statusCountView, { backgroundColor: Colors.RedColor }]}>
                              <Text style={styles.statusCount}>0</Text>
                            </View>
                            <Text style={styles.statusText}>Overdue</Text>
                          </View>
                          <View style={styles.statusCountViewRow}>
                            <View style={[styles.statusCountView, { backgroundColor: Colors.BeerColor }]}>
                              <Text style={styles.statusCount}>2</Text>
                            </View>
                            <Text style={styles.statusText}>Upcoming</Text>
                          </View>
                          <View style={styles.statusCountViewRow}>
                            <View style={[styles.statusCountView, { backgroundColor: Colors.GreenColor }]}>
                              <Text style={styles.statusCount}>0</Text>
                            </View>
                            <Text style={styles.statusText}>Completed</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <LinearGradient
                      style={styles.activitiesContainer}
                      // style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 30, padding: 20, alignItems: 'center'}}
                      colors={Colors.gradientColor}
                      locations={[0.6, 1, 1, 1, 0]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}>
                      <View style={styles.activitiesHeadingView}>
                        <Text style={styles.activitiesLeftTitle}>Your BPL Activities!</Text>
                        <TouchableOpacity activeOpacity={0.8}>
                          <Text style={styles.activitiesRightTitle}>See All</Text>
                        </TouchableOpacity>
                      </View>
                      <FlatList
                        data={BPLActivities}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        renderItem={({ item }) => {
                          const completed = item.completedTask;
                          const total = item.totalTask;
                          const completionPercentage = (completed / total) * 100;
                          return (
                            <View style={styles.activitiesStatusContainer}>
                              <icons.ParentingStarIcon />
                              <Text style={styles.accordionTitle}>{item.title}</Text>
                              {item.completedTask === item.totalTask
                                ?
                                <View style={styles.bplTickIcon}>
                                  <icons.BPLTickIcon width={16} height={16} />
                                </View>
                                :
                                <AnimatedCircularProgress
                                  size={45}
                                  width={4}
                                  fill={completionPercentage}
                                  style={styles.activitiesCountStatus}
                                  tintColor={Colors.BlueViolet}
                                  backgroundColor={Colors.Gainsboro}
                                >
                                  {() => (
                                    <Text style={styles.activitiesCountText}>
                                      {`${completed}/${total}`}
                                    </Text>
                                  )}
                                </AnimatedCircularProgress>
                              }
                            </View>
                          )
                        }}
                      />
                    </LinearGradient>
                    <View style={styles.cardRoot}>
                      <View style={styles.cardHeadingView}>
                        <Text style={styles.cardMainTitle}>Video you might be interested in</Text>
                      </View>
                      <FlatList
                        data={videos}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.cardListContainer}
                        renderItem={({ item }) => (
                          <>
                            <LinearGradient
                              colors={['rgba(0, 0, 0, 0.40)', Colors.AppColor]}
                              start={{ x: 0.5, y: 0 }}
                              end={{ x: 0.5, y: 1 }}
                              locations={[0.4621, 1.0071]}
                              style={styles.cardImageContainer}>
                              <Image source={item.bgImage} style={styles.cardImageStyle} resizeMode="cover" />
                              <TouchableOpacity activeOpacity={0.8} style={styles.youtubeIconStyle}>
                                <icons.ParentingYoutubeIcon />
                              </TouchableOpacity>
                              <View style={styles.cardContent}>
                                <Text numberOfLines={2} style={styles.cardTitle}>
                                  {item.title}
                                </Text>
                                <View style={styles.cardBottomActionBar}>
                                  <View style={styles.cardActionIconView}>
                                    <icons.ParentingEyeIcon />
                                    <Text style={styles.cardActionText}>{item.viewsCount}</Text>
                                    <TouchableOpacity
                                      activeOpacity={0.8}
                                      onPress={handleLikePress}
                                      style={{ flexDirection: 'row', alignItems: "center", gap: 5 }}>
                                      {isLiked ? <icons.OrangeLikeIcon style={{ marginLeft: 8 }} /> : <icons.ParentingLikeIcon style={{ marginLeft: 8 }} />}
                                      <Text style={[styles.cardActionText, { color: isLiked ? Colors.BeerColor : Colors.White }]}>{item.likeCount}</Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={styles.cardActionIconView}>
                                    <TouchableOpacity activeOpacity={0.8}>
                                      <icons.ParentingFacebookIcon />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8}>
                                      <icons.ParentingWhatsAppIcon style={{ marginLeft: 2 }} />
                                    </TouchableOpacity>
                                    <Text style={styles.cardActionText}>Share</Text>
                                  </View>
                                </View>
                              </View>
                            </LinearGradient>
                          </>
                        )}
                      />
                    </View>
                    <View style={styles.cardRoot}>
                      <View style={styles.cardHeadingView}>
                        <Text style={styles.cardMainTitle}>Suggested for you</Text>
                      </View>
                      <TouchableOpacity style={styles.cardListContainer} activeOpacity={0.9}>
                        <LinearGradient
                          colors={['rgba(0, 0, 0, 0.40)', Colors.AppColor]}
                          start={{ x: 0.5, y: 0 }}
                          end={{ x: 0.5, y: 1 }}
                          locations={[0.4621, 1.0071]}
                          style={styles.suggestImageContainer}
                        >
                          <Image source={suggestArticles[0].bgImage} style={styles.suggestImageStyle} resizeMode="cover" />
                          <View style={styles.cardContent}>
                            <Text numberOfLines={2} style={styles.cardTitle}>
                              {suggestArticles[0].title}
                            </Text>
                            <Text numberOfLines={3} style={styles.cardDescription}>
                              {suggestArticles[0].description}
                            </Text>
                            <View style={styles.cardBottomActionBar}>
                              <View style={styles.cardActionIconView}>
                                <icons.ParentingEyeIcon />
                                <Text style={styles.cardActionText}>{suggestArticles[0].viewsCount}</Text>
                                <TouchableOpacity
                                  activeOpacity={0.8}
                                  onPress={handleLikePress}
                                  style={{ flexDirection: 'row', alignItems: "center", gap: 5 }}>
                                  {isLiked ? <icons.OrangeLikeIcon style={{ marginLeft: 8 }} /> : <icons.ParentingLikeIcon style={{ marginLeft: 8 }} />}
                                  <Text style={[styles.cardActionText, { color: isLiked ? Colors.BeerColor : Colors.White }]}>{suggestArticles[0].likeCount}</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={styles.cardActionIconView}>
                                <TouchableOpacity activeOpacity={0.8}>
                                  <icons.ParentingFacebookIcon />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8}>
                                  <icons.ParentingWhatsAppIcon style={{ marginLeft: 2 }} />
                                </TouchableOpacity>
                                <Text style={styles.cardActionText}>Share</Text>
                              </View>
                            </View>
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.cardRoot}>
                      <View style={styles.cardHeadingView}>
                        <Text style={styles.cardMainTitle}>Popular Memory</Text>
                      </View>
                      <View style={styles.pMemoriesRoot}>
                        <View style={styles.pMemoriesUserHeader}>
                          <View style={styles.pMemoriesUserHeaderLeft}>
                            <Image style={styles.pMemoriesUserAvatar} source={popularMemory[0].avatarImage} resizeMode="cover" />
                            <View style={styles.pMemoriesUserDetails}>
                              <Text style={styles.pMemoriesUserName}>{popularMemory[0].userName}</Text>
                              <Text style={styles.pMemoriesUserRelation}>{popularMemory[0].userRelation}</Text>
                              <Text style={styles.pMemoriesUserActive}>{popularMemory[0].userActive}</Text>
                            </View>
                          </View>
                          <TouchableOpacity activeOpacity={0.8}>
                            <icons.ParentingToggleIcon />
                          </TouchableOpacity>
                        </View>
                        <Text numberOfLines={3} style={styles.pMemoriesUserDescription}>{popularMemory[0].description}</Text>
                        <Image source={popularMemory[0].feedImage} style={styles.pMemoriesFeedImageStyle} resizeMode="cover" />
                        <View style={styles.pMemoriesStatus}>
                          <View style={styles.pMemoriesStatusLeft}>
                            <Text style={styles.pMemoriesStatusText}>
                              Likes: {''}
                              <Text style={styles.pMemoriesStatusTextLink}>{popularMemory[0].likeCount}</Text>
                            </Text>
                            <Text style={styles.pMemoriesStatusText}>
                              Comments: {''}
                              <Text style={styles.pMemoriesStatusTextLink}>{popularMemory[0].commentsCount}</Text>
                            </Text>
                          </View>
                          <View style={styles.pMemoriesStatusRight}>
                            <TouchableOpacity activeOpacity={0.8}>
                              <icons.ParentingFacebookIcon width={18} height={18} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}>
                              <icons.ParentingWhatsAppIcon />
                            </TouchableOpacity>
                            <Text style={[styles.pMemoriesStatusTextLink, { color: Colors.AppColor }]}>Share</Text>
                          </View>
                        </View>
                        <View style={styles.pMemoriesSeparatorLine} />
                        <View style={styles.pMemoriesAction}>
                          <TouchableOpacity activeOpacity={0.8} style={styles.pMemoriesActionView} onPress={handleLikePress}>
                            {isLiked ? <icons.ParentingFeedLikeIcon /> : < icons.ParentingFeedLikeIcon />}
                            <Text style={[styles.pMemoriesActionText, { color: isLiked ? Colors.BlueViolet : Colors.AppColor }]}>Likes</Text>
                          </TouchableOpacity>
                          <View style={styles.pMemoriesActionView}>
                            <icons.ParentingFeedCommentIcon />
                            <Text style={styles.pMemoriesActionText}>Comments</Text>
                          </View>
                          <View style={styles.pMemoriesActionView}>
                            <icons.ParentingFeedShareIcon />
                            <Text style={styles.pMemoriesActionText}>Share</Text>
                          </View>
                        </View>
                        <View style={styles.pMemoriesSeparatorLine} />
                      </View>
                    </View>
                    <View style={styles.cardRoot}>
                      <View style={styles.cardHeadingView}>
                        <Text style={styles.cardMainTitle}>Usman Sami has added a new answer</Text>
                      </View>
                      <View style={styles.addAnsRoot}>
                        <Text style={styles.addAnsStatus}>{quesAnswer[0].userStatus} - {quesAnswer[0].userChilds}</Text>
                        <View style={styles.addAnsQuestionView}>
                          <icons.QuestionIcon />
                          <Text style={styles.addAnsQuestionText}>{quesAnswer[0].userQuestion}</Text>
                        </View>
                        <View style={styles.addAnsSeparatorLine} />
                        <View style={styles.addAnsAnswerView}>
                          <View style={styles.addAnsAnswerViewLeft}>
                            <icons.ParentingEditIcon />
                            <Text style={styles.addAnsAnswerText}>
                              Answer {''}
                              <Text style={styles.addAnsAnswerTextLink}>({quesAnswer[0].userAnswerCount})</Text>
                            </Text>
                          </View>
                          <TouchableOpacity activeOpacity={0.8} style={styles.addAnsSmallBtn}>
                            <Text style={styles.addAnsSmallBtnLink}>+ Follow</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.addAnsSeparatorLine} />
                        <View style={styles.addAnsUserHeader}>
                          <View style={styles.addAnsUserHeaderLeft}>
                            <Image style={styles.addAnsUserAvatar} source={quesAnswer[0].avatarImage} resizeMode="cover" />
                            <View style={styles.addAnsUserDetails}>
                              <Text style={styles.addAnsUserName}>{quesAnswer[0].userName}</Text>
                              <Text style={styles.addAnsUserRelation}>{quesAnswer[0].userRelation}</Text>
                            </View>
                          </View>
                          <Text style={styles.addAnsUserActive}>{quesAnswer[0].userActive}</Text>
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
                                onPress={toggleQuesAnsContent}
                              >
                                {' '} {quesAnsContent ? 'Read Less' : 'Read More'}
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
                          <TouchableOpacity onPress={handleLikePress} activeOpacity={0.8} style={styles.addAnsStatusLeft}>
                            {isLiked ? <icons.ParentingFeedLikeIcon /> : <icons.ParentingFeedLikeIcon />}
                            <Text style={[styles.addAnsStatusTextLink, { color: isLiked ? Colors.BlueViolet : Colors.AppColor }]}>Likes</Text>
                          </TouchableOpacity>
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
                        <AppButton
                          // onPress={() => navigation.navigate('ParentingRead')}
                          background
                          label={'Explore More in Q&A'}
                          textStyle={styles.addAnsMainBtnText}
                          buttonContainerStyle={styles.addAnsMainBtnStyle}
                        />
                      </View>
                    </View>
                    <View style={styles.cardRoot}>
                      <View style={styles.cardHeadingView}>
                        <Text style={styles.cardMainTitle}>Suggested for you</Text>
                      </View>
                      <TouchableOpacity style={styles.cardListContainer} activeOpacity={0.9}>
                        <LinearGradient
                          colors={['rgba(0, 0, 0, 0.40)', Colors.AppColor]}
                          start={{ x: 0.5, y: 0 }}
                          end={{ x: 0.5, y: 1 }}
                          locations={[0.4621, 1.0071]}
                          style={styles.suggestImageContainer}
                        >
                          <Image source={suggestArticles[0].bgImage} style={styles.suggestImageStyle} resizeMode="cover" />
                          <View style={styles.cardContent}>
                            <Text numberOfLines={2} style={styles.cardTitle}>
                              {suggestArticles[0].title}
                            </Text>
                            <Text numberOfLines={3} style={styles.cardDescription}>
                              {suggestArticles[0].description}
                            </Text>
                            <View style={styles.cardBottomActionBar}>
                              <View style={styles.cardActionIconView}>
                                <icons.ParentingEyeIcon />
                                <Text style={styles.cardActionText}>{suggestArticles[0].viewsCount}</Text>
                                <TouchableOpacity
                                  activeOpacity={0.8}
                                  onPress={handleLikePress}
                                  style={{ flexDirection: 'row', alignItems: "center", gap: 5 }}>
                                  {isLiked ? <icons.OrangeLikeIcon style={{ marginLeft: 8 }} /> : <icons.ParentingLikeIcon style={{ marginLeft: 8 }} />}
                                  <Text style={[styles.cardActionText, { color: isLiked ? Colors.BeerColor : Colors.White }]}>{suggestArticles[0].likeCount}</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={styles.cardActionIconView}>
                                <TouchableOpacity activeOpacity={0.8}>
                                  <icons.ParentingFacebookIcon />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8}>
                                  <icons.ParentingWhatsAppIcon style={{ marginLeft: 2 }} />
                                </TouchableOpacity>
                                <Text style={styles.cardActionText}>Share</Text>
                              </View>
                            </View>
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.cardRoot, { marginBottom: 60 }]}>
                      <View style={styles.cardHeadingView}>
                        <Text style={styles.cardMainTitle}>Usman Sami has added a new answer</Text>
                      </View>
                      <View style={styles.addAnsRoot}>
                        <Text style={styles.addAnsStatus}>{quesAnswer[0].userStatus} - {quesAnswer[0].userChilds}</Text>
                        <View style={styles.addAnsQuestionView}>
                          <icons.QuestionIcon />
                          <Text style={styles.addAnsQuestionText}>{quesAnswer[0].userQuestion}</Text>
                        </View>
                        <View style={styles.addAnsSeparatorLine} />
                        <View style={styles.addAnsAnswerView}>
                          <View style={styles.addAnsAnswerViewLeft}>
                            <icons.ParentingEditIcon />
                            <Text style={styles.addAnsAnswerText}>
                              Answer {''}
                              <Text style={styles.addAnsAnswerTextLink}>({quesAnswer[0].userAnswerCount})</Text>
                            </Text>
                          </View>
                          <TouchableOpacity activeOpacity={0.8} style={styles.addAnsSmallBtn}>
                            <Text style={styles.addAnsSmallBtnLink}>+ Follow</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.addAnsSeparatorLine} />
                        <View style={styles.addAnsUserHeader}>
                          <View style={styles.addAnsUserHeaderLeft}>
                            <Image style={styles.addAnsUserAvatar} source={quesAnswer[0].avatarImage} resizeMode="cover" />
                            <View style={styles.addAnsUserDetails}>
                              <Text style={styles.addAnsUserName}>{quesAnswer[0].userName}</Text>
                              <Text style={styles.addAnsUserRelation}>{quesAnswer[0].userRelation}</Text>
                            </View>
                          </View>
                          <Text style={styles.addAnsUserActive}>{quesAnswer[0].userActive}</Text>
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
                                onPress={toggleQuesAnsContent}
                              >
                                {' '} {quesAnsContent ? 'Read Less' : 'Read More'}
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
                          <TouchableOpacity onPress={handleLikePress} activeOpacity={0.8} style={styles.addAnsStatusLeft}>
                            {isLiked ? <icons.ParentingFeedLikeIcon /> : <icons.ParentingFeedLikeIcon />}
                            <Text style={[styles.addAnsStatusTextLink, { color: isLiked ? Colors.BlueViolet : Colors.AppColor }]}>Likes</Text>
                          </TouchableOpacity>
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
                        <AppButton
                          // onPress={() => navigation.navigate('ParentingRead')}
                          background
                          label={'Explore More in Q&A'}
                          textStyle={styles.addAnsMainBtnText}
                          buttonContainerStyle={styles.addAnsMainBtnStyle}
                        />
                      </View>
                    </View>
                  </>
                )
                :
                (
                  <View style={styles.noFeedContainer}>
                    <Text style={styles.noFeedText}>Please login to view the Parenting Features.</Text>
                    <AppButton
                      label="Return to Login"
                      background
                      image
                      imageLeft
                      ImageSource={<icons.BackArrow width={9} height={14} />}
                      onPress={() => navigation.navigate('Login')}
                      buttonContainerStyle={styles.btnStyle}
                      textStyle={styles.btnTextStyle}
                    />
                  </View>
                )
              }

            </ScrollView>
          )
        }
      </View>
    </SafeAreaView>
  )
}

export default ParentingFeed;
