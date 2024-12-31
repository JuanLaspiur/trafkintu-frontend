import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
const PoemContent = ({ params }) => {
  return (
    <View style={styles.container}> 
    <Image  source={require('../../../assets/gift/descarga_animation.webp')}  style={styles.image}/>
      <Text style={styles.title}>{params.title}</Text>
      <Text style={styles.poem}>{params.poem}</Text> *
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  poem: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
    paddingVertical: 10,
    paddingHorizontal: 22,
  },
});

export default PoemContent;
