import React, { useState } from 'react'
import { Text, View, StatusBar, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { Colors } from '../../../../../constants/theme'
import BPLAppHeader from '../../../../../components/BPLAppHeader'
import BPLBottomTabNavigation from "../../../../../navigators/BPLBottomTabNavigation";
import icons from '../../../../../constants/icons';
import Slider from 'react-native-slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Rank.style';

const Rank = () => {

    const levelsData = [
        {
            title: "Elite",
            badge: <icons.BPLEliteBadge height={130} width={180} />,
            points: '200',
            usersCount: '21884',
            congratulationsText: "Congratulations! You’re one of our top Elite rankers & a super parent!",
            services: ["Salon Services", "Fitness Live Classes", "Stylish Eyewear Vouchers"],
            status: false,
            shapeLine: <icons.BPLEliteShapeLine />
        },
        {
            title: "Diamond",
            badge: <icons.BPLDiamondBadge height={130} width={180} />,
            points: '300',
            usersCount: '15000',
            congratulationsText: "Congratulations! You’re one of our top Diamond rankers & a super parent!",
            services: ["Exclusive Spa Package", "Premium Fitness Membership", "Luxury Jewelry Vouchers"],
            status: false,
            shapeLine: <icons.BPLDiamondShapeLine />

        },
        {
            title: "Gold",
            badge: <icons.BPLGoldBadge height={130} width={180} />,
            points: '150',
            usersCount: '25000',
            congratulationsText: "Congratulations! You’re one of our top Gold rankers & a super parent!",
            services: ["Gourmet Dining Experience", "Adventure Family Trip", "High-end Electronic Gadgets"],
            status: true,
            shapeLine: <icons.BPLGoldShapeLine />
        },
        {
            title: "Platinum",
            badge: <icons.BPLPlatinumBadge height={130} width={180} />,
            points: '250',
            usersCount: '18000',
            congratulationsText: "Congratulations! You’re one of our top Platinum rankers & a super parent!",
            services: ["VIP Spa Retreat", "Private Yoga Sessions", "Designer Fashion Shopping Spree"],
            status: true,
            shapeLine: <icons.BPLPlatinumShapeLine />
        },
        {
            title: "Silver",
            badge: <icons.BPLSilverBadge height={130} width={180} />,
            points: '100',
            usersCount: '30000',
            congratulationsText: "Congratulations! You’re one of our top Silver rankers & a super parent!",
            services: ["Exclusive Movie Night", "Custom Family Photoshoot", "Tech Gadgets Vouchers"],
            status: true,
            shapeLine: <icons.BPLSilverShapeLine />
        }
    ];
    const [sliderValues, setSliderValues] = useState([25, 50, 75, 43, 55]);
    const getRewardTextColor = (level) => {
        switch (level) {
            case 'Elite':
                return Colors.RedColor;
            case 'Diamond':
                return Colors.DiamondColor;
            case 'Gold':
                return Colors.GoldColor;
            case 'Platinum':
                return Colors.PlatinumColor;
            case 'Silver':
                return Colors.SilverColor;
            default:
                return Colors.RedColor;
        }
    };

    const getMinimumTrackTintColor = (level) => {
        switch (level) {
            case 'Elite':
                return Colors.RedColor;
            case 'Diamond':
                return Colors.DiamondColor;
            case 'Gold':
                return Colors.GoldColor;
            case 'Platinum':
                return Colors.PlatinumColor;
            case 'Silver':
                return Colors.SilverColor;
            default:
                return Colors.RedColor;
        }
    };
    const ServiceButton = ({ label, level }) => {
        let ServiceBtnIcon;
        let serviceButtonTextColor = Colors.White;

        switch (level) {
            case 'Elite':
                ServiceBtnIcon = <icons.EliteBTn style={styles.serviceButtonIcon} />;
                break;
            case 'Diamond':
                ServiceBtnIcon = <icons.DiamondBTn style={styles.serviceButtonIcon} />;
                break;
            case 'Gold':
                ServiceBtnIcon = <icons.GoldBTn style={styles.serviceButtonIcon} />;
                serviceButtonTextColor = Colors.AppColor;
                break;
            case 'Platinum':
                ServiceBtnIcon = <icons.PlatiniumBTn style={styles.serviceButtonIcon} />;
                break;
            case 'Silver':
                ServiceBtnIcon = <icons.SilverBTn style={styles.serviceButtonIcon} />;
                serviceButtonTextColor = Colors.AppColor;
                break;
            default:
                ServiceBtnIcon = <icons.EliteBTn style={styles.serviceButtonIcon} />;
        }

        return (
            <View style={styles.serviceButtonContainer}>
                {ServiceBtnIcon}
                <Text style={[styles.serviceButtonText, { color: serviceButtonTextColor }]}>{label}</Text>
            </View>
        );
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
            <StatusBar
                animated={true}
                translucent={true}
                barStyle={'light-content'}
                backgroundColor={Colors.ChineseBlack}
            />
            <ImageBackground
                source={require('../../../../../assets/images/parenting/bpl/mainBackground.png')}
                resizeMode="cover"
                style={styles.backgroundImage}>
                <BPLAppHeader title={'Bachay Parenting League'} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {levelsData.map((level, index) => (
                        <>
                            <View style={[styles.level, { opacity: level.status === false ? 0.5 : 1 }]} key={index}>
                                <View style={{ alignItems: 'center' }}>
                                    {level.badge}
                                    <Text style={styles.levelTitle}>{level.title}</Text>
                                    {level.shapeLine}
                                    <View style={styles.rewardContainer}>
                                        <Text style={[
                                            styles.rewardText,
                                            { color: getRewardTextColor(level.title) }]}>
                                            Rank Reward:
                                        </Text>
                                        <icons.PointsIcon height={19} width={19} />
                                        <Text style={styles.rewardValue}>{level.points}</Text>
                                    </View>
                                    {level.shapeLine}
                                    <Text style={styles.congratulationsText}>{level.congratulationsText}</Text>
                                    <Text style={styles.userInfoText}>No. of user in Elite Stage Currently: {level.usersCount}</Text>
                                </View>
                                <View style={styles.servicesContainer}>
                                    {level.services.map((service, serviceIndex) => (
                                        <TouchableOpacity disabled={level.status === true ? false : true} activeOpacity={0.8} >
                                            <ServiceButton key={serviceIndex} label={service} level={level.title} />
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <Slider
                                    style={styles.slider}
                                    disabled={true}
                                    minimumValue={0}
                                    maximumValue={100}
                                    value={sliderValues[index]}
                                    onValueChange={(value) => {
                                        const updatedValues = [...sliderValues];
                                        updatedValues[index] = value;
                                        setSliderValues(updatedValues);
                                    }}
                                    step={1}
                                    minimumTrackTintColor={getMinimumTrackTintColor(level.title)}
                                    maximumTrackTintColor="rgba(255, 255, 255, 0)"
                                    thumbStyle={styles.thumStyle}
                                    trackStyle={[
                                        styles.trackStyle,
                                        {
                                            borderBottomRightRadius: sliderValues[index] === 100 ? 20 : 0,
                                            borderTopRightRadius: sliderValues[index] === 100 ? 20 : 0
                                        }]}
                                />
                                <View style={styles.trackMarkersContainer}>
                                    <View />
                                    <View style={styles.trackMarker} />
                                    <View style={styles.trackMarker} />
                                    <View style={styles.trackMarker} />
                                    <View />
                                </View>
                                <View style={styles.sliderLabelsContainer}>
                                    <Text />
                                    <Text style={styles.sliderLabel}>25</Text>
                                    <Text style={styles.sliderLabel}>50</Text>
                                    <Text style={styles.sliderLabel}>75</Text>
                                    <Text />
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', marginTop: 20 }}>
                                {index !== levelsData.length - 1 && <icons.BPLUpwardArrowsIcon />}
                            </View>
                        </>
                    ))}
                </ScrollView>
                <BPLBottomTabNavigation FocusRank />
            </ImageBackground >
        </SafeAreaView>
    )
}

export default Rank;


