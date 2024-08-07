import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView, FlatList, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import TopHeader from '../../../../components/TopHeader';
import icons from '../../../../constants/icons';

const Notifications = () => {
    const [hasNotifications, setHasNotifications] = useState(false);

    const fadeAnim = new Animated.Value(0);

    const notificationsData = [
        {
            title: "Get 50% Off On a Product",
            description: "40% of the visitors that land on your news pages do not read after the first fold. Remind them that they have not completed a read.",
            timestamp: "Fri at 4:44 PM",
            status: true
        },
        {
            title: "Get 50% Off On a Product",
            description: "40% of the visitors that land on your news pages do not read after the first fold. Remind them that they have not completed a read.",
            timestamp: "Fri at 4:44 PM",
            status: false
        },
        {
            title: "Get 50% Off On a Product",
            description: "40% of the visitors that land on your news pages do not read after the first fold. Remind them that they have not completed a read.",
            timestamp: "Fri at 4:44 PM",
            status: true
        },
    ]

    const fadeIn = () => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    };

    useEffect(() => {
        setHasNotifications(notificationsData.length > 0);
        fadeIn();
    }, [notificationsData]);



    const renderItem = ({ item }) => {
        return (
            <Animated.View
                style={[styles.notificationItem, { backgroundColor: item.status ? Colors.SurfaceLightBlue : Colors.White, opacity: fadeAnim }]}
            >
                <Text style={styles.title}>{item.title}</Text>
                <Text numberOfLines={1} style={styles.description}>{item.description}</Text>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
            </Animated.View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
            <StatusBar
                animated={true}
                backgroundColor={'transparent'}
                translucent={true}
                barStyle={'dark-content'}
            />
            <GeneralAppHeader hasNotifications={hasNotifications} />
            <View style={styles.root}>
                <TopHeader title={'Notifications'} image />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginTop: 20 }}>
                        {notificationsData.length > 0 ? (
                            <FlatList
                                data={notificationsData}
                                renderItem={renderItem}
                            />
                        ) : (
                            <Text style={styles.noNotificationText}>No Notifications Found</Text>
                        )}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    notificationItem: {
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
    },
    title: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        fontSize: Sizes.size15,
        top: 1,
    },
    description: {
        fontFamily: Fonts.regular,
        color: Colors.AppColor,
        top: 1,
        fontSize: Sizes.size13,
    },
    timestamp: {
        fontFamily: Fonts.semiBold,
        color: Colors.BlueViolet,
        top: 1,
        fontSize: Sizes.size13,
    },
    noNotificationText: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        textAlign: 'center',
        fontSize: Sizes.size15,
        marginTop: 50,
    },
});

export default Notifications;
