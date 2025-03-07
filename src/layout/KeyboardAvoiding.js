import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import styles from './styles';

const KeyboardAvoiding = ({ children, offset = 0, style = {} }) => {
    const getBehavior = () => {
        if (Platform.OS === 'ios') {
            return 'padding';
        }
        return;
    }
    return (
        <KeyboardAvoidingView behavior={getBehavior()} style={[styles.container, style]} keyboardVerticalOffset={offset}>
            {children}
        </KeyboardAvoidingView>
    );
}
export default KeyboardAvoiding;