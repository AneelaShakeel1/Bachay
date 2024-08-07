import React from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import MainTitle from '../../../../components/Profile/MainTitle';
import AppButton from '../../../../components/AppButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProductSlider from '../../../../components/Home/ProductSlider';
import { styles } from './InvitesAndCredits.style';

const InvitesAndCredits = () => {

    const howItWorksData = [
        {
            id: 1,
            description:
                'To invite your friends to Bachay, enter their email address in the box provided and send the invite or share the customize link.',
        },
        {
            id: 2,
            description:
                'You can invite 50 of your friends at one go by importing your contact list, choosing your friends to refer and sending the invite.',
        },
        {
            id: 3,
            description:
                'Once you send an invite, you can visit the dashboard anytime to check the status of your referrals. The dashboard may take up to 24 hours to reflect the status.',
        },
        {
            id: 4,
            description:
                'Your friends will get an invite with coupons worth 2500 to shop on Bachay. You can preview the invitation here.',
        },
        {
            id: 5,
            description:
                'Your referrals who are previously registered with Bachay will not receive an invite.',
        },
        {
            id: 6,
            description:
                'Every time a referred friend registers, we send you and your friend a coupon worth Rs. 200 as a token of our appreciation.',
        },
        {
            id: 7,
            description:
                'Once your referred friend makes their first purchase at Bachay & once the order is delivered, you will get a Coupon worth 20% of the order value of your referred friend which will be capped to a max of Rs. 1000 per order. This will be sent to you at the end of the month in which the order was delivered.',
        },
        {
            id: 8,
            description:
                'Click here, to write to our customer care team if you have any queries regarding invite and credits.',
        },
    ];

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={{ backgroundColor: Colors.White, flex: 1 }}>
                <StatusBar animated={true} backgroundColor={Colors.White} barStyle={'dark-content'} />
                <GeneralAppHeader />
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                    <View style={styles.main}>
                        <View style={{ marginHorizontal: -20 }}>
                            <MainTitle title={'Invites & Friends'} />
                        </View>
                        <View style={styles.inviteImageRoot}>
                            <View style={styles.inviteImageContainer}>
                                <Image
                                    style={styles.inviteImageStyle}
                                    resizeMode="cover"
                                    source={require('../../../../assets/images/Profile/invites.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.inputsRoot}>
                            <View style={styles.emailField}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter Email Address Here"
                                    placeholderTextColor={'rgba(0, 0, 0, 0.25)'}
                                />
                            </View>
                            <View style={styles.msgField}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Messages:"
                                    placeholderTextColor={'rgba(0, 0, 0, 0.25)'}
                                    multiline={true}
                                    numberOfLines={7}
                                    textAlignVertical="top"
                                />
                            </View>
                        </View>
                        <AppButton
                            label={'Send Invites'}
                            background
                            buttonContainerStyle={styles.btnStyle}
                            textStyle={styles.btnStyleText}
                        />
                        <View style={{ marginHorizontal: -20 }}>
                            <MainTitle title={'Invites & Credits'} />
                        </View>
                        <View style={styles.creditsRoot}>
                            <View style={styles.creditsContainer}>
                                <Text style={styles.creditLabel}>Contact</Text>
                                <View style={styles.separatorView} />
                                <Text style={styles.creditLabel}>Registered On</Text>
                                <View style={styles.separatorView} />
                                <Text style={styles.creditLabel}>Order Details</Text>
                                <View style={styles.separatorView} />
                                <Text style={styles.creditLabel}>Cashback</Text>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: -20 }}>
                            <MainTitle title={'How it Works'} />
                        </View>
                        {howItWorksData.map((item, index) => (
                            <View style={styles.stepContainer} key={index}>
                                <View style={styles.stepRow}>
                                    <Text style={styles.stepLabel}>{item.id + '.'}</Text>
                                    <Text style={styles.stepDescription}>{item.description}</Text>
                                </View>
                            </View>
                        ))}
                        <View style={styles.giftCertificateContainer}>
                            <Text style={styles.giftCertificateText}>
                                There is no Gift Certificate which has been gifted to you.
                            </Text>
                        </View>
                    </View>
                    <ProductSlider title={'For You'} />
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default InvitesAndCredits;

