import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.White,
  },
  editAddressContainer: {
    padding: 20,
    paddingTop: 10,
  },
  fieldsRoot: {
    paddingVertical: 20,
    gap: 15
  },
  field: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.BlackCoral,
    paddingHorizontal: 20,
  },
  input: {
    color: Colors.AppColor,
    fontFamily: Fonts.regular,
    fontSize: Sizes.size12,
    top: 1
  },
  mobNum: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  countryCode: {
    fontFamily: Fonts.semiBold,
    color: Colors.AppColor,
    fontSize: Sizes.size12
  },
  addressType: {
    flexDirection: 'row',
    gap: 15,
    paddingLeft: 10,
    alignItems: 'center'
  },
  addressTypeText: {
    fontFamily: Fonts.medium,
    color: Colors.AppColor,
    fontSize: Sizes.size13,
    top: 1
  },
  radioMain: {
    flexDirection: 'row',
    gap: 15,
  },
  radioView: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  radio: {
    height: 17,
    width: 17,
    borderColor: Colors.BlackCoral,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: Colors.BlueViolet,
    height: 12,
    width: 12,
    borderRadius: 25,
  },
  radioText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size13,
    color: Colors.AppColor,
    top: 1
  },
  defaultType: {
    flexDirection: 'row',
    gap: 3,
    paddingLeft: 4,
    alignItems: 'center',
    marginTop: 15
  },
  defaultTypeText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size13,
    color: Colors.AppColor,
    top: 1
  },
  btnsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 20
  },
  cancelBtnStyle: {
    width: Dimensions.get('screen').width / 2.3,
    height: 45,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.BlackCoral,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtnTextStyle: {
    fontSize: Sizes.size12,
    color: Colors.AppColor,
    fontFamily: Fonts.medium,
    top: 1,
  },
  saveBtnStyle: {
    width: Dimensions.get('screen').width / 2.3,
    height: 45,
    backgroundColor: Colors.BlueViolet,
    borderColor: Colors.BlueViolet,
    borderWidth: 0.5,
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
  },
  saveBtnTextStyle: {
    fontSize: Sizes.size14,
    color: Colors.White,
    fontFamily: Fonts.medium,
    top: 1,
  },
  validationText: {
    fontSize: Sizes.size11,
    color: Colors.RedColor,
    fontFamily: Fonts.regular,
    textAlign: 'left',
    top: -10,
    left: 20,
    marginBottom: -20
  },
});
