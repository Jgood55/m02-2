import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

function PlanetsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Planets Screen</Text>
    </View>
  );
}

function SpaceshipsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Spaceships Screen</Text>
    </View>
  );
}

function FilmsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Films Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ animation: 'none' }}>
        <Tab.Screen name="Planets" component={PlanetsScreen} />
        <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
        <Tab.Screen name="Films" component={FilmsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
