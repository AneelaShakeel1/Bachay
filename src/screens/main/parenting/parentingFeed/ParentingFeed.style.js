import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';
const imageSize = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.White,
    flex: 1
  },
  cardRoot: {
    marginTop: 20,
  },
  cardHeadingView: {
    paddingHorizontal: 20,

  },
  cardMainTitle: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size16,
    color: Colors.AppColor,

  },
  cardListContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    paddingHorizontal: 10,
  },
  cardImageContainer: {
    marginHorizontal: 10,
    width: imageSize.width / 1.1,
    height: 240,
    borderRadius: 20,
    justifyContent: 'center'
  },
  cardImageStyle: {
    borderRadius: 20,
    width: imageSize.width / 1.1,
    height: 240,
    position: 'absolute',
    zIndex: -1,
  },
  youtubeIconStyle: {
    alignItems: 'center',
    marginTop: -30
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    padding: 20,
    width: '100%'
  },
  cardTitle: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size16,
    color: Colors.White,
    lineHeight: 20
  },
  cardDescription: {
    fontFamily: Fonts.light,
    fontSize: Sizes.size10,
    color: Colors.White,
    lineHeight: 14,
    marginTop: 7
  },
  cardBottomActionBar: {
    backgroundColor: 'rgba(41, 45, 50, 0.50)',
    borderWidth: 1,
    marginTop: 10,
    zIndex: 1,
    borderColor: Colors.ColorGrey,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  cardActionIconView: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center'
  },
  cardActionText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size13,
    color: Colors.White,
    top: 2
  },
  vaccTrackRoot: {
    backgroundColor: Colors.White,
    elevation: 15,
    shadowColor: Colors.AppColor,
    margin: 20,
    marginTop: 10,
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  vaccTrackGradient: {
    width: '100%',
    height: 90,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  vaccTrackImage: {
    borderRadius: 20,
    width: '100%',
    height: 90,
    position: 'absolute',
    zIndex: -1,
  },
  vaccTrackTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size20,
    color: Colors.White,
    top: 1
  },
  accordionBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 25,
    borderColor: Colors.BlackCoral,
    paddingVertical: 15,
    borderWidth: 0.5,
  },
  accordionTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
    top: 2
  },
  accordionDescView: {
    paddingHorizontal: 25,
    borderBottomColor: Colors.BlackCoral,
    borderWidth: 0.5,
    borderTopWidth: -0.5,
    paddingVertical: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 20
  },
  accordionDesc: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size13,
    color: Colors.AppColor,
    lineHeight: 18,
  },
  accordionDescLink: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size13,
    color: Colors.BlueViolet
  },
  accordionDescChild: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },
  accordionDescTitle: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size13,
    color: Colors.AppColor,
    marginTop: 10,
  },
  accordionDescLink: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size13,
    color: Colors.BlueViolet,
  },
  accordionDescBtn: {
    backgroundColor: Colors.BlueVioletLight,
    borderWidth: 1,
    borderColor: Colors.BlueViolet,
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 12,
    top: 3
  },
  accordionDescBtnLink: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size11,
    color: Colors.BlueViolet,
    top: 1
  },
  statusContainer: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: Colors.BlueVioletLight,
    borderWidth: 1,
    borderColor: Colors.BlueViolet,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 20
  },
  statusCountViewRow: {
    flexDirection: "row",
    alignItems: 'center',
    gap: 7
  },
  statusCountView: {
    borderRadius: 50,
    paddingHorizontal: 5,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusCount: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size11,
    color: Colors.White,
    top: 1
  },
  statusText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size11,
    color: Colors.BlueViolet,
    top: 1
  },
  activitiesContainer: {
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  activitiesHeadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  activitiesLeftTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size14,
    color: Colors.White,
    top: 1
  },
  activitiesRightTitle: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
    color: Colors.White,
    textDecorationLine: 'underline',
    top: 1
  },
  activitiesStatusContainer: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    paddingVertical: 7,
    borderRadius: 100,
    gap: 20,
    marginTop: 10,
    marginHorizontal: 10
  },
  activitiesCountStatus: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  bplTickIcon: {
    width: 45,
    height: 45,
    backgroundColor: Colors.BlueViolet,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activitiesCountText: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size9,
    color: Colors.AppColor,
    top: 1
  },
  suggestImageContainer: {
    marginHorizontal: 10,
    width: imageSize.width / 1.1,
    height: imageSize.width * (905 / 905),
    borderRadius: 20,
    justifyContent: 'center'
  },
  suggestImageStyle: {
    borderRadius: 20,
    width: imageSize.width / 1.1,
    height: imageSize.width * (905 / 905),
    position: 'absolute',
    zIndex: -1,
  },
  pMemoriesRoot: {
    backgroundColor: Colors.White,
    elevation: 15,
    shadowColor: Colors.AppColor,
    marginTop: 10,
    borderRadius: 20,
    margin: 20,
    paddingBottom: 20,
    marginBottom: 0
  },
  pMemoriesUserHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20
  },
  pMemoriesUserHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  pMemoriesUserAvatar: {
    width: 47,
    height: 47,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: Colors.AppColor
  },
  pMemoriesUserDetails: {
    gap: -6
  },
  pMemoriesUserName: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    color: Colors.AppColor
  },
  pMemoriesUserRelation: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size12,
    color: Colors.BlueViolet
  },
  pMemoriesUserActive: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
    color: Colors.BlackCoral
  },
  pMemoriesUserDescription: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size11,
    color: Colors.AppColor,
    paddingHorizontal: 20,
    marginTop: -10
  },
  pMemoriesFeedImageStyle: {
    width: '100%',
    height: 300,
    marginTop: 15
  },
  pMemoriesStatus: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pMemoriesStatusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  pMemoriesStatusRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  pMemoriesStatusText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size12,
    color: Colors.AppColor,
    top: 1
  },
  pMemoriesStatusTextLink: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
    color: Colors.BlueViolet,
    top: 1
  },
  pMemoriesSeparatorLine: {
    borderWidth: 0.5,
    borderColor: Colors.RomanSilver,
    opacity: 0.5,
    marginHorizontal: 20
  },
  pMemoriesAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  pMemoriesActionView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginVertical: 15,
  },
  pMemoriesActionText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
    color: Colors.AppColor,
    opacity: 0.7,
    top: 1
  },
  addAnsRoot: {
    backgroundColor: Colors.White,
    elevation: 15,
    shadowColor: Colors.AppColor,
    marginTop: 10,
    borderRadius: 20,
    margin: 20,
    padding: 20,
    paddingBottom: 30,
    marginBottom: 0
  },
  addAnsSeparatorLine: {
    borderWidth: 0.5,
    borderColor: Colors.RomanSilver,
    opacity: 0.5,
  },
  addAnsStatus: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size12,
    color: Colors.AppColor,
    top: 1
  },
  addAnsQuestionView: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  addAnsQuestionText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size16,
    color: Colors.AppColor,
    top: -4,
    width: '90%'
  },
  addAnsAnswerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15
  },
  addAnsAnswerViewLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  addAnsAnswerText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
    top: 2
  },
  addAnsAnswerTextLink: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    color: Colors.BlueViolet,
    top: 2
  },
  addAnsSmallBtn: {
    backgroundColor: Colors.BlueVioletLight,
    borderWidth: 1,
    borderColor: Colors.BlueViolet,
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 20
  },
  addAnsSmallBtnLink: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size11,
    color: Colors.BlueViolet,
    top: 1
  },
  addAnsUserHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15
  },
  addAnsUserHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  addAnsUserAvatar: {
    width: 47,
    height: 47,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: Colors.AppColor
  },
  addAnsUserDetails: {
    gap: -6
  },
  addAnsUserName: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    color: Colors.AppColor
  },
  addAnsUserRelation: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size12,
    color: Colors.BlueViolet
  },
  addAnsUserActive: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
    color: Colors.BlackCoral
  },
  addAnsUserAnswerTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size12,
    color: Colors.BlueViolet,
    marginTop: 15
  },
  addAnsUserAnswerDescription: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size12,
    color: Colors.AppColor,
    marginBottom: 10
  },
  addAnsUserAnswerDescriptionLink: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size12,
    color: Colors.BlueViolet,
    marginBottom: 10
  },
  addAnsStatusRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15
  },
  addAnsStatusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  addAnsStatusRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  addAnsStatusText: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
    top: 1
  },
  addAnsStatusTextLink: {
    fontFamily: Fonts.medium,
    fontSize: Sizes.size14,
    color: Colors.BlueViolet,
    top: 1
  },
  addAnsMainBtnStyle: {
    justifyContent: 'center',
    borderRadius: 50,
    padding: 13,
    alignItems: 'center',
    backgroundColor: Colors.BlueViolet,
    marginTop: 15
  },
  addAnsMainBtnText: {
    fontSize: Sizes.size14,
    color: Colors.White,
    fontFamily: Fonts.semiBold,
    top: 1
  },
  mainView: {
    backgroundColor: Colors.White,
    marginTop: 15,
    marginBottom: -5
  },
  categoriesContainer: {
    paddingHorizontal: 10,
  },
  gradientContainer: {
    width: 68,
    height: 68,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 64,
    height: 64,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.White,
  },
  imageTitle: {
    textAlign: 'center',
    fontFamily: Fonts.semiBold,
    marginVertical: 5,
    color: Colors.AppColor,
    textTransform: 'capitalize',
  },
  noFeedContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: '50%',
    paddingHorizontal: 40
  },
  noFeedText: {
    fontFamily: Fonts.medium,
    color: Colors.AppColor,
    fontSize: Sizes.size20,
    textAlign: "center"
  },
  btnStyle: {
    padding: 13,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    gap: 10,
    borderRadius: 50,
    borderColor: Colors.AppColor,
    borderWidth: 2,
    marginTop: 20,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 50
  },
  btnTextStyle: {
    color: Colors.AppColor,
    fontSize: Sizes.size16,
    fontFamily: Fonts.semiBold,
    top: 2,
  },
});