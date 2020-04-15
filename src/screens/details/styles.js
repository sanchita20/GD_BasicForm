import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    continueBtnStyle: {
        marginTop: hp(5)
    },
    continueContainerStyle: {
        width: wp(50),
        alignSelf: 'center'
    },
    editTextStyle: {
        marginBottom: hp(4)
    },
    mainView: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: '#F8F8F8'
    },
    headerStyle: {
        marginTop: hp(5),
        marginLeft: hp(2),
    }
})