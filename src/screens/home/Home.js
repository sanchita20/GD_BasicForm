import React from 'react';
import { View } from 'react-native';
import Logo from '@assets/ic_launcher.svg';
import EditText from '@editText/EditText';
import CustomButton from '@button/CustomButton';
import CardUI from '@cardUI/CardUI';
import GoDutch from '@assets/goDutch.svg';
import Line from '@assets/Line.svg';
import { styles } from '@home/styles';
import strings from '@resources/Strings';
import { REGISTRATION_SCREEN, PHONE_PAD } from '@resources/Constants'

const {
    mobile_number,
    continue_btn
} = strings;

const {
    title,
    line,
    btnStyle,
    mainView,
    continueContainerStyle
} = styles;


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: ''
        }
    }

    render() {
        const { mobile } = this.state;
        const { navigation } = this.props;
        return (
            <View style={mainView}>
                <CardUI>
                    <View style={title}>
                        <Logo />
                        <GoDutch />
                    </View>
                    <Line style={line} />
                    <EditText
                        keyboardType={PHONE_PAD}
                        label={mobile_number}
                        onChangeText={mobile => this.setState({ mobile })}
                        defaultValue={mobile}
                        value={mobile} />
                    <CustomButton
                        style={btnStyle}
                        containerStyle={continueContainerStyle}
                        title={continue_btn}
                        disabled={mobile.match(/^[0][1 - 9]\d{9}$|^[1-9]\d{9}$/) ? false : true}
                        onPress={() => navigation.navigate(REGISTRATION_SCREEN, { mobile })} />
                </CardUI>
            </View>
        );
    }
}
