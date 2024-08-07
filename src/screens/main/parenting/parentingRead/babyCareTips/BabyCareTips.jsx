import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../../../constants/icons';
import ParentingAppHeader from '../../../../../components/ParentingAppHeader';
import AppButton from '../../../../../components/AppButton';
import ParentingCategoriesIcon from '../../../../../assets/images/parenting/parentingCategoriesIcon.svg';
import ParentingSingleTitle from '../../../../../components/Parenting/ParentingSingleTitle';
import { useSelector, useDispatch } from 'react-redux';
import { selectedArticleDetails } from '../../../../../redux/features/parent/parentSelector';
import { getArticlesCategoryDetails } from '../../../../../redux/features/parent/parentThunks';
import { format } from 'date-fns';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './BabyCareTips.style';
import { Colors } from '../../../../../constants/theme';
const BabyCareTips = () => {
  const dispatch = useDispatch();

  const articleDetails = useSelector(selectedArticleDetails);
  console.log('haaaaaaaaaaaaaaaaaaaaa', articleDetails);


  const handleOnPress = id => {
    dispatch(getArticlesCategoryDetails(id)).then(res => {
      navigation.navigate('BabyTeethingBiscuits');
    });
  };

  const navigation = useNavigation();


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
        <ParentingSingleTitle share title={articleDetails.name ? articleDetails.name : 'Articles'} icon iconImage={<icons.BackArrow />} />
        <ScrollView
          style={styles.categoriesRoot}
          showsVerticalScrollIndicator={false}>
          {articleDetails.articles && articleDetails.articles.length > 0 ? (
            <>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('CategoryList')} style={styles.categoriesTextRow}>
                <ParentingCategoriesIcon />
                <Text style={styles.categoriesText}>Categories</Text>
              </TouchableOpacity>
              <View style={{ paddingBottom: 40 }}>
                {articleDetails.articles.map((item, index) => (
                  <View key={index}>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() => handleOnPress(item.id)}
                      style={styles.imageRoot}>
                      <View style={{ alignItems: 'center' }}>
                        <Image
                          style={styles.imageStyle}
                          resizeMode="cover"
                          source={{ uri: item.thumbnail }}
                        />
                      </View>
                      <View style={styles.imageInfoRow}>
                        <Text style={styles.imageInfoTitle}>{articleDetails.name}</Text>
                        <Text style={styles.imageInfoDate}>{format(new Date(item.created_at), 'dd MMMM yyyy')}</Text>
                      </View>
                      <Text style={styles.imageInfoHeading}>{item.title}</Text>
                      <Text
                        numberOfLines={3}
                        style={[
                          styles.imageInfoDescription,
                          index == articleDetails.articles - 1 && {
                            paddingBottom: 20,
                          },
                        ]}>
                        {item.text}
                      </Text>
                    </TouchableOpacity>
                    {index == articleDetails.articles - 1 && (
                      <View style={styles.separator} />
                    )}
                  </View>
                ))
                }
                <AppButton
                  textStyle={styles.btnTextStyle}
                  image
                  imageRight
                  ImageSource={<icons.NextArrow width={15} height={15} />}
                  background
                  label="Show More Posts"
                  buttonContainerStyle={styles.btnStyle}
                />
              </View>
            </>
          ) : (
            <View style={{ marginTop: 100 }}>
              <Text style={styles.noArticleText}>No Articles Found.</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BabyCareTips;
