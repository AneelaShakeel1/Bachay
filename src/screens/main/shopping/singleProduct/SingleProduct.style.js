import { StyleSheet, Dimensions, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  headerRoot: {
    justifyContent: 'space-between',
    backgroundColor: Colors.White,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: Platform.OS == 'ios' ? 60 : 40,
  },
  cartFull: {
    width: 7,
    height: 7,
    backgroundColor: Colors.BeerColor,
    position: 'absolute',
    right: -2,
    top: -2,
    borderRadius: 50,
    zIndex: 1,
  },
  searchView: {
    flexDirection: 'row',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.BlackCoral,
    paddingHorizontal: 10,
    width: '70%',
    height: 45,
  },
  searchIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  searchInputView: {
    width: '80%',
    top: Platform.OS == 'ios' ? 0 : 2,
    alignSelf: Platform.OS == 'ios' ? 'center' : 'auto',
  },
  placeholderText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size12,
  },
  footerStyle: {
    backgroundColor: Colors.White,
    width: Dimensions.get('screen').width,
    gap: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    shadowColor: Colors.AppColor,
    elevation: 30,
  },
  counterView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: Colors.BlackCoral,
    paddingHorizontal: 10,
    borderWidth: 1,
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width / 3.2,
  },
  counterText: {
    fontFamily: Fonts.semiBold,
    color: Colors.AppColor,
    fontSize: Sizes.size18,
    top: 2,
  },
  applyNowBtnStyle: {
    width: Dimensions.get('screen').width / 2,
    height: 45,
    backgroundColor: Colors.BlueViolet,
    borderColor: Colors.BlueViolet,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
  },
  applyNowBtnTextStyle: {
    fontSize: Sizes.size15,
    color: Colors.White,
    fontFamily: Fonts.semiBold,
    top: 1,
  },
  container: {
    backgroundColor: Colors.FlashWhite,
    paddingTop: 20
  },
  headingText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size19,
    color: Colors.AppColor,
  },
  headingTextBorder: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.13)',
    marginVertical: 12,
  },
  descriptionText1: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size13,
    color: Colors.AppColor,
    paddingHorizontal: 30
  },
  descriptionText2: {
    fontFamily: Fonts.light,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
    lineHeight: 22,
  },
  descriptionTextLink: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
    color: Colors.BlueViolet,
    marginTop: -10,
    textAlign: 'right'
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
    paddingHorizontal: 30
  },
  price: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size17,
    color: Colors.BlueViolet,
    top: 1,
  },
  oldPrice: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size13,
    color: Colors.ColorGrey,
    textDecorationLine: 'line-through',
    top: 1,
  },
  ratingContainer: {
    borderColor: 'rgba(0, 0, 0, 0.13)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30
  },
  ratingButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 12,
    alignItems: 'center',
    backgroundColor: Colors.BeerColor,
  },
  ratingText: {
    fontSize: Sizes.size12,
    color: Colors.White,
    fontFamily: Fonts.semiBold,
    top: 1,
  },
  ratingDetails: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  ratingCount: {
    fontSize: Sizes.size12,
    color: Colors.AppColor,
    fontFamily: Fonts.regular,
    top: 1,
  },
  soldCount: {
    fontSize: Sizes.size12,
    color: Colors.ColorGrey,
    fontFamily: Fonts.medium,
    top: 1,
  },
  transparentButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
    backgroundColor: Colors.SurfaceLightBlue,
    gap: 5,
  },
  transparentButtonText: {
    fontSize: Sizes.size14,
    color: Colors.AppColor,
    fontFamily: Fonts.medium,
    top: 1,
  },
  sizeContainer: {
    borderColor: Colors.BlackOlive,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingVertical: 5
  },
  sizeLabel: {
    fontSize: Sizes.size17,
    top: 2,
    fontFamily: Fonts.medium,
    color: Colors.AppColor,
    width: '12%',
  },
  sizeButtonContainer: {
    paddingHorizontal: 7,
  },
  sizeButton: {
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 17,
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: Colors.FlashWhite
  },
  sizeButtonText: {
    fontSize: Sizes.size12,
    // fontFamily: Fonts.semiBold,
    top: 1,
    color: Colors.AppColor
  },
  buttonsContainer: {
    borderColor: 'rgba(0, 0, 0, 0.13)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 20,
    marginHorizontal: 30
  },
  vouchersButton: {
    backgroundColor: Colors.BlueVioletLight,
    borderColor: Colors.BlueVioletBorder,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 50,
    gap: 7,
  },
  vouchersButtonText: {
    color: Colors.BlueViolet,
    fontSize: Sizes.size14,
    fontFamily: Fonts.medium,
    top: 1,
  },
  deliveryButton: {
    backgroundColor: Colors.SurfaceLightBlue,
    borderColor: Colors.SurfaceLightBlueBorder,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 50,
    gap: 7,
    marginTop: 15,
  },
  deliveryButtonText: {
    color: Colors.AppColor,
    fontSize: Sizes.size14,
    fontFamily: Fonts.medium,
    top: 1,
  },
  deliveryButtonDate: {
    color: Colors.AppColor,
    fontSize: Sizes.size11,
    fontFamily: Fonts.medium,
  },
  rightArrowContainer: {
    position: 'absolute',
    right: 20,
  },
  clubCashHeading: {
    fontFamily: Fonts.semiBold,
    color: Colors.AppColor,
    top: 1,
    fontSize: Sizes.size20,
    paddingHorizontal: 30
  },
  clubCashView: {
    width: '25%',
    alignItems: 'center',
    gap: 7,
  },
  clubCashText: {
    fontFamily: Fonts.regular, color: Colors.Black,
    top: 1,
    fontSize: Sizes.size12,
    lineHeight: 13,
    textAlign: "center"
  },
  reviewContainer: {
    borderColor: 'rgba(0, 0, 0, 0.13)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 20,
    marginHorizontal: 30,
  },
  reviewDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewImage: {
    borderRadius: 100,
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: Colors.AppColor,
  },
  reviewTextContainer: {
    left: 10,
    gap: -5,
  },
  reviewTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
    textTransform: 'capitalize'
  },
  reviewStarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  reviewStarsText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
    top: 2,
    left: 3,
  },
  questionsContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  questionsDetails: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
  },
  questionsText: {
    color: Colors.AppColor,
    fontSize: Sizes.size14,
    fontFamily: Fonts.medium,
    top: 1,
  },
  questionsRightArrow: {
    position: 'absolute',
    right: 0,
  },
  footerStyle: {
    backgroundColor: Colors.White,
    width: Dimensions.get('screen').width,
    gap: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: Platform.OS == 'ios' ? 30 : 20,
    shadowColor: Colors.AppColor,
    elevation: 30,
  },
  resetAllBtnStyle: {
    width: Dimensions.get('screen').width / 1.8,
    height: 45,
    backgroundColor: 'rgba(128, 128, 128, 0.10)',
    borderColor: 'rgba(128, 128, 128, 0.25)',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
  },
  resetAllBtnTextStyle: {
    color: Colors.AppColor,
    fontSize: Sizes.size15,
    fontFamily: Fonts.regular,
    fontWeight: 'bold',
  },
  applyNowBtnStyle: {
    width: Dimensions.get('screen').width / 1.8,
    height: 45,
    backgroundColor: Colors.BlueViolet,
    borderColor: Colors.BlueViolet,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
  },
  applyNowBtnTextStyle: {
    color: Colors.White,
    fontSize: Sizes.size15,
    fontFamily: Fonts.regular,
    fontWeight: 'bold',
  },
  colorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  colorsText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size17,
    color: Colors.AppColor,
    top: 1
  },
  colorsContainer: {
    flexDirection: "row",
    alignItems: 'center',
    gap: 8
  },
  offersRoot: {
    paddingVertical: 20,
    borderColor: Colors.BlackOlive,
    paddingBottom: 25,
  },
  offersText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size16,
    top: 1,
    color: Colors.AppColor,
    paddingHorizontal: 30
  },
  offersCardRoot: {
    paddingTop: 10,
  },
  cardContent: {
    position: "absolute",
    paddingTop: 30,
    paddingHorizontal: 20
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 10
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 50
  },
  viewTCContainer: {
    paddingBottom: 10
  },
  viewTCText: {
    fontFamily: Fonts.medium,
    color: Colors.FilterColor,
    top: 1,
    fontSize: Sizes.size12,
    textDecorationLine: "underline",
    paddingHorizontal: 45
  },
  flatDiscountText: {
    fontFamily: Fonts.medium,
    color: Colors.Black,
    top: 1,
    fontSize: Sizes.size13,
    width: "85%",
    lineHeight: 15
  },
  cardBtnsRoot: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    justifyContent: "space-between",
    paddingTop: 15
  },
  primaryBtn: {
    width: "65%",
    flexDirection: "row"
  },
  secondaryBtn: {
    width: "30%",
    backgroundColor: Colors.White,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: Colors.BlueViolet,
    borderWidth: 1
  },
  codeBtn: {
    width: '50%',
    backgroundColor: Colors.BlueViolet,
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    paddingVertical: 5,
    marginRight: -1,
    zIndex: 1
  },
  codeText: {
    fontFamily: Fonts.semiBold,
    color: Colors.White,
    top: 1,
    fontSize: Sizes.size13,
    textAlign: 'center'
  },
  dashedBtn: {
    width: '50%',
    backgroundColor: Colors.White,
    borderStyle: "dashed",
    borderColor: Colors.BlueViolet,
    borderBottomEndRadius: 5,
    borderTopEndRadius: 5,
    paddingVertical: 5,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: "center"
  },
  copyText: {
    fontFamily: Fonts.medium,
    color: Colors.BlueViolet,
    top: 1,
    fontSize: Sizes.size13
  },
  shareText: {
    fontFamily: Fonts.medium,
    color: Colors.BlueViolet,
    top: 1,
    fontSize: Sizes.size13
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    maxHeight: 90,
    width: '40%',
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 0.7,
    borderColor: Colors.AppColor,
    alignItems: 'center'
  },
  dropdownText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
  },
  sizeBasicsContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    paddingHorizontal: 30
  },
  sizeBasicsTitle: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size17,
    top: 1,
    color: Colors.AppColor
  },
  dropDown: {
    paddingHorizontal: 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "space-between",
    width: '20%'
  },
  dropDownListText: {
    fontFamily: Fonts.medium,
    color: Colors.Black,
    top: 1,
    fontSize: Sizes.size12
  },
  sizeChartContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  sizeChartTitle: {
    fontFamily: Fonts.semiBold,
    color: Colors.FilterColor,
    top: 1,
    fontSize: Sizes.size13
  },
  productDesContainer: {
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: Colors.White
  },
  highlightsContainer: {
    paddingBottom: 25,
    paddingHorizontal: 30,
    paddingTop: 15,
    backgroundColor: Colors.White
  }

});