import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';  // Importamos los íconos
import colorPalette from '../../helpers/color_palette';

function SevenLastPoems() {
  const poems = [
    { id: 1, title: 'El eco del bosque', image: require('../../../assets/gift/fotografica_animation.gif') },
    { id: 2, title: 'Amanecer eterno', image: require('../../../assets/gift/frida_animation.gif') },
    { id: 3, title: 'Sombras perdidas', image: require('../../../assets/gift/hYq1Qv6q1_2000x1500__1_animation.gif') },
    { id: 4, title: 'Raíces profundas', image: require('../../../assets/gift/quinquela_animation.gif') },
    { id: 5, title: 'La luna y el río', image: require('../../../assets/gift/yellow_kiss.gif') },
    { id: 6, title: 'Versos en el viento', image: require('../../../assets/gift/slide_nort_animation.gif')},
    { id: 7, title: 'El faro y la noche', image: require('../../../assets/gift/sin_pan_y_sin_trabajo_animation.gif') },
  ];

  const [showAll, setShowAll] = useState(false);

  const visiblePoems = showAll ? poems : poems.slice(0, 4);

  const togglePoems = () => setShowAll(!showAll);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Siete últimos más leídos:</Text>
      <View style={styles.cardsContainer}>
        {visiblePoems.map((poem) => (
          <MiniPoemCard key={poem.id} title={poem.title} image={poem.image} />
        ))}
      </View>
      <TouchableOpacity style={styles.showMoreButton} onPress={togglePoems}>
        <Ionicons 
          name={showAll ? "chevron-up" : "chevron-down"}  
          size={30}  
          color={colorPalette.secondary}  
        />
      </TouchableOpacity>
    </View>
  );
}

function MiniPoemCard({ title, image }) {
  return (
    <View style={styles.miniCard}>
      <Image source={image } style={styles.miniImage} />
      <Text style={styles.miniCardTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: colorPalette.secondary,
    marginBottom: 15,
    textShadowColor: colorPalette.neutralDark,
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 3, 
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  miniCard: {
    width: '45%',
    backgroundColor: colorPalette.secondary,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  miniImage: {
    width: '100%',
    height: 80,
  },
  miniCardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    padding: 10,
  },
  showMoreButton: {
    marginTop: 15,
    alignItems: 'center',
    marginHorizontal: '20%',
    padding: 10,
  },
});

export default SevenLastPoems;
