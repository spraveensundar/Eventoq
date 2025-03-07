import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import useGuestRoutes from './GuestRoutes';
import { navigationRef } from '../helpers/navigation';

const App = () => {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
				{useGuestRoutes()}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;