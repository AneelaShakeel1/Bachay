import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  Keyboard,
  PermissionsAndroid,
  ActivityIndicator,
  Alert,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';

import AppButton from '../../../../components/AppButton';
import TopHeader from '../../../../components/TopHeader';
import DatePickerComponent from '../../../../components/DatePickerComponent';
import ResponseModal from '../../../../components/Modals/ResponseModal';

import { accessCamera, accessGallery } from '../../../../components/ImagePicker';
import { ImagePickerModal } from '../../../../components/Modals/ImagePickerModal';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import { addChild } from '../../../../redux/features/auth/authThunks';
import { authLoading, errState, selectUserDetails } from '../../../../redux/features/auth/authSelectors';
import { useForm, Controller } from 'react-hook-form';
import { RESULTS, check, PERMISSIONS } from 'react-native-permissions';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';


import { styles } from './AddChild.style';

const AddChild = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userData = useSelector(selectUserDetails);

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  console.log('--------------', selectedPhoto);

  const [imagePickModal, setImagePickModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const loading = useSelector(authLoading);
  const errorState = useSelector(errState);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'ios') {
      try {
        const result = await check(PERMISSIONS.IOS.CAMERA);
        switch (result) {
          case RESULTS.UNAVAILABLE:
            //console.log('This feature is not available (on this device / in this context)');
            break;
          case RESULTS.DENIED:
            //console.log('The permission has not been requested / is denied but requestable');
            break;
          case RESULTS.LIMITED:
            //console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            //console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            //console.log('The permission is denied and not requestable anymore');
            break;
        }
      } catch (error) {
        // handle error
      }
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Access Permission',
            message: 'App needs access to your camera to upload profile image',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //console.log('You can use the camera');
        } else {
          //console.log("Camera Permission isn't Given go to setting to access camera permission");
        }
      } catch (err) {
        alert(err);
      }
    }
  }

  const [selectDOB, setSelectDOB] = useState();
  const [dob, setDob] = useState(new Date());
  const [dobModal, setDobModal] = useState(false);
  const [isDSelected, setIsDSelected] = useState(false);

  const [selectedGender, setSelectedGender] = useState(
    'male' ? 1 : 'female' ? 0 : null
  );

  const [childrenData, setChildrenData] = useState({
    gender: selectedGender === 1 ? 'male' : selectedGender === 0 ? 'female' : '',
    dob: selectDOB
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const onSubmit = async () => {
    try {
      if (!selectedPhoto) {
        Alert.alert('Please select a photo.');
        return;
      }

      if (userData.gender === null) {
        Alert.alert('Complete Your Profile', 'Please complete your profile before adding a child.', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('ProfileLogin');
            },
          },
        ]);
        return;
      }

      const today = new Date();
      if (dob > today) {
        Alert.alert('Invalid Date', 'Please select a date on or before today.');
        return;
      }

      setImagePickModal(false);

      const genderString = selectedGender === 1 ? '1' : selectedGender === 0 ? '0' : '';
      const formattedDateOfBirth = format(parseISO(dob.toISOString()), 'yy-MM-dd');

      const formData = new FormData();
      formData.append('relation_type', 'Child');
      formData.append('name', childrenData.name);
      formData.append('dob', formattedDateOfBirth);
      formData.append('gender', genderString);
      formData.append('profile_picture', {
        uri: Platform.OS === 'ios' ? selectedPhoto.uri.replace('file://', '') : selectedPhoto.uri,
        type: selectedPhoto.type,
        name: selectedPhoto.fileName,
      });

      setIsImageLoading(true);

      const childrenResponse = await dispatch(addChild({ data: formData })).unwrap();

      console.log('API Response:', childrenResponse);
      setSelectedPhoto(selectedPhoto);

      navigation.replace('ChildList');
    } catch (err) {
      setIsImageLoading(false);
      setImagePickModal(false);
      console.log("Error:..", err);
    }
  };


  const openGallery = async () => {
    accessGallery().then(res => {
      if (res.assets) {
        setSelectedPhoto(res.assets[0]);
        setImagePickModal(false);
      } else {
        Alert.alert('Error', 'Image selection canceled.');
      }
    });
  };

  const openCamera = async () => {
    await requestCameraPermission();
    const res = await accessCamera();
    if (res.assets) {
      setSelectedPhoto(res.assets[0]);
      setImagePickModal(false);
    } else {
      Alert.alert('Error', 'Image selection canceled.');
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
        <TopHeader title={'Add Child'} />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <View style={styles.root}>
              <View style={styles.childProfileBackground}>
                <View style={styles.childProfileView}>
                  {isImageLoading ?
                    null
                    :
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setImagePickModal(true)} style={styles.editIconView}>
                      <icons.EditIcon />
                    </TouchableOpacity>
                  }
                  <ImagePickerModal
                    isVisible={imagePickModal}
                    onClose={() => setImagePickModal(false)}
                    onImageLibraryPress={openGallery}
                    onCameraPress={openCamera}
                  />
                  {selectedPhoto ? (
                    <Image
                      style={styles.childProfileImage}
                      resizeMode="cover"
                      source={{ uri: selectedPhoto.uri }}
                    />
                  ) : (
                    <Image
                      style={styles.childProfileImage}
                      resizeMode="cover"
                      source={require('../../../../assets/images/userAvatar.png')}
                    />
                  )}
                  {isImageLoading &&
                    <ActivityIndicator
                      style={styles.profileImageLoading}
                      animating={isImageLoading}
                      size='large'
                      color={Colors.BlueViolet}
                    />
                  }
                </View>
              </View>
              <View style={styles.fieldsMain}>
                <View style={styles.fieldView}>
                  <View style={styles.fieldIconView}>
                    <icons.PersonIcon />
                  </View>
                  <View style={styles.textInputView}>
                    <Controller
                      name="name"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextInput
                          style={[styles.placeholderText, { left: -4 }]}
                          placeholderTextColor={Colors.RomanSilver}
                          placeholder="Enter Child Name"
                          onChangeText={value => {
                            field.onChange(value);
                            setChildrenData({ ...childrenData, name: value });
                          }}
                          value={field.value}
                          keyboardType={"default"}
                        />
                      )}
                      rules={{
                        required: 'Name is required',
                      }}
                    />
                  </View>
                </View>
                {errors.name && <Text style={styles.validationText}>{errors.name.message}</Text>}
                <View style={styles.birthDateField}>
                  <TouchableOpacity activeOpacity={0.8} onPress={() => setDobModal(true)} >
                    <View style={styles.selector}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <icons.BirthDateIcon />
                        <Text style={[styles.fieldTitle, { marginLeft: 10 }]}>Date of Birth</Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text
                          style={styles.fieldTitle}>
                          {isDSelected === false && selectDOB != null
                            ? format(parseISO(selectDOB), 'dd/MM/yyyy')
                            : isDSelected === false && selectDOB === null
                              ? 'Select Date'
                              : format(dob, 'dd/MM/yyyy')}
                        </Text>
                        <DatePickerComponent
                          open={dobModal}
                          date={dob}
                          onConfirm={date => {
                            setIsDSelected(true)
                            setDobModal(false);
                            setDob(date);
                          }}
                          onCancel={date => {
                            setDobModal(false);
                          }}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.genderFieldView}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.genderIconView}>
                      <icons.GenderIcon />
                    </View>
                    <View style={{ marginHorizontal: 7 }}>
                      <Text style={styles.fieldTitle}>Gender</Text>
                    </View>
                  </View>
                  <View style={styles.radioMain}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        setSelectedGender(1);
                        setChildrenData({
                          ...childrenData,
                          gender: 'male'
                        });
                      }}
                    >
                      <View style={styles.radioView}>
                        <View style={styles.radio}>
                          {selectedGender == 1 ? (
                            <View style={styles.radioBg}></View>
                          ) : null}
                        </View>
                        <Text style={styles.radioText}>Male</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        setSelectedGender(0);
                        setChildrenData({
                          ...childrenData,
                          gender: 'female'
                        });
                      }}
                    >
                      <View style={styles.radioView}>
                        <View style={styles.radio}>
                          {selectedGender == 0 ? (
                            <View style={styles.radioBg}></View>
                          ) : null}
                        </View>
                        <Text style={styles.radioText}>Female</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <AppButton
                  background
                  onPress={handleSubmit(onSubmit)}
                  label={'Add'}
                  textStyle={styles.btnTextStyle}
                  buttonContainerStyle={styles.btnStyle}
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddChild;