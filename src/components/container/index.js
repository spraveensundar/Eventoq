import React, { useEffect } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';

import Header from './Header';
import styles from './styles';
import { colors } from '../../helpers/variables';
import KeyboardAvoiding from '../../layout/KeyboardAvoiding';

const Container = (props) => {
    const {
        children,
        title,
        backgroundColor = colors.white,
        leftIcon,
        rightIcon,
        header = true,
    } = props;

    useEffect(() => {
        StatusBar.setBarStyle("dark-content");
        StatusBar.setBackgroundColor(colors.white);
        StatusBar.setTranslucent(true);
    }, []);

    return (
        <View style={[styles.container, { backgroundColor }]}>
            {
                header !== false && (
                    <Header
                        title={title}
                        leftIcon={leftIcon}
                        rightIcon={rightIcon}
                    />
                )
            }
            <KeyboardAvoiding>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    style={styles.subContainer}
                    contentContainerStyle={styles.scrollContent}>
                    <View style={styles.content}>
                        {children}
                    </View>
                </ScrollView>
            </KeyboardAvoiding>
        </View>
    )
}

export default Container;