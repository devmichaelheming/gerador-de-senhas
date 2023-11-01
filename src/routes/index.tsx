import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '~/screens/Home';
import ListPasswords from '~/screens/ListPasswords';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon({ focused, size, color }) {
              if (focused) {
                return <Ionicons size={size} color={color} name="home" />;
              }

              return <Ionicons size={size} color={color} name="home-outline" />;
            },
          }}
        />

        <Tab.Screen
          name="Senhas"
          component={ListPasswords}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon({ focused, size, color }) {
              if (focused) {
                return (
                  <Ionicons size={size} color={color} name="lock-closed" />
                );
              }

              return (
                <Ionicons
                  size={size}
                  color={color}
                  name="lock-closed-outline"
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
