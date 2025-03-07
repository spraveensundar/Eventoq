import React from 'react';
import { View } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { length, required } from 'redux-form-validators';

import { Text } from '../../../components/Typography';
import { Button, Input } from '../../../components/Field';

import useSetup from '../../../hooks/useAuth';
import GuestLayout from '../../../layout/Guest';
import { colors, size } from '../../../helpers/variables'

import styles from '../styles';

const OTP = ({ handleSubmit, route }) => {
    const { submitOTP } = useSetup();
    const phoneNo = route.params?.phoneNo || "Unknown";

    const submit = (v) => {
        submitOTP(v)
    }

    return (
        <GuestLayout title={"OTP Verification"}>
            <View style={{ paddingBottom: size.xxx_small }}>
                <Text tag='h3' align={"center"}>We have sent you an OTP to <Text tag='h3' getFontType="bold">{phoneNo}</Text></Text>
            </View>
            <Field
                name="otp"
                type="pincode"
                component={Input}
                validate={[required(), length({ minimum: 6 })]}
            />
            <Button
                text="Login"
                buttonTextStyle={styles.content}
                onPress={handleSubmit(submit)}
            />
            <View style={styles.bottomContainer}>
                <Text style={styles.account}>Didn’t Receive the OTP ? <Text onPress={() => navigate("SignUp")} style={{ color: colors.light_Orange }}>  Resend OTP</Text></Text>
            </View>
        </GuestLayout>
    )
}

export default reduxForm({
    form: 'verification'
})(OTP);