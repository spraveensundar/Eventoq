import React from 'react';
import { View } from 'react-native';

import Icon from '../../../components/Icon';
import Container from '../../../components/container';
import { Text } from '../../../components/Typography';

import Panel from './Panel';
import PanelItem from './Helpers';
import { colors, size } from '../../../helpers/variables';

import styles from './styles';

const Profile = () => {
    return (
        <Container title="Profile">
            <View style={styles.user}>
                <Icon
                    icon="person"
                    size={size.xxxx_big}
                    color={colors.white}
                    style={styles.icon}
                    containerStyle={styles.userContainer}
                />
                <View style={styles.userName}>
                    <Text tag='label'>Michael Scott</Text>
                </View>
            </View>
            {
                PanelItem.map((item, index) => {
                    return (
                        <Panel
                            key={index}
                            icon={item.icon}
                            title={item.name}
                            onPress={item.onPress}
                        />
                    )
                })
            }
            <View style={styles.copyRight}>
                <Text tag='h3' fontType="medium">© Copyright | All Rights Reserved </Text>
            </View>
        </Container>
    )
}

export default Profile;