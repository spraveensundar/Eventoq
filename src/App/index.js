import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import get from "lodash";
import BootSplash from "react-native-bootsplash";

import useGuestRoutes from './GuestRoutes';
import { getStorageItem } from '../helpers/storage';
import { navigationRef } from '../helpers/navigation';
import BackEventHandler from '../layout/BackEventHandler';

const App = () => {
	const Stack = createNativeStackNavigator();
	const routeNameRef = React.useRef();

	useEffect(() => {
		hideSplash();
	}, []);

	const hideSplash = async () => {
		await BootSplash.hide({ fade: true });
	};

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

	const token = getStorageItem("userId");
	const initialRoute = token ? 'DashBoard' : 'Login';

	return (
		<NavigationContainer
			ref={navigationRef}
			onReady={() => {
				routeNameRef.current = get(navigationRef.current.getCurrentRoute(), "name", '');
			}}
			onStateChange={logScreenView}
		>
			<BackEventHandler navigationRef={navigationRef} />
			<Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
				{useGuestRoutes()}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;