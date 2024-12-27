import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colorPalette from '../helpers/color_palette';
import Header from '../components/header/Header';
import Reproductor from '../components/reproductor/Reproductor'; // Importamos el componente Reproductor

function Radio() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleRadio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}> 
        <Header />
        <Reproductor isPlaying={isPlaying} toggleRadio={toggleRadio} /> {/* Usamos el componente Reproductor */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.secondary,
  },
});

export default Radio;
