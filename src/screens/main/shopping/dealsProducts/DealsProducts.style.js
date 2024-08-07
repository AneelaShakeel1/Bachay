import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    categoryButton: {
        justifyContent: 'center',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    categoryButtonText: {
        fontSize: Sizes.size12,
        fontFamily: Fonts.semiBold,
        top: 1,
    },
    filterContainer: {
        backgroundColor: Colors.FilterColor,
        borderRadius: 50,
        width: 120,
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 1,
        bottom: 10,
        right: 10,
    },
    filterIconContainer: {
        backgroundColor: Colors.SurfaceLightBlue,
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterTitle: {
        fontSize: Sizes.size16,
        color: Colors.White,
        fontFamily: Fonts.semiBold,
        marginRight: 3,
        top: 1,
    },
});