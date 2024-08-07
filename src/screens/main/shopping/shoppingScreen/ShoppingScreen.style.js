import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../../constants/theme';

const imageSize = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.White,
    flex: 1
  },
  bannerImage: {
    width: imageSize.width,
    height: imageSize.width * (905 / 1285),
  },
});