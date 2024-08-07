import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';
export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White
  },
  mainView: {
    padding: 20,
    paddingTop: 10,
    gap: 20,
  },
  textStyle: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
  },
});
