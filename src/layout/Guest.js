import React, { useEffect } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Svg, { Path } from 'react-native-svg';

import { event } from '../assets/images';
import { SVG_WAVE } from '../helpers/svg';
import { Title } from '../components/Typography';
import { colors, size } from '../helpers/variables';

import styles from './styles';

const GuestLayout = ({ children, title }) => {
    const insets = useSafeAreaInsets();

    useEffect(() => {
        StatusBar.setBarStyle("dark-content");
        StatusBar.setBackgroundColor(colors.orange);
        StatusBar.setTranslucent(true);
    }, []);

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={[styles.con, { paddingTop: insets.top }]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.orange}
                translucent={true}
            />
            <View style={styles.topContainer}>
                <Image source={event} style={styles.image} resizeMode="cover" />
                <Svg height={"60%"} width={"100%"} viewBox="0 0 1440 320" style={styles.wave}>
                    <Path fill={colors.orange} d={SVG_WAVE} />
                </Svg>
            </View>
            <View style={styles.contentContainer}>
                {
                    title && (
                        <View style={{ paddingBottom: size.xxx_small }}>
                            <Title tag="h1">{title}</Title>
                        </View>
                    )
                }
                {children}
            </View>
        </KeyboardAwareScrollView>
    );
};

export default GuestLayout;