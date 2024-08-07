import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
  RefreshControl
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import MainTitle from '../../../../components/Profile/MainTitle';
import AppButton from '../../../../components/AppButton';
import { selectAddressDetails } from '../../../../redux/features/auth/authSelectors';
import { addressList, deleteAddress } from '../../../../redux/features/auth/authThunks';
import { styles } from './AddressBook.style';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateAddressData } from '../../../../redux/features/auth/authSlice';
import SkeletonLoader from './Skeleton';

const AddressBook = () => {
  const addressData = useSelector(selectAddressDetails);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, isLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadQuestionList = async () => {
    isLoading(true);
    await dispatch(addressList());
    isLoading(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadQuestionList();
    }, [])
  );
  const onRefresh = () => {
    if (!loading) {
      isLoading(true);
      setRefreshing(true);
      dispatch(addressList())
        .then((res) => {
          console.log('Address List Loaded Successfully', res)
        })
        .catch((error) => {
          console.error("Error fetching address list:", error);
        })
        .finally(() => {
          isLoading(false);
          setRefreshing(false);
        })
        ;
    }
  };

  useEffect(() => {
    dispatch(addressList()).then(res => {
      isLoading(false);
    });
    console.log('addressssssssssssdataaaaaaaaaaaa', addressData);
  }, []);

  const handleEdit = index => {
    const selectedAddress = addressData[index];
    dispatch(
      UpdateAddressData({
        id: selectedAddress.id,
        contact_person_name: selectedAddress.contact_person_name,
        appartment_no: selectedAddress.appartment_no,
        street_address: selectedAddress.street_address,
        zip: selectedAddress.zip,
        city: selectedAddress.city,
        state: selectedAddress.state,
        phone: selectedAddress.phone,
        address_type: selectedAddress.address_type,
        // is_default: selectedAddress.is_default,
      }),
    );
    navigation.navigate('EditAddress');
  };

  const handleDeleteAddress = index => {
    const selectedAddress = addressData[index];
    Alert.alert(
      'Warning',
      'Are you sure you want to Delete your address?',
      [
        { text: 'No', style: 'default' },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: async () => {
            isLoading(true);
            dispatch(
              deleteAddress({
                id: selectedAddress.id,
              }),
            ).then(() => {
              dispatch(addressList()).then(res => {
                isLoading(false);
              });
            });
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <View style={styles.root}>
        <GeneralAppHeader />
        <MainTitle title={'Address Book'} />
        <View style={styles.root}>
          {loading ? (
            <SkeletonLoader />
          ) : (
            <View style={styles.addressBookContainer}>
              {addressData && addressData.length > 0 ? (
                <FlatList
                  data={addressData}
                  horizontal={false}
                  showsVerticalScrollIndicator={false}
                  refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                  keyExtractor={item => item.id}
                  renderItem={({ item, index }) => {
                    const addressDetail = `${item.appartment_no ?? ''}, ${item.street_address ?? ''
                      }, ${item.city ?? ''}, ${item.state ?? ''}, ${item.country ?? ''}${item.zip ? ` - ${item.zip}` : ''}`;
                    return (
                      <View
                        style={[
                          styles.infoContainer,
                          index === addressData.length - 1
                            ? { borderBottomWidth: 0 }
                            : { borderBottomWidth: 1 },
                        ]}>
                        <View style={styles.infoRow}>
                          <Text style={styles.nameText}>{item.contact_person_name}</Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              gap: 12,
                            }}>
                            <TouchableOpacity
                              activeOpacity={0.8}
                              onPress={() => handleEdit(index)}>
                              <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleDeleteAddress(index)} activeOpacity={0.8}>
                              <Text style={styles.deleteText}>Delete</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <Text style={styles.addressTypeText}>
                          {item.address_type} {''}
                          <Text style={styles.addressTypeText}>
                            {item.is_default === "1"
                              ? '- Default Address'
                              : ''}
                          </Text>
                        </Text>
                        <Text style={styles.mobileNumberText}>
                          Mobile Number: {''}
                          <Text style={styles.mobileNumberValueText}>
                            {item.phone}
                          </Text>
                        </Text>
                        <Text style={styles.addressText}>{addressDetail}</Text>
                      </View>
                    );
                  }}
                />
              ) : (
                <View style={styles.noAddressView}>
                  <Text style={styles.noAddressText}>No Address Found</Text>
                </View>
              )}
            </View>
          )}
        </View>
        {!loading && (
          <AppButton
            label={'+ Add Address'}
            background
            buttonContainerStyle={styles.BtnStyle}
            textStyle={styles.BtnTextStyle}
            onPress={() => navigation.navigate('AddAddress')}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default AddressBook;
