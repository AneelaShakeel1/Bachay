import ParentingAppHeader from '../../../../components/ParentingAppHeader';
import {
  View,
  StatusBar,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TopTabNavigation from '../../../../navigators/TopTabNavigation';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ParentingVaccine.style';
import { Colors } from '../../../../constants/theme';
import CircuitIcon from '../../../../assets/images/parenting/icons/circuitIcon.svg';
import BookIcon from '../../../../assets/images/parenting/icons/bookIcon.svg';
import VaccineTrackIcon from '../../../../assets/images/parenting/icons/vaccineTrackIcon.svg';
import WarningIcon from '../../../../assets/images/parenting/icons/warningIcon.svg';
import BellIcon from '../../../../assets/images/parenting/icons/bellIcon.svg';
import FileEditIcon from '../../../../assets/images/parenting/icons/fileEditIcon.svg';
import FileIcon from '../../../../assets/images/parenting/icons/fileIcon.svg';
import BookreadIcon from '../../../../assets/images/parenting/icons/bookreadIcon.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../../../../components/AppButton';

const ParentingVaccine = () => {
  const navigation = useNavigation();

  const vaccineData = [
    {
      image: require('../../../../assets/images/parenting/vaccineImage1.jpg'),
      heading: 'Vaccination Tracker',
      description:
        'Effortlessly manage your vaccination schedule with the Vaccination Tracker app. Receive timely reminders for upcoming vaccinations, track immunization history, and access essential information about vaccine schedules.',
      featureIcon1: CircuitIcon,
      featureText1: 'Digitize your childern vaccination records',
      featureIcon2: WarningIcon,
      featureText2: 'Spot any possible gaps in their protection',
      featureIcon3: VaccineTrackIcon,
      featureText3: 'Track their vaccination is real time',
      featureIcon4: BookIcon,
      featureText4: 'Get educated on vaccination',
    },
    {
      image: require('../../../../assets/images/parenting/vaccineImage2.jpg'),
      heading: 'Growth Tracker',
      description:
        'Empower parents with the Growth Tracker app, a comprehensive tool for monitoring and celebrating your child`s development. Easily record height, weight, and developmental milestones.',
      featureIcon1: FileIcon,
      featureText1: 'Digitize your childern vaccination records',
      featureIcon2: FileEditIcon,
      featureText2: 'Spot any possible gaps in their protection',
      featureIcon3: BellIcon,
      featureText3: 'Track their vaccination is real time',
      featureIcon4: BookreadIcon,
      featureText4: 'Get educated on vaccination',
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={styles.root}>
        <ParentingAppHeader />
        <TopTabNavigation FocusVaccine />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingVertical: 40 }}>
            <View style={{ paddingBottom: 25 }}>
              <FlatList
                data={vaccineData}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                renderItem={({ item, index }) => (
                  <View style={styles.imageRoot}>
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.00)', Colors.AppColor]}
                      start={{ x: 0.5, y: 0 }}
                      end={{ x: 0.5, y: 1 }}
                      locations={[0.2, 1.0071]}>
                      <Image source={item.image} style={styles.imageStyle} />
                      <View style={styles.imageTextView}>
                        <Text style={styles.headingText}>{item.heading}</Text>
                        <Text style={styles.descriptionText}>
                          {item.description}
                        </Text>
                      </View>
                    </LinearGradient>
                    <View style={styles.featuresRoot}>
                      <View style={styles.featuresRow}>
                        <item.featureIcon1 />
                        <Text style={styles.featureText}>
                          {item.featureText1}
                        </Text>
                      </View>
                      <View style={styles.featuresRow}>
                        <item.featureIcon2 />
                        <Text style={styles.featureText}>
                          {item.featureText2}
                        </Text>
                      </View>
                      <View style={styles.featuresRow}>
                        <item.featureIcon3 />
                        <Text style={styles.featureText}>
                          {item.featureText3}
                        </Text>
                      </View>
                      <View style={styles.featuresRow}>
                        <item.featureIcon4 />
                        <Text style={styles.featureText}>
                          {item.featureText4}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
            <View style={{ paddingHorizontal: 20 }}>
              <AppButton
                textStyle={styles.btnTextStyle}
                onPress={() => navigation.navigate('AddChild')}
                image
                imageRight
                background
                label="Add Your Child Details"
                buttonContainerStyle={styles.btnStyle}
              />
            </View>
            <View style={styles.footerRoot}>
              <Text style={styles.footerText}>FAQs</Text>
              <View style={styles.separator} />
              <Text style={styles.footerText}>Disclaimer</Text>
              <View style={styles.separator} />
              <Text style={styles.footerText}>Feedback</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default ParentingVaccine;
