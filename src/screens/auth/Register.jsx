import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/features/auth/authThunks';
import { authLoading, errState } from '../../redux/features/auth/authSelectors';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import icons from '../../constants/icons';
import { Colors } from '../../constants/theme';
import { styles } from './Auth.style';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import ResponseModal from '../../components/Modals/ResponseModal';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = props => {
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
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmit = async data => {
    setButtonLoading(true);
    try {
      await dispatch(
        register({ data, setModalVisible, setButtonLoading }),
      ).unwrap();
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
    <>
      <ScrollView style={{ flex: 1, backgroundColor: Colors.White }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <SafeAreaView style={styles.screenContainer}>
            <StatusBar
              animated={true}
              backgroundColor={'transparent'}
              translucent={true}

              barStyle={'dark-content'} />
            <ResponseModal
              imageSource={require('../../assets/LottieFiles/close.json')}
              lottieStyle={{ height: 70, width: 70 }}
              title={errorState}
              visible={modalVisible}
              onBackButtonPress={() => setModalVisible(false)}
              onBackdropPress={() => setModalVisible(false)} />
            <View style={styles.mainView}>
              <Text style={styles.headingStyle}>Register Account</Text>
              <Controller
                name="f_name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <AppInput
                    icon
                    placeholder="First Name"
                    IconSource={<icons.EmailIcon />}
                    styles={styles.inputStyle}
                    inputTextStyle={styles.inputTextStyle}
                    onChangeText={value => {
                      field.onChange(value);
                    }}
                    value={field.value} />
                )}
                rules={{
                  required: 'First Name is required',
                }} />
              {errors.f_name && (
                <Text style={styles.validationText}>{errors.f_name.message}</Text>
              )}
              <Controller
                name="l_name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <AppInput
                    icon
                    placeholder="Last Name"
                    IconSource={<icons.EmailIcon />}
                    styles={styles.inputStyle}
                    inputTextStyle={styles.inputTextStyle}
                    onChangeText={value => {
                      field.onChange(value);
                    }}
                    value={field.value} />
                )}
                rules={{
                  required: 'Last Name is required',
                }} />
              {errors.l_name && (
                <Text style={styles.validationText}>{errors.l_name.message}</Text>
              )}
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <AppInput
                    icon
                    placeholder="Email"
                    IconSource={<icons.EmailIcon />}
                    styles={styles.inputStyle}
                    inputTextStyle={styles.inputTextStyle}
                    onChangeText={value => {
                      field.onChange(value);
                    }}
                    value={field.value}
                    keyboardType={'email-address'} />
                )}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^\w+([.-]?\w+)*@[\w-]+(\.[a-zA-Z]{2,3})+$/,
                    message: '*Enter a valid Email',
                  },
                }} />
              {errors.email && (
                <Text style={styles.validationText}>{errors.email.message}</Text>
              )}
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <AppInput
                    icon
                    placeholder="3211234567"
                    IconSource={<icons.EmailIcon />}
                    styles={styles.inputStyle}
                    inputTextStyle={styles.inputTextStyle}
                    onChangeText={value => {
                      field.onChange(value);
                    }}
                    value={field.value}
                    keyboardType={'numeric'} />
                )}
                rules={{
                  required: 'Phone No is required',
                  pattern: {
                    value: /^(3)([0-9]{9})$/,
                    message: 'Enter valid phone number',
                  },
                }} />
              {errors.phone && (
                <Text style={styles.validationText}>{errors.phone.message}</Text>
              )}
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
                    passwordFunctionality={eyeOff ? (
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
                    )} />
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
                }} />
              {errors.password && (
                <Text style={styles.validationText}>
                  {errors.password.message}
                </Text>
              )}
              <Controller
                name="password_confirmation"
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
                    passwordFunctionality={eyeOff2 ? (
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
                    )} />
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
                    positive: value => value === watch('password') ||
                      'The password does not match',
                  },
                }} />
              {errors.password_confirmation && (
                <Text style={styles.validationText}>
                  {errors.password_confirmation.message}
                </Text>
              )}
              <AppButton
                gradient
                onPress={handleSubmit(onSubmit)}
                label={'Register'}
                loaderButton
                loading={buttonLoading}
                loadingStyle={{ height: 30, width: 30, marginVertical: -1 }}
                buttonDisabled={buttonLoading}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle} />
              {/* <View style={styles.separatorView}>
      <View style={styles.separatorLine} />
      <Text style={styles.separatorText}>Or</Text>
      <View style={styles.separatorLine} />
    </View> */}
              {/* <View style={styles.authButtonStyle}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.authButtonView}>
        <icons.GoogleIcon />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.authButtonView}>
        <icons.FacebookIcon />
      </TouchableOpacity>
    </View> */}
            </View>
            <View style={[styles.BottomTextContainer, { marginTop: 30, marginBottom: 20 }]}>
              <Text style={styles.BottomTextStyle}>Already have account?</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.footerTextLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
        style={{ position: "absolute", top: '5%', left: '5%', height: 50, width: 50 }}>
        <icons.BackArrow />
      </TouchableOpacity>
    </>
  );
};

export default Register;
