import { StyleSheet,View,Text } from "react-native"
import { Colors,Fonts } from "../../constants/theme"

const GuaranteedSavingBanner = ()=>{
return(

    <View
    style={styles.bannerView}>
            <Text
              style={styles.nowGetText}>
              Now get
            </Text>
            <Text
              style={styles.guaranteedText}>
              Guaranteed Best Discount
            </Text>
            <Text style={styles.brandText}>On your Favourite Brands</Text>
          </View>
            )
            }

const styles=StyleSheet.create({
    bannerView: {
        backgroundColor: Colors.Blueberry,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 15,
        gap: -15,
      },
      nowGetText: {
        fontFamily: Fonts.semiBoldItalic,
        fontSize: 18,
        color: Colors.Sandstrom,
        paddingHorizontal: 40,
      },
      guaranteedText: {
        fontFamily: Fonts.bold,
        fontSize: 24,
        color: Colors.White,
        textAlign: 'center',
      },
      brandText: {
        fontFamily: Fonts.light,
        fontSize: 25,
        textAlign: 'center',
        color: Colors.Sandstrom,
      },
      listContainer: {
        backgroundColor: Colors.White,
        paddingBottom: 20,
        paddingHorizontal: 20,
      },
})
export default GuaranteedSavingBanner