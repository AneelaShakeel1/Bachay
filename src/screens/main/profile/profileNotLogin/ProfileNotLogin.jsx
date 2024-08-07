import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import ProductSlider from '../../../../components/Home/ProductSlider';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import AppButton from '../../../../components/AppButton';
import { styles } from './ProfileNotLogin.style';

import { selectChildDetails, selectUserDetails } from '../../../../redux/features/auth/authSelectors';
import { useSelector } from 'react-redux';

const ProfileNotLogin = (props) => {
  const navigation = useNavigation();

  const childData = useSelector(selectChildDetails);
  const userData = useSelector(selectUserDetails);

  const [childGender, setChildGender] = useState('');
  console.log('first', childGender)
  const genders = childData && Array.isArray(childData) ? childData.map(child => child?.gender) : [];

  const [isImageLoading, setIsImageLoading] = useState(false);

  const [isParentingOpen, setIsParentingOpen] = useState(false);
  const [isCustomerOpen, setIsCustomerOpen] = useState(false);
  const [parentingIcon, setParentingIcon] = useState('DropDownDown');
  const [customerIcon, setCustomerIcon] = useState('DropDownDown');

  const toggleParentingDropdown = () => {
    setIsParentingOpen(!isParentingOpen);
    setIsCustomerOpen(false);
    setParentingIcon(isParentingOpen ? 'DropDownDown' : 'DropDownUp');
    setCustomerIcon('DropDownDown');
  };

  const toggleCustomerDropdown = () => {
    setIsCustomerOpen(!isCustomerOpen);
    setIsParentingOpen(false);
    setCustomerIcon(isCustomerOpen ? 'DropDownDown' : 'DropDownUp');
    setParentingIcon('DropDownDown');
  };

  const cardData = [
    {
      id: '1',
      title: 'Animals & Birds',
      image: require('../../../../assets/images/product/ProductImage1.jpg'),
      views: 'Viewed 112598',
    },
    {
      id: '2',
      title: 'Animals & Birds',
      image: require('../../../../assets/images/product/ProductImage2.jpg'),
      views: 'Viewed 112598',
    },
    {
      id: '3',
      title: 'Animals & Birds',
      image: require('../../../../assets/images/product/ProductImage3.jpg'),
      views: 'Viewed 112598',
    },
    {
      id: '4',
      title: 'Animals & Birds',
      image: require('../../../../assets/images/product/ProductImage1.jpg'),
      views: 'Viewed 112598',
    },
    {
      id: '5',
      title: 'Animals & Birds',
      image: require('../../../../assets/images/product/ProductImage2.jpg'),
      views: 'Viewed 112598',
    },
    {
      id: '6',
      title: 'Animals & Birds',
      image: require('../../../../assets/images/product/ProductImage3.jpg'),
      views: 'Viewed 112598',
    },
  ];

  useEffect(() => {
    setIsImageLoading(true);

    if (userData?.avatar) {
      setIsImageLoading(false);
    } else if (userData?.avatar === null) {
      setIsImageLoading(false);
    }
  }, [userData]);

  useEffect(() => {
    if (childData && Array.isArray(childData) && childData.length > 0) {
      const boysCount = childData.filter((child) => child?.gender === 1).length;
      const girlsCount = childData.filter((child) => child?.gender === 0).length;

      setChildGender(`${boysCount} ${boysCount === 1 ? 'boy' : 'boys'} ${girlsCount} ${girlsCount === 1 ? 'girl' : 'girls'}`);
    } else {
      console.error("childData is undefined, null, or an empty array");
      setChildGender("N/A");
    }
  }, [childData]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {userData ? (
            <View style={styles.profileBg}>
              <View style={styles.profileView}>
                <View style={styles.profileInfo}>
                  <Image
                    style={[styles.profileImage, { borderWidth: userData?.avatar ? 2 : 0 }]}
                    resizeMode="cover"
                    source={
                      userData && userData.avatar
                        ? { uri: userData.avatar }
                        : require('../../../../assets/images/userAvatar2.png')
                    }
                  />
                  {isImageLoading &&
                    <ActivityIndicator
                      style={styles.profileImageLoading}
                      animating={isImageLoading}
                      size='small'
                      color={Colors.BlueViolet}
                    />
                  }
                  <View style={styles.profileDetails}>
                    <Text style={styles.profileName}>{userData ? userData.name : 'Guest'}</Text>
                    <View style={styles.profileStatusView}>
                      <icons.MotherIcon />
                      <Text
                        style={[
                          styles.profileStatusText,
                          { color: Colors.TextPinkColor },
                        ]}>
                        {childData?.length > 0
                          ? `${userData.gender === 1 ? 'Father' : userData.gender === 0 ? 'Mother' : 'N/A'
                          } of ${childData.length < 10 ? `0${childData.length}` : childData.length}`
                          : 'N/A'}
                      </Text>
                    </View>
                    <View style={styles.profileStatusView}>
                      <icons.BabyIcon />
                      <Text
                        style={[
                          styles.profileStatusText,
                          { color: Colors.ColorPurple },
                        ]}>
                        {childGender ? childGender : 'N/A'}
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('ProfileLogin')}>
                  <icons.ChildEditIcon />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.loginRegisterBtnView}>
              <AppButton
                gradient
                onPress={() => props.navigation.navigate('Login')}
                label={'Login/Register'}
                textStyle={styles.loginButtonText}
                buttonContainerStyle={styles.loginButton}
              />
            </View>
          )}
          {userData
            ?
            <View style={styles.navigationsBg}>
              <View style={styles.navigationView}>
                <View
                  style={[
                    styles.navigationTitleContainer,
                    { backgroundColor: Colors.BlueViolet },
                  ]}>
                  <Text style={styles.navigationTitle}>Shopping</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MyAccount')}
                  activeOpacity={0.8}
                  style={styles.navigationItem}>
                  <icons.PersonIcon />
                  <Text style={styles.navigationItemTitle}>Account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('OrderHistory')}
                  style={styles.navigationItem}>
                  <icons.OrderHistoryIcon />
                  <Text style={styles.navigationItemTitle}>Order History</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('TrackingOrderDetails')}
                  style={styles.navigationItem}>
                  <icons.TrackOrderIcon />
                  <Text style={styles.navigationItemTitle}>Track Order</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('CashRefundScreen')}
                  style={styles.navigationItem}>
                  <icons.CashRefundIcon />
                  <Text style={styles.navigationItemTitle}>Cash Refund</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.navigationView}>
                <View
                  style={[
                    styles.navigationTitleContainer,
                    { backgroundColor: Colors.BeerColor },
                  ]}>
                  <Text style={styles.navigationTitle}>Parenting</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('ParentingFeed')}
                  style={styles.navigationItem}>
                  <icons.MyFeedIcon />
                  <Text style={styles.navigationItemTitle}>My Feed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('VaccineLogin')}
                  style={styles.navigationItem}>
                  <icons.VaccineGrowthIcon />
                  <Text style={[styles.navigationItemTitle, { lineHeight: 14, textAlign: 'center', top: 3 }]}>
                    Vaccine &{'\n'} Growth
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('ParentingQA')}
                  style={styles.navigationItem}>
                  <icons.ExpertQAIcon />
                  <Text style={styles.navigationItemTitle}>Expert Q&A</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('ParentingRead')}
                  style={styles.navigationItem}>
                  <icons.ReadIcon />
                  <Text style={styles.navigationItemTitle}>Read</Text>
                </TouchableOpacity>
              </View>
            </View>
            :
            null
          }
          {/* <View style={styles.productSliderBg}>
            <ProductSlider title={'For You'} />
          </View> */}
          <View style={styles.club}>
            <Text style={styles.heading}>Most View child’s Birth-club</Text>
            <FlatList
              data={cardData}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 20,
                gap: 11,
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.cardContainer}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <View style={{ paddingHorizontal: 7 }}>
                    <Image
                      style={styles.cardImage}
                      source={item.image}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{item.views}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <FlatList
              data={cardData}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 20,
                paddingTop: 20,
                gap: 11,
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.cardContainer}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <View style={{ paddingHorizontal: 7 }}>
                    <Image
                      style={styles.cardImage}
                      source={item.image}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{item.views}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.club}>
            <Text style={styles.heading}>For your Growing Child</Text>
            <FlatList
              data={cardData}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 20,
                gap: 11,
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.cardContainer}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <View style={{ paddingHorizontal: 7 }}>
                    <Image
                      style={styles.cardImage}
                      source={item.image}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{item.views}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <FlatList
              data={cardData}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 20,
                paddingTop: 20,
                gap: 11,
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.cardContainer}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <View style={{ paddingHorizontal: 7 }}>
                    <Image
                      style={styles.cardImage}
                      source={item.image}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{item.views}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={[styles.club, { paddingBottom: 0 }]}>
            <Text style={styles.heading}>Bachay Recommendation</Text>
            <FlatList
              data={cardData}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 20,
                gap: 11,
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.cardContainer}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <View style={{ paddingHorizontal: 7 }}>
                    <Image
                      style={styles.cardImage}
                      source={item.image}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{item.views}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <FlatList
              data={cardData}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 20,
                paddingTop: 20,
                gap: 11,
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.cardContainer}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <View style={{ paddingHorizontal: 7 }}>
                    <Image
                      style={styles.cardImage}
                      source={item.image}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{item.views}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          {userData
            ?
            <View style={styles.dropDownsBg}>
              <View style={styles.dropDownField}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={toggleParentingDropdown}
                  style={styles.dropDownView}>
                  <Text style={styles.dropDownTitle}>Parenting Activities</Text>
                  <View>
                    {parentingIcon === 'DropDownDown' ? (
                      <icons.DropDownDownIcon />
                    ) : (
                      <icons.DropDownUpIcon />
                    )}
                  </View>
                </TouchableOpacity>
                {isParentingOpen && (
                  <>
                    <View style={styles.header}>
                      <View style={styles.section}>
                        <Image
                          resizeMode="cover"
                          source={require('../../../../assets/images/Profile/Rank.png')}
                        />
                        <View style={styles.details}>
                          <Text style={styles.label}>Rank</Text>
                          <Text style={styles.value}>Gold</Text>
                        </View>
                      </View>
                      <View style={styles.section}>
                        <Image
                          resizeMode="cover"
                          source={require('../../../../assets/images/Profile/Badge.png')}
                        />
                        <View style={styles.details}>
                          <Text style={styles.label}>Badge</Text>
                          <Text style={styles.value}>Twelve</Text>
                        </View>
                      </View>
                      <View style={styles.section}>
                        <Image
                          resizeMode="cover"
                          source={require('../../../../assets/images/Profile/Points.png')}
                        />
                        <View style={styles.details}>
                          <Text style={styles.label}>Points</Text>
                          <Text style={styles.value}>2163</Text>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.dropDownItem}>
                      <View style={styles.dropDownItemtextView}>
                        <icons.MyDraftsIcon />
                        <Text style={styles.dropDownItemText}>My Drafts</Text>
                      </View>
                      <icons.NavigationIcon />
                    </TouchableOpacity>
                    <View style={styles.SeparatorLine} />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.dropDownItem}>
                      <View style={styles.dropDownItemtextView}>
                        <icons.MyGroupsIcon />
                        <Text style={styles.dropDownItemText}>My Groups</Text>
                      </View>
                      <icons.NavigationIcon />
                    </TouchableOpacity>
                    <View style={styles.SeparatorLine} />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.dropDownItem}>
                      <View style={styles.dropDownItemtextView}>
                        <icons.MyQuestionsIcon />
                        <Text
                          onPress={() => navigation.navigate('ParentingStack', { screen: 'ParentingQA' })}
                          style={styles.dropDownItemText}>My Questions</Text>
                      </View>
                      <icons.NavigationIcon />
                    </TouchableOpacity>
                    <View style={styles.SeparatorLine} />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.dropDownItem}>
                      <View style={styles.dropDownItemtextView}>
                        <icons.MyAnswersIcon />
                        <Text style={styles.dropDownItemText}>My Answers</Text>
                      </View>
                      <icons.NavigationIcon />
                    </TouchableOpacity>
                    <View style={styles.SeparatorLine} />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.dropDownItem}>
                      <View style={styles.dropDownItemtextView}>
                        <icons.MyPostsIcon />
                        <Text
                          onPress={() => navigation.navigate('ParentingStack', { screen: 'ParentingFeed' })}
                          style={styles.dropDownItemText}>My Posts</Text>
                      </View>
                      <icons.NavigationIcon />
                    </TouchableOpacity>
                    <View style={styles.SeparatorLine} />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.dropDownItem}>
                      <View style={styles.dropDownItemtextView}>
                        <icons.MyEarningsIcon />
                        <Text style={styles.dropDownItemText}>My Earnings</Text>
                      </View>
                      <icons.NavigationIcon />
                    </TouchableOpacity>
                    <View style={styles.SeparatorLine} />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.dropDownItem}>
                      <View style={styles.dropDownItemtextView}>
                        <icons.MyContributionsIcon />
                        <Text style={styles.dropDownItemText}>
                          My Contributions
                        </Text>
                      </View>
                      <icons.NavigationIcon />
                    </TouchableOpacity>
                    <View style={styles.SeparatorLine} />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.dropDownItem}>
                      <View style={styles.dropDownItemtextView}>
                        <icons.MyMemoriesIcon />
                        <Text style={styles.dropDownItemText}>My Memories</Text>
                      </View>
                      <icons.NavigationIcon />
                    </TouchableOpacity>
                    <View style={styles.SeparatorLine} />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.dropDownItem}>
                      <View style={styles.dropDownItemtextView}>
                        <icons.MyQuickReadsIcon />
                        <Text style={styles.dropDownItemText}>
                          My Quick Reads
                        </Text>
                      </View>
                      <icons.NavigationIcon />
                    </TouchableOpacity>
                    <View style={styles.SeparatorLine} />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.dropDownItem}>
                      <View style={styles.dropDownItemtextView}>
                        <icons.MyBumpieIcon />
                        <Text style={styles.dropDownItemText}>My Bumpie</Text>
                      </View>
                      <icons.NavigationIcon />
                    </TouchableOpacity>
                    <View style={styles.SeparatorLine} />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.dropDownItem}>
                      <View style={styles.dropDownItemtextView}>
                        <icons.MyMilestonesIcon />
                        <Text style={styles.dropDownItemText}>My Milestones</Text>
                      </View>
                      <icons.NavigationIcon />
                    </TouchableOpacity>
                    <View style={styles.SeparatorLine} />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.dropDownItem}>
                      <View style={styles.dropDownItemtextView}>
                        <icons.MyFavouriteNamesIcon />
                        <Text style={styles.dropDownItemText}>
                          My Favourite Names
                        </Text>
                      </View>
                      <icons.NavigationIcon />
                    </TouchableOpacity>
                    <View style={styles.SeparatorLine} />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.dropDownItem}>
                      <View style={styles.dropDownItemtextView}>
                        <icons.MyBookMarksIcon />
                        <Text style={styles.dropDownItemText}>My Bookmarks</Text>
                      </View>
                      <icons.NavigationIcon />
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </View>
            :
            null
          }
          <View
            style={[styles.dropDownsBg, { marginTop: -20, paddingBottom: 20 }]}>
            <View
              style={styles.dropDownField}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={toggleCustomerDropdown}
                style={styles.dropDownView}
              >
                <Text style={styles.dropDownTitle}>Customer Service</Text>
                <View>
                  {customerIcon === 'DropDownDown' ? (
                    <icons.DropDownDownIcon />
                  ) : (
                    <icons.DropDownUpIcon />
                  )}
                </View>
              </TouchableOpacity>
              {isCustomerOpen && (
                <View style={{ paddingTop: 20 }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.dropDownItem}>
                    <View style={styles.dropDownItemtextView}>
                      <icons.ChatWithUsIcon />
                      <Text style={styles.dropDownItemText}>Chat With Us</Text>
                    </View>
                    <icons.NavigationIcon />
                  </TouchableOpacity>
                  <View style={styles.SeparatorLine} />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.dropDownItem}>
                    <View style={styles.dropDownItemtextView}>
                      <icons.OurPoliciesIcon />
                      <Text style={styles.dropDownItemText}>Our Policies</Text>
                    </View>
                    <icons.NavigationIcon />
                  </TouchableOpacity>
                  <View style={styles.SeparatorLine} />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.dropDownItem}>
                    <View style={styles.dropDownItemtextView}>
                      <icons.SupportIcon />
                      <Text style={styles.dropDownItemText}>Support</Text>
                    </View>
                    <icons.NavigationIcon />
                  </TouchableOpacity>
                  <View style={styles.SeparatorLine} />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.dropDownItem}>
                    <View style={styles.dropDownItemtextView}>
                      <icons.RateTheAppIcon />
                      <Text style={styles.dropDownItemText}>Rate the App</Text>
                    </View>
                    <icons.NavigationIcon />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileNotLogin;