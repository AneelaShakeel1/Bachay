import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Skeleton } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../../constants/theme';

const SkeletonLoader = () => {
  let keyCounter = 0;

  const renderSkeleton = (width, height, borderRadius = 0, keySuffix = '', marginTop = 0) => {
    const uniqueKey = keySuffix || `defaultKey-${keyCounter++}`;

    return (
      <Skeleton
        LinearGradientComponent={LinearGradient}
        animation="wave"
        width={width}
        style={{ borderRadius, marginTop }}
        height={height}
        key={`skeleton-${uniqueKey}`}
      />
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.avatarContainer}>
            {renderSkeleton(36, 36, 100)}
            <View style={styles.textContainer}>
              {renderSkeleton(47, 10)}
              {renderSkeleton(70, 8)}
            </View>
          </View>
          {renderSkeleton(100, 25, 7)}
          <View style={styles.iconContainer}>
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} LinearGradientComponent={LinearGradient} animation="wave" width={20} height={20} />
            ))}
          </View>
        </View>
        <View style={styles.section}>
          {renderSkeleton(300, 40, 30)}
          {renderSkeleton(40, 40, 50)}
        </View>
        <View style={[styles.section, styles.largeSection]}>
          {renderSkeleton(400, 300)}
        </View>
        <View style={styles.section}>
          {renderSkeleton(125, 20)}
          {renderSkeleton(50, 16)}
        </View>
        <View style={styles.imageTextSection}>
          {Array.from({ length: 6 }).map((_, index) => (
            <View key={index} style={styles.imageTextContainer}>
              {renderSkeleton(90, 90, 100)}
              {renderSkeleton(60, 12, 0, `text-${index}`, 10)}
            </View>
          ))}
        </View>
        <View style={[styles.section, { marginTop: 20 }]}>
          {renderSkeleton(85, 20)}
          {renderSkeleton(50, 16)}
        </View>
        <View style={styles.largeSection}>
          {Array.from({ length: 6 }).map((_, index) => (
            <View key={index} style={styles.largeImageContainer}>
              {renderSkeleton(140, 200, 8, `large-${index}`)}
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  section: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 8,
    gap: 7,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  largeSection: {
    paddingTop: 15,
    marginHorizontal: -20,
  },
  imageTextSection: {
    flexDirection: 'row',
    gap: 14,
    paddingTop: 15,
  },
  imageTextContainer: {
    alignItems: 'center',
  },
  largeImageContainer: {
    alignItems: 'center',
  },
});

export default SkeletonLoader;
