import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import icons from '../constants/icons';
import { Colors, Fonts, Sizes } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';

const TopHeader = ({ title, image, imageSource, icon, imageIcon, iconSource }) => {
  const navigation = useNavigation();
  return (
    <>
      {image ? (
        <View
          style={styles.shareArrowRoot}>
          <View
            style={styles.shareArrowContainer}>
            {imageIcon && (
              <TouchableOpacity style={{ width: '10%' }} activeOpacity={1} onPress={() => navigation.goBack()}>
                {iconSource}
              </TouchableOpacity>
            )}
            <Text style={styles.headerText}>{title}</Text>
          </View>
          {imageSource ?
            (
              <TouchableOpacity activeOpacity={0.8}>
                {imageSource}
              </TouchableOpacity>
            )
            :
            (
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={{ fontFamily: Fonts.semiBold, fontSize: Sizes.size12, top: 1, color: Colors.BlueViolet }}>Mark all as read</Text>
              </TouchableOpacity>
            )
          }

        </View>
      ) : (
        <View style={styles.backArrowContainer}>
          {icon && (
            <TouchableOpacity activeOpacity={1} style={{ width: '10%' }} onPress={() => navigation.goBack()}>
              <icons.BackArrow
                style={styles.backArrowStyle}
              />
            </TouchableOpacity>
          )}
          <Text style={styles.headerText}>{title}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  shareArrowRoot: {
    justifyContent: 'space-between',
    backgroundColor: Colors.White,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 5,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: Colors.SurfaceLightBlue
  },
  shareArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    top: 1,
  },
  backArrowContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 25,
    backgroundColor: Colors.White,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    gap: 20,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: Colors.SurfaceLightBlue
  },
  headerText: {
    color: Colors.AppColor,
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size18,
    top: 1.5,
  },
});

export default TopHeader;
