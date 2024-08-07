import React from 'react';
import Svg, {
  LinearGradient,
  Defs,
  Stop,
  TSpan,
  Text
} from 'react-native-svg';
import { Colors } from '../constants/theme';

const GradientText = ({ title, width, size }) => {
  const capitalizedTitle = title ? title.charAt(0).toUpperCase() + title.slice(1) : '';

  return (
    <Svg viewBox="0 0 280 1" height={40} width={width}>
      <Defs>
        <LinearGradient id="rainbow">
          <Stop stopColor={Colors.CarrotOrange} offset="0%" />
          <Stop stopColor={Colors.BlueViolet} offset="70%" />
          <Stop stopColor={Colors.SuperPink} offset="30%" />
          <Stop stopColor={Colors.BlueViolet} offset="10%" />
          <Stop stopColor={Colors.BlueViolet} offset="20%" />
        </LinearGradient>
      </Defs>
      <Text fontFamily="Aristotelica Display DemiBold Trial" fontSize={size} fill="url(#rainbow)">
        <TSpan>
          {capitalizedTitle}
        </TSpan>
      </Text>
    </Svg>
  );
};

export default GradientText;
