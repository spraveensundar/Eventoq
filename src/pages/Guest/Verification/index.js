import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import get from "lodash/get";
import { reduxForm, Field } from 'redux-form';
import { required } from 'redux-form-validators';

import { Text } from '../../../components/Typography';
import { Button, Input } from '../../../components/Field';

import { showToast } from '../../../helpers/notify';
import { goBack, navigate } from '../../../helpers/navigation';
import { colors, fontScale, size } from '../../../helpers/variables';

import useSetup from '../../../hooks/useAuth';
import GuestLayout from '../../../layout/Guest';

import styles from '../styles';

const Verification = ({ handleSubmit, invalid, reset }) => {
    const { crud, requestOTP, resetData } = useSetup();
    const { data, fetching, serverError } = get(crud, 'otp', {});
    const [phone, phoneNumber] = useState(null);

    const submit = (v) => {
        requestOTP(v);
        phoneNumber(v.phoneNo)
        reset();
    }

    useEffect(() => {
        return () => {
            resetData('otp');
        }
    }, [])

    useEffect(() => {
        if (serverError?.message) {
            showToast(serverError.message);
        } else if (data?.success === true) {
            navigate('OTP', { phoneNo: phone })
        }
    }, [serverError, data]);

    return (
        <GuestLayout title={"Login"}>
            <View style={{ paddingBottom: size.xxx_small }}>
                <Text tag='h3' align={"center"}>We will send you an <Text tag='h3' getFontType="bold">One Time Password</Text> on this phone number</Text>
            </View>
            <Field
                name='phoneNo'
                component={Input}
                label="Phone"
                inputMode="numeric"
                validate={required()}
                placeholder="Enter Your Phone Number"
            />
            <View style={styles.loginButton}>
                <Button
                    text="Get OTP"
                    disabled={invalid}
                    fetching={fetching}
                    onPress={handleSubmit(submit)}
                    buttonTextStyle={{ fontSize: fontScale(17), fontWeight: "500" }}
                />
                <View style={styles.orContent}>
                    <View style={styles.line}></View>
                    <Text>  Or  </Text>
                    <View style={styles.line}></View>
                </View>
                <Button
                    type="secondary"
                    text="Login with Email"
                    onPress={() => goBack()}
                    buttonTextStyle={styles.login}
                />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.account}>Don’t have an account ?<Text onPress={() => navigate("SignUp")} style={{ color: colors.light_Orange }}>  Sign Up</Text></Text>
            </View>
        </GuestLayout>
    )
}

export default reduxForm({
    form: 'otp',
    enableReinitialize: true
})(Verification);