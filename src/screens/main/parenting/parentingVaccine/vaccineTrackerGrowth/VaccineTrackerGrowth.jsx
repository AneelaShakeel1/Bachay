import React, { useState } from 'react';
import { StatusBar, View, ScrollView, FlatList, Text, TouchableOpacity, Dimensions } from 'react-native';
import ParentingAppHeader from '../../../../../components/ParentingAppHeader';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';
import AppButton from '../../../../../components/AppButton';
import { Table, Row, Rows } from 'react-native-table-component';
import DropShadow from 'react-native-drop-shadow';
import icons from '../../../../../constants/icons';
import { LineChart } from 'react-native-chart-kit'
import FlashMessage, { showMessage } from "react-native-flash-message";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './VaccineTrackerGrowth.style';



const VaccineTrackerGrowth = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(1);

  const chartData = [
    {
      id: 1,
      Date: '08 Nov 2022',
      Age: '06 Weeks',
      Weight: '6 Kg',
      Action: <icons.vaccineEditIcon />
    },
    {
      id: 2,
      Date: '08 Nov 2022',
      Age: '06 Weeks',
      Weight: '---',
      Action: 'Add'
    },
    {
      id: 3,
      Date: '08 Nov 2022',
      Age: '06 Weeks',
      Weight: '---',
      Action: 'Add'
    },
  ]

  const tableHead = ['Date', 'Age', 'Weight', ''];
  const tableData = chartData.map(item => [
    item.Date,
    item.Age,
    item.Weight,
    item.Action === 'Add' ? (
      <TouchableOpacity activeOpacity={0.8}>
        <Text
          style={{
            color: Colors.BlueViolet,
            fontFamily: Fonts.semiBold,
            fontSize: Sizes.size13,
            top: 1,
          }}> {item.Action}</Text >
      </TouchableOpacity>
    ) : (
      <TouchableOpacity activeOpacity={0.8}>
        {item.Action}
      </TouchableOpacity>
    ),
  ]);;

  const unitButtons = [
    {
      id: 1,
      period: 'Weight (12 kg)',
      background: Colors.SurfaceLightBlue,
      color: Colors.AppColor,
    },
    {
      id: 2,
      period: 'Height (25 CM)',
      background: Colors.SurfaceLightBlue,
      color: Colors.AppColor,
    },
    {
      id: 3,
      period: 'Head Circ. (25 CM)',
      background: Colors.SurfaceLightBlue,
      color: Colors.AppColor,
    },
  ]

  const handleVaccinePeriodSelect = id => {
    setSelectedPeriod(id);
  };

  const lineData = {
    labels: ['10', '20', '30', '40', '100', '200'],
    datasets: [
      {
        data: ['100', '200', '9', '12', '15'],
      },
    ],
  };

  const flashMsg = (weight, { x, y }) => {
    showMessage({
      message: '',
      type: 'default',
      autoHide: false,
      style: { backgroundColor: 'transparent' },
      renderCustomContent: () => (
        <View style={{ position: 'absolute', left: x - 43, top: y + 60 }}>
          <icons.WeightBGIcon />
          <View style={{ position: 'absolute', top: "25%", bottom: "25%", width: "100%" }}>
            <Text style={{ fontFamily: Fonts.semiBold, fontSize: Sizes.size10, color: Colors.White, top: 1, textAlign: "center" }}>
              {weight} kg
            </Text>
          </View>
        </View>
      ),
    });
  };

  const onDataPointClick = ({ value, x, y }) => {
    flashMsg(value, { x, y });
  };

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={styles.root}>
        <ParentingAppHeader logo />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.vaccineHeader}>
            <FlatList
              data={unitButtons}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.periodsView}
              renderItem={({ item }) => (
                <AppButton
                  onPress={() => handleVaccinePeriodSelect(item.id)}
                  textStyle={[
                    styles.periodBtnTextStyle,
                    {
                      color:
                        selectedPeriod === item.id
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
                        selectedPeriod === item.id
                          ? Colors.BlueViolet
                          : item.background,
                    },
                  ]}
                />
              )}
            />
          </View>
          <View>
            <View style={styles.graphInfoContainer}>
              <Text style={styles.updateWeightInfoText}>Update Weight On: 26 Oct 2023 - 12 kg</Text>
              <View style={{ gap: -3 }}>
                <View style={styles.entriesRow}>
                  <View style={styles.yourEntriesBullet} />
                  <Text style={styles.yourEntriesText}>Your Entries</Text>
                </View>
                <View style={styles.entriesRow}>
                  <View style={styles.averageBullet} />
                  <Text style={styles.averageInfoText}>Average (20%)</Text>
                </View>
              </View>
            </View>
            <Text style={styles.yAxisLabel}>Weight<Text style={{ fontFamily: Fonts.regular }}>(kg)</Text></Text>
            <LineChart
              data={lineData}
              width={Dimensions.get('window').width}
              height={270}
              transparent
              onDataPointClick={onDataPointClick}
              chartConfig={{
                propsForBackgroundLines: {
                  strokeWidth: 0.2
                },
                fillShadowGradient: Colors.White,
                fillShadowGradientFromOffset: 1,
                decimalPlaces: 0,
                labelColor: () => Colors.Black,
                color: () => Colors.BlueViolet,
                strokeWidth: 2,
                propsForDots: {
                  r: "4",
                  strokeWidth: "2",
                  stroke: Colors.BlueViolet
                },
              }}
              style={{
                marginVertical: 20,
              }}
            />
            <FlashMessage position={'top'} />
            <Text style={styles.xAxisLabel}>Months</Text>
          </View>
          <View style={{ padding: 20 }}>
            <View
              style={styles.measTitleContainer}>
              <Text style={styles.measTitle}>Measurement</Text>
            </View>
            <View style={styles.cardRoot}>
              <View style={styles.cardMain}>
                <Table>
                  <Row data={tableHead} style={styles.head} textStyle={styles.columnText} />
                  <View style={styles.rowsRoot}>
                    <Rows data={tableData} textStyle={styles.rowText} />
                  </View>
                </Table>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.emailVaccNGrowthChartView}>
              <Text style={styles.emailVaccNGrowthChartTitle}>Email Vaccination & Growth Chart</Text>
            </TouchableOpacity>
            <View style={styles.bottomBtnsContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.FAQsContainer}>
                <Text style={styles.FAQsTitle}>FAQs</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.disclaimerContainer}>
                <Text style={styles.disclaimerTitle}>Disclaimer</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.feedbackContainer}>
                <Text style={styles.feedbackTitle}>Feedback</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <DropShadow
          style={{
            shadowColor: Colors.ColorGrey,
            shadowOffset: { width: 3, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 9,
          }}>
          <View style={styles.footerContainer}>
            <AppButton
              textStyle={styles.btnTextStyle}
              background
              label="Add Growth Details"
              buttonContainerStyle={styles.btnStyle}
            />
          </View>
        </DropShadow>
      </View>
    </SafeAreaView>
  );
};

export default VaccineTrackerGrowth;

