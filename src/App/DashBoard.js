import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import { navigate } from '../helpers/navigation';
import BottomItem from '../components/BottomItem';
import { colors, normalize, size } from '../helpers/variables';

import Home from '../pages/Menu/Home';
import Profile from '../pages/Menu/Profile';
import Listings from '../pages/Menu/Listings';
import Bookings from '../pages/Menu/Bookings';

const Tab = createBottomTabNavigator();

const DashBoard = () => {
    const dd = Platform.OS === 'android' ? { paddingBottom: size.five } : '';
    return (
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                animation: "fade",
                tabBarStyle: {
                    position: 'absolute',
                    shadowColor: colors.black,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    borderTopLeftRadius: size.xxx_small,
                    borderTopRightRadius: size.xxx_small,
                    height: Platform.OS === 'android' ? size.xxx_big : normalize(90), ...dd,
                    paddingHorizontal: size.xxx_small
                },
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
                        <BottomItem icon="home" isActive={focused} text="Home" />
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
                        <BottomItem icon="calendar" isActive={focused} text="Bookings" />
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
                        <BottomItem icon="grid" isActive={focused} text="Listings" />
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
                        <BottomItem icon="person" isActive={focused} text="Profile" />
                    )
                }}
            />
        </Tab.Navigator>
    )
};

export default DashBoard;