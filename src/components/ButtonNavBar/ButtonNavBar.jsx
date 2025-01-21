import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colorPalette from "../../helpers/color_palette"; 

function ButtonNavBar({ route, focused, color, size }) {
  // Lógica para obtener el icono correcto
  const iconName = getTabBarIcon(route, focused);

  return (
    <View style={[styles.container, route.name === 'Home' && styles.homeButton]}>
      {route.name === 'Home' ? (
        // Mostrar imagen personalizada cuando estemos en la pantalla 'Home'
        <Image
          source={require('../../../assets/icons/united_1709873.webp')} 
          style={styles.menuIcon}
        />
      ) : (
        // Usar el icono de Ionicons en otros casos
        <Ionicons name={iconName} size={size} color={color} />
      )}
    </View>
  );
}

function getTabBarIcon(route, focused) {
  let iconName;
  switch (route.name) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'Radio':
      iconName = focused ? 'radio' : 'radio-outline';
      break;
    default:
      iconName = 'home';
  }
  return iconName;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  homeButton: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    backgroundColor: colorPalette.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginTop: -20,
    marginBottom:10
},
});

export default ButtonNavBar;
