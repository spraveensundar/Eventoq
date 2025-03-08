import { View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { OtpInput } from 'react-native-otp-entry';

import styles from './styles';

const InputOTP = (props) => {
    const {
        length = 6,
        isInputSecure = false,
        input: { onChange, value }
    } = props;

    const otpInput = useRef("");

    useEffect(() => {
        otpInput.current?.setValue(value || "");
    }, [value]);

    const handleChange = otpValue => {
        onChange(otpValue);
    };

    return (
        <View style={styles.pinCode}>
            <OtpInput
                ref={otpInput}
                numberOfDigits={length}
                onTextChange={handleChange}
                secureTextEntry={isInputSecure}
                type="numeric"
                theme={{
                    containerStyle: styles.container,
                    pinCodeContainerStyle: styles.pinCodeContainer,
                    pinCodeTextStyle: styles.pinCodeText,
                    focusStickStyle: styles.focusStick,
                    focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                }}
            />
        </View>
    )
}

export default InputOTP;