import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

import { colors } from '../../../helpers/variables';

import styles from './styles';

const PhoneNumberInput = ({ input: { onChange, value }, meta, label, placeholder }) => {
    const phoneInputRef = useRef(null);

    const { touched = false, error = "" } = meta;
    const isShow = touched && error && !disabled;

    return (
        <View style={styles.formContainer}>
            <Text style={styles.labelText}>{label}</Text>
            <PhoneInput
                ref={phoneInputRef}
                defaultValue={value}
                defaultCode="IN"
                layout="first"
                disableArrowIcon={true}
                onChangeFormattedText={onChange}
                containerStyle={styles.form}
                textContainerStyle={styles.textContainer}
                textInputStyle={styles.phoneLabel}
                codeTextStyle={styles.phoneLabel}
                flagButtonStyle={{ display: 'none' }}
                placeholder={placeholder}

            />
            {
                isShow && (
                    <View style={styles.errorText}>
                        <Text style={{ color: colors.red }}>{error}</Text>
                    </View>
                )}
        </View>
    );
};

export default PhoneNumberInput;
