import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopHeader from '../../../../components/TopHeader';
import { Colors } from '../../../../constants/theme';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import { styles } from './GuardianScreen.style';

const GuardianScreen = () => {
  const [selectedRadio, setSelectedRadio] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <GeneralAppHeader />
      <TopHeader title={'Guardian'} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
        <View style={styles.mainView}>
          <TouchableOpacity onPress={() => setSelectedRadio(1)} activeOpacity={0.8} style={styles.btnStyle}>
            <Text style={styles.btnText}>Mother</Text>
            <View
              style={styles.radioView}>
              {selectedRadio === 1 ? (
                <View style={styles.radioBg}></View>
              ) : (
                <View style={styles.radioOff}></View>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedRadio(2)} activeOpacity={0.8} style={styles.btnStyle}>
            <Text style={styles.btnText}>Father</Text>
            <View
              style={styles.radioView}>
              {selectedRadio === 2 ? (
                <View style={styles.radioBg}></View>
              ) : (
                <View style={styles.radioOff}></View>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedRadio(3)} activeOpacity={0.8} style={styles.btnStyle}>
            <Text style={styles.btnText}>Guardian</Text>
            <View
              style={styles.radioView}>
              {selectedRadio === 3 ? (
                <View style={styles.radioBg}></View>
              ) : (
                <View style={styles.radioOff}></View>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedRadio(4)} activeOpacity={0.8} style={styles.btnStyle}>
            <Text style={styles.btnText}>Expecting</Text>
            <View
              style={styles.radioView}>
              {selectedRadio === 4 ? (
                <View style={styles.radioBg}></View>
              ) : (
                <View style={styles.radioOff}></View>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedRadio(5)} activeOpacity={0.8} style={styles.btnStyle}>
            <Text style={styles.btnText}>Trying to Conceive</Text>
            <View
              style={styles.radioView}>
              {selectedRadio === 5 ? (
                <View style={styles.radioBg}></View>
              ) : (
                <View style={styles.radioOff}></View>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GuardianScreen;