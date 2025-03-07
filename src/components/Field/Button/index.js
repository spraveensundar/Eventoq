import React from 'react';
import { View, Pressable, ActivityIndicator, Text } from 'react-native';

import { getColors } from './Helper';
import { colors } from '../../../helpers/variables';

import styles from './styles';

const Button = React.forwardRef((props, ref) => {
    const {
        onPress,
        text,
        fetching = false,
        disabled,
        type,
        buttonTextStyle = {},
        color
    } = props;

    const { textColor, backgroundColor } = getColors(color, type);

    if (type == "secondary") {
        return (
            <Pressable disabled={disabled} onPress={onPress}>
                <View style={[styles.buttonContainer, {
                    borderWidth: 1,
                    borderColor: textColor,
                    opacity: disabled ? 0.5 : 1,
                    backgroundColor,
                }]}>
                    {
                        fetching === false && (
                            <View style={styles.buttonSubContainer}>
                                <Text style={[{ color: colors.black }, buttonTextStyle]}>{text}</Text>
                            </View>
                        )
                    }
                    {
                        fetching === true && (
                            <View style={styles.buttonSubContainer}>
                                <ActivityIndicator color={textColor} />
                            </View>
                        )
                    }
                </View>
            </Pressable>
        )
    }

    return (
        <Pressable ref={ref} disabled={disabled} onPress={onPress}>
            <View style={[styles.buttonContainer,
            {
                backgroundColor,
                opacity: disabled ? 0.5 : 1,
            }
            ]}>
                {
                    fetching === false && (
                        <>
                            <Text style={[{ color: textColor }, buttonTextStyle]}>{text}</Text>
                        </>

                    )
                }
                {
                    fetching === true && (
                        <ActivityIndicator color={textColor} />
                    )
                }
            </View>
        </Pressable>
    )
})

export default Button;