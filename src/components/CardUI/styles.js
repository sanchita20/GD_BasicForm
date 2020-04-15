import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        margin: hp(2),
        padding: hp(2),
        borderRadius: hp(0.8),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: hp(2) },
        shadowOpacity: 0.8,
        shadowRadius: hp(2),
        elevation: 1,
    },
})