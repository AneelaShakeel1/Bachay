import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import icons from '../constants/icons';
import { Colors } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { selectUserDetails } from '../redux/features/auth/authSelectors';
import UserDetailsHeader from './UserDetailsHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainAppHeader = ({ hasNotifications }) => {
  const navigation = useNavigation();
  const userData = useSelector(selectUserDetails);
  return (
    <View style={styles.mainView}>
      <UserDetailsHeader />
      <icons.HeaderLogo />
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
          activeOpacity={0.8}
          style={{ padding: 5 }}
          onPress={() => navigation.navigate('Notifications')}>
          <icons.BellIcon />
          {hasNotifications && <View style={styles.notificationDot} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainAppHeader;

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: Colors.White,
    paddingTop: 20
  },
  iconsView: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 5
  },
  notificationDot: {
    position: 'absolute',
    left: '35%',
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: Colors.BeerColor
  },
});
