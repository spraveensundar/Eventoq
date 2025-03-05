import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import useGuestRoutes from './GuestRoutes';

const App = () => {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
				{useGuestRoutes()}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;