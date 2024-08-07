import React from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import MainTitle from '../../../../components/Profile/MainTitle';
import AppButton from '../../../../components/AppButton';
import { styles } from './GuaranteedSaving.style';

const GuaranteedSaving = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.White}
                barStyle={'dark-content'}
            />
            <GeneralAppHeader />
            <MainTitle title={'Guaranteed Saving'} />
            <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
                <View style={styles.guaranteedSavingContainer}>
                    <Text style={styles.msgText}>
                        You are not enrolled in any Guaranteed Savings offer by Bachay.com                    </Text>
                    <AppButton
                        label={'Click here to see all Guaranteed Savings Offers'}
                        onPress={() => navigation.navigate('GuaranteedSavingOffer')}
                        background
                        buttonContainerStyle={styles.btnStyle}
                        textStyle={styles.btnStyleText}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default GuaranteedSaving;


