import React, { useEffect } from 'react';
import { View } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { length, required } from 'redux-form-validators';
import get from "lodash/get";

import { Text } from '../../../components/Typography';
import { Button, Input } from '../../../components/Field';

import useSetup from '../../../hooks/useAuth';
import GuestLayout from '../../../layout/Guest';
import { showToast } from '../../../helpers/notify'
import { colors, size } from '../../../helpers/variables';
import { goBack, navigate } from '../../../helpers/navigation';

import styles from '../styles';

const OTP = ({ handleSubmit, route }) => {
    const { crud, submitOTP, resetData } = useSetup();
    const { data, fetching, serverError } = get(crud, 'verification', {});
    const phoneNo = route.params?.phoneNo || "Unknown";

    console.log(get(crud, 'verification', {}))

    const submit = (v) => {
        submitOTP({ ...v, phoneNo })
    }

    useEffect(() => {
        return () => {
            resetData('verification');
        }
    }, [])

    useEffect(() => {
        if (serverError?.message) {
            showToast(serverError.message);
        } else if (data?.success === true) {
            navigate('DashBoard')
        }
    }, [serverError, data]);

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
                fetching={fetching}
                buttonTextStyle={styles.content}
                onPress={handleSubmit(submit)}
            />
            <View style={styles.bottomContainer}>
                <Text style={styles.account}>Didn’t Receive the OTP ? <Text onPress={() => goBack()} style={{ color: colors.light_Orange }}>  Resend OTP</Text></Text>
            </View>
        </GuestLayout>
    )
}

export default reduxForm({
    form: 'verification',
    enableReinitialize: true
})(OTP);