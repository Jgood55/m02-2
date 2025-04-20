import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import PlanetsScreen from './PlanetsScreen';
import SpaceshipsScreen from './SpaceshipsScreen';
import FilmsScreen from './FilmsScreen';


// Tabs inside the drawer
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Planets') {
            iconName = 'planet';
          } else if (route.name === 'Spaceships') {
            iconName = 'rocket';
          } else if (route.name === 'Films') {
            iconName = 'film';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false, // hide header if tabs are inside drawer
      })}
    >
      <Tab.Screen name="Planets" component={PlanetsScreen} />
      <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
      <Tab.Screen name="Films" component={FilmsScreen} />
    </Tab.Navigator>
  );
}

// Drawer with a single "Home" screen showing the tabs
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#6200ee' },
        headerTintColor: '#fff',
        drawerStyle: { backgroundColor: '#f5f5f5', width: 240 },
      }}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
