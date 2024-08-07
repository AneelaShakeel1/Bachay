import React from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../../constants/theme';
import GeneralAppHeader from '../../../../../components/GeneralAppHeader';
import MainTitle from '../../../../../components/Profile/MainTitle';
import AppButton from '../../../../../components/AppButton';
import { styles } from './IntellikitSubscription.style';

const IntellikitSubscription = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.White}
                barStyle={'dark-content'}
            />
            <GeneralAppHeader />
            <MainTitle title={'Intellikit Subscription'} />
            <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
                <View style={styles.intellikitContainer}>
                    <Text style={styles.msgText}>
                        It seems that you have not purchased Intellikit Product/Levels
                    </Text>
                    <AppButton
                        label={'Check Our Intellikit Program'}
                        background
                        buttonContainerStyle={styles.btnStyle}
                        textStyle={styles.btnStyleText}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default IntellikitSubscription;


