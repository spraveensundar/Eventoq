import React from 'react';
import { Alert, View } from 'react-native';

import Icon from '../../../components/Icon';
import Container from '../../../components/container';
import { Text } from '../../../components/Typography';

import Panel from './Panel';
import PanelItem from './Helpers';
import useSetup from '../../../hooks/useAuth';
import { colors, size } from '../../../helpers/variables';
import { getStorageItem } from '../../../helpers/storage';

import styles from './styles';

const Profile = () => {
    const userId = getStorageItem("userId")
    const { userLogout } = useSetup()

    const logoutHandle = () => {
        Alert.alert(
            'Eventoq',
            'Are you sure you want to logout?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        userLogout({ userId: userId })
                    },
                },
                { text: 'No' },
            ],
            { cancelable: false }
        );
    }

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
                    <Text tag='label'>{getStorageItem("userName")}</Text>
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

            <Panel
                icon="power-outline"
                title="Logout"
                onPress={logoutHandle}
            />
            <View style={styles.copyRight}>
                <Text tag='h3' fontType="medium">© Copyright | All Rights Reserved </Text>
            </View>
        </Container>
    )
}

export default Profile;