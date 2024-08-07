import React from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../../constants/theme';
import MainTitle from '../../../../../components/Profile/MainTitle';
import MainAppHeader from '../../../../../components/MainAppHeader';
import GuaranteedSavingBanner from '../../../../../components/Profile/GuaranteedSavingBanner';
import IconOf1 from '../../../../../assets/images/icons/1WithBackground.svg'
import IconOf2 from '../../../../../assets/images/icons/2WithBackground.svg'
import IconOf3 from '../../../../../assets/images/icons/3WithBackground.svg'
import IconOf4 from '../../../../../assets/images/icons/4WithBackground.svg'
import { styles } from './HowItWorks.style';

const OfferWorks = () => {

    const stepsData = [
        {
            icon: IconOf2,
            text: 'Select and Purchase Your Guaranteed Saving Offers',
        },
        {
            icon: IconOf2,
            text: 'You will receive a Guaranteed Savings code with assured discount and offer balance.',
        },
        {
            icon: IconOf3,
            text: 'Go to Bachay.com and add your favorite products to your Cart and click on Place Order.',
        },
        {
            icon: IconOf4,
            text: 'On the Order Page of checkout process, enter the Guaranteed Savings code & Voila! Minimum guaranteed discount is applied on all products.',
        },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Co.Colors.White, paddingTop: 28 }}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.White}
                barStyle={'dark-content'}
            />
            <GeneralAppHeader />
            <MainTitle title={'How Its Work'} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
                <View style={styles.mainView}>
                    <View style={styles.savingBannerRoot}>
                        <GuaranteedSavingBanner />
                    </View>
                    <FlatList
                        data={stepsData}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.stepsRoot}>
                                <View style={styles.stepsContainer}>
                                    <item.icon />
                                    <Text style={styles.stepsText}>{item.text}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default OfferWorks;
