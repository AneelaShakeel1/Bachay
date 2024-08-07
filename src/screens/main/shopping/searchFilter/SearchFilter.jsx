import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../../../constants/icons';
import { Colors } from '../../../../constants/theme';
import AppButton from '../../../../components/AppButton';
import { styles } from './SearchFilter.style';

const SearchFilter = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const handleButtonPress = label => {

    if (selectedButtons.includes(label)) {
      setSelectedButtons(selectedButtons.filter(button => button !== label));
    } else {
      setSelectedButtons([...selectedButtons, label]);
    }
  };

  const handleApplyNow = () => {
    console.log('Selected Button Labels:', selectedButtons);
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.headerRoot}>
        <View style={styles.headerIconText}>
          <icons.SearchFilterIcon />
          <Text style={styles.headerTitle}>Search Filter</Text>
        </View>
        <Text style={styles.headerSubTitle}>
          Select Filters according to your needs
        </Text>
      </View>
      <View style={{ backgroundColor: Colors.FlashWhite, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Promotion & Services</Text>
            <View style={styles.buttonContainer}>
              <AppButton
                background
                // onPress={() => isStyleBtn()}
                label={'Express Delivery'}
                onPress={() => handleButtonPress('Express Delivery')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
              <AppButton
                background
                label={'Free Delivery'}
                onPress={() => handleButtonPress('Free Delivery')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                background
                label={`For Girls 6 Year Old`}
                onPress={() => handleButtonPress('For Girls 6 Year Old')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
              <AppButton
                background
                label={'For Six Year Old'}
                onPress={() => handleButtonPress('For Six Year Old')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                background
                label={`For Parent's Expecting`}
                onPress={() => handleButtonPress(`For Parent's Expecting`)}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
              <AppButton
                background
                label={'For Boys'}
                onPress={() => handleButtonPress('For Boys')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                background
                label={'Cash On Delivery'}
                onPress={() => handleButtonPress('Cash On Delivery')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
              <AppButton
                background
                label={'Best Selling'}
                onPress={() => handleButtonPress('Best Selling')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
            </View>
          </View>
          <View style={[styles.cardContainer, { marginTop: 20 }]}>
            <Text style={styles.cardTitle}>Brands</Text>
            <View style={styles.buttonContainer}>
              <AppButton
                background
                label={'Brands 3'}
                onPress={() => handleButtonPress('Brands 3')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
              <AppButton
                background
                label={'Brands 4'}
                onPress={() => handleButtonPress('Brands 4')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                background
                label={`Brands 5`}
                onPress={() => handleButtonPress('Brands 5')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
              <AppButton
                background
                label={'Brands 6'}
                onPress={() => handleButtonPress('Brands 6')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                background
                label={`Brands 7`}
                onPress={() => handleButtonPress('Brands 7')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
              <AppButton
                background
                label={'Brands 8'}
                onPress={() => handleButtonPress('Brands 8')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                background
                label={'Cash On Delivery'}
                onPress={() => handleButtonPress('Cash On Delivery')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
              <AppButton
                background
                label={'Best Selling'}
                onPress={() => handleButtonPress('Best Selling')}
                textStyle={styles.btnTextStyle}
                buttonContainerStyle={styles.btnStyle}
              />
            </View>
          </View>
          <View style={[styles.cardContainer, { marginTop: 20 }]}>
            <Text style={styles.cardTitle}>Ratings</Text>
            <View style={styles.buttonContainer}>
              <AppButton
                background
                label={'5.0'}
                onPress={() => handleButtonPress('5.0')}
                image
                imageLeft
                ImageSource={<icons.YellowStar />}
                textStyle={styles.reviewBtnTextStyle}
                buttonContainerStyle={styles.reviewBtnStyle}
              />
              <AppButton
                background
                label={'4.0'}
                onPress={() => handleButtonPress('4.0')}
                image
                imageLeft
                ImageSource={<icons.YellowStar />}
                textStyle={styles.reviewBtnTextStyle}
                buttonContainerStyle={styles.reviewBtnStyle}
              />
              <AppButton
                background
                label={'3.0'}
                onPress={() => handleButtonPress('3.0')}
                image
                imageLeft
                ImageSource={<icons.YellowStar />}
                textStyle={styles.reviewBtnTextStyle}
                buttonContainerStyle={styles.reviewBtnStyle}
              />
              <AppButton
                background
                label={'2.0'}
                onPress={() => handleButtonPress('2.0')}
                image
                imageLeft
                ImageSource={<icons.YellowStar />}
                textStyle={styles.reviewBtnTextStyle}
                buttonContainerStyle={styles.reviewBtnStyle}
              />
            </View>
          </View>
          <View style={[styles.cardContainer, { marginTop: 20 }]}>
            <Text style={styles.cardTitle}>Color Family</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleButtonPress('BeerColor')}
                style={styles.colorFamilyRoot}>
                <View
                  style={[
                    styles.colorFamilyContainer,
                    { backgroundColor: Colors.BeerColor },
                  ]}></View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleButtonPress('BlueViolet')}
                style={styles.colorFamilyRoot}>
                <View
                  style={[
                    styles.colorFamilyContainer,
                    { backgroundColor: Colors.BlueViolet },
                  ]}></View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleButtonPress('RedColor')}
                style={styles.colorFamilyRoot}>
                <View
                  style={[
                    styles.colorFamilyContainer,
                    { backgroundColor: Colors.RedColor },
                  ]}></View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleButtonPress('MalachiteGreen')}
                style={styles.colorFamilyRoot}>
                <View
                  style={[
                    styles.colorFamilyContainer,
                    { backgroundColor: Colors.MalachiteGreen },
                  ]}></View>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleButtonPress('ScreaminGreen')}
                style={styles.colorFamilyRoot}>
                <View
                  style={[
                    styles.colorFamilyContainer,
                    { backgroundColor: Colors.ScreaminGreen },
                  ]}></View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleButtonPress('RedColor')}
                style={styles.colorFamilyRoot}>
                <View
                  style={[
                    styles.colorFamilyContainer,
                    { backgroundColor: Colors.RedColor },
                  ]}></View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleButtonPress('BrandeisBlue')}
                style={styles.colorFamilyRoot}>
                <View
                  style={[
                    styles.colorFamilyContainer,
                    { backgroundColor: Colors.BrandeisBlue },
                  ]}></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.cardContainer, { marginTop: 20 }]}>
            <Text style={styles.cardTitle}>Locations</Text>
            <View style={styles.buttonContainer}>
              <AppButton
                background
                label={'Pakistan'}
                onPress={() => handleButtonPress('Pakistan')}
                textStyle={styles.locationBtnTextStyle}
                buttonContainerStyle={styles.locationBtnStyle}
              />
              <AppButton
                background
                label={'China'}
                onPress={() => handleButtonPress('China')}
                textStyle={styles.locationBtnTextStyle}
                buttonContainerStyle={styles.locationBtnStyle}
              />
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                background
                label={`USA`}
                onPress={() => handleButtonPress('USA')}
                textStyle={styles.locationBtnTextStyle}
                buttonContainerStyle={styles.locationBtnStyle}
              />
            </View>
          </View>
          <View
            style={[styles.cardContainer, { marginTop: 20, marginBottom: 20 }]}>
            <Text style={styles.cardTitle}>Prices</Text>
            <View style={styles.buttonContainer}>
              <AppButton
                background
                label={'Min'}
                textStyle={styles.qtyBtnTextStyle}
                buttonContainerStyle={styles.qtyBtnStyle}
              />
              <View style={styles.qtySeparator} />
              <AppButton
                background
                label={'Max'}
                textStyle={styles.qtyBtnTextStyle}
                buttonContainerStyle={styles.qtyBtnStyle}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footerStyle}>
        <AppButton
          textStyle={styles.resetAllBtnTextStyle}
          background
          label="Reset All"
          buttonContainerStyle={styles.resetAllBtnStyle}
          onPress={() => setSelectedButtons([])}
        />
        <AppButton
          textStyle={styles.applyNowBtnTextStyle}
          background
          label="Apply Now"
          buttonContainerStyle={styles.applyNowBtnStyle}
          onPress={handleApplyNow}
        />
      </View>
    </>
  );
};

export default SearchFilter;
