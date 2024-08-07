import React from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../../../../constants/icons';
import { Colors } from '../../../../../constants/theme';
import MainTitle from '../../../../../components/Profile/MainTitle';
import MainAppHeader from '../../../../../components/MainAppHeader';
import GuaranteedSavingBanner from '../../../../../components/Profile/GuaranteedSavingBanner';
import { styles } from './OfferFAQs.style';

const OfferFAQs = () => {

    const faqItems = [
        {
            title: 'What is Club Cash Program on Products?',
        },
        {
            title: 'How do I earn Club Cash on Products?',
        },
        {
            title: 'How is my Club Calculated on Products?',
        },
        {
            title: 'How do I redeem my Club Cash?',
        },
        {
            title: 'What happens If I return/cancel my order?',
        },
        {
            title: 'Can I Earn Club if I am not a club Member?',
        }
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.White}
                barStyle={'dark-content'}
            />
            <GeneralAppHeader />
            <MainTitle title={'Frequently Ask Questions'} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
                <View style={styles.mainView}>
                    <View style={styles.savingBannerRoot}>
                        <GuaranteedSavingBanner />
                    </View>
                    <View style={styles.questionView}>
                        <FlatList
                            data={faqItems}
                            contentContainerStyle={{ gap: 15 }}
                            renderItem={({ item }) => (
                                <>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={styles.questionBtn}>
                                        <Text style={styles.questionText}>{item.title}</Text>
                                        <icons.NavigationIcon />
                                    </TouchableOpacity>
                                </>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default OfferFAQs;
