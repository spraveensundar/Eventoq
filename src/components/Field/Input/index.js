import React, { useEffect, useRef, useState } from 'react';

import Input from './Input';
import Checkbox from './Checkbox';
import { cleanInput } from '../../../helpers/input';
import InputOTP from './OTP';


export default function FieldInput(props) {
    const {
        type = "text",
        helpText = true,
        showCount = false,
        emptyValue = false,
        debounce = true,
        loginInput = loginInput,
        require = require,
        ...otherProps
    } = props;

    const { input: { value, onChange } } = otherProps;
    const [currentValue, setCurrentValue] = useState(cleanInput(value));
    const timer = useRef(0);

    useEffect(() => {
        if (emptyValue !== false && !value.toString()) {
            onChange(emptyValue);
        }
        return () => {
            clearTimeout(timer.current)
        }
    }, []);

    useEffect(() => {
        if (value !== currentValue) {
            setCurrentValue(cleanInput(value))
        }
    }, [value])

    if (type === "checkbox") {
        return (
            <Checkbox {...otherProps} />
        )
    }

    if (type === "pincode") {
        return (
            <InputOTP {...otherProps} />
        )
    }

    return (
        <Input {...otherProps} />
    )
}