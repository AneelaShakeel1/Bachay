import React from 'react'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import MainTitle from '../../../../components/Profile/MainTitle';
import AppButton from '../../../../components/AppButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './GiftCertificate.style';

const GiftCertificate = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.White}
                barStyle={'dark-content'}
            />
            <GeneralAppHeader />
            <MainTitle title={'Gift Certificate'} />
            <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
                <View style={styles.giftCertificateContainer}>
                    <View style={styles.btnsView}>
                        <AppButton
                            textStyle={styles.giftedToBtnText}
                            background
                            label="Gifted to You"
                            buttonContainerStyle={styles.giftedToBtn}
                        />
                        <AppButton
                            textStyle={styles.giftedByBtnText}
                            background
                            label="Gifted by You"
                            buttonContainerStyle={styles.giftedByBtn}
                        />
                    </View>
                    <Text style={styles.msgText}>
                        There is no Gift Certificate which has been gifted to you.
                    </Text>
                    <View style={{ alignItems: "center" }}>
                        <AppButton
                            textStyle={styles.intelliBtnText}
                            background
                            label="Check Our Intellibaby Program"
                            buttonContainerStyle={styles.intelliBtn}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default GiftCertificate