import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { confirmation, email, length, required } from 'redux-form-validators';
import { reduxForm, Field } from 'redux-form';
import get from "lodash";

import { Button, Input } from '../../components/Field';
import WebviewModal from '../../components/DialogBox/Web';

import { showToast } from '../../helpers/notify';
import { navigate } from '../../helpers/navigation';
import { colors, fontScale } from '../../helpers/variables';
import { getPasswordValidationRegex, passwordValidator } from '../../helpers/input';

import useSetup from '../../hooks/useAuth';
import GuestLayout from '../../layout/Guest';
import { EVENTOQ_PRIVACY, EVENTOQ_TERMS } from '../../config';

import styles from './styles';

const SingUp = ({ invalid, handleSubmit, reset }) => {
    const { crud, submitRegister } = useSetup();
    const { fetching } = get(crud, "data", {});
    const [error, setError] = useState({});
    const message = crud.login.serverError.message;
    const [popup, setPopup] = useState("");
    const [webUrl, setWebUrl] = useState("");

    const submit = (v) => {
        submitRegister(v);
        showToast(message)
        reset();
    }

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
                placeholder="Enter Your Phone Number"
                validate={required()}
                label="Phone Number"
            />
            <Field
                name="password"
                component={Input}
                label="Password"
                placeholder="Enter Your Passwrod"
                validate={[required(), length({ minimum: 8 }), getPasswordValidationRegex()]}
                secureTextEntry={true}
                onChange={(value) => setError(passwordValidator(value))}
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