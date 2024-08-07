import React, { useEffect, useState } from 'react';
import { StatusBar, View, Image, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, PermissionsAndroid, Keyboard, TouchableWithoutFeedback, ActivityIndicator, Alert } from 'react-native';
import ParentingAppHeader from '../../../../../components/ParentingAppHeader';
import icons from '../../../../../constants/icons';
import { Colors } from '../../../../../constants/theme';
import ParentingSingleTitle from '../../../../../components/Parenting/ParentingSingleTitle';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppButton from '../../../../../components/AppButton';

import { accessCamera, accessGallery } from '../../../../../components/ImagePicker';
import { ImagePickerModal } from '../../../../../components/Modals/ImagePickerModal';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useForm, Controller } from 'react-hook-form';
import { RESULTS, check, PERMISSIONS } from 'react-native-permissions';
import { selectVaccine, vaccineStatus } from '../../../../../redux/features/auth/authThunks';
import { styles } from './VaccineTrackerUpdate.style';
import { format, parseISO } from 'date-fns';
import DatePickerComponent from '../../../../../components/DatePickerComponent';
import { selectVaccineDetails } from '../../../../../redux/features/auth/authSelectors';

const VaccineTrackerUpdate = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);

  const [selectDOB, setSelectDOB] = useState();
  const [dob, setDob] = useState(new Date());
  const [dobModal, setDobModal] = useState(false);
  const [isDSelected, setIsDSelected] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const route = useRoute();
  const { vaccineId, vaccineTitle } = route.params;

  console.log('Vaccine Image', selectedPhoto);


  const singleVaccineData = useSelector(selectVaccineDetails);
  useEffect(() => {
    // Dispatch the selectVaccine thunk when the component mounts
    dispatch(selectVaccine({ id: vaccineId }));
  }, [dispatch, vaccineId]);

  useEffect(() => {
    console.log("Vaccine ID:", vaccineId);
    console.log("Vaccine ID:", vaccineTitle);
    console.log('Vaccine Image', selectedPhoto);

    // ... (rest of the useEffect logic)

    // Use the fetched vaccine data in your component
    console.log('Fetched Vaccine Data:', singleVaccineData);

  }, [vaccineId, vaccineTitle, selectedPhoto, singleVaccineData]);

  const [imagePickModal, setImagePickModal] = useState(false);

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

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const [vaccineData, setVaccineData] = useState({});

  const onSubmit = async () => {
    try {
      setImagePickModal(false);

      if (!selectedPhoto) {
        Alert.alert('Error', 'Please select a photo.');
        return;
      }

      setButtonLoading(true);

      // const formattedDate = format(parseISO(dob.toISOString()), 'yy-MM-dd');
      const formattedDate = format(dob, 'yy-MM-dd');

      const formData = new FormData();
      formData.append('submission_date', formattedDate);
      formData.append('weight', vaccineData.weight);
      formData.append('height', vaccineData.height);
      formData.append('head_circle', vaccineData.head_circle);

      formData.append('picture', {
        uri: Platform.OS === 'ios' ? selectedPhoto.uri.replace('file://', '') : selectedPhoto.uri,
        type: selectedPhoto.type,
        name: selectedPhoto.fileName,
      });

      console.log('Form Data Response:', formData);

      const vaccineResponse = await dispatch(vaccineStatus({ id: vaccineId, data: formData })).unwrap();
      console.log('Vaccine Response:', vaccineResponse);
      setButtonLoading(false);

      navigation.navigate('VaccineTracker');
    } catch (err) {
      setImagePickModal(false);
      console.log("Error:", err);
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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
        <StatusBar
          animated={true}
          backgroundColor={'transparent'}
          translucent={true}
          barStyle={'dark-content'}
        />
        <View style={styles.root}>
          <ParentingAppHeader logo />
          <ParentingSingleTitle title={'Update Details'} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <View style={styles.injectionCount}>
                <icons.InjectionIcon width={20} height={20} />
                <Text style={styles.injectionText}>{vaccineTitle}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <View style={styles.vaccinationDateContainer}>
                  <Text style={styles.vaccinationDateText}>
                    Taken On:{' '}
                    <Text style={styles.blueVioletText}>
                      {isDSelected === false && selectDOB != null
                        ? format(parseISO(selectDOB), 'dd MMM yyyy')
                        : isDSelected === true && selectedDate
                          ? format(selectedDate, 'dd MMM yyyy')
                          : singleVaccineData?.submission_date
                            ? format(parseISO(singleVaccineData?.submission_date), 'dd MMM yyyy')
                            : format(new Date(), 'dd MMM yyyy')}
                    </Text>
                  </Text>


                  <DatePickerComponent
                    open={dobModal}
                    date={selectedDate}
                    onConfirm={(date) => {
                      try {
                        if (date instanceof Date && !isNaN(date)) {
                          setIsDSelected(true);
                          setDobModal(false);
                          setDob(date);
                          // Update the selected date state
                          setSelectedDate(date);
                        } else {
                          console.error("Invalid date selected.");
                        }
                      } catch (error) {
                        console.error("Error handling date:", error);
                      }
                    }}
                    onCancel={() => {
                      setDobModal(false);
                    }}
                  />

                  <TouchableOpacity activeOpacity={0.8} onPress={() => setDobModal(true)}>
                    <icons.CalenderIcon />
                  </TouchableOpacity>
                </View>
                <View style={styles.vaccinationTagContainer}>
                  <Text style={styles.vaccinationTagTitle}>Save Vaccination Tag</Text>
                  <Text style={styles.vaccinationTagDescription}>
                    Vaccination Tag can be found on the vaccination chart shared
                    by your Pediatrician, snap of the tag.
                  </Text>
                  <ImagePickerModal
                    isVisible={imagePickModal}
                    onClose={() => setImagePickModal(false)}
                    onImageLibraryPress={openGallery}
                    onCameraPress={openCamera}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setImagePickModal(true)}
                    style={[
                      styles.galleryContainer,
                      { padding: selectedPhoto || !singleVaccineData?.picture ? 40 : 0 },
                    ]}
                  >
                    <TouchableOpacity
                      onPress={() => setImagePickModal(true)}
                      activeOpacity={0.8}
                      style={styles.cameraIconContainer}
                    >
                      <icons.CameraIconFill />
                    </TouchableOpacity>
                    {singleVaccineData?.picture ? (
                      <Image
                        style={styles.vaccineImageTag}
                        resizeMode="cover"
                        source={{ uri: singleVaccineData?.picture }}
                      />
                    ) : selectedPhoto ? (
                      <Image
                        style={styles.vaccineImageTag}
                        resizeMode="cover"
                        source={{ uri: selectedPhoto.uri }}
                      />
                    ) : (
                      <icons.ParentingGallery />
                    )}
                  </TouchableOpacity>


                  <Text style={styles.addGrowthDetailsTitle}>Add Growth Details</Text>
                  <View style={styles.borderBottom} />
                  {/* <View style={styles.growthDetailsContainer}>
                    <Text style={styles.growthDetailsLabel}>Weight</Text>
                    <Controller
                      name="weight"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextInput
                          style={styles.inputStyle}
                          onChangeText={value => {
                            field.onChange(value);
                            setVaccineData({ ...vaccineData, weight: value });
                          }}
                          value={field.value}
                          keyboardType={"numeric"}
                        />
                      )}
                    />
                    <Text style={styles.growthDetailsLabel}>Kg</Text>
                  </View>
                  <View style={styles.growthDetailsContainer}>
                    <Text style={styles.growthDetailsLabel}>Height</Text>
                    <Controller
                      name="height"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextInput
                          style={styles.inputStyle}
                          onChangeText={value => {
                            field.onChange(value);
                            setVaccineData({ ...vaccineData, height: value });
                          }}
                          value={field.value}
                          keyboardType={"numeric"}
                        />
                      )}
                    />
                    <Text style={styles.growthDetailsLabel}>CM</Text>
                  </View>
                  <View style={styles.growthDetailsContainer}>
                    <Text style={styles.growthDetailsLabel}>Head Circ.</Text>
                    <Controller
                      name="head_circle"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextInput
                          style={styles.inputStyle}
                          onChangeText={value => {
                            field.onChange(value);
                            setVaccineData({ ...vaccineData, head_circle: value });
                          }}
                          value={field.value}
                          keyboardType={"numeric"}
                        />
                      )}
                    />
                    <Text style={styles.growthDetailsLabel}>CM</Text>
                  </View> */}
                  {singleVaccineData?.growth && (
                    <View style={styles.growthDetailsContainer}>
                      <Text style={styles.growthDetailsLabel}>Weight</Text>
                      <Controller
                        name="weight"
                        control={control}
                        defaultValue={singleVaccineData?.growth?.weight || ''}
                        render={({ field }) => (
                          <TextInput
                            style={styles.inputStyle}
                            onChangeText={value => {
                              field.onChange(value);
                              setVaccineData({ ...vaccineData, weight: value });
                            }}
                            value={field.value}
                            keyboardType="numeric"
                          />
                        )}
                      />
                      <Text style={styles.growthDetailsLabel}>Kg</Text>
                    </View>
                  )}

                  {singleVaccineData?.growth && (
                    <View style={styles.growthDetailsContainer}>
                      <Text style={styles.growthDetailsLabel}>Height</Text>
                      <Controller
                        name="height"
                        control={control}
                        defaultValue={singleVaccineData?.growth?.height || ''}
                        render={({ field }) => (
                          <TextInput
                            style={styles.inputStyle}
                            onChangeText={value => {
                              field.onChange(value);
                              setVaccineData({ ...vaccineData, height: value });
                            }}
                            value={field.value}
                            keyboardType="numeric"
                          />
                        )}
                      />
                      <Text style={styles.growthDetailsLabel}>CM</Text>
                    </View>
                  )}

                  {singleVaccineData?.growth && (
                    <View style={styles.growthDetailsContainer}>
                      <Text style={styles.growthDetailsLabel}>Head Circ.</Text>
                      <Controller
                        name="head_circle"
                        control={control}
                        defaultValue={singleVaccineData?.growth?.head_circle || ''}
                        render={({ field }) => (
                          <TextInput
                            style={styles.inputStyle}
                            onChangeText={value => {
                              field.onChange(value);
                              setVaccineData({ ...vaccineData, head_circle: value });
                            }}
                            value={field.value}
                            keyboardType="numeric"
                          />
                        )}
                      />
                      <Text style={styles.growthDetailsLabel}>CM</Text>
                    </View>
                  )}
                  <AppButton
                    background
                    onPress={handleSubmit(onSubmit)}
                    loaderButton
                    loading={buttonLoading}
                    loadingStyle={{ width: 90, height: 90, marginVertical: -35 }}
                    buttonDisabled={buttonLoading}
                    label={'Save'}
                    textStyle={styles.btnTextStyle}
                    buttonContainerStyle={styles.btnStyle}
                  />
                  <View style={styles.bottomInfo}>
                    <icons.IIcon width={18} height={18} />
                    <Text style={styles.bottomInfoText}>
                      Add your comments about this vaccine or mentioned details of the pediatrician here for future reference in 250 characters.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default VaccineTrackerUpdate;