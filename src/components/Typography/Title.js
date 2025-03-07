import React from 'react';
import { Text as NormalText } from 'react-native';

import styles from './styles';

export default function Title({ children, style = {}, tag = "h1", margin = false }) {
    return (
        <NormalText style={[styles[tag] ? styles[tag] : {}, !margin ? styles.margin0 : styles.margin30, style]}>
            {children}
        </NormalText>
    )
}