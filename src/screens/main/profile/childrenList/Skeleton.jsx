import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Skeleton } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { selectChildDetails } from '../../../../redux/features/auth/authSelectors';

const SkeletonLoader = () => {
    let keyCounter = 0;
    const childData = useSelector(selectChildDetails)

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
        childData?.length > 0 && childData.map((_, index) => (
            <View key={index} style={styles.section}>
                <View style={styles.leftContainer}>
                    {renderSkeleton(65, 65, 40)}
                    <View style={{ gap: 5 }}>
                        {renderSkeleton(70, 15)}
                        {renderSkeleton(80, 10)}
                        {renderSkeleton(40, 10)}
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    {renderSkeleton(21, 21)}
                    {renderSkeleton(21, 21)}
                </View>
            </View>
        ))
    );
};

const styles = StyleSheet.create({
    section: {
        margin: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        position: 'absolute',
        right: 0
    },
});

export default SkeletonLoader;
