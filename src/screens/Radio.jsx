import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';  // Importa LinearGradient de Expo
import colorPalette from '../helpers/color_palette';
import Header from '../components/header/Header';
import Reproductor from '../components/reproductor/Reproductor';

function Radio() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleRadio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <LinearGradient
      colors={['black', '#41adad', 'black']} 
      style={styles.container}
    >
      <Header />
      <Reproductor isPlaying={isPlaying} toggleRadio={toggleRadio} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Radio;
