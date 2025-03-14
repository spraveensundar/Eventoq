import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { addEventListener } from "@react-native-community/netinfo";

import { Text } from '../components/Typography';
import DialogBox from '../components/DialogBox';

import styles from './styles';

const InternetCheck = () => {
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        const subscribe = addEventListener((state) => {
            const { isConnected, isInternetReachable } = state;
            if (isConnected === false && isInternetReachable === false) {
                setPopup(true);
            }
            else {
                setPopup(false);
            }
        });
        return () => subscribe();
    }, []);

    return (
        <>
            {
                popup === true && (
                    <DialogBox
                        title="No Internet Connection"
                        closeIcon={false}
                        content={
                            <View style={styles.internet}>
                                <Text tag='h3'>To use Eventoq, turn on mobile data or connect to wifi.</Text>
                            </View>
                        }
                    />
                )
            }
        </>

    );
};

export default InternetCheck;