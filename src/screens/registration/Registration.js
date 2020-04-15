import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CardUI from '@cardUI/CardUI';
import CustomButton from '@button/CustomButton';
import EditText from '@editText/EditText';
import Logo from '@assets/ic_launcher.svg';
import { styles } from '@registration/styles';
import strings from '@resources/Strings';
import { DETAIL_SCREEN } from '@resources/Constants'

const {
    current_profession,
    professional,
    student,
    full_name,
    upi_id,
    continue_btn,
    registration_screen_title
} = strings;

const {
    logoStyle,
    textStyle,
    btnView,
    containerStyle,
    buttonStyle,
    continueBtnStyle,
    editTextStyle,
    continueContainerStyle,
    titleStyle,
    mainView,
    headerStyle
} = styles;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            upiId: '',
            professionType: student,
        }
    }

    onProfessionSelection = (title) => {
        this.setState({ professionType: title })
    }

    professionView = (title) => {
        const { professionType } = this.state;

        return (
            <TouchableOpacity
                onPress={() => this.onProfessionSelection(title)}>
                <CustomButton
                    style={buttonStyle}
                    backgroundColor={'#ffffff'}
                    containerStyle={containerStyle}
                    customTitleStyle={titleStyle}
                    title={title}
                    type="outline"
                    disabled={title === professionType ? false : true}
                />
            </TouchableOpacity>
        )
    }

    editView = (title) => {
        const { name, upiId } = this.state;
        return (
            <View style={editTextStyle}>
                <EditText
                    label={title}
                    onChangeText={value => title === full_name ? this.setState({ name: value }) : this.setState({ upiId: value })}
                    defaultValue={title === full_name ? name : upiId}
                    value={title === full_name ? name : upiId} />
            </View>
        )
    }

    render() {
        const { name, upiId, professionType } = this.state;
        const { navigation, route } = this.props;
        const { mobile } = route.params;
        return (
            <View style={mainView}>
                <Text style={headerStyle}>{registration_screen_title}</Text>
                <CardUI>
                    <Logo style={logoStyle} />
                    <Text style={textStyle}>{current_profession}</Text>
                    <View style={btnView}>
                        {this.professionView(student)}
                        {this.professionView(professional)}
                    </View>
                    {this.editView(full_name)}
                    {this.editView(upi_id)}
                    <CustomButton
                        disabled={(name !== '' && upiId !== '') ? false : true}
                        style={continueBtnStyle}
                        containerStyle={continueContainerStyle}
                        title={continue_btn}
                        onPress={() => navigation.navigate(DETAIL_SCREEN, { name, upiId, professionType, mobile })} />
                </CardUI>
            </View>
        )
    }
}