import { createNavigationContainerRef } from "@react-navigation/native";
import { Linking } from "react-native";

import { EVENTOQ_PHONE } from "../config";

export const navigationRef = createNavigationContainerRef();

export function goBack() {
    if (navigationRef.isReady()) {
        navigationRef.current.goBack()
    }
}

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.current?.navigate(name, params);
    }
}

export const makePhoneCall = () => {
    Linking.openURL(`tel:${EVENTOQ_PHONE}`);
};