import React, { useState, useEffect } from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    Animated,
} from 'react-native';
import AppButton from '../../../components/AppButton';
import icons from '../../../constants/icons';
import { Colors } from '../../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Onboard.style';

const Onboard = () => {
    const navigation = useNavigation();
    const [currentStep, setCurrentStep] = useState(0);
    const slideAnim = new Animated.Value(5);

    useEffect(() => {
        startAnimation();
    }, [currentStep]);

    const startAnimation = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const btnWithOutIcon = (onPress) => {
        return (
            <AppButton
                gradient
                onPress={onPress}
                label={'Get Started'}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
            />
        );
    };

    const btnWithIcon = (onPress) => {
        return (
            <AppButton
                gradient
                onPress={onPress}
                label={'Next'}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={[
                    styles.btnStyle,
                    { justifyContent: 'space-between' },
                ]}
                image
                imageRight
                ImageSource={<icons.NextArrow />}
            />
        );
    };

    const onBoardData = [
        {
            imageSource: require('../../../assets/images/onboard/OnboardOne.png'),
            title: 'Welcome to Seamless Shopping',
            description:
                'Discover a world of convenience with our user-friendly onboarding experience. Dive into effortless navigation and personalized features that make your shopping journey smooth from the very start.',
            button: btnWithOutIcon(() => handleBtnClick(1)),
        },
        {
            imageSource: require('../../../assets/images/onboard/OnboardTwo.png'),
            title: 'Explore Limitless Choices',
            description:
                'Uncover a universe of products tailored just for you. Our onboarding guides you through a curated selection, ensuring you find exactly what you need. Get ready to explore and indulge in a variety of options.',
            button: btnWithIcon(() => handleBtnClick(2)),
        },
        {
            imageSource: require('../../../assets/images/onboard/OnboardThree.png'),
            title: 'Exclusive Deals Await You',
            description:
                'Step into a realm of savings and exclusive offers. Our onboarding introduces you to a realm of special deals and discounts, setting the stage for a rewarding shopping experience.',
            button: btnWithIcon(() => handleBtnClick(3)),
        },
    ];

    const handleBtnClick = (step) => {
        if (step < onBoardData.length) {
            setCurrentStep(step);
        } else {
            navigation.navigate('BottomTabNavigation');
        }
    };

    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor={'transparent'}
                translucent={true}
                barStyle={'light-content'}
            />
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: Colors.White }}>
                <View style={{ flex: 6 }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('BottomTabNavigation')}
                        style={styles.skipContainer}>
                        <Text style={styles.skipText}>Skip</Text>
                        <icons.SkipIcon />
                    </TouchableOpacity>
                    <View>
                        <View style={styles.bulletsContainer}>
                            {onBoardData.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.bulletsView,
                                        {
                                            width: index === currentStep ? 30 : 15,
                                            backgroundColor:
                                                index === currentStep ? Colors.BeerColor : Colors.White,
                                        },
                                    ]}>
                                </View>
                            ))}
                        </View>
                        <Animated.Image
                            style={[
                                styles.mainImage,
                                { transform: [{ translateX: slideAnim }] },
                            ]}
                            resizeMode="stretch"
                            source={onBoardData[currentStep].imageSource}
                        />
                    </View>
                </View>
                <View style={{ flex: 2 }}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            paddingHorizontal: 30,
                        }}>
                        <Text
                            style={styles.titleHeading}>
                            {onBoardData[currentStep].title}
                        </Text>
                        <Text
                            style={styles.titleContent}>
                            {onBoardData[currentStep].description}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                    {onBoardData[currentStep].button}
                </View>
            </View>
        </>
    );
};

export default Onboard;
