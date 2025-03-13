import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { get } from "lodash";

const BackEventHandler = ({ navigationRef }) => {

    useEffect(() => {
        const onBackPress = () => {
            const currentRoute = get(navigationRef.current.getCurrentRoute(), "name", '');
            if (["Home", "DashBoard"].includes(currentRoute)) {
                return true;
            }
            return false;
        };

        if (BackHandler.addEventListener) {
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
        }

        return () => {
            if (BackHandler.removeEventListener) {
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
            }
        };
    }, []);

    return null;
}

export default BackEventHandler;