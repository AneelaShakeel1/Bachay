import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import AppButton from '../../../../components/AppButton';
import MainTitle from '../../../../components/Profile/MainTitle';
import { styles } from './ClubCashScreen.style';

const ClubCashScreen = () => {
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

  const faqItems = [
    {
      id: '1',
      question: 'What is Club Cash Program on Products?',
      answer:
        "The Club Cash Program on Products is a customer loyalty initiative where shoppers earn digital currency, 'Club Cash,' with each purchase. This earned currency can be redeemed for discounts, exclusive offers, or free products on future transactions, enhancing customer satisfaction and fostering loyalty by providing valuable perks and rewards for continued patronage.",
    },
    {
      id: '2',
      question: 'How do I earn Club Cash on Products?',
      answer:
        "Earning Club Cash on Products is easy! Simply make purchases, and with each transaction, accumulate digital currency, 'Club Cash.' This earned currency can be redeemed for discounts, exclusive offers, or free products on your next purchases, adding extra value to your shopping experience as a token of appreciation for your loyalty.",
    },
    {
      id: '3',
      question: 'How is my Club Calculated on Products?',
      answer:
        "Your Club Cash on Products is calculated based on your purchase activity. For every transaction, you earn a specific amount of digital currency, 'Club Cash.' The more you shop, the more Club Cash you accumulate. This digital currency can then be redeemed for discounts, special offers, or free products on subsequent purchases, enhancing your overall shopping benefits.",
    },
    {
      id: '4',
      question: 'How do I redeem my Club Cash?',
      answer:
        "Redeeming your Club Cash is a breeze! Simply select your desired products during checkout, and you'll find an option to apply your accumulated Club Cash. Choose the amount you wish to redeem, and enjoy instant discounts, exclusive offers, or even free products as a token of appreciation for your loyalty. Happy shopping!",
    },
    {
      id: '5',
      question: 'What happens If I return/cancel my order?',
      answer:
        "In the event of a return or order cancellation, the Club Cash associated with the original purchase may be adjusted accordingly. Typically, the redeemed Club Cash will be deducted, while any earned but unused Club Cash may be retained or adjusted based on the terms and conditions of the Club Cash Program.",
    },
    {
      id: '6',
      question: 'Can I Earn Club if I am not a club Member?',
      answer:
        "Typically, to earn Club Cash, you need to be a Club Member. Joining the club is easy and often involves creating an account or enrolling in a loyalty program. Once a member, you can start accumulating Club Cash with each purchase, unlocking various benefits and exclusive rewards tailored for loyal customers.",
    },
  ];

  const renderFAQItem = ({ item, index }) => (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => toggleExpand(index)}
        style={[
          styles.questionBtnView,
          {
            borderBottomLeftRadius: expandedIndex.includes(index) ? 0 : 30,
            borderBottomRightRadius: expandedIndex.includes(index) ? 0 : 30,
            borderBottomWidth: expandedIndex.includes(index) ? 0 : 0.5,
          },
        ]}>
        <Text style={styles.questionBtnText}>{item.question}</Text>
        {expandedIndex.includes(index) ? (
          <icons.UpwardArrowIcon style={{ bottom: 2 }} />
        ) : (
          <icons.DownwardArrowIcon style={{ bottom: 2 }} />
        )}
      </TouchableOpacity>
      {expandedIndex.includes(index) && (
        <Text style={[styles.questionBtnText, styles.ansText]}>
          {item.answer}
        </Text>
      )}
    </>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <MainTitle title="Club Cash" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
        <View style={styles.cashRoot}>
          <LinearGradient
            colors={['rgba(253, 199, 65, 0.10)', 'transparent']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.blackGradientView}>
            <View style={{ gap: 5 }}>
              <Text style={styles.balanceText}>Current Balance</Text>
              <Text style={styles.price}>Rs. 278</Text>
              <AppButton
                label="Shop Now"
                background
                buttonContainerStyle={styles.shopBtnStyle}
                textStyle={styles.shopBtnText}
              />
            </View>
            <icons.CoinBag style={styles.coinBagImg} />
          </LinearGradient>
          <LinearGradient
            colors={['rgba(41, 45, 50, 0.70)', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.blueGradient}>
            <Text style={styles.clubText}>
              Join Cub & Earn Club Cash Benefit on Products
            </Text>
            <View style={styles.joinRoot}>
              <View style={styles.joinView}>
                <Text style={styles.monthText}>3 Months</Text>
                <View style={styles.priceTextView}>
                  <Text style={styles.joinPrice}>Rs. 327.18</Text>
                  <View style={styles.discountView}>
                    <Text style={styles.discountPrice}>Rs. 327.18</Text>
                    <Text style={styles.offText}>18% Off</Text>
                  </View>
                </View>
                <AppButton
                  label="Add Now"
                  background
                  buttonContainerStyle={styles.addBtnStyle}
                  textStyle={styles.addBtnText}
                />
              </View>
              <View style={styles.joinView}>
                <Text style={styles.monthText}>12 Months</Text>
                <View style={styles.priceTextView}>
                  <Text style={styles.joinPrice}>Rs. 1087.32</Text>
                  <View style={styles.discountView}>
                    <Text style={styles.discountPrice}>Rs. 1599</Text>
                    <Text style={styles.offText}>32% Off</Text>
                  </View>
                </View>
                <AppButton
                  label="Add Now"
                  background
                  buttonContainerStyle={styles.addBtnStyle}
                  textStyle={styles.addBtnText}
                />
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.earnCashView}>
          <Text style={styles.earnCashHeading}>How to Earn Club Cash?</Text>
          <View style={styles.earnCashDescripView}>
            <Image
              source={require('../../../../assets/images/clubWelcome.png')}
              style={styles.earnCashWelcome}
            />
            <Text style={styles.earnCashDesText}>
              Join Club membership & earn club cash on purchase of eligible
              products.
            </Text>
          </View>
          <View style={{ gap: -6 }}>
            <Text style={styles.planHeading}>3 Month Plan:</Text>
            <Text style={styles.planDescription}>
              Customer receive Club Cash as per the Club cash allocation logic
              of Bachay.com
            </Text>
            <icons.PointerArrow style={styles.pointerArrow} />
          </View>
          <View style={{ gap: -6 }}>
            <Text style={styles.planHeading}>12 Month Plan:</Text>
            <Text style={styles.planDescription}>
              Customers receive 2 X of 3 Months Club Cash.
            </Text>
            <icons.PointerArrow style={styles.pointerArrow} />
          </View>
        </View>
        <View style={styles.stepsView}>
          <Text style={styles.stepsText}>Join Club</Text>
          <View style={styles.separatorView} />
          <Text style={styles.stepsText}>
            Select your favorite products on Bachay.com
          </Text>
          <View style={styles.separatorView} />
          <Text style={styles.stepsText}>
            Club Cash to be earned is mentioned against each eligible product
          </Text>
          <View style={styles.separatorView} />
          <Text style={styles.stepsText}>Earn Club Cash on your purchase</Text>
          <View style={styles.separatorView} />
          <Text style={styles.stepsText}>
            Once product is successfully delivered, earned Club Cash would show
            in your account
          </Text>
          <View style={styles.separatorView} />
          <Text style={styles.stepsText}>
            Accumulate a minimum of Rs. 100 Club Cash
          </Text>
          <View style={styles.separatorView} />
          <Text style={styles.stepsText}>
            Pay for your order with the Club Cash earned
          </Text>
        </View>
        <View style={styles.questionView}>
          <Text style={styles.questionHeading}>Frequently Ask Questions</Text>
          <FlatList
            data={faqItems}
            keyExtractor={item => item.id}
            renderItem={renderFAQItem}
            contentContainerStyle={{ gap: 15 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClubCashScreen;