import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { email, required } from 'redux-form-validators';

import TextLink from '../../../components/TextLink';
import { Button, Input } from '../../../components/Field';

import useSetup from '../../../hooks/useAuth';
import GuestLayout from '../../../layout/Guest';
import { showToast } from '../../../helpers/notify';
import { colors } from '../../../helpers/variables';
import { navigate } from '../../../helpers/navigation';

import styles from '../styles';

const Login = ({ handleSubmit, invalid, reset }) => {
    const { crud, submitLogin } = useSetup();
    const message = crud?.login?.serverError?.message;
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (message) {
            showToast(message);
        }
    }, [crud.login.serverError]);

    const submit = (v) => {
        submitLogin(v);
        if (crud.login.data.sessionToken) {
            return navigate('DashBoard')
        }
        setShowPassword(true)
        reset();
    }

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
                <View>
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
                </View>
                <View>
                    <TextLink label={"Forgot Password ?"} />
                </View>
            </View>
            <View style={styles.loginButton}>
                <Button
                    text="Login"
                    onPress={handleSubmit(submit)}
                    disabled={invalid}
                    buttonTextStyle={styles.content}
                />
                <View style={styles.orContent}>
                    <View style={styles.line}></View>
                    <Text>  Or  </Text>
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
    form: 'login'
})(Login);