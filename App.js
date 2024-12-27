import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Start from "./src/screens/Start";
import Home from "./src/screens/Home";
import Radio from "./src/screens/Radio";
import colorPalette from "./src/helpers/color_palette";
import ButtonNavBar from "./src/components/ButtonNavBar/ButtonNavBar"; 
// Unable to resolve "@react-navigation/bottom-tabs" from "App.js"
const Tab = createBottomTabNavigator();

function getTabBarVisibility(route) {
  return route.name === 'Start' || route.name === 'Radio' ? 'none' : 'flex';
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: (props) => <ButtonNavBar {...props} route={route} />,
          tabBarActiveTintColor: colorPalette.primary, 
          tabBarInactiveTintColor: 'gray',  
          tabBarStyle: {
            display: getTabBarVisibility(route), 
          },
        })}
      >
        <Tab.Screen name="Start" component={Start} options={{ headerShown: false }} />
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="Radio" component={Radio} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
