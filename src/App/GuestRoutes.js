import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashBoard from './DashBoard';
import Login from '../pages/Guest/Login';
import SingUp from '../pages/Guest/SingUp';
import OTP from '../pages/Guest/Verification/OTP';
import Verification from '../pages/Guest/Verification';

const useGuestRoutes = () => {
	const Stack = createNativeStackNavigator();
	return (
		<>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="SignUp" component={SingUp} />
			<Stack.Screen name="OTP" component={OTP} />
			<Stack.Screen name="Verification" component={Verification} />
			<Stack.Screen name="DashBoard" component={DashBoard} />
		</>
	)
}

export default useGuestRoutes;