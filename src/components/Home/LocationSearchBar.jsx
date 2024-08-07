import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import icons from '../../constants/icons';
import { Colors, Fonts, Sizes } from '../../constants/theme';
import BottomSheetComponent from '../BottomSheetComponent';
import AppButton from '../AppButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const LocationSearchBar = () => {
  const [isOpened, setisOpened] = useState(false);
  const LocationSelect = () => {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: Colors.White }}>
        <View style={{ flex: 4 }}>
          <Image
            source={require('../../assets/images/bottomsheet/mapImage.png')}
            resizeMode='cover'
            style={{ width: '100%', marginTop: -30, height: '100%' }}
          />
          <icons.DragIcon style={{ position: 'absolute', left: '43%', opacity: 0.9, top: '-8%' }} />
        </View>
        <View style={styles.locationSelectContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.locationOption}>
            <View style={styles.iconTextContainer}>
              <icons.PurpleLiveLocationIcon />
              <Text style={styles.locationOptionText}>Use my current location</Text>
            </View>
            <icons.RightArrowPurple />
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.locationOption}>
            <View style={styles.iconTextContainer}>
              <icons.LocationIcon />
              <Text style={styles.locationOptionText}>Change location</Text>
            </View>
            <icons.RightArrowPurple />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1.5, justifyContent: 'flex-end' }}>
          <AppButton
            textStyle={styles.btnTextStyle}
            background
            label="Confirm"
            buttonContainerStyle={styles.btnStyle}
          />
        </View>
      </SafeAreaView>
    );
  };
  return (
    <>
      {isOpened ? (
        <BottomSheetComponent
          onPressMenu={() => setisOpened(!isOpened)}
          Component={LocationSelect}
          BGSheetColor={Colors.White}
          HEIGHT={360}
        />
      ) : null}
      <View style={styles.mainView}>
        <TouchableOpacity
          style={styles.addressContainer}
          activeOpacity={0.8}
          onPress={() => {
            setisOpened(!isOpened);
          }}>
          <icons.LocationIcon />
          <icons.Separator />
          <Text style={{ fontFamily: Fonts.regular, fontSize: Sizes.size12, top: 1, color: Colors.RomanSilver, width: '70%' }}>Sindh, Karachi - Clifton, North</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.LiveLocationIconView}
          onPress={() => {
            setisOpened(!isOpened);
          }}>
          <icons.LiveLocationIcon />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LocationSearchBar;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.White,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 15,
    gap: 10,
  },
  LiveLocationIconView: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: Colors.AppColor,
  },
  addressContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.BlackCoral,
    borderRadius: 25,
    gap: 10,
    paddingVertical: Platform.OS == 'ios' ? 14 : 10,
    paddingHorizontal: 20,
    width: '85%'
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.13)',
  },
  btnStyle: {
    padding: 15,
    backgroundColor: Colors.BlueViolet,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextStyle: {
    color: Colors.White,
    fontSize: Sizes.size16,
    fontFamily: Fonts.regular,
    top: 1,
  },
  locationSelectContainer: {
    paddingHorizontal: 20,
    gap: 15,
    flex: 2,
    paddingVertical: 10
  },
  locationOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  locationOptionText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
    top: 1
  }
});
