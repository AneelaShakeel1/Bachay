import React from 'react'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import icons from '../../../../../constants/icons';
import { Colors } from '../../../../../constants/theme'
import { useNavigation } from '@react-navigation/native';
import GeneralAppHeader from '../../../../../components/GeneralAppHeader'
import MainTitle from '../../../../../components/Profile/MainTitle'
import AppButton from '../../../../../components/AppButton'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './BankAccounts.style'

const BankAccounts = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.White}
                barStyle={'dark-content'}
            />
            <GeneralAppHeader />
            <MainTitle title={'My Payment Details'} />
            <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
                <View style={styles.bankAccountsContainer}>
                    <View style={styles.accountBtnsView}>
                        <AppButton
                            textStyle={styles.bankAccBtnText}
                            background
                            label="Bank Account Detail"
                            buttonContainerStyle={styles.bankAccBtn}
                        />
                        <AppButton
                            onPress={() => navigation.navigate('CardList')}
                            textStyle={styles.saveCardBtnText}
                            background
                            label="Save Card & Wallets"
                            buttonContainerStyle={styles.saveCardBtn}
                        />
                    </View>
                    <View style={styles.bankIconContainer}>
                        <icons.BankIcon />
                        <Text style={styles.noBankAccountText}>You have not added any bank account details yet!</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <AppButton
                            onPress={() => navigation.navigate('AddBankAccount')}
                            textStyle={styles.addNewBankAccBtnText}
                            background
                            label="+ Add New Bank Account"
                            buttonContainerStyle={styles.addNewBankAccBtn}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BankAccounts