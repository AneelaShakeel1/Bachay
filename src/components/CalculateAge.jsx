import React from 'react';
import { Text } from 'react-native';
import { Colors, Fonts, Sizes } from '../constants/theme';

const CalculateAge = ({ dateOfBirth }) => {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  let age = '';

  // Check if today is the same month and year as the date of birth
  if (
    today.getFullYear() === dob.getFullYear() &&
    today.getMonth() === dob.getMonth()
  ) {
    const daysDifference = today.getDate() - dob.getDate();
    if (daysDifference === 0) {
      age = 'Today';
    } else if (daysDifference === 1) {
      age = 'Yesterday';
    } else {
      age = `${daysDifference} days ago`;
    }
  }
  // Check if today is one month after the date of birth
  else if (
    today.getFullYear() === dob.getFullYear() &&
    today.getMonth() - dob.getMonth() === 1 &&
    today.getDate() < dob.getDate()
  ) {
    age = '---';
  }
  // Calculate the age in years and months
  else {
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths =
      today.getMonth() - dob.getMonth() +
      (today.getDate() < dob.getDate() ? -1 : 0);

      if (ageMonths > 0) {
        if (ageYears > 0) {
          age += ' ';
        }
        age += `${ageMonths} month${ageMonths > 1 ? 's' : ''}`;
      }

    if (ageYears > 0) {
      age += `${ageYears} year${ageYears > 1 ? 's' : ''}`;
    }

    // include months in the age calculation
    // if (ageMonths > 0) {
    //   if (ageYears > 0) {
    //     age += ' ';
    //   }
    //   age += `${ageMonths} month${ageMonths > 1 ? 's' : ''}`;
    // }
  }

  // Set default age if it is still empty
  if (!age) {
    age = '---';
  }

  // Return the calculated age
  return (
    <Text
      style={{
        // fontSize: Sizes.size10,
        // color: Colors.AppColor,
        fontFamily: Fonts.medium,
        textTransform: 'capitalize',
      }}
    >
      {age}
    </Text>
  );
};

export default CalculateAge;