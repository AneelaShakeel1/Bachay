import {
  View,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainTitle from '../../../../../components/Profile/MainTitle';
import MainAppHeader from '../../../../../components/MainAppHeader';
import { Colors } from '../../../../../constants/theme';
import GuaranteedSavingBanner from '../../../../../components/Profile/GuaranteedSavingBanner';
import { styles } from './OfferBenefits.style';

const OfferBenefits = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
        <View style={styles.mainView}>
          <View style={{ marginHorizontal: -20 }}>
            <MainTitle title={'Benefits'} />
          </View>
          <GuaranteedSavingBanner />
          <View style={{ gap: 15 }}>
            <View style={{ marginHorizontal: -20 }}>
              <MainTitle title={'Save Big'} />
            </View>
            <Text style={styles.textStyle}>
              Save Up to 35% when you use your Guaranteed Savings Offer to buy
              your favorite products from your favorite brands
            </Text>
          </View>
          <View style={{ gap: 15 }}>
            <View style={{ marginHorizontal: -20 }}>
              <MainTitle title={'Guaranteed Discount -'} />
            </View>
            <Text style={styles.textStyle}>
              "Guaranteed Savings Offer" gives you a peace of mind which means
              that you don't have to run for discounts every time you buy.
            </Text>
          </View>
          <View style={{ gap: 15 }}>
            <View style={{ marginHorizontal: -20 }}>
              <MainTitle title={'Hassle free payment -'} />
            </View>
            <Text style={styles.textStyle}>
              No need for credit/Debit Cards or Net Banking. Just use your Offer
              Code to make payments.
            </Text>
          </View>
          <View style={{ gap: 15 }}>
            <View style={{ marginHorizontal: -20 }}>
              <MainTitle title={'Managing subscriptions -'} />
            </View>
            <Text style={styles.textStyle}>
              It's simple and easy, just login to your account, check balance
              and use it anytime you like.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default OfferBenefits;
