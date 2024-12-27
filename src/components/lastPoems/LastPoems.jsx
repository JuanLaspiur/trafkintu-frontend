import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colorPalette from '../../helpers/color_palette';

function LastPoems() {
  const poems = [
    {
      id: 1,
      title: 'Susurros del Alma',
      image: 'https://trafkintu.com.ar/wp-content/uploads/2024/12/Offtopic-dureza-y-fragilidad-scaled.jpg', 
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos tres poemas:</Text>
      <View style={styles.cardsContainer}>
        {poems.map((poem) => (
          <PoemCard key={poem.id} title={poem.title} image={poem.image} />
        ))}
      </View>
    </View>
  );
}

function PoemCard({ title, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.neutralDark,
    padding: 20,
    paddingTop:10
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 15,
    paddingHorizontal:5
  },
  cardsContainer: {
    flexDirection: 'column',
    gap: 15,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150, // Ajusta para que predomine la imagen
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colorPalette.primary,
    padding: 10,
  },
});

export default LastPoems;
