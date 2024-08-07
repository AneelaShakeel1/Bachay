import React, { useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import icons from '../../../../constants/icons';
import ParentingAppHeader from '../../../../components/ParentingAppHeader';
import ParentingSingleTitle from '../../../../components/Parenting/ParentingSingleTitle';
import AppButton from '../../../../components/AppButton';
import ImageView from 'react-native-image-viewing';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../constants/theme';
import { styles } from './ParentingProfile.style';

const ParentingProfile = () => {
  const [visible, setIsVisible] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    require('../../../../assets/images/parenting/gallery/galleryImage1.jpg'),
    require('../../../../assets/images/parenting/gallery/galleryImage2.jpg'),
    require('../../../../assets/images/parenting/gallery/galleryImage3.jpg'),
    require('../../../../assets/images/parenting/gallery/galleryImage4.jpg'),
    require('../../../../assets/images/parenting/gallery/galleryImage5.jpg'),
    require('../../../../assets/images/parenting/gallery/galleryImage6.jpg'),
  ];

  const statusData = [
    { count: 2, value: 'Answer' },
    { count: 14, value: 'Likes' },
    { count: 16, value: 'Memory' },
    { count: 0, value: 'Followers' },
  ];

  const openImageView = index => {
    setSelectedIndex(index);
    setIsVisible(true);
  };

  const renderImages = () => {
    return (
      <FlatList
        data={images}
        numColumns={3}
        columnWrapperStyle={{ gap: 7, paddingBottom: 12 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => openImageView(index)}
            style={styles.imageContainer}>
            <Image style={styles.image} source={item} resizeMode="cover" />
          </TouchableOpacity>
        )}
      />
    );
  };

  const renderStatusViews = () => {
    return statusData.map((status, index) => (
      <View key={index} style={styles.profileStatusRow}>
        <View style={styles.ProfileStatusTextsColumn}>
          <Text style={styles.statusCount}>{status.count}</Text>
          <Text style={styles.statusValue}>{status.value}</Text>
        </View>
        {index < statusData.length - 1 && <View style={styles.separatorLine} />}
      </View>
    ));
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
        <ParentingAppHeader marginTop={24} />
        <ParentingSingleTitle title={'Parenting Profile'} icon iconImage={<icons.BackArrow />} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profilecontainer}>
            <View style={styles.profileRoot}>
              <View style={styles.profileContainer}>
                <Image
                  style={styles.profileImage}
                  source={require('../../../../assets/images/Profile/MotherProfile.png')}
                  resizeMode="cover"
                />
                <View style={styles.profileDetailsContainer}>
                  <Text style={styles.profileName}>Rabia Kausar</Text>
                  <View style={styles.profileBioStatusRow}>
                    <icons.BabyIcon height={17} width={17} />
                    <Text style={styles.profileStatusText}>2 Boys 1 Girl</Text>
                  </View>
                  <View style={styles.profileMedalsRow}>
                    <icons.SilverMedal />
                    <icons.PlatiniumBlueMedal />
                    <icons.PlatiniumOrangeMedal style={{ top: 1 }} />
                    <Text style={styles.medalsCount}>+2</Text>
                  </View>
                </View>
              </View>
            </View>
            <AppButton
              label="+ Follow"
              background
              buttonContainerStyle={styles.btnStyle}
              textStyle={styles.btnTextStyle}
            />
            <View style={styles.awardsContainersRoot}>
              <View style={styles.awardContainer}>
                <View style={styles.awardContentContainer}>
                  <Image
                    resizeMode="cover"
                    source={require('../../../../assets/images/Profile/Rank.png')}
                    style={styles.rankImage}
                  />
                  <View style={styles.awardTextColumn}>
                    <Text style={styles.label}>Rank</Text>
                    <Text style={styles.value}>Gold</Text>
                  </View>
                </View>
              </View>
              <View style={styles.awardContainer}>
                <View style={styles.awardContentContainer}>
                  <Image
                    resizeMode="cover"
                    source={require('../../../../assets/images/Profile/Badge.png')}
                    style={styles.badgeImage}
                  />
                  <View style={styles.awardTextColumn}>
                    <Text style={styles.label}>Badge</Text>
                    <Text style={styles.value}>Twelve</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.profileStatusContainer}>
              {renderStatusViews()}
            </View>
          </View>
          <View style={styles.memoriesUploadContainer}>
            <Text style={styles.memoriesUploadText}>Memories Upload</Text>
            <View style={styles.imagesContainer}>{renderImages()}</View>
            <ImageView
              images={images}
              imageIndex={selectedIndex}
              visible={visible}
              onRequestClose={() => setIsVisible(false)}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView >
  );
};

export default ParentingProfile;
