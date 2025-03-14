import React from 'react';
import { View, Image } from 'react-native';

import Container from '../../../components/container';
import { Text } from '../../../components/Typography';

import { colors, size } from '../../../helpers/variables';
import { list } from '../../../assets/images';

import styles from './Create/styles';

const Listings = () => {
    return (
        <Container header={false} style={styles.container}>
            <Image source={list} style={styles.account} resizeMode="contain" />
            <View style={{ alignItems: "center" }}>
                <Text margin={30} tag='h1'>Ready to showcase</Text>
                <Text margin={10} tag='h1'>your services?</Text>
                <View style={{ paddingHorizontal: size.xxx_small }}>
                    <Text margin={20} tag='h3' align={"center"} color={colors.black}>Add your first listing to start attracting customers and bookings!</Text>
                </View>
            </View>
        </Container>
    )
}

export default Listings;