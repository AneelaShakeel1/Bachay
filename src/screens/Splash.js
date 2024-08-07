import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, StatusBar, SafeAreaView } from 'react-native';

import icons from '../constants/icons';
import { Colors } from '../constants/theme';

import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserDetails } from '../redux/features/auth/authThunks';

const Splash = ({ navigation }) => {
    const dispatch = useDispatch();

    const getUser = async () => {
        const token = await AsyncStorage.getItem('token');
        const navigateDelay = 2000;
        setTimeout(async () => {
            if (token) {
                try {
                    await dispatch(getUserDetails()).unwrap();
                    navigation.replace('BottomTabNavigation');
                } catch (error) {
                    console.log(error);
                }
            } else {
                navigation.replace('Onboard');
            }
        }, navigateDelay);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <SafeAreaView style={styles.screenContainer}>
            <StatusBar animated={true} backgroundColor={Colors.White} />
            <View style={styles.root}>
                <icons.Logo />
            </View>
        </SafeAreaView>
    );
};

export default Splash;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.White
    },
    root: {
        backgroundColor: Colors.White,
        flex: 1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
