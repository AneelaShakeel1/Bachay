import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Colors, Fonts, Sizes } from '../../constants/theme';
import { useDispatch, useSelector } from 'react-redux';
import { mainAllCategories } from '../../redux/features/Main/mainSelector';
import { getAllCategories } from '../../redux/features/Main/mainThunks';
import { useNavigation } from '@react-navigation/native';

const CategoryList = () => {
  const allCatData = useSelector(mainAllCategories);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getAllCategories());
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    console.log('allCatData:', allCatData);
  }, [allCatData]);

  if (!allCatData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={allCatData}
        numColumns={4}
        contentContainerStyle={{ paddingHorizontal: 10, marginBottom: 40 }}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.itemContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SubCategories', { categoryID: item.id })}
                activeOpacity={0.8}
                style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <Text style={styles.imageTitle}>{item.name.length > 7 ? `${item.name.substring(0, 7)}...` : item.name}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
    width: (Dimensions.get('screen').width - 20) / 4,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.AppColor,
    width: 80,
    height: 80,
  },
  imageTitle: {
    fontSize: Sizes.size14,
    textAlign: 'center',
    fontFamily: Fonts.semiBold,
    color: Colors.AppColor,
    marginTop: 7,
  },
});
