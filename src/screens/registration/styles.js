import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    logoStyle: {
        alignSelf: 'center',
        marginBottom: hp(5)
    },
    textStyle: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 18,
        paddingBottom: hp(0.5)
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: hp(5)
    },
    containerStyle: {
        width: wp(40),
    },
    buttonStyle: {
        height: hp(6)
    },
    continueBtnStyle: {
        marginTop: hp(4),
        marginBottom: hp(4)
    },
    continueContainerStyle: {
        width: wp(50),
        alignSelf: 'center'
    },
    editTextStyle: {
        marginBottom: hp(4)
    },
    titleStyle: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#5A67F2'
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