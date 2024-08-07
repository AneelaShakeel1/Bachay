import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors, Fonts, Sizes } from '../../constants/theme';

export const styles = StyleSheet.create({
  mainView: {
    padding: 25,
    gap: 15,
    width: Dimensions.get('screen').width,
    flex: 1,
  },
  logoView: {
    alignItems: 'center',
    marginTop: 50
  },
  headingStyle: {
    fontSize: Sizes.size28,
    color: Colors.AppColor,
    textAlign: 'center',
    fontFamily: 'Aristotelica Display DemiBold Trial',
    paddingTop: '7%',
  },
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 35,
    paddingVertical: Platform.OS == 'ios' ? 20 : 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderWidth: 1,
    borderRadius: 50,
    color: Colors.AppColor,
    backgroundColor: Colors.White
  },
  inputTextStyle: {
    top: 1,
    fontSize: Sizes.size13,
    fontFamily: Fonts.regular,
    width: '85%',
    color: Colors.AppColor,
  },
  inputStyleGender: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderWidth: 1,
    borderRadius: 50,
    color: Colors.AppColor,
  },
  dropDownContainer: {
    borderBottomColor: Colors.BlackCoral,
    borderWidth: 0.5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  listView: {
    paddingVertical: 15,
  },
  listText: {
    fontSize: Sizes.size13,
    fontFamily: Fonts.regular,
    color: 'rgba(0, 0, 0, 0.25)',
    paddingHorizontal: 30,
  },
  btnRoot: {
    gap: 10,
  },
  btnStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 20,
    alignItems: 'center',
  },
  btnTextStyle: {
    fontSize: Sizes.size22,
    color: Colors.White,
    fontFamily: 'Aristotelica Display DemiBold Trial',
  },
  forgotPassText: {
    color: Colors.AppColor,
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    textAlign: 'right',
  },
  separatorView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  separatorLine: {
    borderBottomColor: Colors.AppColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: Platform.OS == 'ios' ? 170 : 150,
  },
  separatorText: {
    fontSize: Sizes.size18,
    fontFamily: Fonts.medium,
    color: Colors.AppColor,
    top: 1,
  },
  authButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 10,
  },
  authButtonView: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  authTextStyle: {
    fontSize: Sizes.size15,
    color: Colors.AppColor,
    fontFamily: Fonts.medium,
    top: 1,
  },
  BottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
  BottomTextStyle: {
    fontSize: Sizes.size16,
    color: Colors.AppColor,
    marginRight: 5,
    fontFamily: Fonts.regular,
  },
  footerTextLink: {
    fontSize: Sizes.size16,
    color: Colors.BlueViolet,
    fontFamily: Fonts.semiBold,
  },
  validationText: {
    fontSize: Sizes.size11,
    color: Colors.RedColor,
    fontFamily: Fonts.regular,
    textAlign: 'left',
    top: -10,
    left: 20,
    marginBottom: -20,
  },
});
