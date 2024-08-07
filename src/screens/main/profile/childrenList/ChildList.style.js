import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        flex: 1
    },
    root: {
        backgroundColor: Colors.White,
        flex: 1,
    },
    childInfo: {
        // justifyContent: 'space-between',
        margin: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    childView: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },
    childImage: {
        height: 65,
        width: 65,
        borderWidth: 2,
        borderColor: Colors.Black,
        borderRadius: 40,
    },
    childDetails: {
        gap: -4,
        width: '60%'
        // top: 3
    },
    childName: {
        fontFamily: Fonts.medium,
        fontSize: Sizes.size16,
        color: Colors.Black,
    },
    childAge: {
        fontSize: Sizes.size13,
        color: Colors.AppColor,
    },
    childStats: {
        flexDirection: 'row',
        gap: 5,
    },
    childGender: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size13,
    },
    divider: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size12,
        color: Colors.BlueViolet,
    },
    childWeight: {
        fontFamily: Fonts.semiBold,
        fontSize: Sizes.size13,
        color: Colors.BlueViolet,
    },
    separatorLine: {
        backgroundColor: Colors.BlackCoral,
        borderBottomWidth: 0.5,
        width: '90%',
        alignSelf: 'center',
    },
    btnStyle: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 100,
        padding: 13,
        alignItems: 'center',
        margin: 15,
        backgroundColor: Colors.BlueViolet,
    },
    btnTextStyle: {
        fontSize: Sizes.size17,
        color: Colors.White,
        fontFamily: Fonts.semiBold,
        top: 1
    },
    leftIconView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        position: 'absolute',
        right: 0
    },
    noChildContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    noFoundText: {
        fontFamily: Fonts.medium,
        color: Colors.AppColor,
        fontSize: Sizes.size20,
        top: 1,
        textAlign: "center"
    }
});
