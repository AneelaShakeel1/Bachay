import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  root: {
    backgroundColor: Colors.White,
    marginTop: 10,
    flex: 1,
    borderTopWidth: 5,
    borderColor: Colors.SurfaceLightBlue
  },
  changeEmailRow: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  changeEmailText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size20,
    color: Colors.AppColor,
    top: 1
  },
  emailVerfiedText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size16,
    color: Colors.AppColor,
    top: 1
  },
  separatorLine: {
    borderBottomColor: Colors.AppColor,
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: "center",
    marginTop: 10
  },
  fieldTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size12,
    color: Colors.AppColor,
    top: 1
  },
  validationText: {
    fontSize: Sizes.size12,
    color: Colors.RedColor,
    fontFamily: Fonts.regular,
    top: -10,
    left: 20,
    marginBottom: -15
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
  fieldIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  textInputView: {
    width: '85%',
    justifyContent: 'flex-start',
    top: 1,
  },
  placeholderText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size12,
  },
  btnStyle: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 11,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: Colors.BlueViolet,
    borderWidth: 2,
    borderColor: Colors.BlueViolet
  },
  btnTextStyle: {
    fontSize: Sizes.size17,
    color: Colors.White,
    fontFamily: Fonts.semiBold,
    top: 1
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
