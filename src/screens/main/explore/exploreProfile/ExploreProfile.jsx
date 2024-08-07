import React from 'react';
import {
  StatusBar,
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import TopHeader from '../../../../components/TopHeader';
import AppButton from '../../../../components/AppButton';
import GeneralAppHeader from '../../../../components/GeneralAppHeader'
import { styles } from './ExploreProfile.style';

const ExploreProfile = () => {
  const data = [
    {
      imageSource: require('../../../../assets/images/exploreprofile/profileImage1.jpg'),
      text: 'Explore a world of fashion and style. Discover the latest trends and curated collections from top designers. Immerse yourself in a blend of elegance and sophistication. Elevate your wardrobe with timeless pieces that redefine fashion. Join us on a journey of self-expression and creativity. Your style, your identity. Let\'s make a statement together!',
      Icon: <icons.GalleryIcon />,
    },
    {
      imageSource: require('../../../../assets/images/exploreprofile/profileImage2.jpg'),
      text: 'Explore a world of fashion and style. Discover the latest trends and curated collections from top designers. Immerse yourself in a blend of elegance and sophistication. Elevate your wardrobe with timeless pieces that redefine fashion. Join us on a journey of self-expression and creativity. Your style, your identity. Let\'s make a statement together!',
      Icon: <icons.VideoIcon />,
    },
    {
      imageSource: require('../../../../assets/images/exploreprofile/profileImage3.jpg'),
      text: 'Explore a world of fashion and style. Discover the latest trends and curated collections from top designers. Immerse yourself in a blend of elegance and sophistication. Elevate your wardrobe with timeless pieces that redefine fashion. Join us on a journey of self-expression and creativity. Your style, your identity. Let\'s make a statement together!',
      Icon: <icons.VideoIcon />,
    },
    {
      imageSource: require('../../../../assets/images/exploreprofile/profileImage1.jpg'),
      text: 'Explore a world of fashion and style. Discover the latest trends and curated collections from top designers. Immerse yourself in a blend of elegance and sophistication. Elevate your wardrobe with timeless pieces that redefine fashion. Join us on a journey of self-expression and creativity. Your style, your identity. Let\'s make a statement together!',
      Icon: <icons.GalleryIcon />,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <TopHeader
        title={'User Profile'}
        image
        imageSource={<icons.ShareIcon />} />
      <ScrollView style={styles.root}>
        <View style={styles.profileView}>
          <View style={styles.detailView}>
            <Image
              source={require('../../../../assets/images/exploreprofile/userImage.jpg')}
              style={styles.userImageStyle}
            />
            <View>
              <Text style={styles.usernameText}>Talha Ahmed</Text>
              <Text style={styles.postText}>12 Posts</Text>
            </View>
          </View>
          <AppButton
            label="Follow"
            background
            buttonContainerStyle={styles.followBtnStyle}
            textStyle={styles.btnTextStyle}
          />
        </View>
        <View>
          <FlatList
            data={data}
            numColumns={2}
            // keyExtractor={(item, index) => item.id}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.00)', Colors.AppColor]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0.4621, 1.0071]}
                style={styles.gradientView}>
                <Image source={item.imageSource} style={styles.imageStyle} />
                <Text numberOfLines={2} style={styles.textStyle}>
                  {item.text}
                </Text>
                <View style={styles.iconStyle}>{item.Icon}</View>
              </LinearGradient>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreProfile;
