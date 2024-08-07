import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Skeleton } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { selectAddressDetails } from '../../../../redux/features/auth/authSelectors';

const SkeletonLoader = () => {
    let keyCounter = 0;
    const addressData = useSelector(selectAddressDetails);

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
        addressData?.length > 0 && addressData.map((_, index) => (
            <View key={index} style={styles.container}>
                <View style={styles.section}>
                    <View style={styles.row}>
                        {renderSkeleton(75, 17, 3)}
                        <View style={styles.innerRow}>
                            {renderSkeleton(35, 15, 3)}
                            {renderSkeleton(50, 15, 3)}
                        </View>
                    </View>
                    {renderSkeleton(65, 17, 3)}
                    {renderSkeleton(200, 17, 3)}
                    {renderSkeleton(290, 17, 3)}
                </View>
            </View>
        ))
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 30
    },
    section: {
        gap: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    innerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
});

export default SkeletonLoader;
