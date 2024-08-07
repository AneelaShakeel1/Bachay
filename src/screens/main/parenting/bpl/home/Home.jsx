import React, { useState } from "react";
import { ScrollView, StatusBar, View, ImageBackground, Text, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity } from "react-native";
import { Colors } from "../../../../../constants/theme";
import BPLAppHeader from "../../../../../components/BPLAppHeader";
import icons from "../../../../../constants/icons";
import BPLBottomTabNavigation from "../../../../../navigators/BPLBottomTabNavigation";
import LinearGradient from "react-native-linear-gradient";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectUserDetails } from "../../../../../redux/features/auth/authSelectors";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Home.style";

const Home = () => {

  const userData = useSelector(selectUserDetails);
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex < BPLFaqs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const rulesDescription = [
    {
      desc: 'It`s possible that it`s an organization, event, or initiative that emerged after that date, or it may be a local or niche project that didn`t gain widespread recognition. An eCommerce platform is a software application that enables businesses to conduct online transactions. It includes features such as product listing, shopping cart functionality, secure payment gateways, and order management, providing a complete solution for selling products or services online.',
    }
  ]
  const [rulesContent, setRulesContent] = useState([]);
  const toggleRulesContent = (index) => {
    const newRulesContent = [...rulesContent];
    newRulesContent[index] = !newRulesContent[index];
    setRulesContent(newRulesContent);
  };

  const BPLFaqs = [
    {
      id: 1,
      question: 'What is Bachay Parenting League?',
      answer: 'It`s possible that it`s an organization, event, or initiative that emerged after that date, or it may be a local or niche project that didn`t gain widespread recognition.',
    },
    {
      id: 2,
      question: 'What is an eCommerce platform?',
      answer: 'An eCommerce platform is a software application that enables businesses to conduct online transactions. It includes features such as product listing, shopping cart functionality, secure payment gateways, and order management, providing a complete solution for selling products or services online.',
    },
    {
      id: 3,
      question: 'What are the key features to look for in an eCommerce platform?',
      answer: 'Important features include user-friendly product management, secure payment options, mobile responsiveness, customizable design, SEO capabilities, and robust analytics for tracking sales performance.',
    },
    {
      id: 4,
      question: 'How does an eCommerce platform ensure payment security?',
      answer: 'eCommerce platforms implement secure payment gateways that encrypt sensitive customer information during transactions. They often comply with industry standards and use technologies like SSL certificates to provide a secure shopping experience.',
    },
  ]

  const BPLRewards = [
    {
      id: 1,
      title: 'Engage with Parenting & get rewarded with upto 10 Lakh BPL Points',
      image: require('../../../../../assets/images/parenting/bpl/rewardImage1.png'),
    },
    {
      id: 2,
      title: 'Exchange BPL Points for Loyalty Cash and Enjoy Shopping at Bachay.com',
      image: require('../../../../../assets/images/parenting/bpl/rewardImage2.png'),
    },
    {
      id: 3,
      title: 'Level up in ranks & get exclusive access to over 1000+ exciting rewards',
      image: require('../../../../../assets/images/parenting/bpl/rewardImage3.png'),
    },
    {
      id: 4,
      title: 'Engage More. Earn More. Win More.',
      image: require('../../../../../assets/images/parenting/bpl/rewardImage4.png'),
    },
    {
      id: 5,
      title: 'Now Your Parenting Journey will be reward at every step',
      image: require('../../../../../assets/images/parenting/bpl/rewardImage5.png'),
    },
    {
      id: 6,
      title: 'Unlock as many badges as possible & get recognized in the community',
      image: require('../../../../../assets/images/parenting/bpl/rewardImage6.png'),
    },
    {
      id: 7,
      title: 'Become the face of Bachay Parenting League.',
      image: require('../../../../../assets/images/parenting/bpl/rewardImage7.png'),
    }
  ]

  const BPLTrending = [
    {
      id: 1,
      title: 'Usman Ghani earned 3 by exchanging there BPL Points',
      image: require('../../../../../assets/images/parenting/bpl/trendingImage1.jpg'),
    },
    {
      id: 2,
      title: 'Usman redeemed a Swiggy Voucher',
      image: require('../../../../../assets/images/parenting/bpl/trendingImage2.jpg'),
    },
  ]

  const exclusiveItems = [
    {
      id: 1,
      title: 'Unlock Exciting Ixigo Vocuhers',
      bgImage: require('../../../../../assets/images/parenting/bpl/ExclusiveBG.jpg'),
      logoImage: require('../../../../../assets/images/parenting/bpl/mamypokoLogo.png'),
    },
    {
      id: 2,
      title: 'Unlock Exciting Ixigo Vocuhers',
      bgImage: require('../../../../../assets/images/parenting/bpl/ExclusiveBG.jpg'),
      logoImage: require('../../../../../assets/images/parenting/bpl/mamypokoLogo.png'),
    },
    {
      id: 3,
      title: 'Unlock Exciting Ixigo Vocuhers',
      bgImage: require('../../../../../assets/images/parenting/bpl/ExclusiveBG.jpg'),
      logoImage: require('../../../../../assets/images/parenting/bpl/mamypokoLogo.png'),
    },
    {
      id: 4,
      title: 'Unlock Exciting Ixigo Vocuhers',
      bgImage: require('../../../../../assets/images/parenting/bpl/ExclusiveBG.jpg'),
      logoImage: require('../../../../../assets/images/parenting/bpl/mamypokoLogo.png'),
    },
    {
      id: 5,
      title: 'Unlock Exciting Ixigo Vocuhers',
      bgImage: require('../../../../../assets/images/parenting/bpl/ExclusiveBG.jpg'),
      logoImage: require('../../../../../assets/images/parenting/bpl/mamypokoLogo.png'),
    },
  ]

  const rankItems = [
    {
      id: 1,
      number: '01',
      title: 'Do fun activities Earn BPL Points & Badges!',
      image: require('../../../../../assets/images/parenting/bpl/rankImage1.png'),
    },
    {
      id: 2,
      number: '02',
      title: 'Badge unlock gives bonus BPL Points & multiple BPL per activity',
      image: require('../../../../../assets/images/parenting/bpl/rankImage1.png'),
    },
    {
      id: 3,
      number: '03',
      title: 'Move up in ranks & stand out from the crowd!',
      image: require('../../../../../assets/images/parenting/bpl/rankImage1.png'),
    },
    {
      id: 4,
      number: '04',
      title: 'Redeem exclusive rewards using your BPL Points!',
      image: require('../../../../../assets/images/parenting/bpl/rankImage1.png'),
    },
  ]

  const BPLActivities = [
    {
      id: 1,
      title: 'Complete Total 25 Quizzes',
      totalTask: 25,
      completedTask: 14
    },
    {
      id: 2,
      title: 'Visit Bachay Parenting',
      totalTask: 10,
      completedTask: 5
    },
    {
      id: 3,
      title: 'Participate in 10 Contests!',
      totalTask: 50,
      completedTask: 50
    },
    {
      id: 4,
      title: 'Visit Bachay Parenting',
      totalTask: 3,
      completedTask: 1
    },
    {
      id: 5,
      title: 'Complete Total 25 Quizzes',
      totalTask: 50,
      completedTask: 25
    },
    {
      id: 6,
      title: 'Visit Bachay Parenting',
      totalTask: 3,
      completedTask: 1
    }
  ]

  const BPLBadges = [
    {
      id: 1,
      badgeTitle: 'Milestone Boss',
      badgeLevel: 'Level 1',
      badgeStatus: 'Milestone',
      badgeDesc: 'Post all 27 first Milestone',
      badgePoints: [
        {
          id: 1,
          title: '10 BPL Points',
        },
        {
          id: 2,
          title: '20 BPL Points',
        },
        {
          id: 3,
          title: '30 BPL Points',
        },
      ],
    },
    {
      id: 2,
      badgeTitle: 'Peepy Folk',
      badgeLevel: 'Level 1',
      badgeStatus: 'Milestone',
      badgeDesc: 'Post all 27 first Milestone',
      badgePoints: [
        {
          id: 1,
          title: '10 BPL Points',
        },
        {
          id: 2,
          title: '20 BPL Points',
        },
        {
          id: 3,
          title: '30 BPL Points',
        },
      ],
    },
  ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={Colors.ChineseBlack}
      />
      <ImageBackground
        source={require('../../../../../assets/images/parenting/bpl/mainBackground.png')}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <BPLAppHeader title={'Bachay Parenting League'} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <icons.BPLLogo style={styles.logo} />
            <icons.BPLShapeLine style={styles.shapeLine} />
            <icons.BPLWelcomeText />
            <Text style={styles.mainSubtitleItalic}>Please Login to view your Progress Stats</Text>
            <icons.BPLShapeLine style={styles.shapeLine} />
            <View style={styles.headerStatusView}>
              <View style={styles.headerStatusInnerView}>
                <icons.RankIcon />
                <View style={styles.headerStatusTextView}>
                  <Text style={styles.headerStatusText}>Rank</Text>
                  <Text style={styles.headerStatusComing}>--</Text>
                </View>
              </View>
              <View style={styles.headerStatusInnerView}>
                <icons.BadgesIcon />
                <View style={styles.headerStatusTextView}>
                  <Text style={styles.headerStatusText}>Badges</Text>
                  <Text style={styles.headerStatusComing}>--</Text>
                </View>
              </View>
              <View style={styles.headerStatusInnerView}>
                <icons.PointsIcon />
                <View style={styles.headerStatusTextView}>
                  <Text style={styles.headerStatusText}>Points</Text>
                  <Text style={styles.headerStatusComing}>--</Text>
                </View>
              </View>
            </View>
            <icons.BPLShapeLine style={styles.shapeLine} />
            <Text style={styles.mainTitleSmall}>League Program Feature</Text>
            <icons.BPLShapeLine style={styles.shapeLine} />
            <FlatList
              data={BPLRewards}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.rewardFlatlist}
              renderItem={({ item, index }) => (
                <LinearGradient
                  style={[
                    styles.rewardContainer,
                    index === BPLRewards.length - 1 ? styles.lastRewardContainer : styles.rewardContainerMargin,
                  ]}
                  colors={['#D55FAD', '#845DC2']}
                  locations={[0.2218, 1.003]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <View style={styles.overlayContainer}>
                    <View style={styles.overlayCircleSmall} />
                    <View style={styles.overlayCircleLarge} />
                    <View style={styles.rewardContainerInner}>
                      <Image
                        style={styles.rewardImage}
                        resizeMode="contain"
                        source={item.image}
                      />
                      <Text style={styles.rewardText}>{item.title}</Text>
                    </View>
                  </View>
                </LinearGradient>
              )}
            />
            <View style={styles.exclusiveContainer}>
              <Text style={styles.exclusiveTitle}>Exclusive Perks - A Sneak Peek</Text>
              <FlatList
                data={exclusiveItems}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.exclusiveFlatlist}
                renderItem={({ item }) => (
                  <View style={styles.exclusiveImageContainer}>
                    <Image resizeMode="cover" style={styles.exclusiveMainImage} source={item.bgImage} />
                    <View style={styles.exclusiveBottomContainer}>
                      <Image resizeMode="cover" style={styles.exclusiveLogo} source={item.logoImage} />
                      <View style={styles.exclusiveAdditionalCircle}>
                        <Text style={styles.exclusiveCircleTitle}>{item.title}</Text>
                      </View>
                    </View>
                  </View>
                )}
              />
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.exclusiveBottomTitle}>Redeem Now {`>`}</Text>
              </TouchableOpacity>
            </View>
            <icons.BPLShapeLine style={styles.shapeLine} />
            <Text style={[styles.mainTitleSmall, { color: Colors.BeerColor }]}>How To Move Up Ranks In BPL</Text>
            <icons.BPLShapeLine style={styles.shapeLine} />
            <View style={styles.ranksContainer}>
              <FlatList
                data={rankItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <>
                    {index % 2 === 0
                      ?
                      <View style={styles.ranksInner}>
                        <Text style={styles.ranksNumberTextRight}>{item.number}</Text>
                        <Text style={styles.ranksSubtitleLeft}>{item.title}</Text>
                        <Image resizeMode="cover" style={styles.ranksImage} source={item.image} />
                        {index !== rankItems.length - 1 && (
                          <icons.RankArrow style={styles.rankArrowStyleRight} />
                        )}
                      </View>
                      :
                      <View style={styles.ranksInner}>
                        <Image resizeMode="cover" style={styles.ranksImage} source={item.image} />
                        <Text style={styles.ranksSubtitleRight}>{item.title}</Text>
                        <Text style={styles.ranksNumberTextLeft}>{item.number}</Text>
                        {index !== rankItems.length - 1 && (
                          <icons.RankArrowLeft style={styles.rankArrowStyleLeft} />
                        )}
                      </View>
                    }
                  </>
                )}
              />
            </View>
            <View style={styles.separatorLine} />
            <icons.BPLShapeLine style={styles.shapeLine} />
            <Text style={styles.mainTitleBig}>BPL Activities</Text>
            <Text style={styles.mainSubtitle}>Login to view your BPL activity progress</Text>
            <icons.BPLShapeLine style={styles.shapeLine} />
            <FlatList
              data={BPLActivities}
              style={{ marginTop: 15, width: '80%' }}
              renderItem={({ item }) => {
                const completed = item.completedTask;
                const total = item.totalTask;
                const completionPercentage = (completed / total) * 100;
                return (
                  <View style={styles.bplActivityContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <icons.ParentingStarIcon width={35} height={35} />
                      <Text style={styles.bplActivityTitle}>{item.title}</Text>
                    </View>
                    {item.completedTask === item.totalTask
                      ?
                      <View style={styles.bplTickIcon}>
                        <icons.BPLTickIcon />
                      </View>
                      :
                      <AnimatedCircularProgress
                        size={35}
                        width={3}
                        fill={completionPercentage}
                        tintColor={Colors.BlueViolet}
                        backgroundColor={Colors.Gainsboro}
                      >
                        {() => (
                          <Text style={styles.bplActivityCountText}>
                            {`${completed}/${total}`}
                          </Text>
                        )}
                      </AnimatedCircularProgress>
                    }
                  </View>
                )
              }}
            />
            <LinearGradient
              style={styles.bplActivityBtnStyle}
              colors={['rgba(132, 93, 194, 0.50)', 'rgba(62, 32, 111, 0.50)']}
              locations={[0, 1]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
            >
              <Text style={styles.bplActivityBtnText}>Explore More BPL Points</Text>
            </LinearGradient>
            <View style={styles.separatorLine} />
            <icons.BPLShapeLine style={styles.shapeLine} />
            <Text style={styles.mainTitleBig}>Unlock More Badges!</Text>
            <Text style={styles.mainSubtitle}>Login to unlock badges & more</Text>
            <icons.BPLShapeLine style={styles.shapeLine} />
            <View style={{ width: '90%' }}>
              <FlatList
                data={BPLBadges}
                numColumns={2}
                columnWrapperStyle={styles.badgeRoot}
                renderItem={({ item }) => (
                  <View style={styles.badgeContainer}>
                    <LinearGradient
                      colors={userData ? ['transparent', 'transparent'] : ['rgba(0, 0, 0, 0.80)', 'rgba(0, 0, 0, 0.80)']}
                      start={{ x: 0.5, y: 0 }}
                      end={{ x: 0.5, y: 1 }}
                      locations={[0.4621, 1.0071]}
                      style={styles.badgeInner}
                    >
                      <icons.BPLSilverBadge width={95} height={95} style={{ zIndex: -1, top: 8 }} />
                      {userData ?
                        null
                        :
                        <>
                          <icons.BadgeLock style={{ position: 'absolute' }} />
                          <Text style={styles.badgeCountText}>0/1</Text>
                        </>
                      }
                    </LinearGradient>
                    <View style={styles.badgeInnerGrey}>
                      <Text style={styles.badgeSubtitle}>{item.badgeDesc}</Text>
                    </View>
                    <View style={styles.badgeInnerOrangeRoot}>
                      <View style={styles.badgeInnerOrange}>
                        <Text style={styles.badgeTitleStyle1}>{item.badgeTitle}</Text>
                        <Text style={styles.badgeTitleStyle2}>{item.badgeLevel}</Text>
                        <Text style={styles.badgeTitleStyle3}>{item.badgeStatus}</Text>
                      </View>
                    </View>
                    <View style={styles.badgeBottomRoot}>
                      <View style={styles.badgeBottomHeader}>
                        <Text style={styles.badgeBottomTitle}>Unlock Rewards</Text>
                        <icons.BadgeInfo />
                      </View>
                      <View style={styles.badgeBottomFooter}>
                        {item.badgePoints.map((points) => (
                          <View key={points.id} style={styles.badgeBottomPoints}>
                            <icons.ParentingStarIcon width={20} height={20} />
                            <Text style={styles.badgeSubtitle}>{points.title}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
            <LinearGradient
              style={styles.bplActivityBtnStyle}
              colors={['rgba(132, 93, 194, 0.50)', 'rgba(62, 32, 111, 0.50)']}
              locations={[0, 1]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
            >
              <Text style={styles.bplActivityBtnText}>Explore More BPL Points</Text>
            </LinearGradient>
            <View style={styles.separatorLine} />
            <icons.BPLShapeLine style={styles.shapeLine} />
            <Text style={[styles.mainTitleBig, { marginBottom: 5 }]}>Trending Now on BPL</Text>
            <icons.BPLShapeLine style={styles.shapeLine} />
            <FlatList
              data={BPLTrending}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.rewardTrendingFlatlist}
              renderItem={({ item, index }) => (
                <LinearGradient
                  style={[
                    styles.rewardContainer,
                    index === BPLTrending.length - 1 ? styles.lastRewardContainer : styles.rewardContainerMargin,
                  ]}
                  colors={['#D55FAD', '#845DC2']}
                  locations={[0.2218, 1.003]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <View style={styles.overlayContainer}>
                    <View style={styles.overlayCircleSmall} />
                    <View style={styles.overlayCircleLarge} />
                    <View style={styles.rewardContainerInner}>
                      <Image
                        style={styles.rewardAvatarImage}
                        resizeMode="cover"
                        source={item.image}
                      />
                      <Text style={styles.rewardText}>{item.title}</Text>
                    </View>
                  </View>
                </LinearGradient>
              )}
            />
            <View style={styles.separatorLine} />
            <View style={styles.cardHeader}>
              <Text style={styles.mainTitleBig}>FAQs</Text>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('FAQ')}>
                <Text style={styles.mainSubtitleLink}>View All {'>'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardBody}>
              <Image
                source={require('../../../../../assets/images/parenting/bpl/faqImage.png')}
                style={styles.cardFixedImage}
              />
              <View key={BPLFaqs[currentIndex].id}>
                <Text style={styles.cardTitle}>
                  {'Q.'} {BPLFaqs[currentIndex].question}
                </Text>
                <Text style={styles.cardDescription}>
                  {BPLFaqs[currentIndex].answer}
                </Text>
              </View>
              <View style={styles.cardFooter}>
                <TouchableOpacity
                  activeOpacity={currentIndex === 0 ? 1 : 0.8}
                  onPress={handlePrevious}
                >
                  <Text style={[
                    styles.cardTitle,
                    { color: currentIndex === 0 ? 'rgba(41, 45, 50, 0.25)' : Colors.BlueViolet }
                  ]}>
                    {'<'} Previous
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={currentIndex === BPLFaqs.length - 1 ? 1 : 0.8}
                  onPress={handleNext}
                >
                  <Text style={[
                    styles.cardTitle,
                    { color: currentIndex === BPLFaqs.length - 1 ? 'rgba(41, 45, 50, 0.25)' : Colors.BlueViolet }
                  ]}>
                    Next {'>'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.cardHeader, { marginTop: 40 }]}>
              <Text style={styles.mainTitleBig}>Rules</Text>
            </View>
            <View style={styles.cardBody}>
              <Image
                source={require('../../../../../assets/images/parenting/bpl/faqImage.png')}
                style={styles.cardFixedImage}
              />
              {rulesDescription.map((item, index) => (
                <Text style={styles.cardDescription} key={index}>
                  {rulesContent[index]
                    ? item.desc
                    : item.desc.split(' ').slice(0, 30).join(' ')}
                  <Text
                    style={styles.cardDescriptionLink}
                    onPress={() => toggleRulesContent(index)}
                  >
                    {rulesContent[index] ? ' Read Less' : ' Read More'}
                  </Text>
                </Text>
              ))}
            </View>
          </View>
        </ScrollView>
        <BPLBottomTabNavigation FocusHome />
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Home;