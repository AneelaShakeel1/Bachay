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
import { checkEmailPassword, getUserDetails } from '../../../../redux/features/auth/authThunks';
import { authLoading, errState } from '../../../../redux/features/auth/authSelectors';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import { styles } from './CheckEmailPassword.style';
import AppButton from '../../../../components/AppButton';
import AppInput from '../../../../components/AppInput';
import ResponseModal from '../../../../components/Modals/ResponseModal';

const CheckEmailPassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [eyeOff, setEyeOff] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const onSubmit = async data => {
    setButtonLoading(true);
    try {
      await AsyncStorage.setItem('identity', data.identity);
      await dispatch(checkEmailPassword({ data, setModalVisible, setButtonLoading })).unwrap();
      setButtonLoading(false);
      navigation.replace('VerifyOtpPassword');
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
            <Text style={styles.headingStyle}>Verify Your Email</Text>
            <Controller
              name="identity"
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
            {errors.identity && (
              <Text style={styles.validationText}>{errors.identity.message}</Text>
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

export default CheckEmailPassword;
