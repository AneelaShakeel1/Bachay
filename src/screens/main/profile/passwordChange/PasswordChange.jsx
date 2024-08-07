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
import { Colors } from '../../../../constants/theme';

import AppButton from '../../../../components/AppButton';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import MainTitle from '../../../../components/Profile/MainTitle';
import ResponseModal from '../../../../components/Modals/ResponseModal';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../../../redux/features/auth/authThunks';
import { authLoading, errState } from '../../../../redux/features/auth/authSelectors';
import { useForm, Controller } from 'react-hook-form';

import { styles } from './PasswordChange.style';

const PasswordChange = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const [passwordData, setPasswordData] = useState({
    current_password: '',
    new_password: '',
    new_password_confirmation: ''
  });

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const onSubmit = async () => {
    if (isValid) {
      setButtonLoading(true);
      try {
        await dispatch(changePassword({ ...passwordData, setModalVisible, setButtonLoading })).unwrap();
        setButtonLoading(false)
        navigation.replace('ProfileLogin');
      } catch (err) {
        console.log("ERR", err);
      }
    } else {
      console.log('Form is not valid. Cannot submit.');
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
        <MainTitle title="Change Password" />
        <KeyboardAwareScrollView style={styles.root} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <View style={styles.fieldsMain}>
              <View style={styles.fieldView}>
                <View style={styles.fieldIconView}>
                  <icons.PersonIcon />
                </View>
                <View style={styles.textInputView}>
                  <Controller
                    name="current_password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextInput
                        style={styles.fieldTitle}
                        placeholderTextColor={Colors.RomanSilver}
                        placeholder="Current Password"
                        onChangeText={value => {
                          field.onChange(value)
                          setPasswordData({ ...passwordData, current_password: value })
                        }}
                        value={field.value}
                        keyboardType={"default"}
                        secureTextEntry={true}
                      />
                    )}
                    rules={{
                      required: 'Current Password is required',
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
                </View>
              </View>
              {errors.current_password && <Text style={styles.validationText}>{errors.current_password.message}</Text>}
              <View style={styles.fieldView}>
                <View style={styles.fieldIconView}>
                  <icons.PersonIcon />
                </View>
                <View style={styles.textInputView}>
                  <Controller
                    name="new_password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextInput
                        style={styles.fieldTitle}
                        placeholderTextColor={Colors.RomanSilver}
                        placeholder="Change Password"
                        onChangeText={value => {
                          field.onChange(value)
                          setPasswordData({ ...passwordData, new_password: value })
                        }}
                        value={field.value}
                        keyboardType={"default"}
                        secureTextEntry={true}
                      />
                    )}
                    rules={{
                      required: 'Change Password is required',
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
                </View>
              </View>
              {errors.new_password && <Text style={styles.validationText}>{errors.new_password.message}</Text>}
              <View style={styles.fieldView}>
                <View style={styles.fieldIconView}>
                  <icons.PersonIcon />
                </View>
                <View style={styles.textInputView}>
                  <Controller
                    name="new_password_confirmation"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextInput
                        style={styles.fieldTitle}
                        placeholderTextColor={Colors.RomanSilver}
                        placeholder="Confirm Password"
                        onChangeText={value => {
                          field.onChange(value)
                          setPasswordData({ ...passwordData, new_password_confirmation: value })
                        }}
                        value={field.value}
                        keyboardType={"default"}
                        secureTextEntry={true}
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
                          value === watch('new_password') ||
                          'The password does not match',
                      },
                    }}
                  />
                </View>
              </View>
              {errors.new_password_confirmation && <Text style={styles.validationText}>{errors.new_password_confirmation.message}</Text>}
              <AppButton
                background
                onPress={handleSubmit(onSubmit)}
                loaderButton
                loading={buttonLoading}
                loadingStyle={{ width: 100, height: 100, marginVertical: -35 }}
                buttonDisabled={buttonLoading}
                label={'Save'}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default PasswordChange;