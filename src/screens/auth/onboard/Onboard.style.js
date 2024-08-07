import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../constants/theme';

export const styles = StyleSheet.create({
    mainImage: {
        width: Dimensions.get('screen').width,
    },
    btnStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 50,
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'center',
        // marginVertical: 30,
    },
    btnTextStyle: {
        fontFamily: 'Aristotelica Display DemiBold Trial',
        fontSize: Sizes.size22,
        color: Colors.White,
    },
    titleHeading: {
        fontSize: Sizes.size24,
        fontFamily: 'Aristotelica Display DemiBold Trial',
        color: Colors.AppColor,
    },
    titleContent: {
        fontSize: Sizes.size14,
        color: Colors.RomanSilver,
        fontFamily: Fonts.light,
        marginTop: 5
    },
    skipContainer: {
        flexDirection: 'row',
        display: 'flex',
        position: 'absolute',
        zIndex: 1,
        top: 20,
        right: 10,
        alignItems: 'center',
        margin: 20
    },
    skipText: {
        fontSize: Sizes.size14,
        color: Colors.White,
        marginHorizontal: 5,
        fontFamily: Fonts.medium,
        top: 1
    },
    bulletsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 6,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        bottom: '5%',
        left: 0,
        right: 0
    },
    bulletsView: {
        width: 15,
        height: 4,
        borderRadius: 50,
        backgroundColor: Colors.White
    }
});
