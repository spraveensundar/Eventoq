import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { confirmation, email, required } from 'redux-form-validators';
import { reduxForm, Field } from 'redux-form';
import get from "lodash/get";

import { Button, Input } from '../../components/Field';
import WebviewModal from '../../components/DialogBox/Web';

import { showToast } from '../../helpers/notify';
import { navigate } from '../../helpers/navigation';
import { colors, fontScale } from '../../helpers/variables';
import { getPasswordValidationRegex, phoneNumber } from '../../helpers/input';

import useSetup from '../../hooks/useAuth';
import GuestLayout from '../../layout/Guest';
import { EVENTOQ_PRIVACY, EVENTOQ_TERMS } from '../../config';

import styles from './styles';

const SingUp = ({ invalid, handleSubmit, reset }) => {
    const { crud, submitRegister, resetData } = useSetup();
    const { data, fetching, serverError } = get(crud, 'register', {});
    const [popup, setPopup] = useState("");
    const [webUrl, setWebUrl] = useState("");

    console.log(get(crud, 'register', {}))

    const submit = (v) => {
        submitRegister(v);
        reset();
    }

    useEffect(() => {
        return () => {
            resetData('register');
        }
    }, [])

    useEffect(() => {
        if (serverError?.message) {
            showToast(serverError.message);
        } else if (data?.success && !fetching) {
            navigate('DashBoard');
        }
    }, [serverError, data]);

    const handleLinkPress = (type) => {
        setPopup(type);
        const url = type === 'terms' ? EVENTOQ_TERMS : EVENTOQ_PRIVACY;
        setWebUrl(url);
    };

    return (
        <GuestLayout title={"Sign Up"}>
            <Field
                name='name'
                component={Input}
                label="Name"
                placeholder="Enter Your Name"
                validate={required()}
            />
            <Field
                name='email'
                component={Input}
                placeholder="Enter Your Email"
                validate={[required(), email()]}
                label="Email"
            />
            <Field
                name='phoneNo'
                component={Input}
                inputMode="numeric"
                placeholder="Enter Your Phone Number"
                validate={[required(), phoneNumber]}
                label="Phone Number"
            />
            <Field
                name="password"
                component={Input}
                label="Password"
                placeholder="Enter Your Passwrod"
                validate={[required(), getPasswordValidationRegex]}
                secureTextEntry={true}
            />
            <Field
                name="newpassword"
                component={Input}
                label="Confirm Password"
                placeholder="Enter Your Password"
                validate={[required(), confirmation({ field: "password" })]}
                secureTextEntry={true}
            />
            <View style={styles.checkBoxContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Field
                        name="password"
                        type="checkbox"
                        component={Input}
                        label="I have accepted the"
                    />
                    <Text onPress={() => handleLinkPress("terms")} style={{ color: colors.orange }}> terms & <Text onPress={() => handleLinkPress("privacy")}>conditions</Text></Text>
                </View>
            </View>
            <View style={styles.loginButton}>
                <Button
                    text="Sign Up"
                    fetching={fetching}
                    onPress={handleSubmit(submit)}
                    disabled={invalid}
                    buttonTextStyle={{ fontSize: fontScale(17), fontWeight: "500" }}
                />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.account}>Already have an account ?<Text onPress={() => navigate("Login")} style={{ color: colors.light_Orange }}>  Login</Text></Text>
            </View>
            {popup && (
                <WebviewModal
                    title={popup === "terms" ? "Terms & Conditions" : "Privacy Policy"}
                    url={webUrl}
                    onPress={() => setPopup(false)}
                />
            )}
        </GuestLayout>
    )
}

export default reduxForm({
    form: 'register'
})(SingUp);