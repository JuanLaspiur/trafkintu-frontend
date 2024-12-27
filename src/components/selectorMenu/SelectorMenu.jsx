import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colorPalette from '../../helpers/color_palette';

function SelectorMenu() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option}>
        <Ionicons name="create-outline" size={32} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Ionicons name="book-outline" size={32} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Ionicons name="brush-outline" size={32} color="black" />
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
  text: {
    marginTop: 8,
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
});

export default SelectorMenu;

