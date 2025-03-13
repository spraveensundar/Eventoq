import React from 'react';
import { View } from 'react-native';

import Container from '../../../components/container';

import Card from './Card';
import Header from './Header';
import { colors, size } from '../../../helpers/variables';

import styles from './styles';

const Home = () => {
    return (
        <>
            <Header />
            <Container header={false}>
                <View style={styles.row}>
                    <Card
                        value="8"
                        title="Total Request"
                        bgColor={colors.mistyRose}
                        iconColor={colors.lightRed}
                    />
                    <Card
                        value="4"
                        title="Bookings Confirmed"
                        bgColor={colors.lightRed}
                    />
                </View>
                <Card
                    value="36,00,000"
                    title="Payment Received"
                    bgColor={colors.mistyRose}
                    iconColor={colors.lightRed}
                />
                <Card
                    value="12,00,000"
                    title="Pending Payment"
                    bgColor={colors.mistyRose}
                    iconColor={colors.lightRed}
                />
                <View style={[styles.row, { paddingBottom: size.big }]}>
                    <Card
                        value="8"
                        title="Function Dates"
                        bgColor={colors.lightRed}
                    />
                    <Card
                        value="4"
                        title="Function Completed"
                        bgColor={colors.lightRed}
                    />
                </View>
            </Container>
        </>
    )
}

export default Home