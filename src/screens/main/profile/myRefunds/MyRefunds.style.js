import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  cashRefundMain: {
    padding: 20,
    paddingTop: 10,
  },
  noRefunds: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size13,
    color: Colors.AppColor,
    textAlign: 'center',
    paddingVertical: 20,
  },
  details: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.RomanSilver,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
  },
});
