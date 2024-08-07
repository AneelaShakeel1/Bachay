import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, verifyPasswordOtp } from '../../../../redux/features/auth/authThunks';
import { authLoading, errState, selectUserDetails } from '../../../../redux/features/auth/authSelectors';
import { useNavigation } from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { Colors } from '../../../../constants/theme';
import { styles } from './VerifyOtpPassword.style';
import AppButton from '../../../../components/AppButton';
import ResponseModal from '../../../../components/Modals/ResponseModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerifyOtpPassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(selectUserDetails);
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const [isVerifyButtonEnabled, setIsVerifyButtonEnabled] = useState(false);

  const [value, setValue] = useState('');
  // const { type, email } = route.params;

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [getIdentity, setGetIdentity] = useState('');

  const getStoredIdentity = async () => {
    try {
      const identity = await AsyncStorage.getItem('identity');
      setGetIdentity(identity || ''); // Set the identity to state
      console.log('------------', identity);
    } catch (error) {
      console.error('Error retrieving identity from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    getStoredIdentity();
  }, []);

  const onSubmit = async () => {
    console.log(getIdentity)
    if (value.length === 4) {
      setButtonLoading(true);
      try {
        const otp = value;
        const identity = getIdentity;
        await dispatch(verifyPasswordOtp({ identity, otp, setModalVisible, setButtonLoading })).unwrap();
        setButtonLoading(false);
        await AsyncStorage.setItem('codeValue', value);
        navigation.replace('ResetPassword');
      } catch (err) {
        console.log('ERR', err.message);
      }
    } else if (value.length < 4) {
      Alert.alert("OTP length must be 4 digits");
    } else {
      Alert.alert("Code is not valid");
    }
  };

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
            <Text style={styles.headingStyle}>Verify Your OTP</Text>
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
            <View style={styles.btnRoot}>
              <AppButton
                gradient
                label={'Verify'}
                onPress={onSubmit}
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

export default VerifyOtpPassword;