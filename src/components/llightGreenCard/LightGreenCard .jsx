import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import colorPalette from '../../helpers/color_palette';

function LightGreenCard() {
  return (
    <View style={styles.greenContainer}>
        <Text style={styles.poetryLabel}>Poema Destacado</Text>
      <Text style={styles.poetryTitle}>"La Luna y el Mar" </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  greenContainer: {
    marginTop: 15,
    backgroundColor: colorPalette.secondary, 
    width:'80%',
    margin:'auto',
    borderRadius: 10,
    padding: 20,
    display:'flex',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poetryLabel: {
    fontSize: 16,
    color: colorPalette.neutralDark,
    fontWeight: 'bold',
  },
  poetryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colorPalette.neutralDark,
  },
  icon: {
    marginHorizontal: 5,
    marginTop:15
  },
});

export default LightGreenCard;
