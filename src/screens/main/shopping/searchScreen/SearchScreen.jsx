import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Platform, StatusBar, Text, Animated, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import icons from '../../../../constants/icons';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
const SearchScreen = () => {
    const navigation = useNavigation();
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim]);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.root}>
                <Animated.View style={{ opacity: fadeAnim }}>
                    <StatusBar
                        animated={true}
                        backgroundColor={'transparent'}
                        translucent={true}
                        barStyle={'dark-content'} />
                    <View style={styles.search}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                autoFocus={true}
                                style={styles.textInput}
                                placeholder="What you are looking for?"
                                placeholderStyle={{ top: 10 }}
                                placeholderTextColor={Colors.RomanSilver}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ position: 'absolute', left: '5%', paddingVertical: 20, paddingRight: 20 }}>
                            <icons.BackArrow />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recentView}>
                        <Text style={styles.recentText}>Recent</Text>
                    </View>
                </Animated.View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.White,
        flex: 1
    },
    search: {
        alignItems: "center",
        justifyContent: 'center',
        padding: 20
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: Colors.BlackCoral,
        borderRadius: 25,
        width: '80%',
        paddingHorizontal: 20,
        height:40,
        justifyContent:'center',
    },
    textInput: {
        width: '100%',
        fontSize: Sizes.size12,
        color: Colors.AppColor,
        top: Platform.OS == 'ios' ? 0 : 2,
        fontFamily: Fonts.regular,
       
    },
    headerStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 30,
    },
    seeAllText: {
        textDecorationLine: 'underline',
        alignSelf: 'center',
        color: Colors.AppColor,
        fontFamily: Fonts.medium,
        top: 4,
        textTransform: 'capitalize',
    },
    recentView: {
        paddingTop: 20,
        borderTopWidth: 5,
        borderTopColor: Colors.SurfaceLightBlue,
        paddingHorizontal: 30
    },
    recentText: {
        fontFamily: Fonts.semiBold,
        color: Colors.AppColor,
        top: 1,
        fontSize: Sizes.size15
    }
});
