import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import icons from '../constants/icons';
import {Colors, Fonts, Sizes} from '../constants/theme';

// Tab Navigation Screens
import ShoppingScreen from '../screens/main/shopping/shoppingScreen/ShoppingScreen';
import ExploreScreen from '../screens/main/explore/exploreScreen/ExploreScreen';
import ParentingStack from './ParentingStack';
import ProfileNotLogin from '../screens/main/profile/profileNotLogin/ProfileNotLogin';
import MenuScreen from '../screens/main/menu/menuScreen/MenuScreen';

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.White,
          height: 70,
        },
        tabBarHideOnKeyboard: 'true',
      }}
      initialRouteName="ShoppingScreen">
      <Tab.Screen
        name="ShoppingScreen"
        component={ShoppingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <icons.ShoppingIconArrow style={styles.arrowIcons} />
              ) : null}
              <View style={styles.iconContainer}>
                {focused ? <icons.ShoppingIconA /> : <icons.ShoppingIconIA />}
                <Text
                  style={[
                    styles.tabNavigationText,
                    {color: focused ? Colors.BlueViolet : Colors.AppColor},
                  ]}>
                  Shopping
                </Text>
              </View>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <icons.ExploreIconArrow style={styles.arrowIcons} />
              ) : null}
              <View style={styles.iconContainer}>
                {focused ? <icons.ExploreIconA /> : <icons.ExploreIconIA />}
                <Text
                  style={[
                    styles.tabNavigationText,
                    {color: focused ? Colors.DarkPinkColor : Colors.AppColor},
                  ]}>
                  Explore
                </Text>
              </View>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="ParentingStack"
        component={ParentingStack}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <icons.ParentingIconArrow style={styles.arrowIcons} />
              ) : null}
              <View style={styles.iconContainer}>
                {focused ? <icons.ParentingIconA /> : <icons.ParentingIconIA />}
                <Text
                  style={[
                    styles.tabNavigationText,
                    {color: focused ? Colors.BeerColor : Colors.AppColor},
                  ]}>
                  Parenting
                </Text>
              </View>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNotLogin"
        component={ProfileNotLogin}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <icons.ProfileIconArrow style={styles.arrowIcons} />
              ) : null}
              <View style={styles.iconContainer}>
                {focused ? <icons.ProfileIconA /> : <icons.ProfileIconIA />}
                <Text
                  style={[
                    styles.tabNavigationText,
                    {
                      color: focused
                        ? Colors.OrangeYellowLight
                        : Colors.AppColor,
                    },
                  ]}>
                  Profile
                </Text>
              </View>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <icons.MenuIconArrow style={styles.arrowIcons} />
              ) : null}
              <View style={styles.iconContainer}>
                {focused ? <icons.MenuIconA /> : <icons.MenuIconIA />}
                <Text
                  style={[styles.tabNavigationText, {color: Colors.AppColor}]}>
                  Menu
                </Text>
              </View>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS == 'ios' ? 35 : 15,
  },
  arrowIcons: {
    position: 'absolute',
    top: 0,
  },
  tabNavigationText: {
    fontSize: Sizes.size11,
    fontFamily: Fonts.semiBold,
    marginTop: 3,
    paddingBottom: Platform.OS == 'ios' ? 15 : 0,
  },
});

export default BottomTabNavigation;
