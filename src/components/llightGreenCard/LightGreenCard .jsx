import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colorPalette from '../../helpers/color_palette';

function LightGreenCard() {
  return (
    <View style={styles.greenContainer}>
      <View>
        <Image source={require('../../../assets/icons/inkwell_15894224.webp')} style={styles.image}/>
      </View>
      <View>
        <Text style={styles.poetryLabel}>Poema Destacado</Text>
      <Text style={styles.poetryTitle}>"La Luna y el Mar" </Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  greenContainer: {
    marginVertical: 15,
    backgroundColor: colorPalette.secondary, 
    width:'80%',
    margin:'auto',
    borderRadius: 10,
    padding: 20,
    display:'flex',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:'row'
  },
  image:{
    width:'50',
    height:'50'
  }
  ,
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
