import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../constants/theme';

export const STYLES = StyleSheet.create({
    mainImage: {
        width: Dimensions.get('screen').width,
    },
    box: {
        margin: 30,
    },
    btnStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 20,
        alignItems: 'center',
        marginVertical: 30,
    },
    btnTextStyle: {
        fontWeight: '600',
        fontSize: Sizes.size22,
        color: Colors.White,
        fontFamily: 'Aristotelica Display DemiBold Trial',
    },
    titleHeading: {
        fontSize: Sizes.size24,
        fontWeight: '600',
        color: Colors.AppColor,
        fontFamily: 'Aristotelica Display DemiBold Trial',
    },
    titleContent: {
        fontSize: Sizes.size14,
        fontWeight: '300',
        marginTop: 10,
        color: Colors.RomanSilver,
        fontFamily: Fonts.light,
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
        fontSize: Sizes.size16,
        color: Colors.White,
        marginHorizontal: 5,
        fontFamily: Fonts.medium,
        top: 2
    }
});
