import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Spinner from './Spinner';
import { colors } from '../helpers/variables';

const Icon = ({ icon = false, size, color, style, containerStyle, onPress = () => { }, disabled = false, fetching = false, hitSlop }) => {
    return (
        <Pressable hitSlop={hitSlop} style={[containerStyle, { opacity: disabled === true ? 0.4 : 1 }]} onPress={onPress} disabled={disabled || fetching}>
            {
                fetching === false && icon !== false && (
                    <Ionicons
                        name={icon}
                        size={size}
                        color={color}
                        style={style}
                    />
                )
            }
            {
                fetching === true && (
                    <Spinner color={colors.white} />
                )
            }
        </Pressable>
    )
}
export default Icon;