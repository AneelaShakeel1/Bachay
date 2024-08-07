import React from 'react'
import { Text, View, StatusBar, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CrossIcon from '../../../../../assets/images/icons/parenting/purpleCrossIcon.svg'
import Accordion from '../../../../../components/Profile/Accordion'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './CategoryList.style'
import { Colors } from '../../../../../constants/theme'

const CategoryList = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
            <StatusBar
                animated={true}
                backgroundColor={'transparent'}
                translucent={true}
                barStyle={'dark-content'}
            />
            <View style={styles.header}>
                <CrossIcon onPress={() => navigation.goBack()} />
                <Text style={styles.headerText}>Categories</Text>
            </View>
            <View style={styles.root}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.accordiansContainer}>
                        <Accordion
                            title={'Baby'}
                            flatlistData={[
                                { key: 'Development Month by Month' },
                                { key: 'Care' },
                                { key: 'Health' },
                                { key: 'Safety' },
                                { key: 'Breastfeeding' },
                                { key: 'Food & Nutrition' },
                                { key: 'Feeding' },
                                { key: 'Baby Sleep Basics' },
                            ]}
                        />
                        <Accordion
                            title={'Toddler'}
                            flatlistData={[
                                { key: 'Development Month by Month' },
                                { key: 'Care' },
                                { key: 'Health' },
                                { key: 'Safety' },
                                { key: 'Breastfeeding' },
                            ]}
                        />
                        <Accordion
                            title={'Preschooler'}
                            flatlistData={[
                                { key: 'Development Month by Month' },
                                { key: 'Care' },
                                { key: 'Feeding' },
                                { key: 'Baby Sleep Basics' },
                            ]}
                        />
                        <Accordion
                            title={'Big Kid'}
                            flatlistData={[
                                { key: 'Development Month by Month' },
                                { key: 'Care' },
                                { key: 'Health' },
                                { key: 'Feeding' },
                                { key: 'Baby Sleep Basics' },
                            ]}
                        />
                        <Accordion
                            title={'Getting Pregnant'}
                            flatlistData={[
                                { key: 'Development Month by Month' },
                                { key: 'Care' },
                                { key: 'Health' },
                                { key: 'Safety' },
                                { key: 'Baby Sleep Basics' },
                            ]}
                        />
                        <Accordion
                            title={'Pregnancy'}
                            flatlistData={[
                                { key: 'Development Month by Month' },
                                { key: 'Care' },
                                { key: 'Health' },
                                { key: 'Safety' },
                                { key: 'Breastfeeding' },
                            ]}
                        />
                        <Accordion
                            title={'Magazine'}
                            flatlistData={[
                                { key: 'Feeding' },
                                { key: 'Baby Sleep Basics' },
                            ]}
                        />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default CategoryList;

