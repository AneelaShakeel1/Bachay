import {Fonts, Colors, Sizes} from '../../../../../constants/theme';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    zIndex: 1,
  },
  faqRoot: {
    backgroundColor: Colors.White,
    alignItems: 'center',
    marginVertical: 50,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 15,
    gap: 20,
    overflow: 'hidden',
  },
  fixedImage: {
    position: 'absolute',
    height: 180,
    width: 180,
    left: -60,
    top: 10,
    opacity: 0.1,
    zIndex: 1,
  },
  heading: {
    fontFamily: Fonts.semiBold,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
    paddingBottom: 10,
  },
  questionText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size14,
    color: Colors.AppColor,
  },
  answerText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.size12,
    color: Colors.AppColor,
    textAlign: 'left',
  },
});
