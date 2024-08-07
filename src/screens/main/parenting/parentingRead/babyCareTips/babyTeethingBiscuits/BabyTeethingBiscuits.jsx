import React from 'react';
import {
  StatusBar,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../../../../constants/icons';
import { Colors } from '../../../../../../constants/theme';
import LinearGradient from 'react-native-linear-gradient';
import ParentingAppHeader from '../../../../../../components/ParentingAppHeader';
import ParentingSingleTitle from '../../../../../../components/Parenting/ParentingSingleTitle';
import { selectedArticleCategoryDetails } from '../../../../../../redux/features/parent/parentSelector';
import { useSelector } from 'react-redux';
import { format } from 'date-fns'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './BabyTeethingBiscuits.style';

const BabyTeethingBiscuits = () => {

  const articleCategoryDetails = useSelector(selectedArticleCategoryDetails);
  console.log('--------------article Category Details-------------', articleCategoryDetails);


  const articleListData = [
    {
      description:
        'Baby teething biscuits are designed to provide a gentle massage to a baby sore gums, helping to soothe the discomfort associated with teething.',
    },
    {
      description:
        'Crafted from baby-safe ingredients, teething biscuits are free from harmful additives. Ingredients like rice flour or oat flour are commonly used, ensuring a safe and edible teething aid.',
    },
    {
      description:
        'Teething biscuits serve as a bridge to solid foods, allowing babies to explore new tastes and textures while promoting the development of their chewing skills.',
    },
    {
      description:
        'High-quality teething biscuits typically contain no added sugars, ensuring a wholesome and healthy option for teething babies without compromising on taste.',
    },
    {
      description:
        'The act of chewing on a teething biscuit not only eases discomfort but can also be entertaining for babies, providing a calming and enjoyable experience during the teething phase.',
    },
    {
      description:
        'Baby teething biscuits are often designed in shapes that are easy for little hands to grasp, promoting the development of fine motor skills as babies learn to hold and manipulate the biscuit.',
    },
    {
      description:
        'Unlike some teething toys, biscuits are a relatively mess-free option. They dont require constant cleaning, and any crumbs are typically easily manageable.',
    },
  ];

  const relatedPostData = [
    {
      imageSource: require('../../../../../../assets/images/parenting/articleBG.jpg'),
      title: 'The Future of eCommerce: Trends Shaping the Industry',
    },
    {
      imageSource: require('../../../../../../assets/images/parenting/videoBG.jpg'),
      title: 'Optimizing Your Product Pages for Maximum Conversions',
    },
    {
      imageSource: require('../../../../../../assets/images/parenting/articleBG.jpg'),
      title: 'Building Trust in eCommerce: Strategies for Credibility',
    },
  ];

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
        <ParentingSingleTitle
          share
          title={'Baby Teething Biscuits - Benefits and Recipes'}
          icon
          iconImage={<icons.BackArrow />}
        />
        <ScrollView
          style={styles.categoriesRoot}
          showsVerticalScrollIndicator={false}>
          <View style={styles.categoriesTextRow}>
            <icons.ParentingCategoriesIcon />
            <Text style={styles.categoriesText}>Categories</Text>
          </View>
          <View style={styles.navigationRow}>
            <Text
              onPress={() => navigation.goBack()}
              style={styles.navigationText}>
              HOME
            </Text>
            <icons.NavigationIcon height={8} width={8} />
            <Text style={styles.navigationText}>{articleCategoryDetails.title.length > 40 ? `${articleCategoryDetails.title.substring(0, 40)}...` : articleCategoryDetails.title}</Text>
          </View>
          <Text style={styles.articleMainTitle}>
            {articleCategoryDetails.title}
          </Text>
          <View style={styles.articleMainImageContainer}>
            <Image
              style={styles.articleMainImageStyle}
              resizeMode="cover"
              source={{ uri: articleCategoryDetails.thumbnail }}
            />
          </View>
          {/* <View style={styles.articleListContainer}>
            <Text style={styles.articleListTitle}>In this Article</Text>
            <View style={styles.articleListRoot}>
              {articleListData.map((item, index) => (
                <View style={styles.articleList} key={index}>
                  <View style={styles.bullet} />
                  <Text style={styles.articleListText}>{item.description}</Text>
                </View>
              ))}
            </View>
          </View> */}
          <View style={{ paddingTop: 15 }}>
            <Text style={styles.articleContent}>
              {articleCategoryDetails.text}{' . '}
            </Text>
          </View>
          {/* <Text style={styles.articleTitle}>
            Benefits of Baby Teething Biscuits:
          </Text>
          <Text style={styles.articleTitleSmall}>Soothing Gum Relief:</Text>
          <Text style={styles.articleContent}>
            Teething biscuits provide a gentle massage to the baby's sore gums,
            offering relief from the discomfort associated with teething.
          </Text>
          <Text style={styles.articleTitleSmall}>
            Introduction to Solid Foods:
          </Text>
          <Text style={styles.articleContent}>
            Teething biscuits serve as a bridge to solid foods, allowing infants
            to explore new tastes and textures as they transition from a
            milk-based diet.
          </Text>
          <Text style={styles.articleTitleSmall}>Nutritional Value:</Text>
          <Text style={styles.articleContent}>
            Homemade teething biscuits can be tailored to include wholesome
            ingredients, offering essential nutrients crucial for a baby's
            growth and development.
          </Text>
          <Text style={styles.articleTitleSmall}>
            Fine Motor Skills Development:
          </Text>
          <Text style={styles.articleContent}>
            Chewing on biscuits helps in the development of fine motor skills as
            babies learn to grasp and manipulate objects.
          </Text>
          <Text style={styles.articleTitleSmall}>
            Entertaining and Calming:
          </Text>
          <Text style={styles.articleContent}>
            The act of chewing on a teething biscuit not only eases discomfort
            but can also be entertaining and calming for babies.
          </Text>
          <Text style={styles.articleTitle}>
            Homemade Baby Teething Biscuit Recipes:
          </Text>
          <View style={styles.articleMainImageContainer}>
            <Image
              style={styles.articleMainImageStyle}
              resizeMode="cover"
              source={require('../../../../../../assets/images/parenting/categoriesArticleBG.jpg')}
            />
          </View>
          <Text style={[styles.articleTitleSmall, { marginTop: 20 }]}>
            Banana Teething Biscuits:
          </Text>
          <Text style={styles.articleContent}>
            Mash a ripe banana and mix it with oat flour to form a dough. Cut
            into biscuit shapes and bake until golden brown.
          </Text>
          <Text style={styles.articleTitleSmall}>
            Entertaining and Calming:
          </Text>
          <Text style={styles.articleContent}>
            The act of chewing on a teething biscuit not only eases discomfort
            but can also be entertaining and calming for babies.
          </Text>
          <Text style={styles.articleTitleSmall}>
            Sweet Potato and Rice Teething Biscuits:
          </Text>
          <Text style={styles.articleContent}>
            Combine pureed sweet potato with rice flour, adding a touch of water
            to form a dough. Shape, bake, and let cool.
          </Text>
          <Text style={styles.articleTitleSmall}>
            Apple Cinnamon Teething Biscuits:
          </Text>
          <Text style={styles.articleContent}>
            Grate apple and mix with cinnamon and oat flour. Form into biscuits
            and bake for a fragrant and flavorful teething treat.
          </Text>
          <Text style={styles.articleTitleSmall}>
            Carrot and Oat Teething Sticks:
          </Text>
          <Text style={styles.articleContent}>
            Blend cooked carrots with rolled oats and a bit of water. Shape into
            sticks and bake until firm.
          </Text>
          <Text style={styles.articleTitle}>Safety Tips:</Text> */}
          {/* <FlatList
            data={[
              {
                key: 'Always supervise your baby while they are enjoying teething biscuits to prevent any choking hazards.',
              },
              {
                key: 'Consult with your pediatrician before introducing new foods, especially if your baby has allergies.',
              },
              {
                key: 'Ensure the biscuits have an appropriate texture for your baby`s age and chewing abilities.',
              },
            ]}
            renderItem={({ item }) => {
              return (
                <Text style={styles.articleContent}>
                  {`\u2022 ${item.key}`}
                </Text>
              );
            }}
          /> */}
          {/* <Text style={styles.articleContent}>
            Incorporating homemade teething biscuits into your baby's routine
            can be a delightful and practical way to navigate the teething
            journey, providing comfort and promoting oral exploration in a safe
            manner.
          </Text> */}
          <View style={styles.authorInfoRoot}>
            <View style={styles.authorInfoContainer}>
              <Text style={styles.authorlabelText}>
                Written By{'\n'}
                <Text style={styles.authorNameText}>Usman Khan</Text>
              </Text>
              <View style={styles.shareTextRow}>
                <TouchableOpacity activeOpacity={0.8}>
                  <icons.ParentingFacebookIcon height={18} width={18} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                  <icons.ParentingWhatsAppIcon />
                </TouchableOpacity>
                <Text style={styles.shareText}>Share</Text>
              </View>
            </View>
            <Text style={styles.dateTimeText}>
              {format(new Date(articleCategoryDetails.created_at), ' MMMM dd,  yyyy')} - {format(new Date(articleCategoryDetails.created_at), 'hh:mm a')}
            </Text>
            <View style={styles.navigationButtons}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.navigationButton}>
                <icons.BackArrow height={9} width={9} />
                <Text style={styles.previousNavText}>Previous</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.navigationButton}>
                <Text style={styles.nextNavText}>Next</Text>
                <icons.NavigationPurpleIcon />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.relatedPostTitle}>Related Post</Text>
          <View style={styles.relatedPostContainer}>
            {relatedPostData.map((item, index) => (
              <TouchableOpacity activeOpacity={0.9} key={index}>
                <LinearGradient
                  colors={['rgba(0, 0, 0, 0.10)', Colors.AppColor]}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  locations={[0.4621, 1.0071]}
                  style={styles.relatedPostCard}>
                  <Image
                    style={styles.relatedPostImage}
                    resizeMode="cover"
                    source={item.imageSource}
                  />
                  <View style={styles.relatedPostContent}>
                    <Text numberOfLines={2} style={styles.relatedPostTitleText}>
                      {item.title}
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BabyTeethingBiscuits;
