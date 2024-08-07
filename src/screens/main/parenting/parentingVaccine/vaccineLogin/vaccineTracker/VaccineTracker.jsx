import React, { useRef, useState } from 'react';
import {
    View,
    StatusBar,
    ScrollView,
    FlatList,
    Text,
    TouchableOpacity,
    RefreshControl
} from 'react-native';
import icons from '../../../../../../constants/icons';
import { Colors } from '../../../../../../constants/theme';
import ParentingAppHeader from '../../../../../../components/ParentingAppHeader';
import AppButton from '../../../../../../components/AppButton';
import { styles } from './VaccineTracker.style';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectSingleChildDetails } from '../../../../../../redux/features/auth/authSelectors';
import { SafeAreaView } from 'react-native-safe-area-context';
import FullScreenLoader from '../../../../../../components/FullScreenLoader';
import { selectChildList } from '../../../../../../redux/features/auth/authThunks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format, parseISO } from 'date-fns';

const VaccineTracker = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const selectChild = useSelector(selectSingleChildDetails);

    const [loading, isLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        if (!loading) {
            isLoading(true);
            setRefreshing(true);

            const fetchData = async () => {
                try {
                    const storedChildId = await AsyncStorage.getItem('selectedChildId');
                    console.log('Stored Child ID:', storedChildId);

                    if (storedChildId) {
                        const childId = parseInt(storedChildId, 10);
                        await dispatch(selectChildList({ id: childId }));
                    }
                }
                catch (error) {
                    console.error('Error fetching child ID from AsyncStorage:', error);
                }
                finally {
                    isLoading(false);
                    setRefreshing(false);
                }
            };
            fetchData();
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                try {
                    const storedChildId = await AsyncStorage.getItem('selectedChildId');
                    console.log('Stored Child ID:', storedChildId);

                    if (storedChildId) {
                        const childId = parseInt(storedChildId, 10);
                        await dispatch(selectChildList({ id: childId }));
                    }
                    isLoading(false);
                } catch (error) {
                    console.error('Error fetching child ID from AsyncStorage:', error);
                    isLoading(false);
                }
            };

            fetchData();
        }, [dispatch])
    );

    const flatListRef = useRef(null);

    const vaccinationPeriods = Object.keys(selectChild?.vaccination || {});

    const [selectedPeriod, setSelectedPeriod] = useState(vaccinationPeriods[0]);
    const [expandedIndex, setExpandedIndex] = useState(Array(vaccinationPeriods.length).fill(false));
    const [vaccineContent, setVaccineContent] = useState(null);

    const childvaccinePeriods = vaccinationPeriods.map((period, index) => ({
        id: index + 1,
        period: period,
        background: Colors.SurfaceLightBlue,
        color: Colors.AppColor,
    }));

    const vaccinePeriodData = vaccinationPeriods.map((period) => {
        const vaccinesForPeriod = selectChild?.vaccination?.[period] || { data: [], status: {} };

        // Get the status information for the "Birth" period
        const birthStatus = vaccinesForPeriod.status || { uppcoming: 0, today: 0, overdue: 0, completed: 0 };

        return {
            period,
            vaccineOverdue: birthStatus.overdue || 0,
            vaccineUpcoming: birthStatus.uppcoming || 0,
            vaccineCompleted: birthStatus.completed || 0,
            status: 'View Growth Chart',
            vaccineItems: vaccinesForPeriod.data.map((vaccineItem) => {
                const todayDate = new Date();
                return {
                    id: vaccineItem.id.toString(),
                    title: vaccineItem.name,
                    how: vaccineItem.how,
                    vaccineID: vaccineItem.vaccine_submission.id,
                    dueDate: vaccineItem.vaccine_submission.vaccination_date,
                    reminderDate: todayDate.toDateString(),
                    status: vaccineItem.vaccine_submission.status,
                };
            }),
        };
    });

    console.log('-------------------', vaccinePeriodData)

    const handleVaccinePeriodSelect = (period) => {
        setSelectedPeriod(period);

        const index = vaccinePeriodData.findIndex(
            (periodData) => periodData.period === period
        );

        if (flatListRef.current && index !== -1) {
            const offset = index * 440;
            flatListRef.current.scrollToOffset({ offset, animated: true });
        }
    };

    const toggleExpand = (index) => {
        setExpandedIndex((prevIndices) => {
            const newExpandedIndices = Array(vaccinationPeriods.length).fill(false);
            newExpandedIndices[index] = !prevIndices[index];
            return newExpandedIndices;
        });
    };

    const toggleVaccineContent = (index) => {
        if (vaccineContent === index) {
            setVaccineContent(null);
        } else {
            setVaccineContent(index);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
            <StatusBar
                animated={true}
                backgroundColor={'transparent'}
                translucent={true}
                barStyle={'dark-content'}
            />
            <ParentingAppHeader />
            <View style={styles.root}>
                {loading ? (
                    <FullScreenLoader />
                ) : (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                        <View style={styles.childvaccinePeriodRoot}>
                            <FlatList
                                data={childvaccinePeriods}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.periodsView}
                                renderItem={({ item, index }) => (
                                    <>
                                        <AppButton
                                            onPress={() => handleVaccinePeriodSelect(item.period)}
                                            textStyle={[
                                                styles.periodBtnTextStyle,
                                                {
                                                    color:
                                                        selectedPeriod === item.period
                                                            ? Colors.White
                                                            : item.color,
                                                },
                                            ]}
                                            background
                                            label={item.period}
                                            buttonContainerStyle={[
                                                styles.periodBtnStyle,
                                                {
                                                    backgroundColor:
                                                        selectedPeriod === item.period
                                                            ? Colors.BlueViolet
                                                            : item.background,
                                                },
                                            ]}
                                        />
                                        {index !== childvaccinePeriods.length - 1 && <View style={styles.separatorLine} />}
                                    </>
                                )}
                            />
                        </View>
                        <FlatList
                            ref={flatListRef}
                            data={vaccinePeriodData}
                            keyExtractor={(item) => item.period}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <View style={[styles.periodRoot, index === vaccinePeriodData.length - 1 && { paddingBottom: 40 }]}>
                                    {index !== 0 && <View style={{ borderTopWidth: 10, borderColor: Colors.SurfaceLightBlue, marginHorizontal: -20, paddingTop: 20 }} />}
                                    <AppButton
                                        background
                                        label={item.period}
                                        buttonContainerStyle={styles.birthBtnStyle}
                                        textStyle={styles.birthBtnTextStyle}
                                    />
                                    <View style={styles.statusContainer}>
                                        <View style={styles.statusCountViewRow}>
                                            <View style={[styles.statusCountView, { backgroundColor: Colors.RedColor }]}>
                                                <Text style={styles.statusCount}>{item.vaccineOverdue}</Text>
                                            </View>
                                            <Text style={styles.statusText}>Overdue</Text>
                                        </View>
                                        <View style={styles.statusCountViewRow}>
                                            <View style={[styles.statusCountView, { backgroundColor: Colors.BeerColor }]}>
                                                <Text style={styles.statusCount}>{item.vaccineUpcoming}</Text>
                                            </View>
                                            <Text style={styles.statusText}>Upcoming</Text>
                                        </View>
                                        <View style={styles.statusCountViewRow}>
                                            <View style={[styles.statusCountView, { backgroundColor: Colors.GreenColor }]}>
                                                <Text style={styles.statusCount}>{item.vaccineCompleted}</Text>
                                            </View>
                                            <Text style={styles.statusText}>Completed</Text>
                                        </View>
                                    </View>
                                    <ScrollView>
                                        <FlatList
                                            data={item.vaccineItems}
                                            keyExtractor={(item) => item.id}
                                            renderItem={({ item, index }) => (
                                                <>
                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        onPress={() => toggleExpand(index)}
                                                        style={[
                                                            styles.accordionBtnView,
                                                            {
                                                                borderBottomLeftRadius: expandedIndex[index] ? 0 : 30,
                                                                borderBottomRightRadius: expandedIndex[index] ? 0 : 30,
                                                                borderBottomWidth: expandedIndex[index] ? 0 : 0.5,
                                                            },
                                                        ]}
                                                    >
                                                        <View style={styles.accordionBtnLeftRow}>
                                                            {item.status === 'Over Due' && <icons.RedVaccineIcon />}
                                                            {item.status === 'Upcoming' && <icons.PurpleVaccineIcon />}
                                                            {item.status === 'Done' || item.status === 'Completed' && <icons.GreenVaccineIcon />}
                                                            <Text style={styles.accordionTitle}>{item.title}</Text>
                                                        </View>
                                                        <View style={styles.accordionBtnRightRow}>
                                                            <Text style={styles.vaccineStatus}>
                                                                {item.status}
                                                            </Text>
                                                            {expandedIndex.includes(index) ? (
                                                                <icons.UpwardArrowIcon width={12} height={12} />
                                                            ) : (
                                                                <icons.DownwardArrowIcon width={12} height={12} />
                                                            )}
                                                        </View>
                                                    </TouchableOpacity>
                                                    {expandedIndex[index] && (
                                                        <View style={styles.accordionDescView}>
                                                            <View style={styles.accordionDescChildDue}>
                                                                <Text style={[styles.accordionDescLink, { paddingTop: 15 }]}>{format(parseISO(item.dueDate), 'dd MMM yyyy')}</Text>
                                                                <TouchableOpacity onPress={() => navigation.navigate("VaccineTrackerUpdate", { vaccineId: item.vaccineID, vaccineTitle: item.title })} activeOpacity={0.8} style={styles.accordionDescBtn}>
                                                                    <Text style={styles.accordionDescBtnLink}>{[item.status === 'Over Due' && 'Mark Done', item.status === 'Upcoming' && 'Mark Done', item.status === 'Done' && 'View Details', item.status === 'Completed' && 'View Details']}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                            <View style={styles.accordionDescChildReminder}>
                                                                <Text style={styles.accordionDescTitle}>Reminder set for {' '}
                                                                    <Text style={styles.accordionDescLink}>{item.reminderDate}{'   '}</Text>
                                                                </Text>
                                                                {item.status ?
                                                                    <icons.ParentingDateIcon width={18} height={18} style={{ top: 3 }} />
                                                                    :
                                                                    null
                                                                }
                                                            </View>
                                                            {item.how && item.how.split(' ').length > 13 ? (
                                                                <>
                                                                    <Text style={styles.accordionDesc}>
                                                                        {vaccineContent === index
                                                                            ? item.how
                                                                            : item.how.split(' ').slice(0, 13).join(' ')}
                                                                        {vaccineContent === index ? (
                                                                            <>
                                                                                <Text
                                                                                    style={styles.accordionDescLink}
                                                                                    onPress={() => toggleVaccineContent(index)}
                                                                                >
                                                                                    {''} Read Less
                                                                                </Text>
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <Text
                                                                                    style={styles.accordionDescLink}
                                                                                    onPress={() => toggleVaccineContent(index)}
                                                                                >
                                                                                    {''} Read More
                                                                                </Text>
                                                                            </>
                                                                        )}
                                                                    </Text>
                                                                </>
                                                            ) : (
                                                                <Text style={styles.accordionDesc}>{item.how}</Text>
                                                            )}
                                                        </View>
                                                    )}
                                                </>
                                            )}
                                        />
                                    </ScrollView>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <Text style={styles.addGrowthChartText}>{item.status}</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            getItemLayout={(data, index) => ({
                                length: 440 + (index !== 0 ? 40 : 0), // Adjust the length for paddingTop
                                offset: (440 + (index !== 0 ? 40 : 0)) * index,
                                index,
                            })}
                        />
                    </ScrollView>
                )}
            </View>
        </SafeAreaView>
    );
};

export default VaccineTracker;
