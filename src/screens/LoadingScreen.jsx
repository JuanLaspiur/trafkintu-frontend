import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/gift/cuadrado_loading.webp')} style={styles.loadingImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 99999, 
  },
  loadingImage: {
    width: 100, 
    height: 100,
  },
});

export default LoadingScreen;
