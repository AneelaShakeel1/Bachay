import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Skeleton } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { orderDetails } from '../../../../redux/features/Main/mainSelector';

const SkeletonLoader = () => {
    let keyCounter = 0;
    const orderHistoryData = useSelector(orderDetails);

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
        <View style={{ paddingTop: 30 }}>
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 20 }}>
                {renderSkeleton(170, 60, 40)}
                {renderSkeleton(170, 60, 40)}
            </View>
            {
                orderHistoryData?.length > 0 && orderHistoryData.map((_, index) => (
                    <View key={index} style={styles.container}>
                        {renderSkeleton(350, 60, 40)}
                        {orderHistoryData[index]?.details.length > 0 && (
                            <View style={styles.detailsSection}>
                                {renderSkeleton(85, 85, 8)}
                                <View style={{ gap: 5 }}>
                                    {renderSkeleton(200, 17, 3)}
                                    {renderSkeleton(50, 17, 3)}
                                    {renderSkeleton(70, 17, 3)}
                                </View>
                                <View style={styles.arrowSection}>
                                    {renderSkeleton(25, 25, 50)}
                                </View>
                            </View>
                        )}
                    </View>
                ))
            }
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    detailsSection: {
        paddingTop: 20,
        gap: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrowSection: {
        position: 'absolute',
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SkeletonLoader;
