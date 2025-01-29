import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider } from "./src/contexts/AuthContext.jsx";
// TO_DO  ordenar esto segun carpeta de importación
import Start from "./src/screens/Start";
import Home from "./src/screens/Home";
import Radio from "./src/screens/Radio";
import PoemDetail from "./src/screens/PoemDetail";
import Profile from "./src/screens/Profile";
import UploadPoem from "./src/screens/UploadPoem"
import colorPalette from "./src/helpers/color_palette";
import ButtonNavBar from "./src/components/ButtonNavBar/ButtonNavBar"; 
import Login from "./src/screens/Login";
import OtherUserProfile from "./src/screens/OtherUserProfile.jsx";
import Settings from "./src/screens/Settings.jsx";

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
   <AuthProvider>
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
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="UploadPoem" component={UploadPoem} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="OtherUserProfile" component={OtherUserProfile} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
