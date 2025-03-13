import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import get from "lodash/get";
import { reduxForm, Field } from 'redux-form';
import { email, required } from 'redux-form-validators';

import TextLink from '../../../components/TextLink';
import { Button, Input } from '../../../components/Field';

import useSetup from '../../../hooks/useAuth';
import GuestLayout from '../../../layout/Guest';
import { colors } from '../../../helpers/variables';
import { showToast } from '../../../helpers/notify';
import { navigate } from '../../../helpers/navigation';
import { setStorageItem } from '../../../helpers/storage';

import styles from '../styles';


const Login = ({ handleSubmit, invalid, reset }) => {
    const { crud, submitLogin, resetData } = useSetup();
    const [showPassword, setShowPassword] = useState(false);
    const { data, fetching, serverError } = get(crud, 'login', {});

    const submit = (v) => {
        submitLogin(v);
        reset();
    }

    useEffect(() => {
        return () => {
            resetData('login');
        }
    }, [])

    useEffect(() => {
        if (serverError?.message) {
            showToast(serverError.message);
        } else if (data && !fetching) {
            const userName = get(data, 'data.user.name', false);
            const userId = get(data, "data.user._id", false)
            setStorageItem("userName", userName)
            setStorageItem("userId", userId)
            navigate('DashBoard');
        }
    }, [serverError, data]);

    return (
        <GuestLayout title={"Login"}>
            <Field
                name='authinfo'
                component={Input}
                placeholder="Enter Your Email"
                validate={[required(), email()]}
                label="Email"
            />
            <Field
                name='password'
                component={Input}
                label="Password"
                placeholder="Enter Your Password"
                validate={required()}
                secureTextEntry={!showPassword}
            />
            <View style={styles.checkbox}>
                <Field
                    name="remmbers"
                    type="checkbox"
                    component={Input}
                    label="Show Password"
                    input={{
                        value: showPassword ? 1 : 0,
                        onChange: (value) => setShowPassword(value === 1),
                    }}
                />
                <TextLink label={"Forgot Password ?"} />
            </View>
            <View style={styles.loginButton}>
                <Button
                    text="Login"
                    onPress={handleSubmit(submit)}
                    disabled={invalid}
                    fetching={fetching}
                    buttonTextStyle={styles.content}
                />
                <View style={styles.orContent}>
                    <View style={styles.line}></View>
                    <Text style={{ color: colors.dark }}>  Or  </Text>
                    <View style={styles.line}></View>
                </View>
                <Button
                    type="secondary"
                    text="Login with OTP"
                    buttonTextStyle={styles.login}
                    onPress={() => navigate("Verification")}
                />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.account}>Don’t have an account ?<Text onPress={() => navigate("SignUp")} style={{ color: colors.light_Orange }}>  Sign Up</Text></Text>
            </View>
        </GuestLayout>
    )
}

export default reduxForm({
    form: 'login',
    enableReinitialize: true,
})(Login);