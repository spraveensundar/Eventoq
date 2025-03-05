import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';

import FormGroup from '../FormGroup';

import styles from './styles';

const Input = (props) => {
    const {
        input: { value, onBlur, onChange },
        placeholder,
        disabled = false,
        meta,
        label,
        secureTextEntry,
        style = {}
    } = props;

    const [focus, setFocus] = useState(false);
    const [values, setValues] = useState(value || '');

    const handleOnChange = (e) => {
        onChange(e);
        setValues(e);
    }

    const onBlurHandler = (e) => {
        onBlur(e)
    }

    useEffect(() => {
        onChange(value);
        setValues(value);
    }, [value, focus])

    return (
        <FormGroup
            meta={meta}
            label={label}
            disabled={disabled}>
            <TextInput
                value={values}
                onChange={onChange}
                autoCorrect={false}
                editable={!disabled}
                onBlur={onBlurHandler}
                placeholder={placeholder}
                onChangeText={handleOnChange}
                onFocus={() => setFocus(true)}
                style={styles.inputContainer}
                placeholderTextColor={"#A1A1A1"}
                secureTextEntry={secureTextEntry}
                underlineColorAndroid="transparent"
            />
        </FormGroup>
    )
}

export default Input;