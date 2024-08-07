import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import icons from '../../constants/icons';
import { useNavigation } from '@react-navigation/native';
import { Colors, Fonts, Sizes } from '../../constants/theme';

const data = [
  {
    id: '1',
    title: 'Articles',
    imageSource: require('../../assets/images/parenting/parentingIcon1.png'),
    backgroundColor: Colors.DeepLilac,
  },
  {
    id: '2',
    title: 'Contests',
    imageSource: require('../../assets/images/parenting/parentingIcon2.png'),
    backgroundColor: Colors.BeerColor,
  },
  {
    id: '3',
    title: 'Baby Names',
    imageSource: require('../../assets/images/parenting/parentingIcon3.png'),
    backgroundColor: Colors.SuperPink,
  },
  {
    id: '4',
    title: 'Meal Planner',
    imageSource: require('../../assets/images/parenting/parentingIcon4.png'),
    backgroundColor: Colors.MalachiteGreen,
  },
  {
    id: '5',
    title: 'Vaccinations',
    imageSource: require('../../assets/images/parenting/parentingIcon5.png'),
    backgroundColor: Colors.YellowRed,
  },
];
const ParentingTools = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(2);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('ParentingStack', { screen: 'ParentingFeed' })}
      style={styles.cardRoot}>
      <View
        style={[styles.borderView, { borderColor: item.backgroundColor }]}></View>
      <View
        style={[styles.cardContainer, { backgroundColor: item.backgroundColor }]}>
        <View style={styles.cardTitleView}>
          <Text style={[styles.cardTitleText, { color: item.backgroundColor }]}>
            {item.title}
          </Text>
        </View>
        <Image
          style={styles.cardImage}
          source={item.imageSource}
          resizeMode='contain'
        />

        <View style={styles.cardBottomView}>
          <Text style={styles.cardBottonText}>Learn More</Text>
          <View style={{ marginTop: 7, marginLeft: 3 }}>
            <icons.SmallNextArrow />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.parentingHeading}>Parenting Tools</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={currentIndex}
        getItemLayout={(data, index) => ({
          length: 148,
          offset: 148 * index,
          index,
        })}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};

export default ParentingTools;

const styles = StyleSheet.create({
  root: {
    marginTop: 12,
  },
  flatListContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  parentingHeading: {
    textAlign: 'center',
    fontSize: Sizes.size24,
    fontFamily: 'Aristotelica Display DemiBold Trial',
    color: Colors.AppColor,
    textTransform: 'capitalize',
    marginBottom: 5
  },
  cardRoot: {
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    marginTop: 10,
  },
  borderView: {
    borderWidth: 2,
    height: 222,
    borderRadius: 15,
    width: 156,
    position: 'absolute',
    right: -6,
    bottom: -6,
  },
  cardContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    height: 222,
    borderRadius: 15,
    width: 156,
    alignItems: 'center',
    gap: 23,
  },
  cardTitleView: {
    width: '85%',
    backgroundColor: Colors.White,
    borderRadius: 50,
  },
  cardTitleText: {
    alignSelf: 'center',
    fontFamily: Fonts.medium,
    fontSize: Sizes.size16,
    top: 1,
  },
  cardImage: {
    alignSelf: 'center',
    width: 90,
    height: 90,
  },
  cardBottomView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardBottonText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size13,
    color: Colors.White,
    top: 1,
  },
});