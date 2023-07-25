import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Statistics from '../screens/Statistics/Statistics';
import Calendar from '../screens/Calendar/Calendar';
import Profil from '../screens/Profil/Profil';

const Tab = createBottomTabNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
