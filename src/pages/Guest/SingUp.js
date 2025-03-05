import { View, Text } from 'react-native'
import React, { useState } from 'react'
import useSetup from 'c:/Users/prave/OneDrive/Desktop/New folder (2)/AwesomeProject/src/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import GuestLayout from 'c:/Users/prave/OneDrive/Desktop/New folder (2)/AwesomeProject/src/layouts/Guest';
import { combine, confirmation, email, length, required } from 'redux-form-validators';
import { colors, fontScale } from '../../helpers/variables';
import { reduxForm, Field } from 'redux-form';

import get from "lodash"
import { getPasswordValidationRegex, passwordValidator } from '../../helpers/input';
import { showToast } from '../../helpers/notify';
import { Button, Input } from '../../components/Field';
import styles from './styles';
import { navigate } from '../../helpers/navigation';

const SingUp = ({ invalid, handleSubmit, reset }) => {
    const { curd, submitRegister } = useSetup();
    const { fetching } = get(curd, "data", {});
    const [error, setError] = useState({});
    const message = curd.login.serverError.message;

    const submit = (v) => {
        submitRegister(v);
        showToast(message)
        reset();
    }

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
                validate={combine(required({ message: 'Required field' }), email({ message: 'Please enter a valid email address' }))}
                label="Email"
            />
            <Field
                name='phoneNo'
                component={Input}
                placeholder="Enter Your PhoneNo"
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
                    <Text style={{ color: colors.orange }}> terms & conditions</Text>
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
        </GuestLayout>
    )
}

export default reduxForm({
    form: 'register',
    initialValues: { authinfo: '', password: '' }
})(SingUp);