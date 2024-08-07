import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import icons from '../../constants/icons';
import { Colors, Fonts, Sizes } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
const Accordion = ({ title, flatlistData, onPress }) => {
  const navigation = useNavigation();
  const [data, setData] = useState(flatlistData);
  const [expanded, setExpanded] = useState(false);
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };
  return (
    <>
      {flatlistData ? (
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.accordion}
            onPress={toggleExpand}>
            <Text style={[styles.title]}>{title}</Text>
            {expanded ? (
              <icons.UpwardArrowIcon />
            ) : (
              <icons.DownwardArrowIcon />
            )}
          </TouchableOpacity>
          {expanded && (
            <FlatList
              data={data}
              scrollEnabled={false}
              contentContainerStyle={{ marginBottom: 15 }}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.listView}
                  onPress={item.onPress}>
                  <Text style={styles.listText}>{item.key}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.accordion}
          onPress={onPress}>
          <Text style={styles.title}>{title}</Text>
          <icons.ForwardArrow />
        </TouchableOpacity>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: Sizes.size16,
    fontFamily: Fonts.medium,
    color: Colors.AppColor,
    top: 1
  },
  accordion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.RomanSilver,
    borderBottomWidth: 1,
    paddingVertical: 14,
  },
  listView: {
    paddingTop: 15
  },
  listText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
  },
});
export default Accordion;