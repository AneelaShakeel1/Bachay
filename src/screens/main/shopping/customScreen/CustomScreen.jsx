import React from 'react';
import { StatusBar, FlatList, Image, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getCustomData } from '../../../../redux/features/Main/mainSelector';
import { setSelectedFilter } from '../../../../redux/features/Main/mainSlice';
import GradientText from '../../../../components/GradientText';

const CustomScreen = () => {
  const navigaton = useNavigation();
  const Data = [
    {
      imageSource: require('../../../../assets/images/reviews/reviewImage1.jpg'),
      width: 100,
      marginBottom: 10,
      marginRight: 10
    },
    {
      imageSource: require('../../../../assets/images/reviews/reviewImage2.jpg'),
      width: 120,
      marginBottom: 0,
      marginRight: 0
    },
    {
      imageSource: require('../../../../assets/images/reviews/reviewImage3.jpg'),
      width: 200,
      marginBottom: 0,
      marginRight: 0
    },
    {
      imageSource: require('../../../../assets/images/reviews/reviewImage1.jpg'),
      width: 100,
      marginBottom: 0,
      marginRight: 0
    },
    {
      imageSource: require('../../../../assets/images/reviews/reviewImage2.jpg'),
      width: 250,
      marginBottom: 0,
      marginRight: 50
    },
    {
      imageSource: require('../../../../assets/images/reviews/reviewImage3.jpg'),
      width: 120,
      marginBottom: 20,
      marginRight: 20
    }
  ];
  const dispatch = useDispatch();
  const handleItemPress = (item) => {
    console.log('Selected Item ID:', item.tags);

    setSelectedFilter(item);
    dispatch(setSelectedFilter(item.tags));
    navigaton.navigate('AllProducts')
  };

  const screen = Dimensions.get('window');
  const screenWidth = screen.width;
  const customsData = useSelector(getCustomData);
  console.log('getCustomData---------------', customsData?.in_line[0]?.[0].image);
  const renderItem = ({ item }) => {
    const imageWidth = (item.width / 100) * screenWidth;


    return (
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <Image
          source={{ uri: item?.image }}
          style={{
            width: imageWidth,
            marginBottom: item.margin_bottom,
            marginRight: item.margin_right,
            height: 100,
          }}
        />
      </TouchableOpacity>
    );
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar animated={true} backgroundColor={Colors.White} barStyle={'dark-content'} />
      <GeneralAppHeader />
      <View style={{ paddingBottom: 10, paddingHorizontal: 20 }}>
        <GradientText title={customsData?.title} width={200} size={36} />
      </View>
      <View>
        <FlatList
          data={customsData?.in_line[0]}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{ gap: 10, paddingHorizontal: 20 }}
        />
        <FlatList
          data={customsData?.in_line[1]}
          renderItem={renderItem}
          // onPress={() => handleItemPress(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{ gap: 10, paddingHorizontal: 20 }}
        />
        <FlatList
          data={customsData?.in_line[2]}
          renderItem={renderItem}
          horizontal
          // onPress={() => handleItemPress(item)}
          showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{ gap: 10, paddingHorizontal: 20 }}
        />
        <FlatList
          data={customsData?.in_line[3]}
          renderItem={renderItem}
          horizontal
          // onPress={() => handleItemPress(item)}
          showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{ gap: 10, paddingHorizontal: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomScreen;

