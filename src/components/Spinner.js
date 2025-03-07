import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { colors, size as sizes } from '../helpers/variables';

import styles from './styles';

const Spinner = ({ color = colors.black, style = {}, size = sizes.xxx_small }) => {
    return (
        <View style={[styles.centerContainer, style]}>
            <ActivityIndicator color={color} size={size} />
        </View>
    )
}

export default Spinner;