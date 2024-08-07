import React from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import MainTitle from '../../../../components/Profile/MainTitle';
import AppButton from '../../../../components/AppButton';
import { styles } from './FitJuniorSubscription.style';

const FitJuniorSubscription = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.White}
                barStyle={'dark-content'}
            />
            <GeneralAppHeader />
            <MainTitle title={'FitJunior Subscription'} />
            <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
                <View style={styles.fitJuniorContainer}>
                    <Text style={styles.msgText}>
                        It seems that you have not enrolled in any of the FitJunior Subscription programs by Bachay
                    </Text>
                    <AppButton
                        label={'Click here to see all FitJunior Subscription'}
                        background
                        buttonContainerStyle={styles.btnStyle}
                        textStyle={styles.btnStyleText}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FitJuniorSubscription;


