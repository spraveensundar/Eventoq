import React from 'react';
import { View, Text } from 'react-native';

import { colors, fontScale, size } from 'd:/React Native/ReactNative/src/helpers/variables';

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
                <Text style={{ fontSize: fontScale(17), color: colors.black, fontWeight: "500", marginBottom: 10 }}>{label}</Text>
                <View style={{ borderColor: "#A1A1A1", borderWidth: 1, borderRadius: 8 }}>
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
