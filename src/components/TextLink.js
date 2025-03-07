import React from 'react';
import { Pressable, Text } from 'react-native';

import { colors, fontScale } from '../helpers/variables';

const TextLink = ({ label, onPress, disabled = false, style = {} }) => {
    return (
        <Pressable onPress={onPress} disabled={disabled} style={{ ...style, opacity: disabled === true ? 0.3 : 1 }}>
            <Text style={{ color: colors.dark, fontSize: fontScale(14), fontWeight: "500" }} royal>{label}</Text>
        </Pressable>
    )
}

export default TextLink;