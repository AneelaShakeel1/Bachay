import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {Colors} from '../constants/theme';

const FullScreenLoader = () => {
  return (
    <View style={styles.container}>
      <LottieView
        style={{width: 130, height: 130}}
        source={require('../assets/LottieFiles/loader.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default FullScreenLoader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.White,
  },
});
