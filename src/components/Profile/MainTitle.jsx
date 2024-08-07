import { StyleSheet, View, Text } from 'react-native';
import { Colors, Fonts, Sizes } from '../../constants/theme';

const MainTitle = ({ title }) => {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingText}>{title}</Text>
    </View>
  );
};

export default MainTitle;

const styles = StyleSheet.create({
  heading: {
    paddingBottom: 15,
    borderBottomColor: Colors.RomanSilver,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: Colors.SurfaceLightBlue,
    padding: 20,
    backgroundColor: Colors.White
  },
  headingText: {
    fontFamily: Fonts.semiBold,
    color: Colors.AppColor,
    fontSize: Sizes.size18,
  },
  verifiedView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GreenColor,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 5
  },
  unVerifiedView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.RedColor,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 5
  },
  verifiedText: {
    fontFamily: Fonts.medium,
    color: Colors.White,
    fontSize: Sizes.size15,
    top: 1
  },
  unVerifiedText: {
    fontFamily: Fonts.medium,
    color: Colors.White,
    fontSize: Sizes.size15,
    top: 1
  },
});
