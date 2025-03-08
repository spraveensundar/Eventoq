import React from 'react';
import { View, Pressable } from 'react-native';

import Icon from '../../../components/Icon';
import { Text } from '../../../components/Typography';

import { colors, size } from '../../../helpers/variables';

import styles from './styles'

const Panel = ({ icon, onPress, title }) => {
    return (
        <Pressable style={styles.panelContainer} onPress={onPress}>
            <Icon
                icon={icon}
                onPress={onPress}
                color={colors.black}
                size={size.xxx_small}
            />
            <View style={{ paddingRight: size.xx_small }}>
                <Text tag='h2'>{title}</Text>
            </View>
        </Pressable>
    )
}

export default Panel