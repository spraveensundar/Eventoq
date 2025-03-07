import React from 'react';
import { View, Image, } from 'react-native';
import { colors, normalize, size } from '../helpers/variables';
import { Text } from './Typography';
import styles from './styles';
import Icon from './Icon';

const BottomItem = ({ icon, isActive, text }) => {
    return (
        <View style={{ paddingTop: size.xxxx_tiny, justifyContent: 'space-evenly', flex: 1 }}>
            <View style={[styles.btmitemview]}>
                <Icon
                    icon={icon}
                    size={size.xxx_small}
                    color={colors.black}
                />
            </View>
            <View style={{ paddingVertical: size.tiny, flexWrap: 'wrap' }}>
                <Text tag='h1' style={{ fontWeight: isActive ? '600' : '500', color: isActive ? colors.black : colors.dark, textAlign: 'center' }}>{text}asdf</Text>
            </View>
        </View>
    )
}

export default BottomItem;