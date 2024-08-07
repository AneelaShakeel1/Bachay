import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';

import MainTitle from '../../../../components/Profile/MainTitle';
import AppButton from '../../../../components/AppButton';

import CheckBox from '@react-native-community/checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { updateAddress } from '../../../../redux/features/auth/authThunks';
import {
  authLoading,
  errState,
  selectEditAddressDetails,
} from '../../../../redux/features/auth/authSelectors';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { styles } from './EditAddress.style';
import ResponseModal from '../../../../components/Modals/ResponseModal';

const EditAddress = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const editAddressData = useSelector(selectEditAddressDetails);

  const [addressType, setAddressType] = useState('');
  const [isDefault, setIsDefault] = useState(true);

  useEffect(() => {
    setAddressType(editAddressData.address_type);
  }, [editAddressData]);

  const [modalVisible, setModalVisible] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      address_type: addressType,
      is_default: isDefault,
    };
    try {
      setButtonLoading(true);
      const successMessage = await dispatch(updateAddress({ data: newData, id: editAddressData.id, setModalVisible }));
      console.log('Success:', successMessage);
      setButtonLoading(false);
      navigation.replace('AddressBook');
    } catch (err) {
      console.log('ERR', err);
      setButtonLoading(false)
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

  console.log();

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
        <MainTitle title={'Edit Address'} />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.editAddressContainer}>
            <View style={styles.fieldsRoot}>
              <View style={styles.field}>
                <Controller
                  name="contact_person_name"
                  control={control}
                  defaultValue={editAddressData.contact_person_name}
                  render={({ field }) => (
                    <TextInput
                      style={styles.input}
                      placeholderTextColor={Colors.RomanSilver}
                      placeholder="Enter Name"
                      onChangeText={value => {
                        field.onChange(value);
                      }}
                      value={field.value}
                      keyboardType={'default'}
                    />
                  )}
                  rules={{
                    required: 'Name is required',
                  }}
                />
              </View>
              {errors.contact_person_name && (
                <Text style={styles.validationText}>{errors.contact_person_name.message}</Text>
              )}
              <View style={styles.field}>
                <Controller
                  name="appartment_no"
                  control={control}
                  defaultValue={editAddressData.appartment_no}
                  render={({ field }) => (
                    <TextInput
                      style={styles.input}
                      placeholderTextColor={Colors.RomanSilver}
                      placeholder="Flat/Appartment No, House/Building"
                      onChangeText={value => {
                        field.onChange(value);
                      }}
                      value={field.value}
                      keyboardType={'default'}
                    />
                  )}
                  rules={{
                    required: 'Flat No, House/Building is required',
                  }}
                />
              </View>
              {errors.appartment_no && (
                <Text style={styles.validationText}>
                  {errors.appartment_no.message}
                </Text>
              )}
              <View style={styles.field}>
                <Controller
                  name="street_address"
                  control={control}
                  defaultValue={editAddressData.street_address}
                  render={({ field }) => (
                    <TextInput
                      style={styles.input}
                      placeholderTextColor={Colors.RomanSilver}
                      placeholder="Street Address/Colony"
                      onChangeText={value => {
                        field.onChange(value);
                      }}
                      value={field.value}
                      keyboardType={'default'}
                    />
                  )}
                  rules={{
                    required: 'Street Address/Colony is required',
                  }}
                />
              </View>
              {errors.street_address && (
                <Text style={styles.validationText}>
                  {errors.street_address.message}
                </Text>
              )}
              <View style={styles.field}>
                <Controller
                  name="zip"
                  control={control}
                  defaultValue={editAddressData.zip}
                  render={({ field }) => (
                    <TextInput
                      style={styles.input}
                      placeholderTextColor={Colors.RomanSilver}
                      placeholder="Zip Code"
                      onChangeText={value => {
                        field.onChange(value);
                      }}
                      value={field.value}
                      keyboardType={'numeric'}
                    />
                  )}
                />
              </View>
              <View style={styles.field}>
                <Controller
                  name="city"
                  control={control}
                  defaultValue={editAddressData.city}
                  render={({ field }) => (
                    <TextInput
                      style={styles.input}
                      placeholderTextColor={Colors.RomanSilver}
                      placeholder="City"
                      onChangeText={value => {
                        field.onChange(value);
                      }}
                      value={field.value}
                      keyboardType={'default'}
                    />
                  )}
                  rules={{
                    required: 'City is required',
                  }}
                />
              </View>
              {errors.city && (
                <Text style={styles.validationText}>{errors.city.message}</Text>
              )}
              <View style={styles.field}>
                <Controller
                  name="state"
                  control={control}
                  defaultValue={editAddressData.state}
                  render={({ field }) => (
                    <TextInput
                      style={styles.input}
                      placeholderTextColor={Colors.RomanSilver}
                      placeholder="State"
                      onChangeText={value => {
                        field.onChange(value);
                      }}
                      value={field.value}
                      keyboardType={'default'}
                    />
                  )}
                  rules={{
                    required: 'State is required',
                  }}
                />
              </View>
              {errors.state && (
                <Text style={styles.validationText}>
                  {errors.state.message}
                </Text>
              )}
              <View style={[styles.field, styles.mobNum]}>
                <Text style={styles.countryCode}>+92 |</Text>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue={editAddressData.phone}
                  render={({ field }) => (
                    <TextInput
                      style={[styles.input, { width: '90%' }]}
                      placeholderTextColor={Colors.RomanSilver}
                      placeholder="Mobile No"
                      onChangeText={value => {
                        field.onChange(value);
                      }}
                      value={field.value}
                      keyboardType={'numeric'}
                    />
                  )}
                  rules={{
                    required: 'Mobile No is required',
                    pattern: {
                      value: /^(3)([0-9]{9})$/,
                      message: 'Enter valid phone number',
                    },
                  }}
                />
              </View>
              {errors.phone && (
                <Text style={styles.validationText}>
                  {errors.phone.message}
                </Text>
              )}
            </View>
            <View style={styles.addressType}>
              <Text style={styles.addressTypeText}>Address Type:</Text>
              <View style={styles.radioMain}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setAddressType('home')}>
                  <View style={styles.radioView}>
                    <View style={styles.radio}>
                      {addressType == 'home' ? (
                        <View style={styles.radioBg}></View>
                      ) : null}
                    </View>
                    <Text style={styles.radioText}>Home</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setAddressType('office')}>
                  <View style={styles.radioView}>
                    <View style={styles.radio}>
                      {addressType == 'office' ? (
                        <View style={styles.radioBg}></View>
                      ) : null}
                    </View>
                    <Text style={styles.radioText}>Office</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.defaultType}>
              <CheckBox
                value={isDefault}
                onValueChange={() => {
                  setIsDefault(!isDefault);
                }}
                tintColors={{
                  true: Colors.BlueViolet,
                  false: Colors.BlackCoral,
                }}
                style={[
                  Platform.OS === 'android'
                    ? { transform: [{ scaleX: 1 }, { scaleY: 1 }] }
                    : { height: 24, width: 24 },
                ]}
                boxType="square"
                onCheckColor={Colors.White}
                onFillColor={Colors.BlueViolet}
                onTintColor={Colors.BlueViolet}
              />
              <Text style={styles.defaultTypeText}>Make it default?</Text>
            </View>
            <View style={styles.btnsView}>
              <AppButton
                textStyle={styles.cancelBtnTextStyle}
                onPress={() => navigation.navigate('AddressBook')}
                background
                label="Cancel"
                buttonContainerStyle={styles.cancelBtnStyle}
              />
              <AppButton
                background
                onPress={handleSubmit(onSubmit)}
                loaderButton
                loading={buttonLoading}
                loadingStyle={{ width: 100, height: 100, marginVertical: -35 }}
                buttonDisabled={buttonLoading}
                label="Save"
                textStyle={styles.saveBtnTextStyle}
                buttonContainerStyle={styles.saveBtnStyle}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
export default EditAddress;
