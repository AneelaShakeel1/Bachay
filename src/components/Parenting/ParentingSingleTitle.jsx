import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Colors, Fonts, Sizes } from '../../constants/theme';
import icons from '../../constants/icons';

const ParentingSingleTitle = ({ share, title, icon, iconImage }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.foodHeader}>
      <View style={styles.footTextRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingVertical: 10 }}>
          {icon && iconImage}
        </TouchableOpacity>
        <Text style={styles.foodText}>
          <Text style={styles.foodText}>
            {(title ?? '').length > 17 ? title.slice(0, 17) + '...' : title}
          </Text>
        </Text>
      </View>
      {share && (
        <View style={styles.shareTextRow}>
          <TouchableOpacity activeOpacity={0.8}>
            <icons.ParentingFacebookIcon height={18} width={18} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <icons.ParentingWhatsAppIcon />
          </TouchableOpacity>
          <Text style={styles.shareText}>Share</Text>
        </View>
      )}
    </View>
  );
};

export default ParentingSingleTitle;

const styles = StyleSheet.create({
  foodHeader: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: Colors.AppColor,
    elevation: 5,
    height: 75,
    marginTop: 5,
    paddingHorizontal: 20,
  },
  footTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  foodText: {
    fontFamily: Fonts.semiBold,
    color: Colors.AppColor,
    fontSize: Sizes.size20,
    top: 1,
  },
  shareTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  shareText: {
    fontFamily: Fonts.semiBold,
    color: Colors.AppColor,
    fontSize: Sizes.size13,
    top: 1,
  },
});
