import React from 'react';
import { Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Simple screen components
const PlanetsScreen = () => (
  <View style={styles.screen}><Text>Planets Screen</Text></View>
);

const SpaceshipsScreen = () => (
  <View style={styles.screen}><Text>Spaceships Screen</Text></View>
);

const FilmsScreen = () => (
  <View style={styles.screen}><Text>Films Screen</Text></View>
);

// Tab navigator (for iOS)
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Planets" component={PlanetsScreen} />
      <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
      <Tab.Screen name="Films" component={FilmsScreen} />
    </Tab.Navigator>
  );
}

// Drawer navigator (for Android)
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Planets" component={PlanetsScreen} />
      <Drawer.Screen name="Spaceships" component={SpaceshipsScreen} />
      <Drawer.Screen name="Films" component={FilmsScreen} />
    </Drawer.Navigator>
  );
}

const styles = {
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {Platform.OS === 'ios' ? <TabNavigator /> : <DrawerNavigator />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
