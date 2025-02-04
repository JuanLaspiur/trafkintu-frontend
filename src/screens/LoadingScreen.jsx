import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import colorPalette from '../helpers/color_palette';
import { LinearGradient } from 'expo-linear-gradient'; 
import HeaderProfileLogo from '../components/header/HeaderProfileLogo';
// https://lottiefiles.com/
function LoadingScreen() {
  return (
      <LinearGradient
        colors={['black', colorPalette.accent]} 
        style={styles.container}
      >
      <LottieView
        source={require('../../assets/animations/hand.json')} // Cambia la ruta a tu animación .json
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.loadingText}>Cargando...</Text>
        </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%'
  },
  animation: {
    width:200,
    height: 200,
  },
  loadingText: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
    fontFamily: 'Roboto_400Regular', // Usa la misma fuente que en tu app
  },
});

export default LoadingScreen;
