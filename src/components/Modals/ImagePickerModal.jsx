import React from 'react';
import { StyleSheet, SafeAreaView, Pressable, Text, Platform } from 'react-native';
import Modal from 'react-native-modal';
import { Colors, Fonts, Sizes } from '../../constants/theme';

export function ImagePickerModal(
    {
        isVisible,
        onClose,
        onImageLibraryPress,
        onCameraPress,
    }
) {
    return (
        <Modal
            visible={isVisible}
            onBackButtonPress={onClose}
            onBackdropPress={onClose}
            style={styles.modal}>
            <SafeAreaView style={styles.buttons}>
                <Pressable style={styles.button} onPress={onImageLibraryPress}>
                    <Text style={styles.buttonText}>Library</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={onCameraPress}>

                    <Text style={styles.buttonText}>Camera</Text>
                </Pressable>
            </SafeAreaView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    buttonIcon: {
        alignSelf: 'center',
    },
    buttons: {
        backgroundColor: Colors.White,
        flexDirection: 'row',
        paddingVertical: 20,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
    },
    buttonText: {
        fontSize: Sizes.size16,
        color: Colors.BlueViolet,
        fontFamily: Fonts.medium
    },
});