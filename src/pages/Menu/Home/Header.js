import React from 'react';
import { View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import { eventtoq } from '../../../assets/images';
import { colors, size } from '../../../helpers/variables';

import Icon from '../../../components/Icon';

import styles from './styles';

const Header = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ paddingTop: insets.top }}>
            <View style={styles.header}>
                <View style={styles.leftContainer}>
                    <Image source={eventtoq} style={styles.event} resizeMode="contain" />
                </View>
                <View style={styles.rightContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon
                            icon="notifications"
                            size={size.regular}
                            color={colors.white}
                            containerStyle={styles.card}
                        />
                        <View style={{ paddingLeft: size.small }}>
                            <Icon
                                icon="cart"
                                size={size.regular}
                                color={colors.white}
                                containerStyle={styles.card}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Header