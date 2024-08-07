import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  PermissionsAndroid,
  ActivityIndicator,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';

import AppButton from '../../../../components/AppButton';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import DatePickerComponent from '../../../../components/DatePickerComponent';
import ResponseModal from '../../../../components/Modals/ResponseModal';

import { accessCamera, accessGallery } from '../../../../components/ImagePicker';
import { ImagePickerModal } from '../../../../components/Modals/ImagePickerModal';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import { profileUpdate, deleteAccount, changeAvatar, getUserDetails } from '../../../../redux/features/auth/authThunks';
import { selectUserDetails, authLoading, errState, selectUserId } from '../../../../redux/features/auth/authSelectors';
import { useForm, Controller } from 'react-hook-form';
import { RESULTS, check, PERMISSIONS } from 'react-native-permissions';
import { selectChildDetails } from '../../../../redux/features/auth/authSelectors';
import { styles } from './ProfileLogin.style';

const ProfileLogin = () => {
  const navigation = useNavigation();
  const [imagePickModal, setImagePickModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const id = useSelector(selectUserId);
  const loading = useSelector(authLoading);
  const errorState = useSelector(errState);
  const childData = useSelector(selectChildDetails);
  const childrenCount = childData?.length;
  const userData = useSelector(selectUserDetails);
  console.log(".............user data....", userData);
  const requestCameraPermission = async () => {
    if (Platform.OS == 'ios') {
      check(PERMISSIONS.IOS.CAMERA)
        .then(result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              //console.log('This feature is not available (on this device / in this context)');
              break;
            case RESULTS.DENIED:
              //console.log('The permission has not been requested / is denied but requestable',);
              break;
            case RESULTS.LIMITED:
              //console.log('The permission is limited: some actions are possible',);
              break;
            case RESULTS.GRANTED:
              //console.log('The permission is granted');
              break;
            case RESULTS.BLOCKED:
              //console.log('The permission is denied and not requestable anymore',);
              break;
          }
        })
        .catch(error => {
          // …
        });
    }
    else {

      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Access Permission',
            message:
              'App needs access to your camera to upload profile image',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //console.log('You can use the camera');
        } else {
          //console.log("Camera Permission isnt Given go to setting to acccess camera permission")
        }
      } catch (err) {

      }
    }
  }

  const uploadImage = async ({ selectedPhoto, setModalVisible }) => {
    if (selectedPhoto) {
      try {
        setIsImageLoading(true);
        console.log('Selected Photo:', selectedPhoto);
        const formData = new FormData();
        formData.append('avatar', {
          name: selectedPhoto.fileName,
          type: selectedPhoto.type,
          uri: Platform.OS === 'ios' ? selectedPhoto.uri.replace('file://', '') : selectedPhoto.uri,
        });
        console.log('FormData:', formData);
        const response = await dispatch(changeAvatar({ avatar: formData, setModalVisible })).unwrap();
        await dispatch(getUserDetails()).unwrap();
        setIsImageLoading(false);


        console.log("Promise changeAvatar", response);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setImagePickModal(false);
      }
    } else {
      console.log("No Image Selected");
    }
  };

  const openGallery = async () => {
    accessGallery().then(res => {
      uploadImage({ selectedPhoto: res.assets ? res.assets[0] : undefined });
    })
  }

  const openCamera = async () => {
    await requestCameraPermission();
    accessCamera().then(res => {
      uploadImage({ selectedPhoto: res.assets ? res.assets[0] : undefined });
    })
  }

  const [selectDOB, setSelectDOB] = useState(
    userData?.date_of_birth || null
  );
  const [dob, setDob] = useState(
    userData?.date_of_birth ? new Date(userData.date_of_birth) : new Date()
  );
  const [dobModal, setDobModal] = useState(false);
  const [isDSelected, setIsDSelected] = useState(false);

  const [selectedGender, setSelectedGender] = useState(
    userData && userData.gender === 1 ? '1' : userData && userData.gender === 0 ? '0' : null
  );

  const [profileData, setProfileData] = useState({
    f_name: userData?.f_name,
    l_name: userData?.l_name,
    gender: selectedGender === 1 ? '1' : selectedGender === 0 ? '0' : '',
    date_of_birth: selectDOB
  });

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const handleDeleteAccount = useCallback(() => {
    Alert.alert(
      'Are you sure?',
      'Are you sure you want to Delete your account?',
      [
        { text: 'No', style: 'default' },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: async () => {
            dispatch(deleteAccount({ id }));
            navigation.navigate('Register');
          }
        }
      ]
    )
  }, [dispatch, deleteAccount, id, navigation]);

  useEffect(() => {
    setProfileData({
      ...profileData,
      date_of_birth: format(dob, 'yyyy-MM-dd'),
    });
  }, [dob]);

  const onSubmit = async () => {
    if (isValid) {
      try {
        setButtonLoading(true);
        if (selectedGender === 1) {
          genderString = '1';
        } else if (selectedGender === 0) {
          genderString = '0';
        }
        setProfileData({
          ...profileData,
          date_of_birth: format(dob, 'yyyy-MM-dd'),
        })

        await dispatch(profileUpdate({ ...profileData, setModalVisible })).unwrap();
        setButtonLoading(false)
        navigation.replace('BottomTabNavigation');
      } catch (err) {
        console.log("ERR", err);
        setButtonLoading(false);
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

  console.log("Avatar URL:", userData?.avatar);

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
              <View style={styles.profileBackground}>
                <View style={styles.profileView}>
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
                  {userData?.avatar &&
                    <Image
                      style={styles.profileImage}
                      resizeMode="cover"
                      source={{ uri: userData.avatar }}
                      onLoadStart={() => console.log('Image loading started')}
                      onLoad={() => console.log('Image loaded successfully')}
                      onError={(error) => console.error('Image loading error:', error.nativeEvent)}
                    />
                  }
                  {userData?.avatar === null &&
                    <Image
                      style={[styles.profileImage, { borderWidth: userData?.avatar === null ? 0 : 2 }]}
                      resizeMode="cover"
                      source={require('../../../../assets/images/userAvatar2.png')}
                    />
                  }
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
                      name="f_name"
                      control={control}
                      defaultValue={userData?.f_name}
                      render={({ field }) => (
                        <TextInput
                          style={[styles.fieldTitle, { marginLeft: -1 }]}
                          placeholderTextColor={Colors.RomanSilver}
                          placeholder="First Name"
                          onChangeText={value => {
                            field.onChange(value)
                            setProfileData({ ...profileData, f_name: value })
                          }}
                          value={field.value}
                          keyboardType={"default"}
                        />
                      )}
                      rules={{
                        required: 'First Name is required',
                      }}
                    />
                  </View>
                </View>
                {errors.f_name && <Text style={styles.validationText}>{errors.f_name.message}</Text>}
                <View style={styles.fieldView}>
                  <View style={styles.fieldIconView}>
                    <icons.PersonIcon />
                  </View>
                  <View style={styles.textInputView}>
                    <Controller
                      name="l_name"
                      control={control}
                      defaultValue={userData?.l_name}
                      render={({ field }) => (
                        <TextInput
                          style={[styles.fieldTitle, { marginLeft: -1 }]}
                          placeholderTextColor={Colors.RomanSilver}
                          placeholder="Last Name"
                          onChangeText={value => {
                            field.onChange(value)
                            setProfileData({ ...profileData, l_name: value })
                          }}
                          value={field.value}
                          keyboardType={"default"}
                        />
                      )}
                      rules={{
                        required: 'Last Name is required',
                      }}
                    />
                  </View>
                </View>
                {errors.l_name && <Text style={styles.validationText}>{errors.l_name.message}</Text>}
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('CheckEmail')}
                  style={styles.field}>
                  <View style={styles.fieldIconView}>
                    <icons.MotherBlackIcon />
                    <Text style={styles.fieldTitle}>Verify Email</Text>
                  </View>
                  <View style={styles.fieldIconView}>
                    <icons.NavigationIcon style={{ marginRight: 10 }} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('PasswordChange')}
                  style={styles.field}>
                  <View style={styles.fieldIconView}>
                    <icons.MotherBlackIcon />
                    <Text style={styles.fieldTitle}>Change Password</Text>
                  </View>
                  <View style={styles.fieldIconView}>
                    <icons.NavigationIcon style={{ marginRight: 10 }} />
                  </View>
                </TouchableOpacity>
                <View style={styles.birthDateField}>
                  <TouchableOpacity activeOpacity={0.8} onPress={() => setDobModal(true)} >
                    <View style={styles.selector}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <icons.BirthDateIcon />
                        <Text style={styles.fieldTitle}>Date of Birth</Text>
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
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('ChildList')}
                  style={styles.field}
                >
                  <View style={styles.fieldIconView}>
                    <icons.MotherBlackIcon />
                    <Text style={styles.fieldTitle}>
                      {userData?.gender === 1
                        ? `Father of ${childData.length < 10 ? `0${childrenCount}` : childrenCount}`
                        : userData?.gender === 0
                          ? `Mother of ${childData.length < 10 ? `0${childrenCount}` : childrenCount}`
                          : 'Add Your Child'}
                    </Text>
                  </View>
                  <View style={styles.fieldIconView}>
                    <icons.NavigationIcon style={{ marginRight: 10 }} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('GuardianScreen')}
                  style={styles.field}>
                  <View style={styles.fieldIconView}>
                    <icons.GuardianIcon />
                    <Text style={styles.fieldTitle}>Guardian</Text>
                  </View>
                  <View style={styles.fieldIconView}>
                    <icons.NavigationIcon style={{ marginRight: 10 }} />
                  </View>
                </TouchableOpacity>
                <View style={styles.genderFieldView}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.genderIconView}>
                      <icons.GenderIcon />
                    </View>
                    <Text style={styles.fieldTitle}>Gender</Text>
                  </View>
                  <View style={styles.radioMain}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        setSelectedGender(1);
                        setProfileData({
                          ...profileData,
                          gender: '1'
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
                        setProfileData({
                          ...profileData,
                          gender: '0'
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
                  loaderButton
                  loading={buttonLoading}
                  loadingStyle={{ width: 100, height: 100, marginVertical: -35 }}
                  buttonDisabled={buttonLoading}
                  label={'Save'}
                  textStyle={styles.btnTextStyle}
                  buttonContainerStyle={styles.btnStyle}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={handleDeleteAccount}
                  style={styles.fieldDelete}>
                  <icons.DeleteIconRed width={17} height={17} />
                  <Text style={styles.fieldDeleteTitle}>Delete Account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ProfileLogin;