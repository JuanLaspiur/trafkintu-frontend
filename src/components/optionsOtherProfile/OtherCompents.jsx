import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colorPalette from '../../helpers/color_palette';
import ComentCard from './components/ComentCard';

function OtherComponents() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sus comentarios</Text>
      <ComentCard/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
      }, 
      title:{
          fontSize: 16,
          fontWeight: 'bold',
          color: colorPalette.accent,
          paddingTop:15,   
           padding:10
        
      }
});

export default OtherComponents;
