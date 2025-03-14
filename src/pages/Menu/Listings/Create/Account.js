import React from 'react';
import { Image, View } from 'react-native';

import { stepsone } from '../../../../assets/images';
import { colors, size } from '../../../../helpers/variables';

import { Button } from '../../../../components/Field';
import Container from '../../../../components/container';
import { Text } from '../../../../components/Typography';

import styles from './styles';

const Account = () => {
    return (
        <Container header={false} style={styles.container}>
            <Image source={stepsone} style={styles.account} resizeMode="contain" />
            <View style={{ alignItems: "center" }}>
                <Text margin={30} tag='h1'>Congratulations !</Text>
                <Text margin={20} tag='h3' color={colors.black}>You have successfully created</Text>
                <Text tag='h3' color={colors.black}>an account</Text>
                <View style={{ paddingTop: size.x_normal }}>
                    <Button
                        text="Next"
                        style={styles.nextButton}
                    />
                </View>
            </View>
        </Container>
    )
}

export default Account;