import { Platform, StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    // borderTopWidth: 5,
    borderTopColor: Colors.SurfaceLightBlue,
    backgroundColor:
      Platform.OS == 'ios' ? Colors.White : Colors.SurfaceLightBlue,
  },
  profileView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.White,
    borderBottomWidth: Platform.OS == 'ios' ? 5 : 0,
    borderBottomColor: Colors.SurfaceLightBlue,
  },
  detailView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  userImageStyle: {
    borderRadius: 100,
    width: 80,
    height: 80,
    borderColor: Colors.AppColor,
    borderWidth: 2,
  },
  usernameText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size16,
    color: Colors.AppColor,
  },
  postText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
  },
  followBtnStyle: {
    paddingVertical: 8,
    paddingHorizontal: 26,
    borderRadius: 10,
    backgroundColor: Colors.BlueViolet,
  },

  btnTextStyle: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
    color: Colors.White,
  },
  listContainer: {
    paddingHorizontal: 10,
    gap: 20,
    paddingVertical: 25,
    backgroundColor: Colors.White,
    marginTop: 5,
  },
  gradientView: {
    marginHorizontal: 8,
    height: 260,
    flex: 1 / 2,
    borderColor: Colors.RomanSilver,
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 10,
    width: '100%',
    height: Platform.OS == 'ios' ? 270 : 240,
    position: 'absolute',
    zIndex: -1,
  },
  textStyle: {
    position: 'absolute',
    bottom: 15,
    textAlign: 'left',
    color: Colors.White,
    fontFamily: Platform.OS == 'ios' ? Fonts.semiBold : Fonts.regular,
    fontSize: Sizes.size10,
    zIndex: 1,
    paddingHorizontal: 10,
  },
  iconStyle: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(41, 45, 50, 0.50)',
    borderRadius: 50,
    padding: 8,
  },
});
