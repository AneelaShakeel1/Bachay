import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../../constants/theme';

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 40
    },
    headerStatusView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 40,
        justifyContent: "center"
    },
    headerStatusInnerView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
    },
    headerStatusTextView: {
        gap: -10,
        paddingTop: 5,
    },
    headerStatusText: {
        fontFamily: Fonts.light,
        fontSize: Sizes.size14,
        color: Colors.White,
        top: 1,
    },
    headerStatusComing: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size19,
        color: Colors.BeerColor,
        top: 1,
    },
    loginRootContainer: {
        alignItems: "center",
        marginTop: 30
    },
    pointsBadgesTextTitle: {
        fontFamily: Fonts.medium,
        color: Colors.White,
        fontSize: Sizes.size19
    },
    loginTextTitle: {
        fontFamily: Fonts.regular,
        color: Colors.White,
        fontSize: Sizes.size12,
        marginBottom: 10,
        top: -5
    },
    bplActivityBtnStyle: {
        justifyContent: 'center',
        borderRadius: 100,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 40,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.40)',
        width: '80%'
    },
    bplActivityBtnText: {
        fontSize: Sizes.size14,
        color: Colors.White,
        fontFamily: Fonts.medium,
        top: 1
    },
    separatorLine: {
        borderWidth: 0.3,
        borderColor: 'rgba(255, 255, 255, 0.15)',
    },
    sectionRoot: {
        paddingVertical: 30
    },
    sectionRow: {
        justifyContent: 'space-between',
        flexDirection: "row"
    },
    sectionTitle: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size18,
        color: Colors.White
    },
    viewAllText: {
        fontFamily: Fonts.medium,
        color: Colors.White,
        fontSize: Sizes.size13
    },
    itemsRoot: {
        gap: 20,
        marginTop: 15
    },
    gradientItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.40)'
    },
    itemRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 15
    },
    itemText: {
        fontFamily: Fonts.medium,
        color: Colors.White,
        fontSize: Sizes.size14,
        width: '85%'
    }

});