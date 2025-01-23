import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colorPalette from '../../../helpers/color_palette';

function ComentCard({ 
  comment = 'Este es un comentario muy largo que debería ser truncado.', 
  onPress 
}) {
  const maxCharacters = 50; 

  const truncateText = (text, limit) =>
    text.length > limit ? `${text.slice(0, limit)}...` : text;

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image
        source={require('../../../../assets/icons/mini_coment.webp')}
        style={styles.icon}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.userName}>Nombre Poema - Autor Poema</Text>
        <Text style={styles.commentText}>
          {truncateText(comment, maxCharacters)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 80,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
    color: colorPalette.primary || '#333',
  },
  commentText: {
    fontSize: 12,
    color: '#666',
  },
});

export default ComentCard;
