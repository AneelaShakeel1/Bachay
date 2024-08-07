import React, {useEffect} from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';

const BannerImage = ({data}) => {
  if (data) {
    return (
      <Image
        style={styles.bannerImage}
        resizeMode="contain"
        source={{uri: data.page_section_banners[0].banner}}
      />
    );
  }
};
export default BannerImage;

const styles = StyleSheet.create({
  bannerImage: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width * (905 / 1285),
  },
});
