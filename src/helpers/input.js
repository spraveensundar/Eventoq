import emojiRegex from 'emoji-regex';

export const getPasswordValidationRegex = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!value) {
        return 'Password is required';
    } else if (!passwordRegex.test(value)) {
        return 'Password must have ats';
    }

    return undefined;
};

export const phoneNumber = (value) => {
    const phoneRegex = /^\+91[6-9]\d{9}$/;
    if (!value) {
        return 'Phone number is required';
    } else if (!phoneRegex.test(value)) {
        return 'Invalid phone number';
    }
    return undefined;
};

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