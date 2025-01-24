import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';

const PoemDetailOptions = () => {
  const handlePlayPoem = () => {
    Alert.alert('Reproduciendo el poema...');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.playButton} onPress={handlePlayPoem}>
        <Image
          source={require('../../../assets/icons/repoducir_poemdetail.webp')}
          style={styles.icon}
        />
        <Text style={styles.playText}>Reproducir poema</Text>
      </TouchableOpacity>

      <View style={styles.dateContainer}>
        <Image
          source={require('../../../assets/icons/fecha_card.webp')}
          style={styles.icon}
        />
        <Text style={styles.dateText}>Publicado el: 24 de enero de 2025</Text>
      </View>

      <View style={styles.viewsContainer}>
        <Image
          source={require('../../../assets/icons/vistas_poemdetail.webp')}
          style={styles.icon}
        />
        <Text style={styles.viewsText}>1234 visualizaciones</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3', // Gris claro para el borde inferior
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  playText: {
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  dateText: {
    fontSize: 14,
    color: '#555',
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  viewsText: {
    fontSize: 14,
    color: '#555',
  },
});

export default PoemDetailOptions;