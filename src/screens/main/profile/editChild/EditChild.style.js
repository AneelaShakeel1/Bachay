import {StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SurfaceLightBlue,
    flex: 1,
  },
  root: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  childProfileBackground: {
    alignItems: 'center',
    marginTop: 40,
  },
  childProfileView: {
    height: 120,
    width: 120,
  },
  editIconView: {
    position: 'absolute',
    zIndex: 1,
    bottom: 5,
    right: 5,
    padding: 10,
    borderRadius: 25,
    backgroundColor: Colors.SurfaceLightBlue,
  },
  childProfileImage: {
    height: 120,
    width: 120,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.Black,
  },
  profileImageLoading: {
    height: 120,
    width: 120,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.Black,
    backgroundColor: Colors.SurfaceLightBlue,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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
  },
  textInputView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  placeholderText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
    color: Colors.AppColor,
    top: 2,
    width: '100%',
  },
  birthDateField: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.BlackCoral,
  },
  selector: {
    height: 50,
    marginHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '89%',
  },
  birthDateIconView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
  },
  birthDateInput: {
    width: '30%',
    top: 3,
  },
  genderFieldView: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.BlackCoral,
    justifyContent: 'space-between',
  },
  genderIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  fieldTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size12,
    color: Colors.AppColor,
    top: 1,
  },
  validationText: {
    fontSize: Sizes.size12,
    color: Colors.RedColor,
    fontFamily: Fonts.regular,
    top: -10,
    left: 20,
    marginBottom: -15,
  },
  radioMain: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    top: 1,
  },
  radioView: {
    flexDirection: 'row',
    gap: 5,
  },
  radio: {
    height: 15,
    width: 15,
    borderColor: Colors.BlackCoral,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: Colors.BlueViolet,
    height: 10,
    width: 10,
    borderRadius: 25,
  },
  radioText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
    color: Colors.AppColor,
    justifyContent: 'center',
    alignItems: 'center',
    top: -1,
  },
  btnStyle: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 30,
    padding: 13,
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: Colors.BlueViolet,
  },
  btnTextStyle: {
    fontSize: Sizes.size17,
    color: Colors.White,
    fontFamily: Fonts.semiBold,
    top: 1,
  },
});
