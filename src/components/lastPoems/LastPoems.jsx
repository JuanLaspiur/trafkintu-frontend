import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import colorPalette from '../../helpers/color_palette';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native'; 

function LastPoems() {
  const poems = [
    {
      id: 1,
      title: 'Susurros del Alma',
      image: require('../../../assets/gift/descarga_animation.webp'),
      author: 'Juan Pérez',
      date: '23 de enero, 2025',
    },
    {
      id: 2,
      title: 'Susurros del Alma 2',
      image: require('../../../assets/gift/gernica_animation_1.webp'),
      author: 'María Gómez',
      date: '15 de enero, 2025',
    },
    {
      id: 3,
      title: 'Susurros del Alma 3',
      image: require('../../../assets/gift/Muralismo-Mexicano_animation.webp'),
      author: 'Carlos Ruiz',
      date: '10 de enero, 2025',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos tres poemas:</Text>
      <Swiper style={styles.swiper} showsPagination={false} loop={true} autoplay={true} autoplayTimeout={5}>
        {poems.map((poem) => (
          <PoemCard
            key={poem.id}
            title={poem.title}
            image={poem.image}
            author={poem.author}
            date={poem.date}
          />
        ))}
      </Swiper>
    </View>
  );
}

function PoemCard({ title, image, author, date }) {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('PoemDetail', { title, image, author, date });
  };

  return (
    <TouchableOpacity onPress={handleCardPress} activeOpacity={0.7}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.cardTitle}><Image source={require('../../../assets/icons/titulo_card.webp')} style={styles.iconTitleCard} /> {title || 'Sin título'}</Text>
        <Text style={styles.cardAuthor}><Image source={require('../../../assets/icons/autor_card.webp')} style={styles.iconTitleCard} />   Autor: {author}</Text>
        <Text style={styles.cardDate}><Image source={require('../../../assets/icons/fecha_card.webp')} style={styles.iconTitleCard} />   Publicado: {date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPalette.neutralDark,
    padding: 20,
    paddingTop: 10,
    height: 308,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 15,
    paddingHorizontal: 5,
    textShadowColor: 'gray',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
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
  iconTitleCard:{
    height:12,
    width:12,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colorPalette.primary,
    padding: 10,
    paddingBottom:4
  },
  cardAuthor: {
    fontSize: 12,
    color: '#555',
    paddingHorizontal: 10,
    marginBottom: 4,
  },
  cardDate: {
    fontSize: 12,
    color: '#999',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default LastPoems;
