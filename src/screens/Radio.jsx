import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';  
import colorPalette from '../helpers/color_palette';
import Header from '../components/header/Header';
import Reproductor from '../components/reproductor/Reproductor';
import AntDesign from '@expo/vector-icons/AntDesign';
import HeaderProfileLogo from '../components/header/HeaderProfileLogo';

const Radio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigation = useNavigation();

  const toggleRadio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <LinearGradient
      colors={['black', '#41adad', 'black']} 
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
        >
          <AntDesign name="left" size={27} color="gray" />
        </TouchableOpacity>
      </View>
      <Reproductor isPlaying={isPlaying} toggleRadio={toggleRadio} />
        <Image 
          source={require('../../assets/radio_tfk/imagen_equipo_radio.webp')} 
          style={styles.image} 
        />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 10,
    zIndex:9999
  },
  image: {
    width: '100%', 
    height: 200,
    opacity:0.2,
    position:'absolute',
    top:0,
    
  },
});

export default Radio;
