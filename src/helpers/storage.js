import { MMKV } from 'react-native-mmkv';

export const localStorage = new MMKV({
    id: `eventoq-app`,
    encryptionKey: 'eventoq-app'
});

export const setStorageItem = (key, value, stringfy = false) => {
    if (stringfy === true) {
        return localStorage.set(key, JSON.stringify(value));
    }
    return localStorage.set(key, value);
};

export const getStorageItem = (key, parse) => {
    if (parse === true) {
        let value = localStorage.getString(key);
        if (value) {
            return JSON.parse(value);
        }
    }
    return localStorage.getString(key);
};

export const removeStorageItem = (key) => {
    return localStorage.delete(key);
}

export const clearStorageItem = () => {
    return localStorage.clearAll();
}