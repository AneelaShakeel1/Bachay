import React from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  ImageBackground,
  Text,
  Image,
} from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';
import BPLAppHeader from '../../../../../components/BPLAppHeader';
import BPLBottomTabNavigation from '../../../../../navigators/BPLBottomTabNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Rules.style';

const Rules = () => {
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
        style={styles.backgroundImage}>
        <BPLAppHeader title={'Bachay Parenting League'} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.faqRoot}>
            <Image
              source={require('../../../../../assets/images/parenting/bpl/faqImage.png')}
              style={styles.fixedImage}
            />
            <Text style={styles.heading}>Rules</Text>
            <View style={{ gap: 10 }}>
              <Text style={styles.subHeadingText}>
                Terms & Conditions - Bachay Parenting League.
              </Text>
              <Text style={styles.answerText}>
                <Text style={{ fontFamily: Fonts.semiBold }}>A.</Text> An
                eCommerce platform is a software application that enables
                businesses to conduct online transactions. It includes features
                such as product listing, shopping cart functionality, secure
                payment gateways, and order management, providing a complete
                solution for selling products or services online.
              </Text>
            </View>
            <View style={{ gap: 10 }}>
              <Text style={styles.subHeadingText}>General Information</Text>
              <Text style={styles.answerText}>
                <Text style={{ fontFamily: Fonts.semiBold }}>A.</Text> Important
                features include user-friendly product management, secure
                payment options, mobile responsiveness, customizable design, SEO
                capabilities, and robust analytics for tracking sales
                performance.
              </Text>
            </View>
            <View style={{ gap: 10 }}>
              <Text style={styles.subHeadingText}>
                ECommerce Platform Security?
              </Text>
              <Text style={styles.answerText}>
                <Text style={{ fontFamily: Fonts.semiBold }}>A.</Text> eCommerce
                platforms implement secure payment gateways that encrypt
                sensitive customer information during transactions. They often
                comply with industry standards and use technologies like SSL
                certificates to provide a secure shopping experience.
              </Text>
            </View>
          </View>
        </ScrollView>
        <BPLBottomTabNavigation FocusRank />
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Rules;
