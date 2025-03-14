import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Svg, { Path } from 'react-native-svg';

import Icon from '../components/Icon';
import { Title } from '../components/Typography';

import { colors, size } from '../helpers/variables';
import { header, headerLogo } from '../assets/images';
import { FLOWER, LEAF_FIVE, LEAF_FOUR, LEAF_ONE, LEAF_SIX, LEAF_THREE, LEAF_TWO, WAVE } from '../helpers/svg';

import styles from './styles';

const GuestLayout = (props) => {
    const {
        children,
        title,
        event = true,
        leftIconPress = false
    } = props;

    const insets = useSafeAreaInsets();

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={[styles.container, { paddingTop: insets.top }]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
            <StatusBar
                barStyle="dark-content"
                backgroundColor={"transparent"}
                translucent={true}
            />
            <View style={styles.topContainer}>
                <View style={styles.image}></View>
                <Svg height={"60%"} width={"100%"} viewBox="0 0 1440 320" style={styles.wave}>
                    <Path fill={colors.orange} d={WAVE} />
                </Svg>
                <Svg width={160} height={250} viewBox="0 0 141 197" fill="none" style={styles.flower}>
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d={FLOWER}
                        fill={colors.salmon}
                    />
                </Svg>

                <Svg width={106} height={144} viewBox="0 0 106 144" fill="none" style={styles.leafOne}>
                    <Path
                        d={LEAF_ONE}
                        fill={colors.salmon}
                    />
                </Svg>

                <Svg width={212} height={216} viewBox="0 0 212 216" fill="none" style={styles.leafTwo}>
                    <Path
                        d={LEAF_TWO}
                        stroke={colors.salmon}
                        strokeWidth={3}
                    />
                </Svg>
                <Svg width={50} height={63} viewBox="0 0 53 66" fill="none" style={styles.leafThree}>
                    <Path
                        d={LEAF_THREE}
                        fill={colors.salmon}
                    />
                </Svg>

                <Svg width={221} height={222} viewBox="0 0 221 222" fill="none" style={styles.leafFour}>
                    <Path
                        d={LEAF_FOUR}
                        stroke={colors.salmon}
                        strokeWidth={3}
                    />
                </Svg>

                <Svg width={232} height={222} viewBox="0 0 232 222" fill="none" style={styles.leafFive}>
                    <Path
                        d={LEAF_FIVE}
                        stroke={colors.salmon}
                        strokeWidth={3}
                    />
                </Svg>
                <Svg width={243} height={222} viewBox="0 0 243 222" fill="none" style={styles.leafSix}>
                    <Path
                        d={LEAF_SIX}
                        stroke={colors.salmon}
                        strokeWidth={3}
                    />
                </Svg>
                {
                    event === true && (
                        <Image source={header} style={styles.header} resizeMode="contain" />
                    )
                }
                {
                    event === false && (
                        <Image source={headerLogo} style={styles.headerLogo} resizeMode="contain" />
                    )
                }
                {
                    leftIconPress !== false && (
                        <View style={styles.leftContainer}>
                            <Icon
                                icon="arrow-back"
                                color={colors.black}
                                size={size.normal}
                                onPress={leftIconPress}
                            />
                        </View>
                    )
                }
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