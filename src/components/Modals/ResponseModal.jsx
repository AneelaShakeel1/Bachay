import { Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { Sizes } from '../../constants/theme';
import { Colors } from '../../constants/theme';
import Lottie from 'lottie-react-native';

const ResponseModal = ({
    visible,
    onBackButtonPress,
    onBackdropPress,
    title,
    imageSource,
    lottieStyle
}) => {

    return (
        <Modal
            style={styles.modalContainer}
            visible={visible}
            onBackButtonPress={onBackButtonPress}
            onBackdropPress={onBackdropPress}
        >
            <View style={styles.errorCardContainer}>
                <Text style={styles.text}>{title}</Text>
                <Lottie
                    style={lottieStyle}
                    source={imageSource}
                    autoPlay
                    loop
                    speed={0.7}
                />
            </View>
        </Modal>
    );
};

export default ResponseModal;

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.60)',
        flex: 1,
        marginHorizontal: 0,
        borderWidth: 0,
        justifyContent: 'flex-start',
        margin: 0,
    },
    errorCardContainer: {
        marginTop: Platform.OS === 'ios' ? 80 : 30,
        backgroundColor: Colors.White,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'center',
        borderRadius: 20,
    },
    text: {
        fontSize: Sizes.size20,
        width: '65%',
        color: 'rgba(41, 35, 35,1)',
    },
});