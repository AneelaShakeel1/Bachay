import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.White,
    flex: 1
  },
  addressBookContainer: {
    padding: 20,
    paddingTop: 10
  },
  infoContainer: {
    paddingTop: 20,
    gap: 5,
    borderColor: Colors.RomanSilver,
    paddingBottom: 20
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size15,
    color: Colors.AppColor,
    top: 1,
    textTransform: 'capitalize'
  },
  noAddressView: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '100%'
  },
  noAddressText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size20,
    color: Colors.AppColor,
    textAlign: 'center',
  },
  editText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size13,
    color: Colors.FilterColor,
    top: 1,
    textDecorationLine: 'underline',
  },
  deleteText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size13,
    color: Colors.RedColor,
    top: 1,
    textDecorationLine: 'underline',
  },
  addressTypeText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size15,
    color: Colors.BlueViolet,
    top: 1,
    textTransform: 'capitalize',
  },
  mobileNumberText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size15,
    color: Colors.AppColor,
    top: 1,
  },
  mobileNumberValueText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size15,
    color: Colors.AppColor,
    top: 1,
  },
  addressText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size15,
    color: Colors.AppColor,
    top: 1,
  },
  BtnStyle: {
    paddingVertical: 14,
    backgroundColor: Colors.BlueViolet,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.BlueViolet,
    margin: 15,
    marginTop: 0
  },
  BtnTextStyle: {
    color: Colors.White,
    fontSize: Sizes.size17,
    top: 1,
    fontFamily: Fonts.semiBold,
  },
});
