import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import icons from '../constants/icons';
import { Colors } from '../constants/theme';

import { useNavigation } from '@react-navigation/native';
import { selectUserDetails } from '../redux/features/auth/authSelectors';
const GeneralAppHeader = ({ logowithoutarrow, hasNotifications }) => {
  const navigation = useNavigation();
  const userData = useSelector(selectUserDetails);
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        onPress={() => navigation.goBack()} activeOpacity={1}
        style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
        <icons.BackArrow
          style={{ top: -3 }}
        />
        <icons.HeaderLogo />
      </TouchableOpacity>
      {logowithoutarrow && (
        <icons.HeaderLogo />
      )}
      <View style={styles.iconsView}>
        <TouchableOpacity
          style={{ padding: 5 }}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SearchScreen')}>
          <icons.SearchIcon />
        </TouchableOpacity>
        {userData && (
          <TouchableOpacity
            style={{ padding: 5 }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('CartScreen')}>
            <icons.ShoppingIcon />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{ padding: 5 }}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Notifications')}>
          <icons.BellIcon />
          {hasNotifications && <View style={styles.notificationDot} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GeneralAppHeader;

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: Colors.White,
  },
  iconsView: {
    flexDirection: 'row',
    gap: 5,
    alignItems: "center"
  },
  notificationDot: {
    position: 'absolute',
    left: '55%',
    top: '30%',
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: Colors.BeerColor
  },
});
