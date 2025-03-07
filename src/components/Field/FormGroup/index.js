import React from 'react';
import { View, Text } from 'react-native';

import { colors, fontScale, size } from '../../../helpers/variables';

import styles from './styles';

export default function FormGroup(props) {
    const {
        children = false,
        meta = {},
        disabled = false,
        label = false,
    } = props;

    const { touched = false, error = "" } = meta;
    const isShow = touched && error && !disabled;

    return (
        <>
            <View style={{ paddingTop: size.xx_tiny }}>
                <Text style={{ fontSize: fontScale(17), color: colors.black, fontWeight: "500", marginBottom: size.xx_tiny }}>{label}</Text>
                <View style={{ borderColor: colors.dawn, borderWidth: 1, borderRadius: 8 }}>
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
        </>
    )
}
