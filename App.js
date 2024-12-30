import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from "./src/screens/Start";
import Home from "./src/screens/Home";
import Radio from "./src/screens/Radio";
import PoemDetail from "./src/screens/PoemDetail";
import colorPalette from "./src/helpers/color_palette";
import ButtonNavBar from "./src/components/ButtonNavBar/ButtonNavBar"; 

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); // Stack Navigator para PoemDetail

// Función para controlar la visibilidad del tab bar
function getTabBarVisibility(route) {
  if (route.name === 'PoemDetail') {
    return 'none';  // Oculta la pestaña de PoemDetail
  }
  return 'flex'; 
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="HomeTabs" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={({ route }) => ({
                tabBarIcon: (props) => <ButtonNavBar {...props} route={route} />,
                tabBarActiveTintColor: colorPalette.primary, 
                tabBarInactiveTintColor: 'gray',  
                tabBarStyle: {
                  display: getTabBarVisibility(route),
                },
              })}
            >
              <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="PoemDetail" component={PoemDetail} options={{ headerShown: false }} /> 
        <Stack.Screen name="Radio" component={Radio} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
