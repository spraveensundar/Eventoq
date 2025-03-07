import Toast from 'react-native-root-toast';

export const showToast = (message, multiple = false) => {
    if (message === "") {
        return "invalid";
    }
    if (isObject(message)) {
        message = errorMessageFromObject(message, multiple);
    } else if (Array.isArray(message)) {
        message = errorMessageFromArray(message, multiple);
    }
    Toast.show(message, {
        duration: 5000,
        position: -30,
        animation: true,
        shadow: false,
        hideOnPress: true,
        opacity: 0.9
    });

};

const errorMessageFromObject = (errors, multiple) => {
    let arr = [];
    Object.entries(errors).map(([key, value]) => {
        if (Array.isArray(value)) {
            value.map(m => arr.push(m));
        } else {
            arr.push(value);
        }
        return true;
    });
    return errorMessageFromArray(arr, multiple);
};

const errorMessageFromArray = (errors, multiple) => {
    if (errors.length) {
        if (multiple === true) {
            let temp = [];
            errors.map(error => temp.push(error.Value));
            return temp.join('\n\n');
        }
        return errors[0];
    }
    return '';
};

export const isObject = obj => {
    if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
        return true;
    }
    return false;
}