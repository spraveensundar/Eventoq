import React from 'react';
import { Text as NormalText, View } from 'react-native';

import styles from './styles';

export default function Label({ text = "", icon, style = {}, required = false }) {
    return (
        <View style={styles.labelText}>
            <NormalText style={[styles.label, { ...style }]}>
                {text}
            </NormalText>
            {icon}
            {
                required === true && (
                    <NormalText style={styles.required}> *</NormalText>
                )
            }
        </View>
    )
}