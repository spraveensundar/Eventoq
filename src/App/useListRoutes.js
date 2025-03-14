import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Account from '../pages/Menu/Listings/Create/Account';

const useListRoute = () => {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Screen name="Account" component={Account} />
        </>
    )
}

export default useListRoute;