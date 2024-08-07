import React, { useState } from 'react'
import { Text, View, StatusBar, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../../constants/theme';
import icons from '../../../../../constants/icons';
import { useNavigation } from '@react-navigation/native';
import GeneralAppHeader from '../../../../../components/GeneralAppHeader';
import MainTitle from '../../../../../components/Profile/MainTitle';
import AppButton from '../../../../../components/AppButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './AddBankAccount.style';

const AddBankAccount = () => {
    const navigation = useNavigation();
    const [hblCardRadio, setHblCardRadio] = useState(0);
    const [agreementRadio, setAgreementRadio] = useState(0);
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.White}
                    barStyle={'dark-content'}
                />
                <GeneralAppHeader />
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                    <View style={styles.addBankAccContainer}>
                        <View style={{ marginHorizontal: -20 }}>
                            <MainTitle title={'My Payment Details'} />
                        </View>
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
                        <View style={{ paddingVertical: 40 }}>
                            <TouchableOpacity
                                style={styles.creditBtn}
                                activeOpacity={0.8}
                                onPress={() => setHblCardRadio(1)}
                            >
                                <View style={styles.btnTextView}>
                                    <icons.HBLIcon />
                                    <Text style={styles.btnText}>{'*'.repeat('2222222222222222222222'.length - 3) + '2222222222222222222222'.slice(-3)}</Text>
                                </View>
                                <View>
                                    <View style={[styles.radio, { borderColor: Colors.RomanSilver }]}>
                                        {hblCardRadio == 1 ? (
                                            <View style={styles.radioBg}></View>
                                        ) : null}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginHorizontal: -20 }}>
                            <MainTitle title={'Add Bank Account'} />
                        </View>
                        <View style={styles.fieldsRoot}>
                            <View style={styles.field}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Bank Name'
                                    placeholderTextColor={'rgba(0, 0, 0, 0.25)'}
                                />
                            </View>
                            <View style={styles.field}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Bank Account Number'
                                    placeholderTextColor={'rgba(0, 0, 0, 0.25)'}
                                />
                            </View>
                            <View style={styles.field}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Re-enter Bank Account Number'
                                    placeholderTextColor={'rgba(0, 0, 0, 0.25)'}
                                />
                            </View>
                            <View style={styles.field}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Account Holderk'
                                    placeholderTextColor={'rgba(0, 0, 0, 0.25)'}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.agreementView}
                            activeOpacity={0.8}
                            onPress={() => setAgreementRadio(1)}>
                            <View
                            >
                                <View style={[styles.radio, { borderColor: Colors.BlueViolet }]}>
                                    {agreementRadio == 1 ? (
                                        <View style={styles.radioBg}></View>
                                    ) : null}
                                </View>
                            </View>
                            <Text style={styles.agreementText}>I agree to Terms & Conditions and here by, confirm that the above details provided by me are correct.</Text>
                        </TouchableOpacity>
                        <View style={styles.OTPBtnsView}>
                            <AppButton
                                textStyle={styles.getOTPBtnText}
                                background
                                label="Get OTP"
                                buttonContainerStyle={styles.getOTPBtn}
                            />
                            <AppButton
                                textStyle={styles.cancelBtnText}
                                background
                                label="Cancel"
                                buttonContainerStyle={styles.cancelBtn}
                            />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default AddBankAccount

