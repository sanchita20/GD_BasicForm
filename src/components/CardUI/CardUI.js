import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '@cardUI/styles';

const {
    container
} = styles;

const CustomCard = ({ children }) => {
    return (
        <View style={container}>
            {children}
        </View>
    );
}

export default CustomCard;