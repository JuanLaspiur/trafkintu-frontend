import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colorPalette from '../../helpers/color_palette';

function SelectorMenu() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option}>
      <Image source={require('../../../assets/icons/writing_5724478.webp')} style={styles.image}  />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
      <Image source={require('../../../assets/icons/libro.webp')} style={styles.image}  />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        {/* Cambié el ícono "brush-outline" por "disc" (ícono de disco, relacionado con música) */}
        <Image source={require('../../../assets/icons/radio.webp')} style={styles.image}  />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Ionicons name="share-social-outline" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colorPalette.neutralDark,
    padding: 20,
  },
  option: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 50, // Bordes redondeados
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Sombra para Android
  },
  image: {
    width:30,
    height:30
  },
});

export default SelectorMenu;
