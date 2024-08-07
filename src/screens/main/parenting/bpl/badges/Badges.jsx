import React from 'react'
import { Text, View, StatusBar, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { Colors } from '../../../../../constants/theme'
import icons from '../../../../../constants/icons'
import BPLAppHeader from '../../../../../components/BPLAppHeader'
import BPLBottomTabNavigation from "../../../../../navigators/BPLBottomTabNavigation";
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './Badges.style'

const Badges = () => {

    const badgesSectionData = {
        'Q&A': [
            {
                id: 1,
                icon: <icons.BadgesIcon height={30} width={30} />,
                title: 'Total 28 Badges to be Unlocked'
            },
            {
                id: 2,
                icon: <icons.BadgesIcon height={30} width={30} />,
                title: 'Total 28 Badges to be Unlocked'
            },
            {
                id: 3,
                icon: <icons.PointsIcon height={30} width={30} />,
                title: 'Total 28 Badges to be Unlocked'
            },
        ],
        'Read/Magazine': [
            {
                id: 1,
                icon: <icons.BadgesIcon height={30} width={30} />,
                title: 'Total 28 Badges to be Unlocked'
            },
            {
                id: 2,
                icon: <icons.BadgesIcon height={30} width={30} />,
                title: 'Total 28 Badges to be Unlocked'
            },
            {
                id: 3,
                icon: <icons.PointsIcon height={30} width={30} />,
                title: 'Total 28 Badges to be Unlocked'
            },
        ],
        'Daily Activities': [
            {
                id: 1,
                icon: <icons.BadgesIcon height={30} width={30} />,
                title: 'Total 28 Badges to be Unlocked'
            },
            {
                id: 2,
                icon: <icons.BadgesIcon height={30} width={30} />,
                title: 'Total 28 Badges to be Unlocked'
            },
            {
                id: 3,
                icon: <icons.PointsIcon height={30} width={30} />,
                title: 'Total 28 Badges to be Unlocked'
            },
        ]
    }

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
                            <Text style={styles.pointsBadgesTextTitle}>Points & Badges</Text>
                            <Text style={styles.loginTextTitle}>Login to view your stats</Text>
                            <LinearGradient
                                style={styles.bplActivityBtnStyle}
                                colors={['rgba(132, 93, 194, 0.50)', 'rgba(62, 32, 111, 0.50)']}
                                locations={[0, 1]}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 0 }}
                            >
                                <Text style={styles.bplActivityBtnText}>Login Now</Text>
                            </LinearGradient>
                        </View>
                        <View style={styles.separatorLine} />
                        {Object.keys(badgesSectionData).map((title, index, array) => (
                            <>
                                <View style={styles.sectionRoot} key={title}>
                                    <View style={styles.sectionRow}>
                                        <Text style={styles.sectionTitle}>{title}</Text>
                                        <TouchableOpacity activeOpacity={0.8}>
                                            <Text style={styles.viewAllText}>View All {`>`}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.itemsRoot}>
                                        <LinearGradient
                                            style={styles.gradientItemContainer}
                                            colors={['#441e72', '#2d124f']}
                                            locations={[0, 0.2]}
                                            start={{ x: 1, y: 0 }}
                                            end={{ x: 0, y: 0 }}
                                        >
                                            <icons.BadgesIcon height={30} width={30} />
                                            <Text style={styles.itemText}>Total 28 Badges to be Unlocked </Text>
                                        </LinearGradient>
                                        <View style={styles.itemRow}>
                                            <icons.BadgesIcon height={30} width={30} />
                                            <Text style={styles.itemText}>Total 28 Badges to be Unlocked</Text>
                                        </View>
                                        <View style={styles.itemRow}>
                                            <icons.PointsIcon height={30} width={30} />
                                            <Text style={styles.itemText}>Total 118357 BPL Points to be earned</Text>
                                        </View>
                                    </View>
                                </View>
                                {index !== array.length - 1 && <View style={styles.separatorLine} />}
                            </>
                        ))}
                    </View>
                </ScrollView>
                <BPLBottomTabNavigation FocusBadge />
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Badges;

