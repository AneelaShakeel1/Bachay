import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import icons from '../../../../constants/icons';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

import AppButton from '../../../../components/AppButton';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import ResponseModal from '../../../../components/Modals/ResponseModal';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { changeEmail, checkEmail, getUserDetails } from '../../../../redux/features/auth/authThunks';
import { selectUserDetails, authLoading, errState } from '../../../../redux/features/auth/authSelectors';
import { useForm, Controller } from 'react-hook-form';

import { styles } from './CheckEmail.style';

const CheckEmail = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const userData = useSelector(selectUserDetails);

  // Email Change
  const defaultEmail = userData?.email;
  const emailStatus = userData?.is_email_verified;
  const emailVerified = emailStatus === 0 ? "Unverified" : "Verified";

  const [emailData, setEmailData] = useState({
    email: defaultEmail
  });

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  console.log('------------------------------------', userData?.is_email_verified)

  //! Verify Email
  const onVerify = async (data) => {
    setButtonLoading(true);
    try {
      const temporary_token = userData?.temporary_token;
      await dispatch(checkEmail({ data, temporary_token, setModalVisible, setButtonLoading })).unwrap();
      setButtonLoading(false);
      navigation.replace('VerifyOtp');
    } catch (err) {
      console.log('ERR', err.message);
    }
  };

  useEffect(() => {
    if (modalVisible) {
      const timeout = setTimeout(() => {
        setModalVisible(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [modalVisible]);

  const loading = useSelector(authLoading);
  const errorState = useSelector(errState);

  console.log('userData-----------------q', userData);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor={Colors.White}
          barStyle={'dark-content'}
        />
        <ResponseModal
          imageSource={require('../../../../assets/LottieFiles/close.json')}
          lottieStyle={{ height: 70, width: 70 }}
          title={errorState}
          visible={modalVisible}
          onBackButtonPress={() => setModalVisible(false)}
          onBackdropPress={() => setModalVisible(false)}
        />
        <GeneralAppHeader />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <View style={styles.root}>
              <View style={styles.changeEmailRow}>
                <Text style={styles.changeEmailText}>Change Email</Text>
                <Text style={[styles.emailVerfiedText, { color: emailStatus === 0 ? Colors.RedColor : Colors.GreenColor }]}>
                  {emailVerified}
                </Text>
              </View>
              <View style={styles.separatorLine} />
              <View style={styles.fieldsMain}>
                <View style={styles.fieldView}>
                  <View style={styles.fieldIconView}>
                    <icons.PersonIcon />
                  </View>
                  <View style={styles.textInputView}>
                    <Controller
                      name="email"
                      control={control}
                      defaultValue={defaultEmail}
                      render={({ field }) => (
                        <TextInput
                          style={styles.fieldTitle}
                          placeholderTextColor={Colors.RomanSilver}
                          placeholder="Email Confirmation"
                          onChangeText={value => {
                            field.onChange(value)
                            setEmailData({ ...emailData, email: value })
                          }}
                          value={field.value}
                          keyboardType={"email-address"}
                        />
                      )}
                      rules={{
                        required: 'Email is required',
                        pattern: {
                          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                          message: 'Enter a valid Email',
                        },
                      }}
                    />
                  </View>
                </View>
                {errors.email && <Text style={styles.validationText}>{errors.email.message}</Text>}
                {emailStatus === 0 &&
                  <AppButton
                    background
                    onPress={handleSubmit(onVerify)}
                    loaderButton
                    loading={buttonLoading}
                    loadingStyle={{ width: 100, height: 100, marginVertical: -35 }}
                    buttonDisabled={buttonLoading}
                    label={'Verify Email'}
                    textStyle={styles.verifyBtnTextStyle}
                    buttonContainerStyle={styles.verifyBtnStyle}
                  />
                }
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default CheckEmail;