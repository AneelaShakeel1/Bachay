import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White
  },
  OrderHistoryContainer: {
    padding: 20,
    paddingTop: 10,
  },
  dropDownMain: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropDown: {
    width: Dimensions.get('screen').width / 2.3,
  },
  ordersRoot: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  orderDetailsView: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: Colors.RomanSilver,
    borderRadius: 40,
  },
  orderDetailsText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size13,
    color: Colors.AppColor,
    top: 1,
    width: '70%',
  },
  viewDetailsText: {
    fontFamily: Fonts.semiBold,
    color: Colors.FilterColor,
    fontSize: Sizes.size13,
    top: 1,
    textDecorationLine: 'underline',
  },
  productInfoView: {
    paddingTop: 20,
    borderBottomColor: Colors.RomanSilver,
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    height: 85,
    width: 85,
    borderRadius: 8.091,
  },
  productDetailsView: {
    flexDirection: 'column',
    width: '70%',
  },
  productDetailText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
    color: Colors.AppColor,
    width: '80%'

  },
  productStatusText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size13,
  },
  arrivalDateView: {
    flexDirection: 'row',
    gap: 3,
  },
  iconView: {
    position: 'absolute',
    right: 0,
    borderRadius: 50,
    backgroundColor: Colors.FilterColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
});
