import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../constants/theme';
import LottieView from 'lottie-react-native';

const AppButton = props => {
  const {
    onPress,
    label,
    buttonContainerStyle,
    textStyle,
    image,
    ImageSource,
    gradient,
    background,
    imageLeft,
    imageRight,
    loaderButton,
    loading,
    loadingStyle,
    buttonDisabled,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={buttonDisabled}>
      {gradient && (
        <LinearGradient
          style={buttonContainerStyle}
          // style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 30, padding: 20, alignItems: 'center'}}
          colors={Colors.gradientColor}
          locations={[0, 0.3, 0.7, 1, 1]}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}>
          {image && imageLeft && ImageSource}
          {loaderButton && loading ? (
            <LottieView
              style={loadingStyle}
              source={require('../assets/LottieFiles/whiteLoader.json')}
              autoPlay
              loop
            />
          ) : (
            <Text style={textStyle}>{label}</Text>
          )}
          {image && imageRight && ImageSource}
        </LinearGradient>
      )}
      {background && (
        <View style={buttonContainerStyle}>
          {image && imageLeft && ImageSource}
          {loaderButton && loading ? (
            <LottieView
              style={loadingStyle}
              source={require('../assets/LottieFiles/animation.json')}
              autoPlay
              loop
            />
          ) : (
            <Text style={textStyle}>{label}</Text>
          )}
          {image && imageRight && ImageSource}
        </View>
      )}
    </TouchableOpacity>
  );
};
export default AppButton;
