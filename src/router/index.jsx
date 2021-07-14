import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomNavigation from '../components/BottomNavigation'
import DetailCard from '../components/DetailCard'

import Splash from '../screens/Splash'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Account from '../screens/Account'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNav = () => {
	return (
		<Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
        	<Tab.Screen name="Home" component={Home} />
        	<Tab.Screen name="Search" component={Search} />
        	<Tab.Screen name="Account" component={Account} />
      	</Tab.Navigator>
	)
}

const Router = () => {
	return (
		<Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }} style={{ borderRadius: 40 }}>
        	<Stack.Screen name="Splash" component={Splash} />
        	<Stack.Screen name="DetailCard" component={DetailCard} />
        	<Stack.Screen name="BottomNav" component={BottomNav} />
      	</Stack.Navigator>
	)
}

export default Router