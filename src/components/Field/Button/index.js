import React from 'react';
import { View, Pressable, Text } from 'react-native';

import Spinner from '../../Spinner';
import { getColors } from './Helper';
import { colors, size } from '../../../helpers/variables';

import styles from './styles';

const Button = React.forwardRef((props, ref) => {
    const {
        onPress,
        text,
        fetching = false,
        disabled,
        type,
        buttonTextStyle = {},
        color,
        style
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
                            <Spinner color={textColor} size={size.xxxx_small} />
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
                ...style
            }
            ]}>
                {
                    fetching === false && (
                        <Text style={[styles.content, { color: textColor }, buttonTextStyle]}>{text}</Text>
                    )
                }
                {
                    fetching === true && (
                        <Spinner color={colors.white} size={size.xxxx_small} />
                    )
                }
            </View>
        </Pressable>
    )
})

export default Button;