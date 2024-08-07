import React, { useRef, useState } from 'react';
import { View, Image, Dimensions, ScrollView, Text } from 'react-native';
import { Colors, Sizes } from '../../constants/theme';

const DEVICE_WIDTH = Dimensions.get('window').width;
const imageSize = Dimensions.get('window');
console.log('first', imageSize.width);

const CarouselImage = (props) => {
  const scrollRef = useRef(null);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [images] = useState(props.data);

  const setSelectedIndexHandler = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const newIndex = Math.floor(contentOffset.x / viewSize.width);
    setSelectedIndex(newIndex);
  };

  const onTouchThumbnail = (touched) => {
    setSelectedIndex(touched);
    scrollRef.current.scrollTo({
      animated: true,
      x: DEVICE_WIDTH * touched,
      y: 0,
    });
  };

  const currentItem = selectedIndex + 1;

  return (
    <View style={{ alignItems: 'center', marginTop: 15 }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={setSelectedIndexHandler}
        ref={scrollRef}
      >
        {images &&
          images.map((item, index) => (
            <Image
              key={index}
              style={{
                width: imageSize.width,
                height: imageSize.width * (1100 / 1285),
              }}
              source={{ uri: item || '' }}
              resizeMode="cover"
            />
          ))}
      </ScrollView>
      {images.length > 1 ? (
        <Text
          style={{
            color: Colors.BlueViolet,
            fontSize: Sizes.size17,
            position: 'absolute',
            bottom: '3%',
          }}
        >
          {currentItem}/{images.length}
        </Text>
      ) : null}
    </View>
  );
};

export default CarouselImage;