import emojiRegex from 'emoji-regex';
import { format } from "redux-form-validators";

export const getPasswordValidationRegex = () => {
    return format({ with: /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/ });
}

export function cleanInput(value, removeEmoji = true) {
    if (!value) {
        return '';
    }
    if (removeEmoji === true) {
        const emojis = emojiRegex();
        return value.toString().replace(emojis, '');
    }
    return value;
}

export const passwordValidator = (value) => {
    const number = /(?=.*[0-9])/;
    const upper = /(?=.*[A-Z])/;
    const lower = /(?=.*[a-z])/;
    let error = {};
    error.number = false;
    error.uppercase = false;
    error.lowercase = false;
    error.minlength = false;
    if (value) {
        if (value.length >= 12)
            error.minlength = true
        if (number.test(value))
            error.number = true
        if (upper.test(value))
            error.uppercase = true
        if (lower.test(value))
            error.lowercase = true
    }
    return error;
}