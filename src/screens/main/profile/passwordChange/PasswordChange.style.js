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
    padding: 13,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: Colors.BlueViolet,
  },
  btnTextStyle: {
    fontSize: Sizes.size17,
    color: Colors.White,
    fontFamily: Fonts.semiBold,
    top: 1
  },
});
