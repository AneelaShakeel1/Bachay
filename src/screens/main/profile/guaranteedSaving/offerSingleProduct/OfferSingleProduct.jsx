import React from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../../../constants/icons';
import { Colors } from '../../../../../constants/theme';
import MainTitle from '../../../../../components/Profile/MainTitle';
import MainAppHeader from '../../../../../components/MainAppHeader';
import GuaranteedSavingBanner from '../../../../../components/Profile/GuaranteedSavingBanner';
import AppButton from '../../../../../components/AppButton';
import { styles } from './OfferSingleProduct.style';

const OfferSingleProduct = () => {
    const navigation = useNavigation();

    const offerData = [
        {
            offerNo: '01',
            price: '2500',
            discount: '24',
            months: '3'
        },
        {
            offerNo: '02',
            price: '4000',
            discount: '26',
            months: '6'
        }
    ]

    const faqItems = [
        {
            title: 'Benefits of Guaranteed Savings Offer?',
            onPress: () => navigation.navigate('OfferBenefits'),
        },
        {
            title: 'How Guaranteed Savings Work',
            onPress: () => navigation.navigate('OfferWorks'),
        },
        {
            title: 'Frequently Ask Questions',
            onPress: () => navigation.navigate('OfferFAQs'),
        },
        // {
        //     title: 'Frequently Ask Questions',
        //     onPress: () => navigation.navigate('OfferFAQs'),
        // },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.White}
                barStyle={'dark-content'}
            />
            <GeneralAppHeader />
            <MainTitle title={'Chicco Guaranteed Savings Offer'} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
                <View style={styles.offerSingleProductRoot}>
                    <View style={styles.savingBannerRoot}>
                        <GuaranteedSavingBanner />
                    </View>
                    <View style={styles.productHeaderContainer}>
                        <Image source={require('../../../../../assets/images/guaranteedsavingoffer/chiccoLogo.png')} />
                        <Text style={styles.productTitleText}>Guaranteed Savings Offer</Text>
                    </View>
                    <FlatList
                        data={offerData}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.offerContainer}>
                                <View style={styles.offerTextContainer}>
                                    <Text style={styles.offerTitleText}>Offer {item.offerNo}: {item.price} @ {item.discount}% Guaranteed Savings</Text>
                                    <View style={styles.offerRowsContainer}>
                                        <View style={styles.offerRow}>
                                            <Text style={styles.rowTextLabel} >You Pay:</Text>
                                            <Text style={styles.rowTextValue}>Rs.{item.price}</Text>
                                        </View>
                                        <View style={styles.offerRow}>
                                            <Text style={styles.rowTextLabel} >You Get Minimum Discount:</Text>
                                            <Text style={styles.rowTextValue}>{item.discount}% Off</Text>
                                        </View>
                                        <View style={styles.offerRow}>
                                            <Text style={styles.rowTextLabel} >Valid For:</Text>
                                            <Text style={styles.rowTextValue}>{item.months} Months</Text>
                                        </View>
                                    </View>
                                    <AppButton
                                        background
                                        label={'Subscribe'}
                                        buttonContainerStyle={styles.btnStyle}
                                        textStyle={styles.btnTextStyle}
                                    />
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.FAQsView}>
                    <FlatList
                        data={faqItems}
                        contentContainerStyle={{ gap: 15 }}
                        renderItem={({ item }) => (
                            <>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={item.onPress}
                                    style={styles.questionBtn}>
                                    <Text style={styles.questionText}>{item.title}</Text>
                                    <icons.NavigationIcon />
                                </TouchableOpacity>
                            </>
                        )}
                    />
                </View>
            </ScrollView >
        </SafeAreaView>
    );
};

export default OfferSingleProduct;
