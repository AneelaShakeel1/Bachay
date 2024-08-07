import {
  View,
  Text,
  UIManager,
  LayoutAnimation,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors, Fonts, Sizes} from '../constants/theme';

import icons from '../constants/icons';
import {useState} from 'react';

const DropDown = ({
  boxStyle,
  placeholder,
  onValueChange,
  placeholderText,
  placeholderStyle,
  valueStyle,
  dropdownData,
  dropDownContainerStyle,
  listViewStyle,
  listTextStyle,
  value,
}) => {
  const [expanded, setExpanded] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };
  const handleItemPress = item => {
    onValueChange(item.key);
    setExpanded(false);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          boxStyle,
          styles.dropdown,
          {borderBottomLeftRadius: expanded ? 0 : 30},
          {borderBottomRightRadius: expanded ? 0 : 30},
          {borderBottomWidth: expanded ? 0 : 0.5},
        ]}
        onPress={toggleExpand}>
        {placeholder ? (
          <Text style={[placeholderStyle, styles.dropdownTitle]}>
            {placeholderText}
            <Text
              style={[
                valueStyle,
                styles.dropdownValueText,
              ]}>{` ${value}`}</Text>
          </Text>
        ) : (
          <Text
            style={[valueStyle, styles.dropdownValueText]}>{` ${value}`}</Text>
        )}

        {expanded ? (
          <icons.UpwardArrowIcon style={{top: 2}} />
        ) : (
          <icons.DownwardArrowIcon style={{top: 2}} />
        )}
      </TouchableOpacity>
      {expanded && (
        <FlatList
          data={dropdownData}
          contentContainerStyle={[
            styles.dropDownContainer,
            dropDownContainerStyle,
          ]}
          scrollEnabled={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                listViewStyle,
                styles.listView,
                {
                  borderBottomWidth:
                    index !== dropdownData.length - 1 ? 0.2 : 0,
                },
              ]}
              onPress={() => handleItemPress(item)}>
              <Text style={[listTextStyle, styles.listText]}>{item.key}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};
export default DropDown;
const styles = StyleSheet.create({
  dropdownTitle: {
    fontSize: Sizes.size15,
    fontFamily: Fonts.regular,
    color: Colors.AppColor,
    top: 3,
  },
  dropdownValueText: {
    top: 3,
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size14,
    textTransform: 'capitalize',
    color: Colors.AppColor,
  },

  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 25,
    borderColor: Colors.BlackCoral,
    paddingVertical: 15,
    borderWidth: 0.5,
  },
  listView: {
    paddingVertical: 15,
  },
  listText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size14,
    paddingHorizontal: 25,
    color: Colors.AppColor,
    textTransform: 'capitalize',
  },
  dropDownContainer: {
    borderBottomColor: Colors.BlackCoral,
    borderWidth: 0.5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
