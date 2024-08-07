import React, { useState } from 'react'
import { Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import icons from '../../../../../constants/icons'
import { Colors } from '../../../../../constants/theme'
import { useNavigation } from '@react-navigation/native';
import GeneralAppHeader from '../../../../../components/GeneralAppHeader'
import MainTitle from '../../../../../components/Profile/MainTitle'
import AppButton from '../../../../../components/AppButton'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './CardList.style'

const CardList = () => {
    const navigation = useNavigation();
    const [cardRadio, setCardRadio] = useState(0);

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
                <View style={styles.cardListContainer}>
                    <View style={styles.accountBtnsView}>
                        <AppButton
                            onPress={() => navigation.navigate('BankAccounts')}
                            textStyle={styles.bankAccBtnText}
                            background
                            label="Bank Account Detail"
                            buttonContainerStyle={styles.bankAccBtn}
                        />
                        <AppButton
                            textStyle={styles.saveCardBtnText}
                            background
                            label="Save Card & Wallets"
                            buttonContainerStyle={styles.saveCardBtn}
                        />
                    </View>
                    <Text style={styles.saveCardText}>Save Cards</Text>
                    <View style={{ gap: 15, paddingBottom: 100 }}>
                        <TouchableOpacity
                            style={styles.creditBtn}
                            activeOpacity={0.8}
                            onPress={() => setCardRadio(1)}
                        >
                            <View style={styles.btnTextView}>
                                <icons.MastercardIcon />
                                <Text style={styles.btnText}>2222-3333-4444-5555</Text>
                            </View>
                            <View>
                                <View style={[styles.radio, { borderColor: Colors.RomanSilver }]}>
                                    {cardRadio == 1 ? (
                                        <View style={styles.radioBg}></View>
                                    ) : null}
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.creditBtn}
                            activeOpacity={0.8}
                            onPress={() => setCardRadio(2)}
                        >
                            <View style={styles.btnTextView}>
                                <icons.VisaIcon />
                                <Text style={styles.btnText}>2222-3333-4444-5555</Text>
                            </View>
                            <View>
                                <View style={[styles.radio, { borderColor: Colors.RomanSilver }]}>
                                    {cardRadio == 2 ? (
                                        <View style={styles.radioBg}></View>
                                    ) : null}
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CardList

