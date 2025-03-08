import React, { useState, useEffect } from "react";
import { View, Pressable, Text } from "react-native";
import { get } from "lodash";

import Icon from "../../Icon";
import { colors, size } from "../../../helpers/variables";

import styles from "./styles";

const Checkbox = ({ meta, input, label = "", backgroundColor = colors.orange, style = {}, disabled = false }) => {
    const initial = get(meta, 'initial', 0);
    const [checked, setChecked] = useState(initial);

    const setValue = () => {
        if (disabled === false) {
            setChecked(checked === 1 ? 0 : 1);
        }
    }

    useEffect(() => {
        if (initial === 1) {
            input.onChange(1);
        } else {
            input.onChange(0);
        }
    }, []);

    useEffect(() => {
        if (checked === 1) {
            input.onChange(1);
        } else {
            input.onChange(0);
        }
    }, [checked]);

    return (
        <Pressable onPress={setValue}>
            <View style={styles.checkboxWrapper}>
                <View style={[styles.checkboxSubContainer, { backgroundColor: checked === 0 ? 'transparent' : backgroundColor, ...style }]}>
                    {
                        checked === 1 && (
                            <Icon
                                icon="checkmark-sharp"
                                color={colors.white}
                                size={size.xx_small}
                            />
                        )
                    }
                </View>
                <View style={styles.labelWrapper}>
                    <Text style={styles.label}>{label}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Checkbox;