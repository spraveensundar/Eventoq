import React from 'react';
import { View } from 'react-native';

import Container from '../../../components/container';

import Card from './Card';
import Header from './Header';
import { size } from '../../../helpers/variables';

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
                        bgColor={"rgba(255, 230, 230, 1)"}
                        iconColor={"rgba(255, 173, 173, 1)"}
                    />
                    <Card
                        value="4"
                        title="Bookings Confirmed"
                        bgColor={"rgba(255, 173, 173, 1)"}
                    />
                </View>
                <Card
                    value="36,00,000"
                    title="Payment Received"
                    bgColor={"rgba(255, 230, 230, 1)"}
                    iconColor={"rgba(255, 173, 173, 1)"}
                />
                <Card
                    value="12,00,000"
                    title="Pending Payment"
                    bgColor={"rgba(255, 230, 230, 1)"}
                    iconColor={"rgba(255, 173, 173, 1)"}
                />
                <View style={[styles.row, { paddingBottom: size.big }]}>
                    <Card
                        value="8"
                        title="Function Dates"
                        bgColor={"rgba(255, 173, 173, 1)"}
                    />
                    <Card
                        value="4"
                        title="Function Completed"
                        bgColor={"rgba(255, 173, 173, 1)"}
                    />
                </View>
            </Container>
        </>
    )
}

export default Home