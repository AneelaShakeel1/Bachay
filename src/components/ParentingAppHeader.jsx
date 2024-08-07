import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import icons from '../constants/icons';
import { Colors } from '../constants/theme';

import { useNavigation } from '@react-navigation/native';
import UserDetailsHeader from './UserDetailsHeader';

import { selectUserDetails } from '../redux/features/auth/authSelectors';
import { useSelector } from 'react-redux';

const ParentingAppHeader = ({ logo }) => {
  const navigation = useNavigation();
  const userData = useSelector(selectUserDetails);

  return (
    <View style={styles.mainView}>
      {logo ? (
        <>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ paddingHorizontal: 10, marginLeft: -8 }}>
            <icons.BackArrow
              style={{ top: -3 }}
            />
          </TouchableOpacity>
          <icons.ParentingLogo
            style={{ position: 'absolute', left: '14%' }}
          />
        </>
      ) : (
        <>
          <UserDetailsHeader />
          <View style={styles.logoView}>
            <icons.ParentingLogo />
          </View>
          <View style={styles.iconsView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              activeOpacity={0.8}
              disabled={userData ? false : true}
            >
              <icons.BPLIcon style={{ opacity: userData ? 1 : 0.7 }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ top: 5 }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('SearchScreen')}>
              <icons.SearchIcon />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ top: 5 }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Notifications')}>
              <icons.BellIcon />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default ParentingAppHeader;

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: Colors.White,
    paddingLeft: 20,
  },
  logoView: {
    position: 'absolute',
    left: '43%',
    right: '43%',
    top: '65%',
  },
  iconsView: {
    flexDirection: 'row',
    gap: 10,
    paddingRight: 20,
  },
});
