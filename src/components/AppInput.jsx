import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Colors } from '../constants/theme';
import LinearGradient from 'react-native-linear-gradient';

export default function AppInput({
  placeholder,
  icon,
  IconSource,
  secureTextEntry,
  onChangeText,
  passwordFunctionality,
  value,
  styles,
  inputTextStyle,
  imageRight,
  imageSource,
  isEditabe,
  keyboardType,
}) {

  const blackColor = [
    Colors.AppColor,
    Colors.AppColor,
    Colors.AppColor,
    Colors.AppColor,
    Colors.AppColor,
  ];
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <LinearGradient
      style={{
        padding: focused ? 1 : 0,
        borderRadius: 50,
      }}
      colors={focused ? Colors.gradientColor : blackColor}
      locations={[0, 0.3, 0.7, 1, 1]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}>
      <View style={styles}>
        {icon && IconSource}
        <TextInput
          placeholder={placeholder}
          style={inputTextStyle}
          keyboardType={keyboardType}
          placeholderTextColor={'rgba(0, 0, 0, 0.25)'}
          value={value}
          secureTextEntry={placeholder === 'Password' || placeholder === 'Confirm Password'
            ? secureTextEntry
            : false}
          onChangeText={onChangeText}
          editable={isEditabe}
          onFocus={handleFocus}
          onBlur={handleBlur} />
        {(placeholder === 'Password' || placeholder === 'Confirm Password') &&
          passwordFunctionality}
        {imageRight && imageSource}
      </View>
    </LinearGradient>
  );
}
