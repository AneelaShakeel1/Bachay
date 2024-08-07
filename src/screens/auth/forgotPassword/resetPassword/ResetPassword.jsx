import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { checkEmailPassword, getUserDetails, resetPassword } from '../../../../redux/features/auth/authThunks';
import { authLoading, errState } from '../../../../redux/features/auth/authSelectors';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import { styles } from './ResetPassword.style';
import AppButton from '../../../../components/AppButton';
import AppInput from '../../../../components/AppInput';
import ResponseModal from '../../../../components/Modals/ResponseModal';

const ResetPassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [eyeOff, setEyeOff] = useState(true);
  const [eyeOff2, setEyeOff2] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const passwordValue = watch('password', '');
  const confirm_passwordValue = watch('confirm_password', '');

  const [getIdentity, setGetIdentity] = useState('');
  const [getCode, setGetCode] = useState('');

  const getStoredIdentity = async () => {
    try {
      const identity = await AsyncStorage.getItem('identity');
      setGetIdentity(identity || '');
      console.log('------------', identity);
    } catch (error) {
      console.error('Error retrieving identity from AsyncStorage:', error);
    }
  };
  const getStoredCode = async () => {
    try {
      const code = await AsyncStorage.getItem('codeValue');
      setGetCode(code || '');
      console.log('------------', code);
    } catch (error) {
      console.error('Error retrieving code from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    getStoredIdentity();
    getStoredCode();
  }, []);

  console.log('--------------', getCode + ' ' + getIdentity + ' ' + passwordValue + ' ' + confirm_passwordValue);

  const onSubmit = async () => {
    setButtonLoading(true);
    try {
      const identity = getIdentity;
      const otp = getCode;

      const password = passwordValue;
      const confirm_password = confirm_passwordValue;

      console.log('Password:', password);
      console.log('Confirm Password:', confirm_password);

      await dispatch(resetPassword({
        identity,
        otp,
        password,
        confirm_password,
        setModalVisible,
        setButtonLoading,
      })).unwrap();
      setButtonLoading(false);
      navigation.replace('Login');
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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor={'transparent'}
          translucent={true}
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
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.mainView}>
            <Text style={styles.headingStyle}>Reset Password</Text>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <AppInput
                  icon
                  keyboardType={'default'}
                  placeholder="Password"
                  maxLength={20}
                  IconSource={<icons.PasswordIcon />}
                  styles={styles.inputStyle}
                  inputTextStyle={styles.inputTextStyle}
                  onChangeText={value => {
                    field.onChange(value);
                  }}
                  value={field.value}
                  secureTextEntry={eyeOff ? true : false}
                  passwordFunctionality={
                    eyeOff ? (
                      <TouchableOpacity
                        onPress={() => setEyeOff(false)}
                        activeOpacity={0.8}>
                        <icons.EyeIconOff width={22} height={22} />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => setEyeOff(true)}
                        activeOpacity={0.8}>
                        <icons.EyeIcon />
                      </TouchableOpacity>
                    )
                  }
                />
              )}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password too short (minimum length is 8)',
                },
                maxLength: {
                  value: 16,
                  message: 'Password too long (maximum length is 16)',
                },
              }}
            />
            {errors.password && (
              <Text style={styles.validationText}>
                {errors.password.message}
              </Text>
            )}
            <Controller
              name="confirm_password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <AppInput
                  icon
                  keyboardType={'default'}
                  placeholder="Re-Enter Password"
                  maxLength={20}
                  IconSource={<icons.PasswordIcon />}
                  styles={styles.inputStyle}
                  inputTextStyle={styles.inputTextStyle}
                  onChangeText={value => {
                    field.onChange(value);
                  }}
                  value={field.value}
                  secureTextEntry={eyeOff2 ? true : false}
                  passwordFunctionality={
                    eyeOff2 ? (
                      <TouchableOpacity
                        onPress={() => setEyeOff2(false)}
                        activeOpacity={0.8}>
                        <icons.EyeIconOff width={22} height={22} />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => setEyeOff2(true)}
                        activeOpacity={0.8}>
                        <icons.EyeIcon />
                      </TouchableOpacity>
                    )
                  }
                />
              )}
              rules={{
                required: 'Confirm Password is required',
                minLength: {
                  value: 8,
                  message: 'Password too short (minimum length is 8)',
                },
                maxLength: {
                  value: 16,
                  message: 'Password too long (maximum length is 16)',
                },
                validate: {
                  positive: value =>
                    value === watch('password') ||
                    'The password does not match',
                },
              }}
            />
            {errors.confirm_password && (
              <Text style={styles.validationText}>
                {errors.confirm_password.message}
              </Text>
            )}
            <View style={styles.btnRoot}>
              <AppButton
                gradient
                label={'Next'}
                onPress={handleSubmit(onSubmit)}
                textStyle={styles.btnTextStyle}
                loaderButton
                loading={buttonLoading}
                loadingStyle={{ height: 30, width: 30, marginVertical: -1 }}
                buttonDisabled={buttonLoading}
                buttonContainerStyle={styles.btnStyle}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ResetPassword;
