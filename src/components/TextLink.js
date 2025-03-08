import React from 'react';
import { Pressable, Text } from 'react-native';

import styles from './styles';

const TextLink = ({ label, onPress, disabled = false, style = {} }) => {
    return (
        <Pressable onPress={onPress} disabled={disabled} style={{ ...style, opacity: disabled === true ? 0.3 : 1 }}>
            <Text style={styles.label} royal>{label}</Text>
        </Pressable>
    )
}

export default TextLink;