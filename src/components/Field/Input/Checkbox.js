import React, { useState, useEffect } from "react";
import { View, Pressable, Text } from "react-native";
import { get } from "lodash";

import { colors, fontScale } from "../../../helpers/variables";

import styles from "./styles";

const Checkbox = ({ meta, input, label = "", backgroundColor = colors.white, style = {}, iconColor = colors.grey, disabled = false }) => {
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
                            <Text style={{ color: colors.white }}>✔️</Text>
                        )
                    }
                </View>
                <View style={styles.labelWrapper}>
                    <Text style={{ color: colors.dark, fontSize: fontScale(14), fontWeight: "500" }}>{label}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Checkbox;