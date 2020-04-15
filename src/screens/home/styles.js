import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F8F8F8'
    },
    title: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    line: {
        alignSelf: 'center',
        marginTop: hp(3),
        marginBottom: hp(3)
    },
    btnStyle: {
        marginTop: hp(10)
    },
    continueContainerStyle: {
        width: wp(50),
        alignSelf: 'center'
    },
})