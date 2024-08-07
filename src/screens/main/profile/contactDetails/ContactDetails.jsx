import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import AppButton from '../../../../components/AppButton';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import MainTitle from '../../../../components/Profile/MainTitle';
import AppInput from '../../../../components/AppInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './ContactDetails.style';

const ContactDetails = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor={Colors.White}
          barStyle={'dark-content'}
        />
        <GeneralAppHeader />
        <MainTitle title={'Contact Details'} />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View style={styles.contactDetailsContainer}>
            <View style={styles.inputRoot}>
              <AppInput
                icon
                placeholder="youremail@company.com"
                IconSource={<icons.EmailBlackIcon />}
                styles={styles.inputStyle}
                inputTextStyle={styles.inputTextStyle}
              />
            </View>
            <View style={styles.btnsView}>
              <AppButton
                textStyle={styles.cancelBtnTextStyle}
                background
                label="Cancel"
                buttonContainerStyle={styles.cancelBtnStyle}
              />
              <AppButton
                textStyle={styles.verifyBtnTextStyle}
                background
                label="Verify"
                buttonContainerStyle={styles.verifyBtnStyle}
              />
            </View>
            <Text style={styles.otpText}>
              A one time password (OTP) will be sent to the above mobile number
              and email
            </Text>
            <Text style={styles.verifyText}>
              Why should I verify my mobile number
            </Text>
            <View style={styles.verifyInfoContainer}>
              <icons.IIcon />
              <Text style={styles.verifyInfoText}>
                By verifying your mobile number with us you can now Shop’n’Earn
                Club Cash at our Bachay Store too! To earn Club Cash on store
                purchases, simple provided verified mobile number at the time of
                billing.{' '}
                <Text style={styles.tcApplyText}>T&C Apply</Text>
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>

  );
};

export default ContactDetails;

