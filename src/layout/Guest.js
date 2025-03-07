import { View, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { SVG_WAVE } from '../helpers/svg';
import { Title } from '../components/Typography';
import Svg, { Path } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { event } from '../assets/images';
import { colors, normalize, size } from '../helpers/variables';

const GuestLayout = ({ children, title }) => {
    const insets = useSafeAreaInsets();

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={[styles.con, { paddingTop: insets.top }]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
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

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: colors.orange,
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    },
    image: {
        width: "60%",
        height: normalize(180),
    },
    wave: {
        position: "absolute",
        bottom: -70,
        left: 0,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: size.big,
        paddingHorizontal: size.xx_normal
    },
});

export default GuestLayout;
