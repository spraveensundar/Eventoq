import React from 'react';
import { View, Text } from 'react-native';

import { colors } from '../../../helpers/variables';

import styles from './styles';

export default function FormGroup(props) {
    const {
        children = false,
        meta = {},
        disabled = false,
        focus = false,
        label = false,
    } = props;

    const { touched = false, error = "" } = meta;
    const isShow = touched && error && !disabled;

    return (
        <View style={styles.formContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.form, isShow ? { borderColor: colors.red } : "", focus ? { borderColor: colors.dark } : ""]}>
                {children}
            </View>
            {
                isShow && (
                    <View style={styles.errorText}>
                        <Text style={{ color: colors.red }}>{error}</Text>
                    </View>
                )
            }
        </View>
    )
}