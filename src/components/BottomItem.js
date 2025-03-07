import React from 'react';
import { View } from 'react-native';

import Icon from './Icon';
import { Text } from './Typography';
import { colors, size } from '../helpers/variables';

import styles from './styles';

const BottomItem = ({ icon, isActive, text }) => {
    return (
        <View style={styles.bottomItem}>
            <View style={[styles.btmitemview]}>
                <Icon
                    icon={icon}
                    size={size.xxx_small}
                    color={colors.black}
                />
            </View>
            <View style={styles.text}>
                <Text tag='h1' style={{ fontWeight: isActive ? '600' : '500', color: isActive ? colors.black : colors.dark, textAlign: 'center' }}>{text}</Text>
            </View>
        </View>
    )
}

export default BottomItem;