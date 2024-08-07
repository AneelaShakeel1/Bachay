import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native';
import { Colors } from '../../constants/theme';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuizCategories } from '../../redux/features/auth/authSelectors';
import { quizCategoryList } from '../../redux/features/auth/authThunks';

const DEVICE_WIDTH = Dimensions.get('window').width;
const imageSize = Dimensions.get('window');

const QuizBannerCarousel = () => {
    const quizCategories = useSelector(selectQuizCategories);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(quizCategoryList());
    }, [dispatch]);

    useEffect(() => {
        console.log('Quizzzz Banner', quizCategories);
    }, [quizCategories]);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const images = quizCategories?.promo?.map((promo) => promo.image) || [];

    const scrollRef = useRef(null);


    useEffect(() => {
        const interval = setInterval(() => {
            if (selectedIndex < images.length - 1) {
                scrollRef.current.scrollTo({
                    animated: true,
                    x: (selectedIndex + 1) * DEVICE_WIDTH,
                });
                setSelectedIndex((prev) => prev + 1);
            } else {
                scrollRef.current.scrollTo({
                    animated: true,
                    x: 0,
                });
                setSelectedIndex(0);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [selectedIndex, images.length]);

    const onMomentumScrollEnd = (event) => {
        const contentOffset = event.nativeEvent.contentOffset;
        const viewSize = event.nativeEvent.layoutMeasurement;
        const index = Math.floor(contentOffset.x / viewSize.width);
        setSelectedIndex(index);
    };

    return (
        <View>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={onMomentumScrollEnd}
                ref={scrollRef}
            >
                {images.map((image, index) => (
                    <Image
                        style={styles.backgroundImage}
                        source={{ uri: image }}
                        key={index}
                        resizeMode="cover"
                    />
                ))}
            </ScrollView>
            <View style={styles.circleDiv}>
                {images.map((_, index) => (
                    <View
                        style={[
                            styles.whiteCircle,
                            {
                                opacity: index === selectedIndex ? 1 : 0.5,
                                width: index === selectedIndex ? 10 : 8,
                            },
                        ]}
                        key={index}
                        active={index === selectedIndex}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        width: imageSize.width,
        height: imageSize.width * (500 / 800),
    },
    circleDiv: {
        bottom: '5%',
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
        backgroundColor: Colors.White,
    },
});

export default QuizBannerCarousel;
