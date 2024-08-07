import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  container: {
    padding: 20,
    paddingTop: 10,
  },
  fieldsMain: {
    marginTop: 30,
    margin: 15,
    gap: 13,
  },
  fieldView: {
    flexDirection: 'row',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.BlackCoral,
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
    lineHeight: 65
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
  verifyBtnStyle: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 11,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: Colors.White,
    borderWidth: 2,
    borderColor: Colors.GreenColor
  },
  verifyBtnTextStyle: {
    fontSize: Sizes.size17,
    color: Colors.GreenColor,
    fontFamily: Fonts.semiBold,
    top: 1
  },
});
