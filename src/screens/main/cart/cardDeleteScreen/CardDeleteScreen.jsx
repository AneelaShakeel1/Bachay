import React, { useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import TopHeader from '../../../../components/TopHeader';
import AppButton from '../../../../components/AppButton';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import { styles } from './CardDeleteScreen.style';

const CardDeleteScreen = () => {
  const [selectedRadio, setSelectedRadio] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        translucent={true}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <TopHeader
        title={'Credit/Debit Card'}
      />
      <View style={styles.saveCardsRoot}>
        <View style={styles.cardHeadingView}>
          <Text style={styles.cardHeadingText}>Save Cards</Text>
        </View>
        <View style={styles.methodsBtnView}>
          <TouchableOpacity style={styles.creditBtn} activeOpacity={0.8} onPress={() => setSelectedRadio(1)}>
            <View style={styles.btnTextView}>
              <icons.MastercardIcon />
              <Text style={styles.btnText}>2222-3333-4444-5555</Text>
            </View>
            <View
              style={styles.radioView}
            >
              {selectedRadio === 1 ? (
                <View style={styles.radioBg}></View>
              ) : (
                <View style={styles.radioOff}></View>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.creditBtn} activeOpacity={0.8} onPress={() => setSelectedRadio(2)}>
            <View style={styles.btnTextView}>
              <icons.VisaIcon />
              <Text style={styles.btnText}>2222-3333-4444-5555</Text>
            </View>
            <View
              style={styles.radioView}
            >
              {selectedRadio === 2 ? (
                <View style={styles.radioBg}></View>
              ) : (
                <View style={styles.radioOff}></View>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <AppButton
          label="Delete"
          image
          imageLeft
          background
          ImageSource={<icons.DeleteIcon />}
          buttonContainerStyle={styles.DeletebtnStyle}
          textStyle={styles.DeletetxtStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default CardDeleteScreen;