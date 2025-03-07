import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/DashBoard/Home';
import Profile from '../pages/DashBoard/Profile';
import Bookings from '../pages/DashBoard/Bookings';
import Listings from '../pages/DashBoard/Listings';
import BottomItem from '../components/BottomItem';
import { navigate } from '../helpers/navigation';
import { colors, normalize } from '../helpers/variables';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const DashBoard = () => (
    <Tab.Navigator
        screenOptions={() => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: { borderTopColor: colors.dark, borderTopWidth: 1, height: Platform.OS === 'android' ? normalize(60) : normalize(90), paddingHorizontal: normalize(24) },
        })}
    >
        <Tab.Screen name="Home" component={Home}
            listeners={() => ({
                tabPress: e => {
                    e.preventDefault();
                    navigate('Home')
                }
            })}
            options={{
                tabBarIcon: ({ focused }) => (
                    <BottomItem icon="home-outline" isActive={focused} text="Home" />
                )
            }}
        />
        <Tab.Screen name="Bookings" component={Bookings}
            listeners={() => ({
                tabPress: e => {
                    e.preventDefault();
                    navigate('Bookings')
                }
            })}
            options={{
                tabBarIcon: ({ focused }) => (
                    <BottomItem icon="home-outline" isActive={focused} text="Bookings" />
                )
            }}
        />
        <Tab.Screen name="Listings" component={Listings}
            listeners={() => ({
                tabPress: e => {
                    e.preventDefault();
                    navigate('Listings')
                }
            })}
            options={{
                tabBarIcon: ({ focused }) => (
                    <BottomItem icon="home-outline" isActive={focused} text="Listings" />
                )
            }}
        />
        <Tab.Screen name="Profile" component={Profile}
            listeners={() => ({
                tabPress: e => {
                    e.preventDefault();
                    navigate('Profile')
                }
            })}
            options={{
                tabBarIcon: ({ focused }) => (
                    <BottomItem icon="person-outline" isActive={focused} text="Profile" />
                )
            }}
        />
    </Tab.Navigator>
);

export default DashBoard;