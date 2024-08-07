import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SurfaceLightBlue,
    flex: 1,
  },
  loginRegisterBtnView: {
    marginTop: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.White,
    paddingVertical: 15
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    padding: 20
  },
  loginButtonText: {
    fontSize: Sizes.size17,
    color: Colors.White,
    fontFamily: Fonts.medium,
    top: 1
  },
  profileBg: {
    marginTop: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.White,
  },
  profileView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    gap: 17,
    alignItems: 'center',
  },
  profileImage: {
    height: 62,
    width: 62,
    borderColor: Colors.AppColor,
    borderRadius: 50,
    top: 2
  },
  profileImageLoading: {
    height: 62,
    width: 62,
    borderWidth: 2,
    borderColor: Colors.AppColor,
    borderRadius: 50,
    backgroundColor: Colors.SurfaceLightBlue,
    position: 'absolute',
    top: 2,
    bottom: 0,
    left: 0,
    right: 0
  },
  profileDetails: {
    gap: -3,
  },
  profileName: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size15,
    color: Colors.AppColor,
    textTransform: 'capitalize'
  },
  profileStatusView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  profileStatusText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size11,
    top: 1.5,
  },
  navigationsBg: {
    padding: 20,
    backgroundColor: Colors.White,
    marginTop: 5,
    gap: 25,
    paddingTop: 25,
    paddingBottom: 25,
  },
  navigationView: {
    borderRadius: 40,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.BlackCoral,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navigationTitleContainer: {
    position: 'absolute',
    borderRadius: 40,
    top: -15,
    paddingVertical: 3,
    left: '31%',
    right: '31%',
    borderWidth: 2,
    borderColor: Colors.White,
  },
  navigationTitle: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    color: Colors.SurfaceLightBlue,
    textAlign: 'center',
    top: 1,
  },
  navigationItem: {
    alignItems: 'center',
    top: 8,
  },
  navigationItemTitle: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size11,
    color: Colors.AppColor,
  },
  productSliderBg: {
    backgroundColor: Colors.White,
    paddingBottom: 20,
    marginTop: 10,
  },
  club: {
    backgroundColor: Colors.White,
    marginTop: 10,
    paddingBottom: 20,
  },
  heading: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size18,
    color: Colors.AppColor,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10
  },
  cardContainer: {
    borderRadius: 4,
    borderWidth: 0.9,
    borderColor: Colors.RomanSilver,
    gap: 7,
  },
  cardTitle: {
    fontSize: Sizes.size11,
    fontFamily: Fonts.medium,
    color: Colors.AppColor,
    textAlign: 'center',
    top: 5,
  },
  cardImage: {
    height: 120,
    width: 97,
    borderRadius: 4,
  },
  cardFooter: {
    backgroundColor: Colors.BlueViolet,
    padding: 5,
  },
  cardFooterText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size10,
    color: Colors.White,
    textAlign: 'center',
    top: 1,
  },
  dropDownsBg: {
    backgroundColor: Colors.White,
    padding: 20,
  },
  dropDownField: {
    borderWidth: 1,
    borderColor: Colors.RomanSilver,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  dropDownView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropDownTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size18,
    color: Colors.AppColor,
    top: 1,
  },
  dropDownItemtextView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  section: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
  details: {
    flexDirection: 'column',
    gap: -6,
  },
  label: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size13,
    color: Colors.AppColor,
    top: 1,
  },
  value: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size13,
    color: Colors.BlueViolet,
    top: 1,
  },
  dropDownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropDownItemText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
    top: 1,
  },
  SeparatorLine: {
    backgroundColor: Colors.RomanSilver,
    borderBottomWidth: 0.5,
    width: '100%',
    marginVertical: 13,
  },
});