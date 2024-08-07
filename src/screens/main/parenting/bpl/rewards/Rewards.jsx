import React, { useState } from 'react'
import { Text, View, StatusBar, ImageBackground, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import icons from '../../../../../constants/icons'
import { Colors, Fonts } from '../../../../../constants/theme'
import BPLAppHeader from '../../../../../components/BPLAppHeader'
import BPLBottomTabNavigation from "../../../../../navigators/BPLBottomTabNavigation";
import LinearGradient from 'react-native-linear-gradient'
import DropShadow from 'react-native-drop-shadow';
import Slider from '@react-native-community/slider';
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './Rewards.style'


const Rewards = () => {
    const [selectedRadio, setSelectedRadio] = useState(1);
    const [sliderValue, setSliderValue] = useState(0);

    const filterItemsData = [
        { id: 1, title: 'All Vouchers' },
        { id: 2, title: 'Locked Vouchers' },
        { id: 3, title: 'Unlocked Vouchers' },
        { id: 4, title: 'Silver' },
        { id: 5, title: 'Platinum' },
        { id: 6, title: 'Gold' },
    ];

    const renderRewardItem = ({ item, index }) => (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelectedRadio(item.id)}
            style={[styles.radioRow, { borderBottomWidth: index === filterItemsData.length - 1 ? 0 : 1 }]}
        >
            <Text
                style={[
                    styles.radioTitle,
                    { fontFamily: selectedRadio === item.id ? Fonts.semiBold : Fonts.medium },
                ]}
            >
                {item.title}
            </Text>
            <View style={styles.radioView}>
                {selectedRadio === item.id ? (
                    <View style={styles.radioBg}></View>
                ) : (
                    <View style={styles.radioOff}></View>
                )}
            </View>
        </TouchableOpacity>
    );

    const filterImagesData = [
        {
            id: 1,
            lockedStatus: true,
            imageSource: require('../../../../../assets/images/parenting/bpl/filterImage1.jpg'),
            medal: <icons.BPLGoldBadge height={15} width={15} />,
            medalCount: '30'
        },
        {
            id: 2,
            lockedStatus: false,
            imageSource: require('../../../../../assets/images/parenting/bpl/filterImage2.jpg'),
            medal: <icons.BPLSilverBadge height={15} width={15} />,
            medalCount: '20'
        }
    ]
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
                    <View style={styles.container}>
                        <View style={styles.headerStatusView}>
                            <View style={styles.headerStatusInnerView}>
                                <icons.RankIcon />
                                <View style={styles.headerStatusTextView}>
                                    <Text style={styles.headerStatusText}>Rank</Text>
                                    <Text style={styles.headerStatusComing}>--</Text>
                                </View>
                            </View>
                            <View style={styles.headerStatusInnerView}>
                                <icons.BadgesIcon />
                                <View style={styles.headerStatusTextView}>
                                    <Text style={styles.headerStatusText}>Badges</Text>
                                    <Text style={styles.headerStatusComing}>--</Text>
                                </View>
                            </View>
                            <View style={styles.headerStatusInnerView}>
                                <icons.PointsIcon />
                                <View style={styles.headerStatusTextView}>
                                    <Text style={styles.headerStatusText}>Points</Text>
                                    <Text style={styles.headerStatusComing}>--</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.separatorLine} />
                        <View style={styles.loginRootContainer}>
                            <Text style={styles.leagueRewardsText}>League Rewards</Text>
                            <Text style={styles.loginTextTitle}>Login to claim rewards using BPL Points</Text>
                            <View style={styles.separatorLine} />
                            <View style={styles.pointsView}>
                                <Text style={styles.pointsLabel}>Total Points</Text>
                                <Text style={styles.pointsValue}>256</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={{ width: '100%' }}>
                                <LinearGradient
                                    style={styles.bplActivityBtnStyle}
                                    colors={['rgba(132, 93, 194, 0.50)', 'rgba(62, 32, 111, 0.50)']}
                                    locations={[0, 1]}
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 0 }}
                                >
                                    <Text style={styles.bplActivityBtnText}>Login Now</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.separatorLine} />
                        <LinearGradient
                            style={styles.convertBPLPointsContainer}
                            colors={['#20133f', '#20133f']}
                            locations={[0, 0.2]}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                        >
                            <View style={styles.convertBPLPointsInnerContainer}>
                                <View style={styles.convertBPLPointsTextContainer}>
                                    <Text style={styles.convertBPLPointsLabel}>Convert BPL Points to Club Cash</Text>
                                    <Text style={styles.convertBPLPointsNote}>NOTE: Earn upto 1000 CC per month.</Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.8}>
                                    <Text style={styles.viewAllText}>View All {`>`}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.separatorLine, { width: '90%', alignSelf: "center" }]} />
                            {/* <Text style={{ color: Colors.White, textAlign: "center" }}>{sliderValue}</Text> */}
                            <View style={{ marginVertical: 40 }}>
                                <Slider
                                    style={{ width: '100%', zIndex: 1 }}
                                    minimumValue={0}
                                    maximumValue={1000}
                                    value={sliderValue}
                                    onValueChange={(value) => setSliderValue(value)}
                                    step={50}
                                    minimumTrackTintColor="#FFFFFF"
                                    maximumTrackTintColor="rgba(255, 255, 255, 0.50)"
                                    thumbImage={require('../../../../../assets/images/parenting/bpl/SliderThumbImage.png')}
                                />
                                <View style={styles.sliderDetailsContainer}>
                                    <View style={styles.rangeColumn}>
                                        <Text style={styles.rangeValue}>0</Text>
                                        <Text style={styles.rangeLabel}>CC</Text>
                                    </View>
                                    <View style={styles.sliderRightDetails}>
                                        <View style={styles.sliderDetailsColumn}>
                                            <icons.BPLSilverBadge height={15} width={15} />
                                            <View style={styles.rangeMarkLine} />
                                            <View style={styles.rangeColumn}>
                                                <Text style={styles.rangeValue}>700</Text>
                                                <Text style={styles.rangeLabel}>CC</Text>
                                            </View>
                                        </View>
                                        <View style={styles.sliderDetailsColumn}>
                                            <icons.BPLPlatinumBadge height={15} width={15} />
                                            <View style={styles.rangeMarkLine} />
                                            <View style={styles.rangeColumn}>
                                                <Text style={styles.rangeValue}>850</Text>
                                                <Text style={styles.rangeLabel}>CC</Text>
                                            </View>
                                        </View>
                                        <View style={styles.sliderDetailsColumn}>
                                            <icons.BPLGoldBadge height={15} width={15} />
                                            <View style={styles.rangeMarkLine} />
                                            <View style={styles.rangeColumn}>
                                                <Text style={styles.rangeValue}>1000</Text>
                                                <Text style={styles.rangeLabel}>CC</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </LinearGradient>
                        <TouchableOpacity activeOpacity={0.8}>
                            <LinearGradient
                                style={[styles.bplActivityBtnStyle, { marginTop: 20 }]}
                                colors={['rgba(132, 93, 194, 0.50)', 'rgba(62, 32, 111, 0.50)']}
                                locations={[0, 1]}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 0 }}
                            >
                                <Text style={[styles.bplActivityBtnText, { opacity: 0.5 }]}>Earn CC Now!</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View style={styles.filterMainViewBG}>
                            <DropShadow
                                style={styles.shadow}
                            >
                                <View
                                    style={styles.filterMainView}
                                >
                                    <FlatList
                                        data={filterItemsData}
                                        keyExtractor={(item) => item.id.toString()}
                                        renderItem={renderRewardItem}
                                        ListHeaderComponent={
                                            <View style={styles.filterTextRow}>
                                                <Text style={styles.filterText}>Filter by</Text>
                                                <icons.FilterBlackIcon />
                                            </View>
                                        }
                                    />
                                </View>
                            </DropShadow>
                            <FlatList
                                data={filterImagesData}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View style={styles.filterImageRoot}>
                                        <DropShadow style={[styles.shadow, { shadowColor: Colors.AppColor }]}>
                                            <View>
                                                {item.imageSource && (
                                                    <Image
                                                        style={styles.filterImage}
                                                        resizeMode='cover'
                                                        source={item.imageSource}
                                                    />
                                                )}
                                                {
                                                    item.lockedStatus == true ?
                                                        (
                                                            <TouchableOpacity activeOpacity={0.8} style={styles.lockedView}>
                                                                <icons.LockedIcon />
                                                                <Text style={styles.lockedText}>Locked</Text>
                                                            </TouchableOpacity>
                                                        )
                                                        :
                                                        null
                                                }
                                                <View style={styles.rewardsDetailsContainer}>
                                                    <TouchableOpacity activeOpacity={0.8}>
                                                        <Text style={styles.redeemNowText}>Redeem Now</Text>
                                                    </TouchableOpacity>
                                                    <View style={styles.verticalSeparatorLine} />
                                                    <TouchableOpacity activeOpacity={0.8}>
                                                        <Text style={styles.viewDetailsText}>View Details</Text>
                                                    </TouchableOpacity>
                                                    <View style={styles.verticalSeparatorLine} />
                                                    <View style={styles.awardDetailsRow}>
                                                        {item.medal}
                                                        <icons.PointsIcon height={15} width={15} />
                                                        <Text style={styles.awardCountText}>{item.medalCount}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </DropShadow>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </ScrollView >
                <BPLBottomTabNavigation FocusRewards />
            </ImageBackground >
        </SafeAreaView>
    )
}

export default Rewards;

