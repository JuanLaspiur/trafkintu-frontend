import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colorPalette from '../../helpers/color_palette';

function Reproductor({ isPlaying, toggleRadio }) {
  const rotation = new Animated.Value(0);

  useEffect(() => {
    if (isPlaying) {
      Animated.loop(
        Animated.timing(rotation, {
          toValue: 1,
          duration: 6000, 
          useNativeDriver: true,
        })
      ).start();
    } else {
      rotation.stopAnimation();
    }
  }, [isPlaying]);

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.reproductor}>
      <Image
        source={require('../../../assets/icons/aguja.png')} 
        style={styles.aguja}
      />
      <View style={styles.innerContainer}>
        <Animated.View style={[styles.turntable, { transform: [{ rotate }] }]}>
          <Image
            source={require('../../../assets/icons/discoVinilo.webp')} 
            style={styles.turntableImage}
          />
        </Animated.View>

        <View style={styles.stationInfo}>
          <Text style={styles.stationTitle}>
            {isPlaying ? "Estación: AM 1240" : "Radio apagada"}
          </Text>
          <Text style={styles.stationDescription}>
            Radio Universidad UNS 
          </Text>
        </View>

        <TouchableOpacity style={[styles.button, isPlaying ? styles.buttonOn : styles.buttonOff]} onPress={toggleRadio}>
          <Ionicons
            name={isPlaying ? "power" : "power-outline"}
            size={50}
            color="#fff"
          />
        </TouchableOpacity>

        <Text style={styles.controlText}>
          {isPlaying ? "Apagar Radio" : "Encender Radio"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reproductor: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  turntable: {
    width: 200,
    height: 200,
    backgroundColor: '#000',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  aguja: {
    width: 250,
    height: 300, 
    position: 'absolute',
    zIndex: 999,
    top: -72,
    left: 170,
    transform: [{ scale: 0.5 }],
  },
  turntableImage: {
    width: '100%',
    height: '100%',
  },
  stationInfo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  stationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  stationDescription: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  button: {
    padding: 10,
    borderRadius: 50,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOn: {
    backgroundColor:'#FF6347' , 
  },
  buttonOff: {
    backgroundColor:'#4CAF50' , 
  },
  controlText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
});

export default Reproductor;
