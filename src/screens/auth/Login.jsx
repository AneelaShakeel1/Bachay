import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/features/auth/authThunks';
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
import { setPassword } from '../../redux/features/auth/authSlice';

const Login = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [eyeOff, setEyeOff] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmit = async data => {
    setButtonLoading(true);
    try {
      await dispatch(login({ data, setModalVisible, setButtonLoading })).unwrap();
      // await dispatch(getUserDetails()).unwrap();
      setButtonLoading(false);
      navigation.replace('VerifyOtp');
      dispatch(setPassword(data.password));
      console.log("first", data);
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -250}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
          <StatusBar
            animated={true}
            backgroundColor={'transparent'}
            translucent={true}
            barStyle={'dark-content'}
          />
          <ResponseModal
            imageSource={require('../../assets/LottieFiles/close.json')}
            lottieStyle={{ height: 70, width: 70 }}
            title={errorState}
            visible={modalVisible}
            onBackButtonPress={() => setModalVisible(false)}
            onBackdropPress={() => setModalVisible(false)}
          />
          <View style={styles.mainView}>
            <View style={styles.logoView}>
              <icons.Logo width={160} />
            </View>
            <Text style={styles.headingStyle}>Account Login</Text>
            {/* <Text style={[styles.forgotPassText, { fontSize: 13, textAlign: 'center' }]}>Email: customer@bachay.com</Text>
            <Text style={[styles.forgotPassText, { fontSize: 13, textAlign: 'center', marginTop: -20 }]}>Password: password</Text> */}
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
                  // onChangeText={field.onChange}
                  onChangeText={value => {
                    field.onChange(value);
                  }}
                  value={field.value}
                  keyboardType={'email-address'}
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
            {errors.email && (
              <Text style={styles.validationText}>{errors.email.message}</Text>
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
            <View style={styles.btnRoot}>
              <AppButton
                gradient
                label={'Login'}
                onPress={handleSubmit(onSubmit)}
                textStyle={styles.btnTextStyle}
                loaderButton
                loading={buttonLoading}
                loadingStyle={{ height: 30, width: 30, marginVertical: -1 }}
                buttonDisabled={buttonLoading}
                buttonContainerStyle={styles.btnStyle}
              />
              <TouchableOpacity onPress={() => navigation.navigate('CheckEmailPassword')} activeOpacity={0.8}>
                <Text style={styles.forgotPassText}>Forgotten password?</Text>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.separatorView}>
              <View style={styles.separatorLine} />
              <Text style={styles.separatorText}>Or</Text>
              <View style={styles.separatorLine} />
            </View>
            <View style={styles.authButtonStyle}>
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
          <View style={[styles.BottomTextContainer, { bottom: 20 }]}>
            <Text style={styles.BottomTextStyle}>Don’t have account?</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => props.navigation.navigate('Register')}>
              <Text style={styles.footerTextLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={{ position: "absolute", top: '5%', left: '5%', height: 50, width: 50 }}>
            <icons.BackArrow />
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
