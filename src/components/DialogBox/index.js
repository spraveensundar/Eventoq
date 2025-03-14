import React from 'react';
import { View, Modal, ScrollView } from 'react-native';

import Icon from '../Icon';
import { Title } from '../Typography';
import { colors, size } from '../../helpers/variables';
import KeyboardAvoiding from '../../layout/KeyboardAvoiding';

import styles from './styles';

const DialogBox = (props) => {
    const {
        content,
        style = {},
        type = "fade",
        title = "DofE",
        closeIcon = true,
        onClose = () => { },
        interSemibold = false
    } = props;

    return (
        <View>
            <Modal visible={true} transparent={true} animationType={type} statusBarTranslucent>
                <KeyboardAvoiding>
                    {
                        type === "fade" && (
                            <View style={styles.container}>
                                <View style={styles.whiteContainer}>
                                    <View style={[styles.contentContainer, style]}>
                                        <Title tag='h4' style={styles.title} numberOfLines={1}>{title}</Title>
                                        {
                                            closeIcon === true && (
                                                <View style={styles.closeIconContainer}>
                                                    <Icon
                                                        icon="fa-solid fa-xmark"
                                                        onPress={onClose}
                                                        color={colors.white}
                                                        size={size.xxx_small}
                                                        containerStyle={interSemibold !== true && styles.closeContainer}
                                                    />
                                                </View>
                                            )
                                        }
                                    </View>
                                    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                                        {content}
                                    </ScrollView>
                                </View>
                            </View>
                        )
                    }
                    {
                        type === "slide" && (
                            <>
                                {content}
                            </>
                        )
                    }
                </KeyboardAvoiding>
            </Modal>
        </View>
    );
}

export default DialogBox;