import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';

import AppButton from '../../../../components/AppButton';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import MainTitle from '../../../../components/Profile/MainTitle';
import ResponseModal from '../../../../components/Modals/ResponseModal';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, resendEmailOtp, verifyEmailOtp, verifyCode } from '../../../../redux/features/auth/authThunks';
import { authLoading, errState, passwordd, selectUserDetails, selectUserPassword } from '../../../../redux/features/auth/authSelectors';

import { styles } from './VerifyOtp.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addUserToken } from '../../../../redux/features/auth/authSlice';

const VerifyOtp = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(selectUserDetails);
  const passworddd = useSelector(passwordd);

  const [modalVisible, setModalVisible] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const password = useSelector(selectUserPassword)
  const [isVerifyButtonEnabled, setIsVerifyButtonEnabled] = useState(false);

  const [value, setValue] = useState('');
  const [counter, setCounter] = useState(60);
  // const { type, email } = route.params;

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  // const onSubmit = async () => {
  //   if (value.length === 4) {
  //     setButtonLoading(true);
  //     try {
  //       const temporary_token = userData?.temporary_token;
  //       const email = userData?.email;
  //       const token = value;

  //       await dispatch(verifyEmailOtp({ temporary_token, email, token, setModalVisible, setButtonLoading })).unwrap();

  //       setButtonLoading(false);
  //       navigation.replace('ProfileLogin');
  //     } catch (err) {
  //       console.log('ERR', err.message);
  //     }
  //   } else if (value.length < 4) {
  //     Alert.alert("OTP length must be 4 digits");
  //   } else {
  //     Alert.alert("Code is not valid");
  //   }
  // };


  const onSubmit = async () => {
    if (value.length === 4) {
      setButtonLoading(true);
      try {
        await dispatch(verifyCode({ code: value, password: passworddd, setModalVisible, setButtonLoading })).unwrap()
          .then((token) => {

            console.log('Token received:', token);

          })
          ;
          const token = await AsyncStorage.getItem('token');
          if (token) {
            const parsedToken = JSON.parse(token);
            dispatch(addUserToken(parsedToken));
          }
        await dispatch(getUserDetails()).unwrap();
        setButtonLoading(false);
        navigation.navigate('ShoppingScreen');
      } catch (error) {
        setButtonLoading(false);
        setModalVisible(true);

        if (error.response && error.response.data && error.response.data.errors && error.response.data.errors.length > 0) {
          const errorMessage = error.response.data.errors[0].message;
          console.error('Server error:', errorMessage);
          throw new Error(errorMessage);
        } else {
          console.error('Unknown error:', error.message);
          throw new Error(error.message);
        }
      }
    } else if (value.length < 4) {
      Alert.alert("OTP length must be 4 digits");
    } else {
      Alert.alert("Code is not valid");
    }
  };


  const resendOTP = async (data) => {
    try {
      const temporary_token = userData?.temporary_token;
      const email = userData?.email;
      await dispatch(resendEmailOtp({ temporary_token, email, setModalVisible })).unwrap();
      Alert.alert("OTP has been sent to your email");
    } catch (err) {
      console.log('ERR', err.message);
    }
  };

  // const onSubmit = () => {
  //   if (value.length === 4) {
  //     setButtonLoading(true);
  //     if (type === "verify") {
  //       dispatch(verifyEmailOtp({ code: value, navigation, setModalVisible }));
  //     } else {
  //       dispatch(CheckEmail({ email, code: value, navigation, setModalVisible }));
  //     }
  //   } else if (value.length < 4) {
  //     Alert.alert("OTP length must be 4 digits");
  //     setButtonLoading(false)
  //   } else {
  //     setButtonLoading(false)
  //   }
  // };

  // const resendCode = () => {
  //   if (type === "verify") {
  //     dispatch(checkEmail({ setModalVisible })).unwrap()
  //       .then(() => setCounter(60))
  //       .catch(error => {
  //         console.error('Error:', error);
  //       });
  //   } else {
  //     console.log("email:", email)
  //     dispatch(forgotPassword({ emaildata: email, setModalVisible })).unwrap()
  //       .then(() => setCounter(60))
  //       .catch(error => {
  //         // Handle the error here
  //         console.error('Error:', error);
  //       });
  //   }
  // }

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(prevCounter => prevCounter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const CELL_COUNT = 4;

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
        <MainTitle title="Verify Your Email" />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View style={styles.root}>
            <View style={styles.container}>
              <View style={styles.fieldsMain}>
                <CodeField
                  ref={ref}
                  {...props}
                  value={value}
                  onChangeText={(text) => {
                    setValue(text);
                    setIsVerifyButtonEnabled(text.length === 4);
                  }}
                  cellCount={CELL_COUNT}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({ index, symbol, isFocused }) => (
                    <Text
                      key={index}
                      style={[styles.cell, isFocused && styles.focusCell]}
                      onLayout={getCellOnLayoutHandler(index)}
                    >
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  )}
                />
                <AppButton
                  background
                  onPress={onSubmit}
                  loaderButton
                  loading={buttonLoading}
                  loadingStyle={{ width: 100, height: 100, marginVertical: -35 }}
                  buttonDisabled={buttonLoading}
                  label={'Verify'}
                  textStyle={styles.verifyBtnTextStyle}
                  buttonContainerStyle={styles.verifyBtnStyle}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 15
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: Colors.AppColor,
                    marginBottom: 35,
                    top: 1,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Didn't Recieve code? {counter}{' '}
                  {counter <= 1 ? 'second' : 'seconds'}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    resendOTP()
                  }}
                  disabled={counter == 0 ? false : true}>
                  <Text style={[styles.clickHere, { color: counter == 0 ? Colors.RedColor : Colors.RomanSilver },]}>
                    Click Here
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default VerifyOtp;