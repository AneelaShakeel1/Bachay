import { Text, View, StatusBar, Image, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../../constants/theme'
import GeneralAppHeader from '../../../../components/GeneralAppHeader'
import MainTitle from '../../../../components/Profile/MainTitle'
import icons from '../../../../constants/icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AppButton from '../../../../components/AppButton'
import { ImagePickerModal } from '../../../../components/Modals/ImagePickerModal'
import { accessGallery, accessCamera } from '../../../../components/ImagePicker'
import StarRating from 'react-native-star-rating-widget';
import { styles } from './AddReview.style'
const AddReview = () => {
    const [imagePickModal, setImagePickModal] = useState(false);
    const [validationMessage, setValidationMessage] = useState('');

    const requestCameraPermission = async () => {
        if (Platform.OS === 'ios') {
            try {
                const result = await check(PERMISSIONS.IOS.CAMERA);
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        //console.log('This feature is not available (on this device / in this context)');
                        break;
                    case RESULTS.DENIED:
                        //console.log('The permission has not been requested / is denied but requestable');
                        break;
                    case RESULTS.LIMITED:
                        //console.log('The permission is limited: some actions are possible');
                        break;
                    case RESULTS.GRANTED:
                        //console.log('The permission is granted');
                        break;
                    case RESULTS.BLOCKED:
                        //console.log('The permission is denied and not requestable anymore');
                        break;
                }
            } catch (error) {
                // handle error
            }
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Access Permission',
                        message: 'App needs access to your camera to upload profile image',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //console.log('You can use the camera');
                } else {
                    //console.log("Camera Permission isn't Given go to setting to access camera permission");
                }
            } catch (err) {
                alert(err);
            }
        }
    }
    const openGallery = async () => {
        accessGallery().then(res => {
            if (res.assets) {
                setSelectedPhoto(res.assets[0]);
                setImagePickModal(false);
            } else {
                Alert.alert('Error', 'Image selection canceled.');
            }
        });
    };

    const openCamera = async () => {
        await requestCameraPermission();
        const res = await accessCamera();
        if (res.assets) {
            setSelectedPhoto(res.assets[0]);
            setImagePickModal(false);
        } else {
            Alert.alert('Error', 'Image selection canceled.');
        }
    };

    const [productRating, setProductRating] = useState(0)
    console.log('Product Rating Value', productRating)

    const [sellerRating, setSellerRating] = useState(0)
    console.log('Seller Rating Value', sellerRating)

    const [deliveryRating, setDeliveryRating] = useState(0)
    console.log('Delivery Rating Value', deliveryRating)

    const getRatingText = (rating) => {
        if (0 < rating && rating <= 1) {
            return "Poor!";
        } else if (1 < rating && rating <= 2) {
            return "Fair!";
        } else if (2 < rating && rating <= 3) {
            return "Average!";
        } else if (3 < rating && rating <= 4) {
            return "Good!";
        } else if (4 < rating && rating <= 5) {
            return "Excellent!";
        } else {
            return "";
        }
    };

    const [text, setText] = useState('');
    const maxCharacters = 500;

    const handleChangeText = (inputText) => {
        if (inputText.length <= maxCharacters) {
            setText(inputText);
            setValidationMessage(''); // Clear validation message if within limit
        } else {
            setValidationMessage('You have reached the maximum character limit (500).');
        }
    };
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.screenContainer}>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.White}
                    barStyle={'dark-content'}
                />
                <GeneralAppHeader />
                <MainTitle title="Review Product" />
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                    <View style={{ padding: 20 }}>
                        <View style={styles.productInfoContainer}>
                            <Image
                                resizeMode='cover'
                                source={require('../../../../assets/images/product/ProductImage1.jpg')}
                                style={styles.productImage}
                            />
                            <View style={{ gap: -4 }}>
                                <Text style={styles.productName}>Pine Kids Lace Up Casual Shoes Color Block - White</Text>
                                <Text style={styles.productColor}>Color Family: Black</Text>
                            </View>
                        </View>
                        <View style={styles.ratingContainer}>
                            <Text style={styles.ratingLabel}>Product Rating</Text>
                            <View style={styles.ratingStarsContainer}>
                                <StarRating
                                    rating={productRating}
                                    onChange={setProductRating}
                                    maxStars={5}
                                    starSize={30}
                                    color='#F8931B'
                                    starStyle={{ marginHorizontal: 0 }}
                                />
                                <Text style={styles.ratingText}>{getRatingText(productRating)}</Text>
                            </View>
                        </View>
                        <View style={styles.feedbackContainer}>
                            <icons.GreenTickIcon />
                            <Text style={styles.feedbackText}>Thanks for your rating. Please tell us more so we can improve our services.</Text>
                        </View>
                        <View style={styles.serviceRatingsContainer}>
                            <View style={styles.serviceRating}>
                                <Text style={styles.serviceRatingLabel}>Seller Service</Text>
                                <View style={styles.serviceRatingStarsContainer}>
                                    <StarRating
                                        rating={sellerRating}
                                        onChange={setSellerRating}
                                        maxStars={5}
                                        starSize={24}
                                        color='#F8931B'
                                        starStyle={{ marginHorizontal: 0 }}
                                    />
                                    <Text style={styles.serviceRatingText}>{getRatingText(sellerRating)}</Text>
                                </View>
                            </View>
                            <View style={styles.serviceRating}>
                                <Text style={styles.serviceRatingLabel}>Delivery Service</Text>
                                <View style={styles.serviceRatingStarsContainer}>
                                    <StarRating
                                        rating={deliveryRating}
                                        onChange={setDeliveryRating}
                                        maxStars={5}
                                        starSize={24}
                                        color='#F8931B'
                                        starStyle={{ marginHorizontal: 0 }}
                                    />
                                    <Text style={styles.serviceRatingText}>{getRatingText(deliveryRating)}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.uploadContainer}>
                        <Text style={styles.uploadLabel}>Add Photos and Video</Text>
                        <TouchableOpacity
                            onPress={() => setImagePickModal(true)}
                            activeOpacity={0.8}
                            style={styles.uploadBox}>
                            <View style={styles.uploadIconContainer}>
                                <icons.GalleryPurpleIcon />
                                <Text style={styles.uploadText}>Add Photo</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ImagePickerModal
                        isVisible={imagePickModal}
                        onClose={() => setImagePickModal(false)}
                        onImageLibraryPress={openGallery}
                        onCameraPress={openCamera}
                    />
                    <View style={styles.reviewContainer}>
                        <View style={styles.reviewHeader}>
                            <Text style={styles.reviewLabel}>Write Review</Text>
                            <Text style={styles.characterCount}>{text.length}/{maxCharacters}</Text>
                        </View>
                        <View style={styles.reviewField}>
                            <TextInput
                                style={styles.input}
                                placeholder="Write your thought on product....."
                                placeholderTextColor={'rgba(41, 45, 50, 0.50)'}
                                multiline={true}
                                numberOfLines={7}
                                textAlignVertical="top"
                                onChangeText={handleChangeText}
                                value={text}
                            />
                        </View>
                        <Text style={styles.validationText}>{validationMessage}</Text>
                        <AppButton
                            textStyle={styles.btnTextStyle}
                            background
                            label="Submit"
                            buttonContainerStyle={styles.btnStyle}
                        />
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default AddReview;