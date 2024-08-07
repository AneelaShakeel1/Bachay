import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../../../../../constants/icons';
import { Colors } from '../../../../../../constants/theme';
import ParentingAppHeader from '../../../../../../components/ParentingAppHeader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppButton from '../../../../../../components/AppButton';
import ParentingSingleTitle from '../../../../../../components/Parenting/ParentingSingleTitle';
import { styles } from './AddAnswer.style';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { selectUserDetails } from '../../../../../../redux/features/auth/authSelectors';
import { addAnswer } from '../../../../../../redux/features/Main/mainThunks';

const AddAnswer = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { questionId } = route.params;

  useEffect(() => {
    console.log("Question ID:", questionId);
  }, [questionId]);

  const userData = useSelector(selectUserDetails);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const dispatch = useDispatch();
  const [buttonLoading, setButtonLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const onSubmit = async (data) => {
    setButtonLoading(true);
    const newData = { ...data, question_id: questionId };
    try {
      console.log('Submitting answer with data:', newData);
      const response = await dispatch(addAnswer({ data: newData, setButtonLoading })).unwrap();
      console.log('Answer Added:', response);
      setButtonLoading(false);
      navigation.navigate('ParentingQA');
    } catch (err) {
      console.error('Error submitting answer:', err.message);
      setButtonLoading(false);
    }
  };


  useEffect(() => {
    setIsImageLoading(true)
    if (userData?.avatar) {
      setIsImageLoading(false)
    } else if (userData?.avatar === null) {
      setIsImageLoading(false)
    }
  }, [userData]);

  console.log('userData------------', userData)

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor={'transparent'}
          translucent={true}
          barStyle={'dark-content'}
        />
        <ParentingAppHeader />
        <ParentingSingleTitle title={'Add Answer'} icon iconImage={<icons.BackArrow />} />
        <KeyboardAwareScrollView
          // style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.contentContainer}>
            <View style={styles.userContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.userInfoContainer}>
                <Image
                  style={styles.userAvatar}
                  resizeMode="cover"
                  source={
                    userData && userData.avatar
                      ? { uri: userData.avatar }
                      : require('../../../../../../assets/images/userAvatar.png')
                  }
                />
                {isImageLoading &&
                  <ActivityIndicator
                    style={styles.userAvatarLoading}
                    animating={isImageLoading}
                    size='small'
                    color={Colors.BlueViolet}
                  />
                }
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>{userData ? userData.f_name + ' ' + userData.l_name : 'Guest'}</Text>
                  <Text style={styles.userRelation}>Father of 3</Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.timeText}>02:16 PM</Text>
            </View>
            <View style={styles.ansInputContainer}>
              <Controller
                name="answer"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInput
                    style={styles.ansInput}
                    placeholder="Write Your Answer here"
                    placeholderTextColor={'rgba(0, 0, 0, 0.25)'}
                    onChangeText={value => {
                      field.onChange(value)
                    }}
                    value={field.value}
                    keyboardType={"default"}
                    multiline={true}
                    numberOfLines={7}
                    textAlignVertical="top"
                  />
                )}
                rules={{
                  required: '*Answer is required',
                }}
              />
            </View>
            {errors.answer && <Text style={styles.validationText}>{errors.answer.message}</Text>}
            {/* <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.attachmentContainer}>
                <View style={styles.attachmentIconContainer}>
                  <icons.AttachmentIcon />
                  <Text style={styles.attachmentText}>Add Attachments</Text>
                </View>
                <icons.AddAttachmentIcon />
              </TouchableOpacity>
            </View> */}
          </View>
        </KeyboardAwareScrollView>
        <AppButton
          onPress={handleSubmit(onSubmit)}
          background
          loaderButton
          loading={buttonLoading}
          loadingStyle={{ width: 98, height: 98, marginVertical: -35 }}
          buttonDisabled={buttonLoading}
          label={'Post Answer'}
          textStyle={styles.btnStyleText}
          buttonContainerStyle={styles.btnStyle}
          image
          imageRight
          ImageSource={<icons.PostAnsIcon />}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddAnswer;
