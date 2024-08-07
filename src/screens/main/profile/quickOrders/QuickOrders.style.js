import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.White,
    flex: 1
  },
  quickOrdersContainer: {
    padding: 20,
    paddingTop: 10,
  },
  msgText: {
    paddingVertical: 20,
    fontFamily: Fonts.semiBold,
    color: Colors.AppColor,
    fontSize: Sizes.size14,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  continueBtnStyle: {
    paddingVertical: 14,
    backgroundColor: Colors.BlueViolet,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.BlueViolet,
  },
  continueBtnTextStyle: {
    color: Colors.White,
    fontSize: Sizes.size17,
    top: 1,
    fontFamily: Fonts.semiBold,
  },
  productInfoView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  productImage: {
    height: 80,
    width: 80,
    borderRadius: 8.091,
  },
  productDetailsView: {
    flexDirection: 'column',
    width: '70%',
  },
  productDetailText: {
    fontFamily: Fonts.semiBold,
    color: Colors.AppColor,
  },
  reorderBtnStyle: {
    paddingVertical: 12,
    backgroundColor: Colors.BlueViolet,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.BlueViolet,
    flexDirection: 'row',
    gap: 5,
  },
  reorderBtnTextStyle: {
    color: Colors.White,
    fontSize: Sizes.size14,
    top: 1,
    fontFamily: Fonts.medium,
  },
  noQueriesFound: {
    paddingTop: 30,
    alignItems: 'center',
  },
  noQueriesFoundText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size16,
    color: Colors.AppColor,
    paddingVertical: 20,
  },
});
