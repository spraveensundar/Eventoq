import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashBoard from './DashBoard';
import Login from 'd:/React Native/ReactNative/src/pages/Guest/Login';
import SingUp from 'd:/React Native/ReactNative/src/pages/Guest/SingUp';

const useGuestRoutes = () => {
	const Stack = createNativeStackNavigator();
	return (
		<>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="DashBoard" component={DashBoard} />
			<Stack.Screen name="SignUp" component={SingUp} />
		</>
	)
}

export default useGuestRoutes;