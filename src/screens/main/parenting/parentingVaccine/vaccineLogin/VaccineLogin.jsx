import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  RefreshControl
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import icons from '../../../../../constants/icons';
import { Colors } from '../../../../../constants/theme';
import TopTabNavigation from '../../../../../navigators/TopTabNavigation';
import ParentingAppHeader from '../../../../../components/ParentingAppHeader';
import AppButton from '../../../../../components/AppButton';
import { Table, Row, Rows } from 'react-native-table-component';
import { format } from 'date-fns';
import BellIcon from '../../../../../assets/images/parenting/icons/bellIcon.svg';
import FileEditIcon from '../../../../../assets/images/parenting/icons/fileEditIcon.svg';
import FileIcon from '../../../../../assets/images/parenting/icons/fileIcon.svg';
import BookreadIcon from '../../../../../assets/images/parenting/icons/bookreadIcon.svg';
import { selectChildDetails } from '../../../../../redux/features/auth/authSelectors';
import { childList, selectChildList } from '../../../../../redux/features/auth/authThunks';
import { useSelector, useDispatch } from 'react-redux';
import CalculateAge from '../../../../../components/CalculateAge';
import { styles } from './VaccineLogin.style';
import { selectChildrenList } from '../../../../../redux/features/Main/mainSelector';
import { SafeAreaView } from 'react-native-safe-area-context';
import SkeletonLoader from './Skeleton';
const VaccineLogin = () => {
  const childData = useSelector(selectChildDetails);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, isLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    if (!loading) {
      isLoading(true);
      setRefreshing(true);
      dispatch(childList())
        .then((res) => {
          console.log('Child Data Loaded Successfully', res)
        })
        .catch((error) => {
          console.error("Error fetching child Data:", error);
        })
        .finally(() => {
          isLoading(false);
          setRefreshing(false);
        })
        ;
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        dispatch(childList());
        isLoading(false);
      };

      fetchData();
    }, [dispatch])
  );

  useEffect(() => {
    if (childData) {
      isLoading(false);
    }
  }, [childData]);

  const addGrowthFeaturesData = [
    {
      featureIcon1: FileIcon,
      featureText1: 'Digitize your childern vaccination records',
      featureIcon2: FileEditIcon,
      featureText2: 'Spot any possible gaps in their protection',
      featureIcon3: BellIcon,
      featureText3: 'Track their vaccination is real time',
      featureIcon4: BookreadIcon,
      featureText4: 'Get educated on vaccination',
    }
  ]

  const tableHead = ['Meas.', 'Value', 'Ideal Range'];

  const getGrowthTableData = (growthData) => {
    const getValue = (value) => (value != null && value !== "undefined" ? value : 'N/A');

    return [
      ['Height', getValue(growthData.height), 'N/A'],
      ['Weight', getValue(growthData.weight), 'N/A'],
      ['Head Circ.', getValue(growthData.head_circle), 'N/A'],
    ];
  };

  const handleOnPress = async (id) => {
    try {
      // Save the child ID in AsyncStorage
      await AsyncStorage.setItem('selectedChildId', id.toString());
      console.log('Child ID saved in AsyncStorage:', id);

      // Fetch child details and navigate to the VaccineTracker screen
      const response = await dispatch(selectChildList({ id }));
      console.log('Fetched child details:', response);
      navigation.navigate('VaccineTracker');
    } catch (error) {
      console.error('Error handling onPress:', error);
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
        <TopTabNavigation FocusVaccine />
        {loading ? (
          <SkeletonLoader />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          >
            {Array.isArray(childData) && childData.map((child, index) => (
              <View key={index} style={styles.vaccineContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.childInfoContainer}>
                  <Image
                    resizeMode="cover"
                    source={{ uri: child.avatar }}
                    style={styles.childImage}
                  />
                  <View style={styles.childDetailsContainer}>
                    <Text style={styles.childName}>{child.name}</Text>
                    <Text style={styles.childDetailsText}>
                      <Text style={styles.childAge}>{child.format_age}</Text> - <Text style={styles.childGender}>{child.gender == 1 ? 'Boy' : 'Girl'}</Text>
                    </Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.navigationIconContainer}>
                    <icons.NextArrow width={11} height={11} />
                  </TouchableOpacity>
                </TouchableOpacity>
                <View style={styles.vaccineTrackerContainer}>
                  <View
                    style={styles.vaccineTrackerView}>
                    <Text style={styles.vaccineTrackerText}>Vaccination Tracker</Text>
                  </View>
                  <View style={styles.cardRoot}>
                    <View style={styles.cardMain}>
                      {child.uppcomingVaccine && child.uppcomingVaccine.length > 0 ? (
                        <>
                          <View style={styles.upcomingVaccinationView}>
                            <Text style={styles.upcomingVaccinationText}>Latest Upcoming Vaccination</Text>
                          </View>
                          <View style={styles.vaccineInfoContainer}>
                            {child.uppcomingVaccine.map((upcomingVaccine, index) => (
                              <View style={styles.vaccineInfoRow}>
                                <View style={styles.vaccineInfoRowLeftRow}>
                                  <icons.VaccineIcon />
                                  <Text style={styles.vaccineInfoText}>
                                    {upcomingVaccine.vaccination?.name || 'N/A'}
                                  </Text>
                                </View>
                                {upcomingVaccine.vaccination?.name && upcomingVaccine.vaccination.name.length === 7 ? (
                                  <Text>{' '}- - - - - - - - - -{' '}</Text>
                                ) : (
                                  <Text>{' '}- - - - - - - -{' '}</Text>
                                )}
                                <Text style={styles.vaccineInfoDate}>
                                  {upcomingVaccine?.vaccination_date
                                    ? format(new Date(upcomingVaccine.vaccination_date), 'dd MMMM yyyy')
                                    : 'N/A'}
                                </Text>
                              </View>
                            ))}
                          </View>
                        </>
                      ) : null}

                      <View style={styles.vaccinationSummaryView}>
                        <Text style={styles.vaccinationSummaryText}>Vaccination Summary</Text>
                      </View>
                      <View style={styles.statusContainer}>
                        <View style={styles.statusCountRoot}>
                          <View style={[styles.statusCountView, { backgroundColor: Colors.RedColor }]}>
                            <Text style={styles.statusCount}>{child.vaccination_status.overdue || '0'}</Text>
                          </View>
                          <Text style={styles.statusText}>Overdue</Text>
                        </View>
                        <View style={styles.statusCountRoot}>
                          <View style={[styles.statusCountView, { backgroundColor: Colors.BeerColor }]}>
                            <Text style={styles.statusCount}>{child.vaccination_status.upcomming || '0'}</Text>
                          </View>
                          <Text style={styles.statusText}>Upcoming</Text>
                        </View>
                        <View style={styles.statusCountRoot}>
                          <View style={[styles.statusCountView, { backgroundColor: Colors.GreenColor }]}>
                            <Text style={styles.statusCount}>{child.vaccination_status.completed || '0'}</Text>
                          </View>
                          <Text style={styles.statusText}>Completed</Text>
                        </View>
                      </View>
                      <AppButton
                        onPress={() => handleOnPress(child.id)}
                        textStyle={styles.btnTextStyle}
                        background
                        label="View Vaccination Tracker"
                        buttonContainerStyle={styles.btnStyle}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.growthChartContainer}>
                  {child.vaccination_status ?
                    (
                      <View style={styles.growthChartView}>
                        <Text style={styles.growthChartText}>Growth Chart</Text>
                        <Text style={styles.viewSampleChartText}>View Sample Chart</Text>
                      </View>
                    )
                    :
                    (
                      <View style={styles.growthChartView}>
                        <Text style={styles.growthChartText}>Growth Chart</Text>
                      </View>
                    )}
                  {child.status ?
                    (
                      <View style={styles.cardRoot}>
                        <View style={styles.cardMain}>
                          <Text style={styles.headerText}>Use our growth tracker to measure your child’s growth over time.</Text>
                          <FlatList
                            data={addGrowthFeaturesData}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                              <View style={styles.featuresRoot}>
                                <View style={styles.featuresRow}>
                                  <item.featureIcon1 />
                                  <Text style={styles.featureText}>
                                    {item.featureText1}
                                  </Text>
                                </View>
                                <View style={styles.featuresRow}>
                                  <item.featureIcon2 />
                                  <Text style={styles.featureText}>
                                    {item.featureText2}
                                  </Text>
                                </View>
                                <View style={styles.featuresRow}>
                                  <item.featureIcon3 />
                                  <Text style={styles.featureText}>
                                    {item.featureText3}
                                  </Text>
                                </View>
                                <View style={styles.featuresRow}>
                                  <item.featureIcon4 />
                                  <Text style={styles.featureText}>
                                    {item.featureText4}
                                  </Text>
                                </View>
                              </View>
                            )}
                          />
                          <AppButton
                            textStyle={styles.btnTextStyle}
                            background
                            label="Add Growth Details"
                            buttonContainerStyle={styles.btnStyle}
                          />
                        </View>
                      </View>
                    )
                    :
                    (
                      <View style={styles.cardRoot}>
                        <View style={styles.cardMain}>
                          <View style={styles.cardHeader}>
                            <View style={styles.cardHeaderLeftRow}>
                              <icons.ClockIcon />
                              <Text style={styles.cardHeaderLeftText}>Upcoming Vaccination</Text>
                            </View>
                            <Text style={styles.cardHeaderRightText}>Add Growth Details</Text>
                          </View>
                          <View style={styles.growthChartRoot}>
                            <Table>
                              <Row data={tableHead} style={styles.head} textStyle={styles.columnText} />
                              <View style={styles.rowsRoot}>
                                <Rows data={getGrowthTableData(child.growth)} textStyle={styles.rowText} />
                              </View>
                            </Table>
                          </View>
                          <AppButton
                            onPress={() => navigation.navigate('VaccineTrackerGrowth')}
                            textStyle={styles.btnTextStyle}
                            background
                            label="View Growth Chart"
                            buttonContainerStyle={styles.btnStyle}
                          />
                        </View>
                      </View>
                    )
                  }
                </View>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};
export default VaccineLogin;