import React from 'react';
import { View, Modal, StatusBar, Image } from 'react-native'
import { WebView } from 'react-native-webview';

import Icon from '../Icon';
import { eventLogo } from '../../assets/images';
import { colors, size } from '../../helpers/variables';

import styles from './styles';

const WebviewModal = ({ url, onPress }) => {
    return (
        <View>
            <Modal visible={true} animationType="slide">
                <StatusBar
                    barStyle={"light-content"}
                    backgroundColor={colors.black}
                    translucent={true}
                />
                <View style={styles.webviewContainer}>
                    <View style={styles.header}>
                        <View style={styles.leftContainer}>
                            <Image source={eventLogo} style={styles.event} resizeMode="contain" />
                        </View>
                        <View style={styles.rightContainer}>
                            <Icon
                                color={colors.white}
                                icon={"close-sharp"}
                                size={size.normal}
                                onPress={onPress}
                            />
                        </View>
                    </View>
                    <WebView
                        bounces={false}
                        incognito={true}
                        scrollEnabled={true}
                        source={{ uri: url }}
                        startInLoadingState={true}
                        style={{ marginTop: -100 }}
                    />
                </View>
            </Modal>
        </View>
    )
}

export default WebviewModal;