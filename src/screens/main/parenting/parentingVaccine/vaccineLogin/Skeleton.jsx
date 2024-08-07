import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Skeleton } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../../../constants/theme';
import { useSelector } from 'react-redux';
import { selectChildDetails } from '../../../../../redux/features/auth/authSelectors';

const SkeletonLoader = () => {
    let keyCounter = 0;
    const childData = useSelector(selectChildDetails);

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
        childData?.length > 0 && childData?.map((_, index) => (
            <View key={index} style={styles.container}>
                <View style={styles.profileSection}>
                    {renderSkeleton(70, 70, 40)}
                    <View style={styles.profileInfo}>
                        {renderSkeleton(50, 15)}
                        {renderSkeleton(120, 15)}
                    </View>
                    <View style={styles.arrowSection}>
                        {renderSkeleton(25, 25, 50)}
                    </View>
                </View>
                <View style={styles.vaccineTrackerSection}>
                    {renderSkeleton(350, 50, 40)}
                    <View style={styles.vaccineTrackerInner}>
                        <View style={styles.vaccineInfo}>
                            {renderSkeleton(310, 40, 40)}
                            <View style={styles.upcomingVaccines}>
                                {childData[index].uppcomingVaccine.length > 0 && childData[index].uppcomingVaccine.map((_, index) => (
                                    <View key={index} style={styles.upcomingVaccine}>
                                        {renderSkeleton(170, 18)}
                                        {renderSkeleton(110, 15)}
                                    </View>
                                ))}
                            </View>
                            {renderSkeleton(310, 40, 40)}
                            <View style={styles.vaccineButtons}>
                                <View style={styles.vaccineButtonGroup}>
                                    {renderSkeleton(30, 30, 50)}
                                    {renderSkeleton(60, 10)}
                                </View>
                                <View style={styles.vaccineButtonGroup}>
                                    {renderSkeleton(30, 30, 50)}
                                    {renderSkeleton(60, 10)}
                                </View>
                                <View style={styles.vaccineButtonGroup}>
                                    {renderSkeleton(30, 30, 50)}
                                    {renderSkeleton(60, 10)}
                                </View>
                            </View>
                            {renderSkeleton(310, 40, 40)}
                        </View>
                    </View>
                </View>
            </View>
        ))
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    profileSection: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 5,
        gap: 20
    },
    profileInfo: {
        gap: 7
    },
    arrowSection: {
        position: 'absolute',
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    vaccineTrackerSection: {
        paddingVertical: 18,
        gap: 20
    },
    vaccineTrackerInner: {
        borderColor: Colors.BlackCoral,
        borderWidth: 0.5,
        borderRadius: 25
    },
    vaccineInfo: {
        padding: 20,
        paddingVertical: 30,
    },
    upcomingVaccines: {
        paddingVertical: 30,
        gap: 20
    },
    upcomingVaccine: {
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center"
    },
    vaccineButtons: {
        paddingVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        flexDirection: 'row'
    },
    vaccineButtonGroup: {
        gap: 7,
        alignItems: "center"
    }
});

export default SkeletonLoader;
