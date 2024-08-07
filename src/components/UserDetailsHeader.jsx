import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Colors, Fonts, Sizes } from '../constants/theme';
import { selectChildDetails, selectUserDetails } from '../redux/features/auth/authSelectors';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import BottomSheetComponent from './BottomSheetComponent';
import { childList } from '../redux/features/auth/authThunks';
import { setSelectedId } from '../redux/features/Main/mainSlice';

const UserDetailsHeader = () => {
  const [selectedChild, setSelectedChild] = useState(null);
  const childData = useSelector(selectChildDetails);
  console.log('child details', childData);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(childList());
  }, []);
  const handleItemPress = (item) => {
    console.log('Selected Item ID:', item.id);

    setSelectedChild(item);
    dispatch(setSelectedId(item.id));
  };
  const userData = useSelector(selectUserDetails);
  const [isOpened, setisOpened] = useState(false);

  const OptionSelect = () => {
    const SHEET_DATA = [
      {
        id: 1,
        image: require('../assets/images/bottomsheet/Image2.png'),
        title: 'Male',
      },
      {
        id: 2,
        image: require('../assets/images/bottomsheet/Image3.png'),
        title: 'Female',
      },
      {
        id: 3,
        image: require('../assets/images/bottomsheet/Image4.png'),
        title: 'Expecting',
      },
    ];

    const [listData, setListData] = useState([]);

    useEffect(() => {
      setListData([
        {
          id: 0,
          image: require('../assets/images/bottomsheet/Image1.png'),
          title: 'Add Child',
        },
        ...(childData && childData.length > 0 ? childData : SHEET_DATA),
      ]);
    }, [childData]);

    const renderItem = ({ item, index }) => {
      const isSelected = selectedChild && selectedChild.id === item.id;

      let borderWidth = isSelected ? 3 : 2;
      let borderColor = isSelected ? Colors.FilterColor : Colors.AppColor;

      if (index === 0) {
        borderWidth = 0;
        borderColor = 'transparent';
        return (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            onPress={() => {
              setisOpened(false);
              navigation.navigate(userData ? 'AddChild' : 'Login');
            }}>
            <View style={styles.bottomSheetInner}>
              {item.avatar ? (
                <Image
                  resizeMode="contain"
                  style={[
                    styles.bottomSheetItemImage,
                    { borderColor, borderWidth },
                  ]}
                  source={{ uri: item.avatar }}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  style={[
                    styles.bottomSheetItemImage,
                    { borderColor, borderWidth },
                  ]}
                  source={item.image}
                />
              )}
              <Text style={styles.bottomSheetItemText}>{item.name || item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      }

      return (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.8}
          onPress={() => handleItemPress(item)}>
          <View style={styles.bottomSheetInner}>
            {item.avatar ? (
              <Image
                resizeMode="contain"
                style={[
                  styles.bottomSheetItemImage,
                  { borderColor, borderWidth },
                ]}
                source={{ uri: item.avatar }}
              />
            ) : (
              <Image
                resizeMode="contain"
                style={[
                  styles.bottomSheetItemImage,
                  { borderColor, borderWidth },
                ]}
                source={item.image}
              />
            )}
            <Text style={styles.bottomSheetItemText}>{item.name || item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <>
        <Text style={styles.bottomSheetTitle}>
          Who are you shopping for today
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={listData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.bottomSheetContainer}
        />
      </>
    );
  };

  return (
    <>
      {isOpened ? (
        <BottomSheetComponent
          onPressMenu={() => setisOpened(!isOpened)}
          Component={OptionSelect}
          BGSheetColor={Colors.White}
        />
      ) : null}
      <TouchableOpacity
        onPress={() => {
          setisOpened(!isOpened);
        }}
        activeOpacity={0.8}
        style={styles.userView}>
        <Image
          style={[styles.userImage, {borderWidth: userData && userData?.avatar ? 1 : 0}]}
          resizeMode="cover"
          source={
            userData && userData.avatar
              ? { uri: userData.avatar }
              : require('../assets/images/userAvatar2.png')
          }
        />
        <View style={styles.userDetails}>
          <Text style={styles.userHeading}>
            {userData
              ? userData.f_name !== null
                ? userData.f_name
                : 'All'
              : 'All'}
          </Text>
          <Text style={styles.userSubtitle}>
            {childData?.length > 0
              ? `${userData.gender === 1 ? 'Father' : userData.gender === 0 ? 'Mother' : 'N/A'
              } of ${childData.length < 10 ? `0${childData.length}` : childData.length}`
              : '---'}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default UserDetailsHeader;

const styles = StyleSheet.create({
  userView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDetails: {
    flexDirection: 'column',
    gap: -7,
  },
  userHeading: {
    fontSize: Sizes.size14,
    color: Colors.AppColor,
    fontFamily: Fonts.semiBold,
    textTransform: 'capitalize',
  },
  userSubtitle: {
    fontSize: Sizes.size11,
    color: Colors.AppColor,
    fontFamily: Fonts.medium,
  },
  userImage: {
    width: 36,
    height: 36,
    borderRadius: 30,
    borderColor: Colors.AppColor,
    marginRight: 8,
  },
  bottomSheetTitle: {
    fontSize: Sizes.size24,
    textAlign: 'center',
    fontFamily: 'Aristotelica Display DemiBold Trial',
    color: Colors.AppColor,
    marginTop: 10,
  },
  bottomSheetContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 25,
    gap: 15
  },
  bottomSheetInner: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottomSheetItemImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  bottomSheetItemText: {
    fontFamily: Fonts.semiBold,
    color: Colors.AppColor,
    fontSize: Sizes.size16,
    top: 5
  },
});