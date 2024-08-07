import React from 'react';
import { Text, View, StatusBar, TouchableOpacity, Image, FlatList, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './MenuScreen.style';

const MenuScreen = () => {

  const menuData = [
    {
      id: '1',
      image: require('../../../../assets/images/menu/menuCardBG1.jpg'),
      title: 'Shop by Category'
    },
    {
      id: '2',
      image: require('../../../../assets/images/menu/menuCardBG2.jpg'),
      title: 'Boutiques'
    },
    {
      id: '3',
      image: require('../../../../assets/images/menu/menuCardBG3.jpg'),
      title: 'Parenting'
    },
    {
      id: '4',
      image: require('../../../../assets/images/menu/menuCardBG4.jpg'),
      title: 'Club'
    },
    {
      id: '5',
      image: require('../../../../assets/images/menu/menuCardBG5.jpg'),
      title: 'Offer Zone'
    },
    {
      id: '6',
      image: require('../../../../assets/images/menu/menuCardBG6.jpg'),
      title: 'Gifts & Cards'
    },
    {
      id: '7',
      image: require('../../../../assets/images/menu/menuCardBG7.jpg'),
      title: 'Intelli Education'
    },
    {
      id: '8',
      image: require('../../../../assets/images/menu/menuCardBG5.jpg'),
      title: 'Preschools'
    },
    {
      id: '9',
      image: require('../../../../assets/images/menu/menuCardBG9.jpg'),
      title: 'Bachay.com Stores'
    },
    {
      id: '10',
      image: require('../../../../assets/images/menu/menuCardBG10.jpg'),
      title: 'Sell With Us'
    },
    {
      id: '11',
      image: require('../../../../assets/images/menu/menuCardBG5.jpg'),
      title: 'PlayBees'
    },
    {
      id: '12',
      image: require('../../../../assets/images/menu/menuCardBG12.jpg'),
      title: 'Customer Service'
    }

  ]

  const renderItem = ({ item }) => (
    <View style={styles.cardRoot}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.cardBorder}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.40)', Colors.AppColor]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          locations={[0.1621, 1.0071]}
          style={styles.cardImageContainer}>
          <Image source={item.image} style={styles.cardImageStyle} resizeMode="cover" />
          <Text style={styles.cardTitle}>{item.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <View style={styles.root} >
        <View style={styles.mainView}>
          <FlatList
            data={menuData}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={{ gap: 15, paddingVertical: 20 }}
            renderItem={renderItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
