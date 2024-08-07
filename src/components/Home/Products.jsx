import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import { Colors, Fonts, Sizes } from '../../constants/theme';
import icons from '../../constants/icons';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../GradientText';
import { mainproductslist } from '../../redux/features/Main/mainSelector';
import { getProductDetails } from '../../redux/features/Main/mainThunks';
import { useDispatch, useSelector } from 'react-redux';


const Products = ({ title }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleOnPress = id => {
        dispatch(getProductDetails(id)).then(res => {
            navigation.navigate('SingleProduct');
        });
    };

    const productsData = useSelector(mainproductslist);
    // console.log('productsData---------------', productsData);

    if (!productsData || productsData.length === 0) {
        return null;
    }

    return (
        <View style={{ marginBottom: 30 }}>
            {title ?
                (
                    <View style={styles.headerStyle}>
                        <View style={{ marginBottom: -20 }}>
                            <GradientText title={title || 'Featured'} width={200} size={36} />
                        </View>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('CategoriesProducts')}>
                            <Text style={styles.headerTextStyle}>See All</Text>
                        </TouchableOpacity>
                    </View>
                )
                :
                null
            }
            <FlatList
                numColumns={2}
                data={productsData}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                renderItem={({ item }) => {
                    const discountPrice = item.unit_price - (item.unit_price * item.discount) / 100;
                    const roundedDiscountPrice = Math.floor(discountPrice);

                    return (
                        <TouchableHighlight
                            style={styles.prodRootMain}
                            activeOpacity={1}
                            underlayColor="rgba(255, 255, 255, 0.2)"
                            onPress={() => handleOnPress(item.id)}
                        >
                            <View style={styles.prodRoot}>
                                <View style={styles.prodContainer}>
                                    <View>
                                        <Image
                                            resizeMode='cover'
                                            style={styles.prodImageStyle}
                                            source={{ uri: item.thumbnail }} />
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('MyShortlist')}
                                            activeOpacity={0.8}
                                            style={styles.prodWishlistView}>
                                            <icons.WishlistIcon style={styles.wishlistIconStyle} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.prodDetailsView}>
                                        <Text numberOfLines={2} style={styles.descriptionTextStyle}>
                                            {item.name}
                                        </Text>
                                        <View style={styles.prodPriceDetailsView}>
                                            <View style={styles.prodPriceView}>
                                                <Text style={styles.priceTextStyle}>Rs. {roundedDiscountPrice}</Text>
                                            </View>
                                            {item.discount > 0 && (
                                                <View style={styles.prodDisPriceView}>
                                                    <Text style={styles.origPriceText}>Rs. {item.unit_price}</Text>
                                                    <Text style={styles.discountTextStyle}>
                                                        - {item.discount}% Off
                                                    </Text>
                                                </View>
                                            )}
                                        </View>
                                    </View>
                                    <View style={styles.bottomView}>
                                        <View style={[styles.deliveryView, { backgroundColor: Colors.AppColor }]}>
                                            <Text style={styles.deliveryText}>Standard Delivery</Text>
                                        </View>
                                        {item.reviews.length > 0 && item.reviews[0].rating !== 0 && (
                                            <View style={styles.ratingView}>
                                                <Text style={styles.ratingText}>
                                                    {item.reviews[0].rating + '.0'}
                                                </Text>
                                                <icons.RatingIcon style={styles.ratingIcon} />
                                            </View>
                                        )}
                                        {item.reviews_count > 0 && (
                                            <View style={styles.reviewContainer}>
                                                <Text style={styles.reviewText}>({item.reviews_count})</Text>
                                            </View>
                                        )}
                                        {item.reviews.length === 0 && item.reviews_count === 0 && (
                                            <Text style={[styles.reviewText, { fontSize: 9 }]}>No reviews</Text>
                                        )}
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                    )
                }
                }
            />
        </View>
    );
};
const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width,
        paddingHorizontal: 20,
        marginTop: 25,
    },
    headerTextStyle: {
        textDecorationLine: 'underline',
        alignSelf: 'center',
        color: Colors.AppColor,
        fontFamily: Fonts.medium,
        top: 4,
    },
    prodRootMain: {
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 15,
        marginHorizontal: 10,
        marginBottom: -2,
        backgroundColor: Colors.SurfaceLightBlue,
    },
    prodRoot: {
        alignItems: 'center',
        borderRadius: 15,
    },
    prodContainer: {
        flexDirection: 'column',
        padding: 7,
        width: Dimensions.get('screen').width / 2.4,
        height: 260,
    },

    prodImageStyle: {
        height: 130,
        borderRadius: 10,
    },
    prodSaleView: {
        position: 'absolute',
        top: 5,
        paddingHorizontal: 12,
        paddingVertical: 2,
    },
    saleText: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size10,
        top: 1,
        textTransform: 'capitalize',
    },
    prodWishlistView: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        position: 'absolute',
        top: 10,
        right: 10,
        borderColor: 'rgba(255, 255, 255, 0.50)',
        borderWidth: 1,
        borderRadius: 50,
        padding: 6,
        justifyContent: 'center',
    },
    prodDetailsView: {
        flexDirection: 'column',
        gap: 10,
        paddingVertical: 10,
    },
    descriptionTextStyle: {
        textAlign: 'left',
        color: Colors.AppColor,
        fontSize: Sizes.size12,
        fontFamily: Fonts.medium,
        lineHeight: 14
    },
    prodPriceDetailsView: {
        flexDirection: 'column',
        marginTop: -5,
    },
    prodPriceView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    priceTextStyle: {
        fontSize: Sizes.size15,
        color: Colors.AppColor,
        fontFamily: Fonts.semiBold,
        top: 2,
    },
    prodStockView: {
        alignItems: 'center',
        backgroundColor: Colors.FilterColor,
        borderRadius: 50,
        paddingHorizontal: 12,
        paddingVertical: 1,
    },
    prodStockText: {
        fontFamily: Fonts.medium,
        color: Colors.White,
        fontSize: Sizes.size9,
        top: 1,
    },
    prodDisPriceView: {
        flexDirection: 'row',
        gap: 3,
    },
    origPriceText: {
        fontFamily: Fonts.medium,
        color: 'rgba(0, 0, 0, 0.70)',
        fontSize: Sizes.size11,
        textDecorationLine: 'line-through',
    },
    discountTextStyle: {
        fontFamily: Fonts.bold,
        color: Colors.GreenColor,
        fontSize: Sizes.size11,
        top: -1
    },
    bottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 10,
        gap: 7
    },
    deliveryText: {
        color: Colors.White,
        fontFamily: Fonts.semiBold,
        fontSize: 8,
        top: 1,
        textTransform: 'capitalize',
    },
    deliveryView: {
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingView: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 2,
        alignItems: 'center',
        backgroundColor: Colors.BeerColor,
        borderRadius: 50,
    },
    ratingText: {
        fontSize: 8,
        color: Colors.White,
        fontFamily: Fonts.semiBold,
        top: 1,
    },
    ratingIcon: {
        top: -1,
        left: 2,
    },
    reviewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    reviewText: {
        fontFamily: Fonts.semiBold,
        textAlign: 'center',
        fontSize: Sizes.size11,
        alignItems: 'center',
        color: Colors.AppColor,
        top: 1,
    },
});

export default Products;