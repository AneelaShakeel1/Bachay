import * as React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native';
import { Colors, Fonts, Sizes } from '../../constants/theme';
const DEVICE_WIDTH = Dimensions.get('window').width;
const imageSize = Dimensions.get('window');

class BannerCarousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      images: [
        require('../../assets/images/parenting/banner1.png'),
        require('../../assets/images/parenting/banner1.png'),
        require('../../assets/images/parenting/banner1.png'),
        require('../../assets/images/parenting/banner1.png'),
        require('../../assets/images/parenting/banner1.png'),
      ],
    };
    this.scrollRef = React.createRef();
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex === this.state.images.length - 1
              ? 0
              : prev.selectedIndex + 1,
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x: DEVICE_WIDTH * this.state.selectedIndex,
            y: 0,
          });
        },
      );
    }, 5000);
  };

  setSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({ selectedIndex });
  };

  render() {
    const { selectedIndex, images } = this.state;
    return (
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
        >
          {images.map((image, index) => (
            <Image
              style={styles.backgroundImage}
              source={image}
              key={index} // Use the index as the key
              resizeMode="cover"
            />
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((image, index) => (
            <View
              style={[
                styles.whiteCircle,
                {
                  opacity: index === selectedIndex ? 1 : 0.5,
                  width: index === selectedIndex ? 31 : 16,
                },
              ]}
              key={index} // Use the index as the key
              active={index === selectedIndex}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: imageSize.width,
    height: imageSize.width * (750 / 850),
    marginTop: 10,
  },
  circleDiv: {
    bottom: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 10,
    alignSelf: 'center',
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 3,
    backgroundColor: Colors.BlueViolet,
  },
});

export default BannerCarousel;