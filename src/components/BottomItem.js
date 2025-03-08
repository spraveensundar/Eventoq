import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors, fontScale, size } from '../helpers/variables';

import styles from './styles';

const BottomItem = ({ icon, isActive, text }) => {
    return (
        <View style={styles.bottomItem}>
            <View style={[styles.btmitemview]}>
                <Ionicons
                    name={icon}
                    size={size.xxx_small}
                    color={isActive ? colors.orange : colors.dark}
                />
            </View>
            <View style={styles.text}>
                <Text tag='h3' align="center" style={{ fontWeight: isActive ? '600' : '500', color: isActive ? colors.orange : colors.dark, fontSize: fontScale(14) }}>{text}</Text>
            </View>
        </View>
    )
}

export default BottomItem;