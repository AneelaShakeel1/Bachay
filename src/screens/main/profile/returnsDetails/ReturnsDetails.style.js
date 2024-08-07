import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  returnsDetailsContainer: {
    padding: 20,
    paddingTop: 0,
  },
  orderDetailsContainer: {
    paddingTop: 20,
    flexDirection: 'column',
    paddingBottom: 10,
  },
  orderDetailsTitle: {
    fontFamily: Fonts.light,
    color: Colors.AppColor,
    fontSize: Sizes.size14,
  },
  orderDetailsValue: {
    fontFamily: Fonts.semiBold,
    color: Colors.AppColor,
    fontSize: Sizes.size14,
  },
  btnStyle: {
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: Colors.BlueViolet,
  },
  btnTextStyle: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    color: Colors.White,
    top: 1
  },
  productRoot: {
    flexDirection: 'column',
    borderColor: Colors.SurfaceLightBlue,
    borderBottomWidth: 5,
    padding: 20,
  },
  productMain: {
    flexDirection: 'row',
    gap: 15,
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
  btnRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 15,
    alignItems: 'center',
  },
  orderBtnStyle: {
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 40,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  orderBtnTextStyle: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size13,
    top: 1
  },
  stepsRoot: {
    paddingVertical: 20,
    paddingHorizontal: 20,
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