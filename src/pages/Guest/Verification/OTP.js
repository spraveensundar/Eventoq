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
import { colors, fonts, size } from '../../../helpers/variables';
import { goBack, navigate } from '../../../helpers/navigation';

import styles from '../styles';

const OTP = ({ handleSubmit, route, reset }) => {
    const { crud, submitOTP, resetData, requestOTP } = useSetup();
    const { data, fetching, serverError } = get(crud, 'verification', {});
    const { fetching: otpFetching = false } = get(crud, 'otp', {});
    const phoneNo = route.params?.phoneNo || "Unknown";

    const submit = (v) => {
        submitOTP({ ...v, phoneNo })
    }

    const resendOTP = (v) => {
        requestOTP(v);
        reset();
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
                <Text tag='h3' align={"center"}>We have sent you an OTP to <Text tag='h3' getFontType="bold" style={{ fontWeight: "700" }}>{phoneNo}</Text></Text>
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
                <Text style={styles.account}>Didn’t Receive the OTP ? <Text onPress={() => resendOTP({ phoneNo: phoneNo })} style={{ color: colors.light_Orange, fontFamily: fonts.poppinsMedium, opacity: otpFetching ? 0.4 : 1 }}>  Resend OTP</Text></Text>
            </View>
        </GuestLayout>
    )
}

export default reduxForm({
    form: 'verification',
    enableReinitialize: true
})(OTP);