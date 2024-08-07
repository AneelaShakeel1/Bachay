import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import icons from '../constants/icons';
import { Colors, Fonts, Sizes } from '../constants/theme';

import { useNavigation } from '@react-navigation/native';

const BPLAppHeader = ({ title }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={{ width: '10%' }} onPress={() => navigation.goBack()} activeOpacity={1}>
        <icons.BPLBackArrow />
      </TouchableOpacity>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

export default BPLAppHeader;

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    gap: 25,
    backgroundColor: Colors.ChineseBlack,
  },
  heading: {
    fontSize: Sizes.size16,
    fontFamily: Fonts.semiBold,
    color: Colors.White,
    top: 1
  }
});