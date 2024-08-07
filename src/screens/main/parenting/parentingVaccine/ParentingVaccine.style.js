import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  imageRoot: {
    marginHorizontal: 10,
    borderRadius: 15,
    borderColor: Colors.SurfaceLightBlue,
    borderWidth: 2.5,
  },
  imageStyle: {
    width: Dimensions.get('screen').width / 1.2,
    height: 320,
    borderRadius: 10,
    zIndex: -1,
  },
  imageTextView: {
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  headingText: {
    color: Colors.White,
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size14,
    borderBottomColor: Colors.White,
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  descriptionText: {
    color: Colors.White,
    fontFamily: Fonts.regular,
    fontSize: Sizes.size11,
    paddingVertical: 10,
  },
  featuresRoot: {
    paddingVertical: 20,
    gap: 15,
    paddingHorizontal: 20,
  },
  featuresRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  featureText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size12,
    color: Colors.AppColor,
  },
  btnStyle: {
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BlueViolet,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.BlueViolet,
    flexDirection: 'row',
    gap: 5,
  },
  btnTextStyle: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size13,
    color: Colors.White,
    top: 1,
  },
  footerRoot: {
    paddingVertical: 20,
    gap: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },

  footerText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
  },
  separator: {
    height: 20,
    width: 1,
    backgroundColor: Colors.AppColor,
  },
});
