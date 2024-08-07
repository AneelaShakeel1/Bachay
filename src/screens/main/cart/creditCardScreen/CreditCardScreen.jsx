import React, { useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import TopHeader from '../../../../components/TopHeader';
import AppButton from '../../../../components/AppButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import { styles } from './CreditCardScreen.style';

const CreditCardScreen = () => {
  const navigation = useNavigation();
  const [selectedRadio, setSelectedRadio] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor={Colors.White}
          translucent={true}
          barStyle={'dark-content'}
        />
        <GeneralAppHeader />
        <TopHeader title={'Credit/Debit Card'} />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View style={styles.saveCardsRoot}>
            <View style={styles.cardHeadingView}>
              <Text style={styles.cardHeadingText}>Save Cards</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('CardDeleteScreen')}>
                <Text style={styles.headingEditText}>Edit</Text>
              </TouchableOpacity>
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
          <View style={styles.addCardsRoot}>
            <View style={styles.cardHeadingView}>
              <Text style={styles.cardHeadingText}>Add New Card</Text>
            </View>
            <View style={styles.inputsView}>
              <TextInput
                style={styles.cardInputs}
                placeholder="Card Number"
                placeholderTextColor={Colors.QuickSilver}
              />
              <TextInput
                style={styles.cardInputs}
                placeholder="Name on Card"
                placeholderTextColor={Colors.QuickSilver}
              />
              <View style={styles.bottomInputsView}>
                <TextInput
                  style={styles.dateInput}
                  placeholder="Expiry Date"
                  placeholderTextColor={Colors.QuickSilver}
                />
                <View style={styles.cvvInputContainer}>
                  <TextInput
                    style={styles.cvvInput}
                    placeholder="CVV"
                    placeholderTextColor={Colors.QuickSilver}
                  />
                  <icons.CVVIcon />
                </View>
              </View>
            </View>
            <View style={styles.saveCardOptionView}>
              <View style={{ width: '80%' }}>
                <Text style={styles.saveCardOptionHeading}>Save Card</Text>
                <Text style={styles.saveCardOptionDes}>
                  Make easy payments for future, your card will be saved in you
                  account
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.toggleSwitch}
                  onPress={() => setIsEnabled(!isEnabled)}>
                  <View
                    style={[
                      styles.toggleCircle,
                      { marginLeft: isEnabled ? '50%' : 3 },
                      {
                        backgroundColor: isEnabled
                          ? Colors.BlueViolet
                          : Colors.AppColor,
                      },
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.footerStyle}>
          <View>
            <View style={styles.footerText}>
              <Text style={styles.footerSubtotalText}>Subtotal</Text>
              <Text style={styles.footerSubtotalText}>Rs. 3999</Text>
            </View>
            <View style={styles.footerText}>
              <Text style={styles.footerTotalText}>Total</Text>
              <Text style={styles.footerTotalText}>Rs. 3999</Text>
            </View>
          </View>
          <AppButton
            textStyle={styles.footerBtnTextStyle}
            background
            label="Pay Now"
            onPress={() => navigation.navigate('OrderPlacedScreen')}
            buttonContainerStyle={styles.footerBtnStyle}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback >
  );
};

export default CreditCardScreen;
