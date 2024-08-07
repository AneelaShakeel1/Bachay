import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  trackOrderDetailsContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  productRoot: {
    paddingHorizontal: 20,
    gap: 15,
    flexDirection: 'row',
    paddingTop: 20
  },
  productImage: {
    height: 115,
    width: 115,
    borderRadius: 12,
  },
  productDetails: {
    flexDirection: 'column',
    width: '59%',
  },
  textColor: {
    color: Colors.AppColor,
    fontSize: Sizes.size12,
  },
  title: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size14,
  },
  price: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size12,
  },
  quantity: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size12,
  },
  arrivalDate: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
  },
  trackingID: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
  },
  stepsRoot: {
    padding: 20,
    backgroundColor: Colors.White,
  },
  separatorLine: {
    backgroundColor: Colors.BlueViolet,
    width: 2.5,
    height: 70,
    alignSelf: 'center',
  },
  stepInfo: {
    flexDirection: 'column',
    gap: -4,
  },
  step: {
    flexDirection: 'row',
    gap: 15,
  },
  stepTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size14,
  },
  stepDate: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
  },
});