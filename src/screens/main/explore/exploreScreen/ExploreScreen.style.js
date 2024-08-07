import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';
const imageSize = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  headerRoot: {
    marginTop: Platform.OS == 'ios' ? 70 : -10,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    marginTop: 10
  },
  backArrow: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: '10%'
  },
  categoriesView: {
    paddingHorizontal: 15,
    gap: 8,
  },
  categories: {
    flexDirection: 'row',
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 13,
    paddingVertical: 5,
  },
  categoryButtonText: {
    fontSize: Sizes.size12,
    fontFamily: Fonts.semiBold,
    top: 1,
  },
  separatorView: {
    height: 25,
    width: 1,
    backgroundColor: Colors.MetallicSilver,
    alignSelf: 'center',
  },
  gradientView: {
    height: '100%',
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    paddingRight: 15,
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'rgba(41, 45, 50, 0.5)',
    alignItems: 'center',
    gap: 10.5,
    flexDirection: 'row',
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: Colors.White,
  },
  profileViewTexts: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size11,
    color: Colors.White,
  },
  profileActionsContainer: {
    gap: 15,
    flexDirection: 'row',
  },
  actionButtonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileInfoTexts: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size12,
    color: Colors.White,
  },
  profileDesContainer: {
    marginVertical: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.White,
  },
  descText: {
    fontFamily: Platform.OS == 'ios' ? Fonts.medium : Fonts.light,
    fontSize: Sizes.size11,
    color: Colors.White,
  },
  cardContainer: {
    borderRadius: 11,
  },
  iconView: {
    position: 'absolute',
    zIndex: 1,
    top: 8,
    right: 8,
    padding: 6,
    borderRadius: 50,
    borderWidth: 0.52,
    borderColor: 'rgba(255, 255, 255, 0.50)',
  },
  cardImage: {
    height: Platform.OS == 'ios' ? 80 : 100,
    width: Platform.OS == 'ios' ? 105 : 110,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
  },
  priceView: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    gap: 3,
    justifyContent: 'center',
    padding: 3,
  },
  disPriceText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size12,
    top: 1,
    color: Colors.AppColor,
  },
  origPriceText: {
    fontFamily: Fonts.medium,
    color: Colors.RomanSilver,
    fontSize: Sizes.size10,
    textDecorationLine: 'line-through',
    top: 1,
    alignSelf: 'center',
  },
  footer: {
    backgroundColor: Colors.BlueViolet,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    padding: 8,
  },
  footerText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size12,
    textAlign: 'center',
    top: 1,
    color: Colors.White,
  },
});
