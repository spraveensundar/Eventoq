import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import get from "lodash";

import useGuestRoutes from './GuestRoutes';
import { navigationRef } from '../helpers/navigation';
import BackEventHandler from '../layout/BackEventHandler';

const App = () => {
	const Stack = createNativeStackNavigator();
	const routeNameRef = React.useRef();

	const logScreenView = async () => {
		const previousRouteName = routeNameRef.current;
		const currentRouteName = get(navigationRef.current.getCurrentRoute(), "name", '');
		if (previousRouteName !== currentRouteName) {
			await analytics().logScreenView({
				screen_name: currentRouteName,
				screen_class: currentRouteName,
			});
		}
		routeNameRef.current = currentRouteName;
	}

	return (
		<NavigationContainer
			ref={navigationRef}
			onReady={() => {
				routeNameRef.current = get(navigationRef.current.getCurrentRoute(), "name", '');
			}}
			onStateChange={logScreenView}
		>
			<BackEventHandler navigationRef={navigationRef} />
			<Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
				{useGuestRoutes()}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;