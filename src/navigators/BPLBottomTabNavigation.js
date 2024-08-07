import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors, Fonts, Sizes } from '../constants/theme';
import LinearGradient from 'react-native-linear-gradient';

const BPLBottomTabNavigation = ({
  FocusHome,
  FocusBadge,
  FocusRank,
  FocusRewards,
}) => {
  const navigation = useNavigation();

  const getLinearGradientColors = isFocused => {
    return isFocused ? Colors.BPLBottomColor : ['transparent', 'transparent'];
  };

  return (
    <View style={styles.iconRoot}>
      <LinearGradient
        style={styles.iconContainer}
        colors={getLinearGradientColors(FocusHome)}
        locations={[FocusHome ? 1 : 0, 0]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <TouchableOpacity
          style={styles.iconContainer}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            resizeMode="contain"
            style={
              FocusHome
                ? styles.bottomImagesActive
                : styles.bottomImagesInactive
            }
            source={require('../assets/images/tabicons/bpl/home.png')}
          />
          <Text style={styles.tabNavigationText}>Home</Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        style={styles.iconContainer}
        colors={getLinearGradientColors(FocusBadge)}
        locations={[FocusBadge ? 1 : 0, 0]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Badges')}
          activeOpacity={0.8}
          style={styles.iconContainer}>
          <Image
            resizeMode="contain"
            style={
              FocusBadge
                ? styles.bottomImagesActive
                : styles.bottomImagesInactive
            }
            source={require('../assets/images/tabicons/bpl/badge.png')}
          />
          <Text style={styles.tabNavigationText}>Badge</Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        style={styles.iconContainer}
        colors={getLinearGradientColors(FocusRank)}
        locations={[FocusRank ? 1 : 0, 0]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Rank')}
          activeOpacity={0.8}
          style={styles.iconContainer}>
          <Image
            resizeMode="contain"
            style={
              FocusRank
                ? styles.bottomImagesActive
                : styles.bottomImagesInactive
            }
            source={require('../assets/images/tabicons/bpl/rank.png')}
          />
          <Text style={styles.tabNavigationText}>Rank</Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        style={styles.iconContainer}
        colors={getLinearGradientColors(FocusRewards)}
        locations={[FocusRewards ? 1 : 0, 0]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Rewards')}
          activeOpacity={0.8}
          style={styles.iconContainer}>
          <Image
            resizeMode="contain"
            style={
              FocusRewards
                ? styles.bottomImagesActive
                : styles.bottomImagesInactive
            }
            source={require('../assets/images/tabicons/bpl/rewards.png')}
          />
          <Text style={styles.tabNavigationText}>Rewards</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  iconRoot: {
    backgroundColor: Colors.PersianIndigo,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 20,
    elevation: 5,
    borderRadius: 20,
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    width: 65,
    height: 65,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomImagesInactive: {
    width: 25,
    height: 25,
    marginTop: -17,
  },
  bottomImagesActive: {
    width: 30,
    height: 30,
    marginTop: -17,
  },
  tabNavigationText: {
    position: 'absolute',
    zIndex: 1,
    bottom: 3,
    fontSize: Sizes.size11,
    textAlign: 'center',
    fontFamily: Fonts.medium,
    color: Colors.White,
    marginTop: 3,
    width: '300%',
  },
});

export default BPLBottomTabNavigation;
