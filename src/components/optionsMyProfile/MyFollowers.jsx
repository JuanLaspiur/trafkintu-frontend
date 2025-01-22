import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colorPalette from '../../helpers/color_palette';
import OtherUserCard from './components/OtherUserCard';

const MyFollowers = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title} >Mis Seguidores</Text>
        <OtherUserCard/>
    </View>
  );
};
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
      
    },
    pagination: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    pageText: {
      marginHorizontal: 10,
      fontSize: 16,
      color:colorPalette.accent,
    },
  });
export default MyFollowers;
