import React from 'react';
import { Text as NormalText } from 'react-native';

import styles from './styles';

export default function Text({ children, style = {}, tag = "p", margin = false, required = false, onPress = null, color = false, fontType = false, align = false }) {
    return (
        <NormalText
            style={
                [styles.p, styles[tag] ? styles[tag] : {},
                margin === false ? {} : getMarginClass(margin),
                !color ? {} : { color: color },
                !fontType ? {} : getFontType(fontType),
                !align ? {} : getTextAlign(align), style]}
            onPress={onPress}>
            {children}
            {
                required === true && (
                    <NormalText style={styles.required}> *</NormalText>
                )
            }
        </NormalText>
    )
}

const getMarginClass = (margin) => {
    if (margin === 0) {
        return styles.margin0;
    }
    if (margin === 5) {
        return styles.margin5;
    }
    if (margin === 20) {
        return styles.margin20;
    }
    if (margin === 30) {
        return styles.margin30;
    }
    return styles.margin10
}

const getFontType = (type) => {
    if (type === 'bold') {
        return styles.bold;
    }
    if (type === 'medium') {
        return styles.medium;
    }
    if (type === 'semiBold') {
        return styles.semiBold;
    }
    return styles.regular
}

const getTextAlign = (align) => {
    if (align === 'center') {
        return styles.center;
    }
    if (align === 'right') {
        return styles.right;
    }
    return styles.left
}
