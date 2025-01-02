import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from "./src/screens/Start";
import Home from "./src/screens/Home";
import Radio from "./src/screens/Radio";
import PoemDetail from "./src/screens/PoemDetail";
import Perfil from "./src/screens/Perfil";
import UploadPoem from "./src/screens/UploadPoem"
import colorPalette from "./src/helpers/color_palette";
import ButtonNavBar from "./src/components/ButtonNavBar/ButtonNavBar"; 

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); 

function getTabBarVisibility(route) {
  if (route.name === 'PoemDetail') {
    return 'none';  
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
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
        <Stack.Screen name="UploadPoem" component={UploadPoem} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
