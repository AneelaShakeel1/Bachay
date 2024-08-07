import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';
export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White
  },
  offerRoot: {
    padding: 20,
    paddingTop: 10,
    gap: 20,
  },
  listContainer: {
    backgroundColor: Colors.White,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  columnStyle: { gap: 10 },
  imageView: {
    flex: 1 / 2,
    borderColor: Colors.AppColor,
    borderWidth: 2,
    borderRadius: 15,
  },
  imageStyle: {
    height: 170,
    width: Dimensions.get('screen').width / 2.4,
    borderRadius: 15,
  },
  questionView: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: Colors.White,
    gap: 15,
    marginTop: 10,
    paddingBottom: 50,
  },
  questionBtn: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: Colors.BlackCoral,
    paddingVertical: 20,
    borderRadius: 50,
    paddingHorizontal: 25,
    alignItems: 'center',
    backgroundColor: Colors.White
  },
  questionText: {
    fontFamily: Fonts.medium,
    color: Colors.AppColor,
    fontSize: Sizes.size12,
  }
});
