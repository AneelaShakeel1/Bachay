import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White
  },
  container: {
    padding: 20,
    gap: 20,
  },
  injectionCount: {
    backgroundColor: 'rgba(41, 45, 50, 0.05)',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  injectionText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
    top: 2
  },
  detailsContainer: {
    borderWidth: 0.5,
    borderColor: Colors.RomanSilver,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  vaccinationDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
  vaccinationDateText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
    top: 2,
    paddingVertical: 10,
  },
  blueVioletText: {
    color: Colors.BlueViolet,
    fontFamily: Fonts.semiBold,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    marginTop: 5,
  },
  vaccinationTagContainer: {
    paddingVertical: 10,
    gap: 5,
  },
  vaccinationTagTitle: {
    color: Colors.AppColor,
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size12,
  },
  vaccinationTagDescription: {
    fontFamily: Fonts.regular,
    textAlign: 'left',
    fontSize: Sizes.size12,
    color: Colors.AppColor,
  },
  vaccineImageTag: {
    width: '100%',
    height: 140,
    borderRadius: 15,
  },
  vaccineImageLoading: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: Colors.SurfaceLightBlue,
    position: 'absolute',
  },
  galleryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    borderRadius: 15,
    marginTop: 10,
    height: 140,
    position: 'relative',
  },
  cameraIconContainer: {
    position: 'absolute',
    zIndex: 1,
    right: -11,
    top: -11,
  },
  addGrowthDetailsTitle: {
    color: Colors.AppColor,
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    marginTop: 15,
  },
  growthDetailsContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: Colors.pink,
    marginTop: 15
  },
  growthDetailsLabel: {
    color: Colors.AppColor,
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
    top: 7
  },
  inputStyle: {
    borderBottomWidth: 0.7,
    borderColor: Colors.AppColor,
    width: '60%',
    textAlign: 'center',
    paddingBottom: 0,
    position: 'absolute',
    left: '25%',
    right: '25%',
    color: Colors.AppColor
  },
  arrowStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  arrowIcon: {
    top: 5,
    marginLeft: 6
  },
  arrowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
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
  btnStyle: {
    marginTop: 30,
    backgroundColor: Colors.BlueViolet,
    height: 55,
    backgroundColor: Colors.BlueViolet,
    justifyContent: 'center',
    borderRadius: 100,
    alignItems: 'center',
  },
  btnTextStyle: {
    fontSize: Sizes.size14,
    color: Colors.White,
    fontFamily: Fonts.semiBold,
    top: 1
  },
  bottomInfo: {
    backgroundColor: 'rgba(249, 147, 39, 0.25)',
    padding: 15,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  bottomInfoText: {
    width: '90%',
    fontFamily: Fonts.regular,
    color: Colors.AppColor,
    fontSize: Sizes.size11
  },
});
