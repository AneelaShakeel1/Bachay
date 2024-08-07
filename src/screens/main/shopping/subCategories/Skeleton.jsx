import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Skeleton } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

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
          <View style={styles.leftHeader}>
            {renderSkeleton(14, 21)}
            {renderSkeleton(100, 23, 7)}
          </View>
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
        <View style={[styles.section, { marginVertical: 5 }]}>
          {renderSkeleton(80, 20)}
        </View>
        <View style={styles.categoryTextSection}>
          {Array.from({ length: 4 }).map((_, index) => (
            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.categoryTextContainer}>
                {renderSkeleton(60, 60, 100)}
                {renderSkeleton(140, 15, 0, `text-${index}`)}
              </View>
              <View style={styles.categoryTextContainer}>
                {renderSkeleton(16, 18)}
              </View>
            </View>
          ))}
        </View>
        <View style={styles.imageTextSection}>
          {Array.from({ length: 6 }).map((_, index) => (
            <View key={index} style={styles.imageTextContainer}>
              {renderSkeleton(90, 90, 100)}
              {renderSkeleton(60, 12, 0, `text-${index}`, 10)}
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
  leftHeader: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  largeSection: {
    paddingTop: 15,
    marginHorizontal: -20,
  },
  categoryTextSection: {
    flexDirection: 'column',
    paddingTop: 15,
    gap: 30,
    marginVertical: 10
  },
  categoryTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 17
  },
  imageTextSection: {
    flexDirection: 'row',
    gap: 14,
    paddingTop: 25,
  },
  imageTextContainer: {
    alignItems: 'center',
  },
});

export default SkeletonLoader;
