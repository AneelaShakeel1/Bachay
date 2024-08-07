import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Alert,
  RefreshControl
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import TopHeader from '../../../../components/TopHeader';
import AppButton from '../../../../components/AppButton';
import { selectChildDetails } from '../../../../redux/features/auth/authSelectors';
import { childList, deleteChild } from '../../../../redux/features/auth/authThunks';
import { useSelector, useDispatch } from 'react-redux';
import CalculateAge from '../../../../components/CalculateAge';
import SkeletonLoader from './Skeleton';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import { styles } from './ChildList.style';
import { UpdateChildData } from '../../../../redux/features/auth/authSlice';

const ChildList = () => {
  const childData = useSelector(selectChildDetails);
  console.log('Child Data', childData)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, isLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const loadChildList = async () => {
    isLoading(true);
    await dispatch(childList());
    isLoading(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadChildList();
    }, [])
  );

  const onRefresh = () => {
    if (!loading) {
      isLoading(true);
      setRefreshing(true);
      dispatch(childList())
        .then((res) => {
          console.log('Child List Loaded Successfully', res)
        })
        .catch((error) => {
          console.error("Error fetching child list:", error);
        })
        .finally(() => {
          isLoading(false);
          setRefreshing(false);
        });
    }
  };

  useEffect(() => {
    dispatch(childList()).then(res => {
      isLoading(false);
    });
    console.log('child dataa', childData);
  }, []);

  const handleEdit = index => {
    const selectedChild = childData[index];
    dispatch(
      UpdateChildData({
        id: selectedChild.id,
        relation_type: selectedChild.relation_type,
        name: selectedChild.name,
        dob: selectedChild.dob,
        gender: selectedChild.gender,
        profile_picture: selectedChild.avatar,
      }),
    );
    navigation.navigate('EditChild');
  };

  const handleDeleteChild = index => {
    const selectedChild = childData[index];
    Alert.alert(
      'Warning',
      'Are you sure you want to Delete your child details?',
      [
        { text: 'No', style: 'default' },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: async () => {
            isLoading(true);
            dispatch(
              deleteChild({
                id: selectedChild.id,
              }),
            ).then(() => {
              dispatch(childList()).then(res => {
                isLoading(false);
              });
            });
          },
        },
      ]
    );
  };

  const childrenCount = childData?.length || 0;

  return (
    <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <GeneralAppHeader />
        <TopHeader title={childData && childrenCount > 0 ? 'Mother of' + ' ' + childrenCount : 'Add Your Child'} />
        <View style={styles.root}>
          {loading ? (
            <SkeletonLoader />
          ) : childData && childData.length > 0 ? (
            <>
              <FlatList
                horizontal={false}
                data={childData}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                renderItem={({ item, index }) => (
                  <>
                    <View style={styles.childInfo}>
                      <View style={styles.childView}>
                        <Image
                          style={styles.childImage}
                          resizeMode="contain"
                          source={{ uri: item.avatar }} />
                        <View style={styles.childDetails}>
                          <Text style={styles.childName}>{item.name}</Text>
                          <Text style={styles.childAge}>
                            <CalculateAge dateOfBirth={item.dob} />
                          </Text>
                          <View style={styles.childStats}>
                            <Text style={[styles.childGender, { color: item.gender === 0 ? Colors.TextPinkColor : Colors.BlueViolet }]}>
                              {item.gender === 0 ? 'Girl' : 'Boy'}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.leftIconView}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => handleEdit(index)}>
                          <icons.ChildEditIcon />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => handleDeleteChild(index)}>
                          <icons.ChildDeleteIcon />
                        </TouchableOpacity>
                      </View>
                    </View>
                    {index !== childData.length - 1 && (
                      <View style={styles.separatorLine}></View>
                    )}
                  </>
                )} />
              <AppButton
                onPress={() => navigation.navigate('AddChild')}
                background
                label={'+ Add Child'}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle} />
            </>
          ) : (
            <>
              <View style={styles.noChildContainer}>
                <Text style={styles.noFoundText}>No Child Found</Text>
              </View><AppButton
                onPress={() => navigation.navigate('AddChild')}
                background
                label={'+ Add Child'}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle} />
            </>

          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChildList;