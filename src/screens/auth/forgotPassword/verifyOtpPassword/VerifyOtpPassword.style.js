import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors, Fonts, Sizes} from '../../../../constants/theme';

export const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    padding: 25,
    gap: 15,
    width: Dimensions.get('screen').width,
    flex: 1,
  },
  headingStyle: {
    fontSize: Sizes.size28,
    color: Colors.AppColor,
    textAlign: 'center',
    fontFamily: 'Aristotelica Display DemiBold Trial',
    paddingTop: '20%',
  },
  btnRoot: {
    gap: 10,
  },
  btnStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
  },
  btnTextStyle: {
    fontSize: Sizes.size22,
    color: Colors.White,
    fontFamily: 'Aristotelica Display DemiBold Trial',
  },
  cell: {
    width: 70,
    height: 70,
    textAlignVertical: 'center',
    fontSize: 24,
    backgroundColor: Colors.FlashWhite,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    color: 'black',
    borderColor: Colors.BlueViolet,
    fontFamily: Fonts.medium,
    lineHeight: 65,
    marginVertical: 30
  },
  focusCell: {
    borderColor: Colors.RedColor,
    height: 70,
    lineHeight: 65
  },
  clickHere: {
    fontSize: 13,
    marginBottom: 10,
    paddingHorizontal: 5,
    fontFamily: Fonts.semiBold
  },
});
