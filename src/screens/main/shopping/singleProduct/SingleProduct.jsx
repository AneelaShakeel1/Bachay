import React, { useEffect, useRef, useState } from 'react';
import { StatusBar, ScrollView, View, Text, TouchableOpacity, Alert, FlatList, Image, Modal, useWindowDimensions, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import icons from '../../../../constants/icons';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';
import AppButton from '../../../../components/AppButton';
import ResponseModal from '../../../../components/Modals/ResponseModal';
import { useDispatch, useSelector } from 'react-redux';
import { CartData, selectedProductDetails } from '../../../../redux/features/Main/mainSelector';
import { AddtoCart } from '../../../../redux/features/Main/mainThunks';
import { selectAddressDetails, selectUserDetails } from '../../../../redux/features/auth/authSelectors';
import CarouselImage from '../../../../components/SingleProduct/CarouselImage';
import CategoryBannerSlider from '../../../../components/Categories/CategoryBannerSlider';
import ParentingTools from '../../../../components/Home/ParentingTools';
import ProductSlider from '../../../../components/Home/ProductSlider';
import GeneralAppHeader from '../../../../components/GeneralAppHeader';
import { addressList } from '../../../../redux/features/auth/authThunks';
import Tooltip from 'react-native-walkthrough-tooltip';
import Clipboard from '@react-native-clipboard/clipboard';
import HTML from 'react-native-render-html';
import ImageView from 'react-native-image-viewing';
import { styles } from './SingleProduct.style';

const DEVICE_WIDTH = Dimensions.get('window').width;
const imageSize = Dimensions.get('window');

const SingleProduct = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productContent, setProductContent] = useState(false);
  const dispatch = useDispatch();
  const [qtyData, setQtyData] = useState([{ quantity: 1 }]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const productDetails = useSelector(selectedProductDetails);
  const userData = useSelector(selectUserDetails);
  const [visible, setIsVisible] = useState(false);
  const scrollRef = useRef(null);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [galleryStates, setGalleryStates] = useState(
    Array.from({ length: productDetails?.images?.length || 0 }, () => ({ visible: false, selectedIndex: 0 }))
  );

  const imageUrls = productDetails.images.map(item => ({ uri: item }));
  const openImageView = (userIndex, index) => {
    const updatedGalleryStates = [...galleryStates];
    updatedGalleryStates[userIndex] = { visible: true, selectedIndex: index };
    setGalleryStates(updatedGalleryStates);
  };

  const setSelectedIndexHandler = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const newIndex = Math.floor(contentOffset.x / viewSize.width);
    setSelectedIndex(newIndex);
    setCurrentIndex(newIndex);
  };

  const currentItem = selectedIndex + 1;

  useEffect(() => {
    setSelectedSize(null);
  }, []);

  const handleDecreaseQuantity = index => {
    if (qtyData[index] && qtyData[index].quantity > 1) {
      const newArr = [...qtyData];
      newArr[index].quantity -= 1;
      setQtyData(newArr);
    }
  };

  const handleIncreaseQuantity = index => {
    if (qtyData[index]) {
      const newArr = [...qtyData];
      newArr[index].quantity += 1;
      setQtyData(newArr);
    }
  };

  const addressID = useSelector(selectAddressDetails);
  console.log("address id arhi hai bhai---------", addressID);

  useEffect(() => {
    dispatch(addressList()).unwrap();
  }, []);

  const handleAddtoCart = async () => {
    if (selectedSize) {
      const selectedQuantity = qtyData[0].quantity;
      const currentStock = productDetails.current_stock;

      if (selectedQuantity <= currentStock) {
        setModalVisible(true);

        const totalPrice = productDetails.unit_price * selectedQuantity;

        await dispatch(
          AddtoCart({
            quantity: selectedQuantity,
            product_id: productDetails.id,
            price: totalPrice.toFixed(2),
            size: selectedSize,
          })
        )
          .then(res => console.log('response', res))
          .catch(err => console.log('error', err));
      } else {
        Alert.alert('Out of Stock', 'Selected quantity exceeds available stock.');
      }
    } else {
      setModalVisible(true);
    }
  };

  const cartNotFound = () => {
    Alert.alert('Alert', 'Please Login First', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'OK', onPress: () => navigation.navigate('Login') },
    ]);
  };
  const toggleProductContent = () => {
    setProductContent(!productContent);
  };

  const truncateText = (text, maxLength) => {
    const words = text.split(' ');
    if (words.length <= maxLength) {
      return text;
    }
    const truncatedText = words.slice(0, maxLength).join(' ') + '...';
    return truncatedText;
  };

  const handleSizePress = (size) => {
    setSelectedSize(size);
  };

  const sizes = productDetails?.size.map((size) => size.trim()) || [];
  const isSizesAvailable = sizes.length > 0 && sizes.some((size) => size !== "");
  const colorsArray = JSON.parse(productDetails.colors);

  useEffect(() => {
    if (modalVisible) {
      const timeout = setTimeout(() => {
        setModalVisible(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [modalVisible]);

  const discountPrice = productDetails.unit_price - (productDetails.unit_price * productDetails.discount) / 100;
  const roundedDiscountPrice = Math.floor(discountPrice);

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorPress = (color) => {
    setSelectedColor(color);
  };

  const offersData = [
    {
      card: <icons.OffersCard />,
      discountDescription: 'Flat 42% Off for All Users - Superhit Fashion Brands',
      code: 'FG5DST'
    },
    {
      card: <icons.OffersCard />,
      discountDescription: 'Flat 42% Off for All Users - Superhit Fashion Brands',
      code: 'TC34FT'
    },
  ]

  const [code, setCode] = useState('')
  const [copiedStates, setCopiedStates] = useState(new Array(offersData.length).fill(false));
  const [toolTipVisible, setToolTipVisible] = useState(false);


  const handleToolTipClose = () => {
    setToolTipVisible(false);
  };
  const handleCopyPress = (code, currentIndex) => {
    Clipboard.setString(code)
    setCode(code);
    setToolTipVisible(true);
    const updatedCopiedStates = [...copiedStates];
    updatedCopiedStates[currentIndex] = true;
    setCopiedStates(updatedCopiedStates);
    setTimeout(() => {
      setToolTipVisible(false);
    }, 2000);
  };

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('uk');

  const countries = ['uk', 'pak'];

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsDropdownVisible(false);
  };

  const renderDropdownModal = (isVisible, toggleFunction, selectFunction, selectCountry) => {
    return (
      <Modal
        transparent={true}
        visible={isVisible}
        onRequestClose={() => toggleFunction(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={() => toggleFunction(false)}
        >
          <View style={styles.modalContainer}>
            <FlatList
              data={countries}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.dropdownItem} onPress={() => selectFunction(item)}>
                  <Text style={styles.dropdownText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.White}
        barStyle={'dark-content'}
      />
      <ResponseModal
        title={selectedSize ? 'Item Added' : 'Please select Size'}
        imageSource={
          selectedSize
            ? require('../../../../assets/LottieFiles/cartloader.json')
            : require('../../../../assets/LottieFiles/close.json')
        }
        lottieStyle={{ height: 40, width: 40 }}
        visible={modalVisible}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
      />
      <GeneralAppHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: Colors.FlashWhite, flex: 1 }}>
          <View style={{ alignItems: 'center', marginTop: 15 }}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={setSelectedIndexHandler}
              ref={scrollRef}
            >
              {productDetails.images &&
                productDetails.images.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.8}
                    onPress={() => openImageView(selectedIndex, index)}
                  >
                    {item ? (
                      <Image
                        style={{
                          width: imageSize.width,
                          height: imageSize.width * (1100 / 1285),
                        }}
                        source={item ? { uri: item } : require('../../../../assets/images/discount/OfferImage.png')}
                        resizeMode="cover"
                      />
                    ) : (
                      <Text>Image not available</Text>
                    )}
                  </TouchableOpacity>
                ))}
            </ScrollView>
            {productDetails.images.length > 1 ? (
              <Text
                style={{
                  color: Colors.BlueViolet,
                  fontSize: Sizes.size17,
                  position: 'absolute',
                  bottom: '3%',
                }}
              >
                {currentIndex + 1}/{productDetails.images.length}
              </Text>
            ) : null}
          </View>
          <ImageView
            images={imageUrls}
            imageIndex={galleryStates[selectedIndex].selectedIndex}
            visible={galleryStates[selectedIndex].visible}
            onRequestClose={() => {
              const updatedGalleryStates = [...galleryStates];
              updatedGalleryStates[selectedIndex] = { visible: false, selectedIndex: 0 };
              setGalleryStates(updatedGalleryStates);
            }}
          />
          <View style={styles.container}>
            <Text style={styles.descriptionText1}>
              {productDetails.name}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>Rs. {roundedDiscountPrice}</Text>
              <Text style={styles.oldPrice}>Rs. {productDetails.unit_price}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <AppButton
                  background
                  onPress={() => navigation.navigate('Reviews')}
                  label={'Ratings'}
                  textStyle={styles.ratingText}
                  buttonContainerStyle={styles.ratingButton}
                />
                <View style={styles.ratingDetails}>
                  <icons.YellowStar />
                  <Text style={styles.ratingCount}>({productDetails?.reviews_count})</Text>
                  {/* <Text style={styles.soldCount}>- {productDetails?.sold_product} Solds</Text> */}
                </View>
              </View>
              <AppButton
                background
                onPress={() => console.log('Chat')}
                label={'Chat'}
                textStyle={styles.transparentButtonText}
                buttonContainerStyle={styles.transparentButton}
                image
                imageLeft
                ImageSource={<icons.ChatIcon />}
              />
            </View>
            <View style={styles.colorContainer}>
              <Text style={styles.colorsText}>Colors</Text>
              <View style={styles.colorsContainer}>
                <FlatList
                  data={colorsArray}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ gap: 7 }}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => handleColorPress(item)}
                      style={{
                        height: 30,
                        width: 30,
                        backgroundColor: item,
                        borderRadius: 100,
                        borderWidth: 3,
                        borderColor:
                          selectedColor === item ? Colors.BlueViolet : Colors.White,
                      }}
                    />
                  )}
                />
              </View>
            </View>
            {/* <View style={styles.sizeBasicsContainer}>
                <Text style={styles.sizeBasicsTitle}>Size Basics</Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.dropDown}
                  onPress={() => toggleDropdown()}>
                  <Text style={styles.dropDownListText}>{selectedCountry}</Text>
                  <icons.DownwardArrowIcon height={8} width={8} />
                </TouchableOpacity>
                {renderDropdownModal(isDropdownVisible, toggleDropdown, selectCountry, selectedCountry)}
                <View style={styles.sizeChartContainer}>
                  <icons.SizeChartIcon />
                  <Text style={styles.sizeChartTitle}>Size Chart</Text>
                </View>
                <View>
                </View>
              </View>
              <Text style={{ fontFamily: Fonts.medium, fontSize: Sizes.size13, top: 1, color: 'rgba(0, 0, 0, 0.50)', paddingHorizontal: 30, paddingVertical: 10 }}>Toe to Heel Size (in CM): <Text style={{ fontFamily: Fonts.semiBold, color: Colors.Black }}>19.5</Text> | Age: <Text style={{ fontFamily: Fonts.semiBold, color: Colors.Black }}>6 - 6.5 Y</Text> | Size: <Text style={{ fontFamily: Fonts.semiBold, color: Colors.Black }}>EU 31</Text> | Brand Size: <Text style={{ fontFamily: Fonts.semiBold, color: Colors.Black }}>32</Text></Text> */}
            {isSizesAvailable && (
              <View style={styles.sizeContainer}>
                <Text style={styles.sizeLabel}>Size</Text>
                <FlatList
                  horizontal
                  data={sizes}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <View style={styles.sizeButtonContainer}>
                      <AppButton
                        background
                        onPress={() => handleSizePress(item)}
                        label={item}
                        textStyle={[
                          styles.sizeButtonText,
                          {
                            fontFamily: selectedSize === item ? Fonts.semiBold : Fonts.medium,
                          },
                        ]}
                        buttonContainerStyle={[
                          styles.sizeButton,
                          {
                            borderColor: selectedSize === item ? Colors.BlackOlive : 'rgba(0, 0, 0, 0.25)',
                          },
                        ]}
                      />
                    </View>
                  )}
                />
              </View>
            )}
            {/* <Text style={{ fontFamily: Fonts.medium, fontSize: Sizes.size15, top: 1, color: 'rgba(0, 0, 0, 0.50)', marginHorizontal: 30, paddingVertical: 10, borderBottomWidth: 1, borderColor: 'rgba(0, 0, 0, 0.13)' }}>Size: <Text style={{ fontFamily: Fonts.semiBold, color: Colors.Black }}>I = Infants, K = Kid</Text></Text> */}
            <View style={styles.offersRoot}>
              <Text style={styles.offersText}>Offers & Discounts</Text>
              <FlatList
                data={offersData}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 20, paddingHorizontal: 30 }}
                renderItem={({ item, index }) => (
                  <View style={styles.offersCardRoot} key={index}>
                    <icons.OffersCard />
                    <View style={styles.cardContent}>
                      <View style={styles.imageRow}>
                        <Image
                          source={require('../../../../assets/images/discount/OfferImage.png')}
                          resizeMode='cover'
                          style={styles.image}
                        />
                        <Text style={styles.flatDiscountText}>{item.discountDescription}</Text>
                      </View>
                      <TouchableOpacity activeOpacity={0.8} style={styles.viewTCContainer}>
                        <Text style={styles.viewTCText}>View T&C*</Text>
                      </TouchableOpacity>
                      <icons.PurpleShapeLine />
                      <View style={styles.cardBtnsRoot}>
                        <View style={styles.primaryBtn}>
                          <TouchableOpacity activeOpacity={0.8} style={styles.codeBtn}>
                            <Text style={styles.codeText}>{item.code}</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => handleCopyPress(item.code, index)}
                            activeOpacity={0.8} style={styles.dashedBtn}>
                            <icons.CopyIcon />
                            <Text style={styles.copyText}>{copiedStates[index] ? 'Copied' : 'Copy'}</Text>
                          </TouchableOpacity>
                          <Tooltip
                            isVisible={toolTipVisible}
                            content={<Text style={{ color: Colors.AppColor, fontFamily: Fonts.semiBold, fontSize: Sizes.size12, top: 1 }}>Code copied to clipboard</Text>}
                            placement="bottom"
                            onClose={handleToolTipClose}
                            backgroundColor='transparent'
                          />
                        </View>
                        <TouchableOpacity activeOpacity={0.8} style={styles.secondaryBtn}>
                          <icons.TiltedPurpleShareIcon />
                          <Text style={styles.shareText}>Share</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />

            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity activeOpacity={0.8} style={styles.vouchersButton}>
                <icons.VoucherIcon />
                <Text style={styles.vouchersButtonText}>Vouchers</Text>
                <View style={styles.rightArrowContainer}>
                  <icons.RightArrowPurple />
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.deliveryButton}>
                <icons.TruckIcon />
                <Text style={styles.deliveryButtonText}>Standard Delivery</Text>
                <View style={styles.rightArrowContainer}>
                  <icons.RightArrowBlack />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ paddingVertical: 20 }}>
              <Text style={styles.clubCashHeading}>Bachay Club Benefits</Text>
              <View style={{ paddingTop: 10 }}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ paddingHorizontal: 15 }}>
                  <View style={styles.clubCashView}>
                    <icons.ClubImage1 />
                    <Text style={styles.clubCashText}>Club Cash Benefits</Text>
                  </View>
                  <View style={styles.clubCashView}>
                    <icons.ClubImage2 />
                    <Text style={styles.clubCashText}>Excusive Offers & Discounts</Text>
                  </View>
                  <View style={styles.clubCashView}>
                    <icons.ClubImage3 />
                    <Text style={styles.clubCashText}>Lower Prices on Products</Text>
                  </View>
                </ScrollView>
              </View>
            </View>
            <View style={styles.reviewContainer}>
              <View style={styles.reviewDetails}>
                <View style={styles.reviewInfoContainer}>
                  <Image
                    resizeMode='cover'
                    style={styles.reviewImage}
                    source={{
                      uri: productDetails.brand.image
                        ? productDetails.brand.image
                        : '../../../../assets/images/product/reviewBG.jpg',
                    }}
                  />
                  <View style={styles.reviewTextContainer}>
                    <Text style={styles.reviewTitle}>{productDetails.brand.name ? productDetails.brand.name : 'Bachay'}</Text>
                    <View style={styles.reviewStarsContainer}>
                      <icons.YellowStar />
                      <icons.YellowStar />
                      <icons.YellowStar />
                      <icons.YellowStar />
                      <icons.YellowStar />
                      <Text style={styles.reviewStarsText}>4.7</Text>
                    </View>
                  </View>
                </View>
                <AppButton
                  background
                  onPress={() => navigation.navigate('HomePage')}
                  label={'Store'}
                  textStyle={[styles.transparentButtonText, { top: 2 }]}
                  buttonContainerStyle={styles.transparentButton}
                  image
                  imageLeft
                  ImageSource={<icons.StoreIcon />}
                />
              </View>
            </View>
            <View style={styles.questionsContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.questionsDetails}
                onPress={() => navigation.navigate('ProductQA')}
              >
                <icons.QuestionIcon />
                <Text style={styles.questionsText}>Ask Questions about the product.</Text>
                <View style={styles.questionsRightArrow}>
                  <icons.RightArrowBlack />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.productDesContainer}>
            <Text style={styles.headingText}>Product Description</Text>
            <View style={styles.headingTextBorder} />
            <HTML
              source={{ html: productContent ? productDetails.details : truncateText(productDetails.details, 30) }}
              contentWidth={width}
              tagsStyles={{
                p: {
                  fontFamily: Fonts.light,
                  fontSize: Sizes.size14,
                  color: Colors.AppColor,
                  lineHeight: 22,
                },
              }}
            />
            {productDetails.details.split(' ').length > 30 && (
              <Text style={styles.descriptionTextLink} onPress={toggleProductContent}>
                {' '}
                {productContent ? 'Read Less' : 'Read More'}
              </Text>
            )}
          </View>
          <View style={styles.highlightsContainer}>
            <Text style={styles.headingText}>
              Highlights
            </Text>
            <View style={styles.headingTextBorder} />
            <Text style={styles.descriptionText2}>
              Expand your eCommerce business globally with confidence. This article covers key considerations such as localization, international shipping, and adapting to diverse cultural preferences.
            </Text>
          </View>
          <View style={{ paddingTop: 10, paddingBottom: 20 }}>
            <CategoryBannerSlider />
          </View>
          <View style={{ backgroundColor: Colors.White, paddingBottom: 20 }}>
            <ParentingTools />
          </View>
          <ProductSlider title={'For You'} />
        </View>
      </ScrollView>
      <View style={styles.footerStyle}>
        {qtyData.map((item, index) => (
          <View key={index} style={styles.counterView}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleDecreaseQuantity(index)}>
              <icons.MinusIcon width={30} height={30} />
            </TouchableOpacity>
            <Text style={styles.counterText}>
              {item.quantity < 10 ? `0${item.quantity}` : `${item.quantity}`}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleIncreaseQuantity(index)}>
              <icons.PlusIcon width={30} height={30} />
            </TouchableOpacity>
          </View>
        ))}
        <AppButton
          textStyle={styles.applyNowBtnTextStyle}
          onPress={() => {
            userData ? handleAddtoCart() : cartNotFound();
          }}
          background
          label="Add to Cart"
          buttonContainerStyle={styles.applyNowBtnStyle}
        />
      </View>
    </SafeAreaView >
  );
};

export default SingleProduct;