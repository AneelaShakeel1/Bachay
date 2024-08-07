import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../constants/theme'
import icons from '../../constants/icons'
import GradientText from '../GradientText'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

const ExploreSlider = () => {
    const navigation = useNavigation();

    const data = [
        { imageSource: require('../../assets/images/exploreprofile/profileImage1.jpg') },
        { imageSource: require('../../assets/images/exploreprofile/profileImage2.jpg') },
        { imageSource: require('../../assets/images/exploreprofile/profileImage3.jpg') },
        { imageSource: require('../../assets/images/exploreprofile/profileImage1.jpg') },
    ];

    return (
        <View style={styles.root}>
            <View style={styles.headerStyle}>
                <View style={styles.gradientTextContainer}>
                    <GradientText title={'For You'} width={200} size={36} />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('ExploreScreen')}
                    style={{ paddingLeft: 40 }}
                >
                    <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, gap: 20 }}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.8} style={{ paddingTop: 10 }} onPress={() => navigation.navigate('ExploreScreen')}>
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0.40)', 'rgba(0, 0, 0, 0.50)']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            locations={[0.1621, 1.0071]}
                            style={styles.sectionCardContainer}>
                            <Image source={item.imageSource} style={styles.sectionImage} resizeMode="cover" />
                            <View style={styles.iconStyle}><icons.TransparentPlayIcon style={{ right: -1.5 }} /></View>
                        </LinearGradient>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default ExploreSlider;

const styles = StyleSheet.create({
    root: {
        marginVertical: 5
    },
    headerStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    gradientTextContainer: {
        marginBottom: -20
    },
    seeAllText: {
        textDecorationLine: 'underline',
        alignSelf: 'center',
        color: Colors.AppColor,
        fontFamily: Fonts.medium,
        top: 4,
        textTransform: 'capitalize',
    },
    sectionCardContainer: {
        width: 140,
        height: 200,
        borderRadius: 8,
        alignItems: 'center',
    },
    sectionImage: {
        borderRadius: 8,
        width: 140,
        height: 200,
        zIndex: -1,
    },
    iconStyle: {
        position: 'absolute',
        top: '40%',
        right: '35%',
        backgroundColor: 'transparent',
        borderRadius: 50,
        padding: 8,
        borderWidth: 2,
        borderColor: Colors.PhilippineGray
    },
})