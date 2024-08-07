import { View, Text, ScrollView, StatusBar, FlatList, Image, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainTitle from '../../../../../components/Profile/MainTitle';
import GeneralAppHeader from '../../../../../components/GeneralAppHeader';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../../../constants/theme';
import { styles } from './GuaranteedSavingOffer.style';
import icons from '../../../../../constants/icons';
import GuaranteedSavingBanner from '../../../../../components/Profile/GuaranteedSavingBanner';

const GuaranteedSavingOffer = () => {
  const navigation = useNavigation();
  const offerData = [
    {
      image: require('../../../../../assets/images/guaranteedsavingoffer/offerImage1.png'),
      logo: require('../../../../../assets/images/guaranteedsavingoffer/huggiesLogo.png')
    },
    {
      image: require('../../../../../assets/images/guaranteedsavingoffer/offerImage2.png'),
      logo: require('../../../../../assets/images/guaranteedsavingoffer/pamperLogo.png')
    },
    {
      image: require('../../../../../assets/images/guaranteedsavingoffer/offerImage3.png'),
      logo: require('../../../../../assets/images/guaranteedsavingoffer/mamypokoLogo.png')
    },
    {
      image: require('../../../../../assets/images/guaranteedsavingoffer/offerImage4.png'),
      logo: require('../../../../../assets/images/guaranteedsavingoffer/chiccoLogo.png'),
      onPress: () => navigation.navigate('OfferSingleProduct'),
    },
    {
      image: require('../../../../../assets/images/guaranteedsavingoffer/offerImage1.png'),
      logo: require('../../../../../assets/images/guaranteedsavingoffer/huggiesLogo.png')
    },
    {
      image: require('../../../../../assets/images/guaranteedsavingoffer/offerImage2.png'),
      logo: require('../../../../../assets/images/guaranteedsavingoffer/pamperLogo.png')
    },
    {
      image: require('../../../../../assets/images/guaranteedsavingoffer/offerImage3.png'),
      logo: require('../../../../../assets/images/guaranteedsavingoffer/mamypokoLogo.png')
    },
    {
      image: require('../../../../../assets/images/guaranteedsavingoffer/offerImage4.png'),
      logo: require('../../../../../assets/images/guaranteedsavingoffer/chiccoLogo.png')
    }
  ]
  const faqItems = [
    {
      title: 'Benefits of Guaranteed Savings Offer?',
      onPress: () => navigation.navigate('OfferBenefits'),
    },
    {
      title: 'How Guaranteed Savings Work',
      onPress: () => navigation.navigate('OfferWorks'),
    },
    {
      title: 'Frequently Ask Questions',
      onPress: () => navigation.navigate('OfferFAQs'),

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
      <MainTitle title={'Guaranteed Saving Offer'} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
        <View style={styles.offerRoot}>
          <GuaranteedSavingBanner />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={offerData}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.columnStyle}
          renderItem={({ item }) => (
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={item.onPress}
                style={styles.imageView}>
                <Image source={item.image} style={styles.imageStyle} />
              </TouchableOpacity>
              <Image source={item.logo} />
            </View>
          )
          } />
        <View style={styles.questionView}>
          <FlatList
            data={faqItems}
            contentContainerStyle={{ gap: 15 }}
            renderItem={({ item }) => (<>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={item.onPress}
                style={styles.questionBtn}>
                <Text style={styles.questionText}>{item.title}</Text>
                <icons.NavigationIcon />
              </TouchableOpacity>
            </>)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default GuaranteedSavingOffer;
