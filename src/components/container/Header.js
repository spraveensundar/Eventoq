import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from '../Icon';
import { Title } from '../Typography';
import { goBack } from '../../helpers/navigation';
import { colors, size } from '../../helpers/variables';

import styles from './styles';

const Header = (props) => {
    const {
        title,
        onPress = () => goBack(),
        leftIcon = true,
        rightIcon = true,
    } = props;
    const insets = useSafeAreaInsets();
    return (
        <View style={{ paddingTop: insets.top }}>
            <View style={styles.header}>
                {
                    leftIcon !== false && (
                        <View style={styles.leftContainer}>
                            <Icon
                                icon="arrow-back"
                                color={colors.black}
                                size={size.normal}
                                onPress={onPress}
                            />
                        </View>
                    )
                }
                {
                    title && (
                        <Title tag='label' style={styles.title}>{title}</Title>
                    )
                }
                {
                    rightIcon !== false && (
                        <Icon
                            icon={rightIcon}
                            size={size.regular}
                            color={colors.white}
                            containerStyle={styles.rightContainer}
                        />
                    )
                }

            </View>
        </View>
    )
}

export default Header;