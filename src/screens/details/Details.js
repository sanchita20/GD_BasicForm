import React from 'react';
import { View, Text } from 'react-native';
import CardUI from '@cardUI/CardUI';
import CustomButton from '@button/CustomButton';
import EditText from '@editText/EditText';
import { styles } from '@details/styles';
import strings from '@resources/Strings';

import { HOME_SCREEN, LEFT_ALIGN } from '@resources/Constants'

const {
    user_name,
    mobile_no,
    upi,
    profession,
    continue_btn,
    country_code,
    details_screen_title
} = strings;

const {
    continueBtnStyle,
    continueContainerStyle,
    editTextStyle,
    mainView,
    headerStyle
} = styles;

export default class Home extends React.Component {
    editView = (title, value) => {
        return (
            <View style={editTextStyle}>
                <EditText
                    label={title}
                    textAlignStyle={LEFT_ALIGN}
                    mandatory={false}
                    editable={false}
                    textColor='#5A67F2'
                    value={title === mobile_no ? country_code + value : value} />
            </View>
        )
    }

    render() {
        const { navigation, route } = this.props;
        const { mobile, name, upiId, professionType } = route.params;

        return (
            <View style={mainView}>
                <Text style={headerStyle}>{details_screen_title}</Text>
                <CardUI>
                    {this.editView(user_name, name)}
                    {this.editView(mobile_no, mobile)}
                    {this.editView(upi, upiId)}
                    {this.editView(profession, professionType)}
                </CardUI>
                <CustomButton
                    style={continueBtnStyle}
                    containerStyle={continueContainerStyle}
                    title={continue_btn}
                    onPress={() => navigation.navigate(HOME_SCREEN)} />
            </View>
        )
    }
}