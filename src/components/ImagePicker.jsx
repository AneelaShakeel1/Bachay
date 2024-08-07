import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

export const accessGallery = async () => {
    const options = {
        path: 'images',
        mediaType: 'photo',
        selectionLimit: 1,
    };

    const cameraResponse = await launchImageLibrary(options, response => {
        return response;
    });
    return cameraResponse;
};

export const accessGalleryVid = async () => {
    const options = {
        path: 'images',
        mediaType: 'video',
        selectionLimit: 1,
    };

    const cameraResponse = await launchImageLibrary(options, response => {
        return response;
    });
    return cameraResponse;
};

export const accessCamera = async () => {
    const options = {
        path: 'images',
        mediaType: 'photo',
    };

    const cameraResponse = await launchCamera(options, response => {
        return response;
    });
    return cameraResponse;
};
