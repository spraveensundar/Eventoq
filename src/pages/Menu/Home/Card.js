import React from 'react';
import { View } from 'react-native';

import Icon from '../../../components/Icon';
import { Text } from '../../../components/Typography';

import { colors, size } from '../../../helpers/variables';

import styles from './styles';

const Card = ({ title, value, bgColor, iconColor = colors.mistyRose }) => {
    return (
        <View style={[styles.cardContainer, { backgroundColor: bgColor }]}>
            <View style={styles.title}>
                <Text tag='h2'>{title}</Text>
            </View>
            <View style={styles.content}>
                <Icon
                    icon="arrow-forward"
                    size={size.regular}
                    containerStyle={[styles.icon, { backgroundColor: iconColor }]}
                />
                <Text tag='big'>{value}</Text>
            </View>
        </View>
    )
}

export default Card;