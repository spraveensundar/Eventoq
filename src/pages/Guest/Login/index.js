import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import get from "lodash"
import { combine, email, required } from 'redux-form-validators';
import { navigate } from '../../../helpers/navigation';
import styles from '../styles';
import { colors, fontScale } from '../../../helpers/variables';
import { Button, Input } from '../../../components/Field';
import TextLink from '../../../components/TextLink';
import { showToast } from '../../../helpers/notify';
import GuestLayout from '../../../layout/Guest';
import useSetup from '../../../hooks/useAuth';


const Login = ({ handleSubmit, invalid, reset }) => {
    const { curd, submitLogin } = useSetup();
    const { fetching } = get(curd, "data", {});
    const [showPassword, setShowPassword] = useState(false);
    const message = curd.login.serverError.message;

    const submit = (v) => {
        submitLogin(v);
        if (curd.login.data.sessionToken) {
            return navigate('Home')
        }
        showToast(message)
        setShowPassword(true)
        reset();
    }

    return (
        <GuestLayout title={"Login"}>
            <Field
                name='authinfo'
                component={Input}
                placeholder="Enter Your Email"
                validate={combine(required({ message: 'Required field' }), email({ message: 'Please enter a valid email address' }))}
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
                    />
                </View>
                <View>
                    <TextLink label={"Forgot Password ?"} />
                </View>
            </View>
            <View style={styles.loginButton}>
                <Button
                    text="Login"
                    fetching={fetching}
                    onPress={handleSubmit(submit)}
                    disabled={invalid}
                    buttonTextStyle={{ fontSize: fontScale(17), fontWeight: "500" }}
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
                />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.account}>Don’t have an account ?<Text onPress={() => navigate("DashBoard")} style={{ color: colors.light_Orange }}>  Sign Up</Text></Text>
            </View>
        </GuestLayout>
    )
}

export default reduxForm({
    form: 'login',
    initialValues: { authinfo: '', password: '' }
})(Login);