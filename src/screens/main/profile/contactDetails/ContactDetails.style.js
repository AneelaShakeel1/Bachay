import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.White,
    flex: 1
  },
  contactDetailsContainer: {
    padding: 20,
    paddingTop: 10
  },
  inputRoot: {
    paddingVertical: 25,
  },
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderColor: Colors.BlackCoral,
    borderWidth: 0.5,
    borderRadius: 50,
  },
  inputTextStyle: {
    top: 1,
    fontSize: Sizes.size14,
    fontFamily: Fonts.regular,
    width: '85%',
    color: Colors.AppColor,
  },
  btnsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelBtnStyle: {
    width: Dimensions.get('screen').width / 2.3,
    height: 45,
    borderColor: Colors.RomanSilver,
    borderWidth: 0.5,
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
  },
  cancelBtnTextStyle: {
    fontSize: Sizes.size12,
    color: Colors.AppColor,
    fontFamily: Fonts.medium,
    top: 1,
  },
  verifyBtnStyle: {
    width: Dimensions.get('screen').width / 2.3,
    height: 45,
    backgroundColor: Colors.BlueViolet,
    borderColor: Colors.BlueViolet,
    borderWidth: 0.5,
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
  },
  verifyBtnTextStyle: {
    fontSize: Sizes.size14,
    color: Colors.White,
    fontFamily: Fonts.medium,
    top: 1,
  },
  otpText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size13,
    color: Colors.AppColor,
    paddingVertical: 30,
  },
  verifyText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size15,
    color: Colors.AppColor,
  },
  verifyInfoContainer: {
    backgroundColor: 'rgba(249, 147, 39, 0.25)',
    padding: 20,
    marginTop: 25,
    borderRadius: 20,
    flexDirection: 'row',
    gap: 10
  },
  verifyInfoText: {
    width: '82%',
    fontFamily: Fonts.regular,
    color: Colors.AppColor,
    fontSize: Sizes.size12,
  },
  tcApplyText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
    color: Colors.BlueViolet,
  },
});
