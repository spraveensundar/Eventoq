import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'd:/React Native/ReactNative/src/pages/DashBoard/Home';
import Profile from 'd:/React Native/ReactNative/src/pages/DashBoard/Profile';
import Bookings from 'd:/React Native/ReactNative/src/pages/DashBoard/Bookings';
import Listings from 'd:/React Native/ReactNative/src/pages/DashBoard/Listings';

const Tab = createBottomTabNavigator();

const DashBoard = () => (
    <Tab.Navigator
        screenOptions={() => ({
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { backgroundColor: 'white', height: 60 },
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
            headerShown: false,
        })}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Bookings" component={Bookings} />
        <Tab.Screen name="Listings" component={Listings} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);

export default DashBoard;