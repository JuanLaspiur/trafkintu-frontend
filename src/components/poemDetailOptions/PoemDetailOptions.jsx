import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colorPalette from '../../helpers/color_palette';
import { formatDateToSpanishLong } from '../../helpers/formatDate';
import { addLike, removeLike, getPoemByPoemId } from '../../services/poems.services';
import { useAuth } from '../../contexts/AuthContext';
const PoemDetailOptions = ({ poem, setPoem }) => {
  const { user, token } = useAuth(); 
  const [likes, setLikes] = useState(poem.likes.length);
  const [hasLiked, setHasLiked] = useState(user ? poem.likes.includes(user._id) : false);

  useEffect(() => {
    if (user) {
      setHasLiked(poem.likes.includes(user._id));
    }
  }, [poem.likes, user]);

  const fetchPoem = async()=>{
    const result = await getPoemByPoemId(poem._id);
    setPoem(result)
  }

  const handleLike = async () => {
    if (!user) {
      Alert.alert('Debes iniciar sesión para dar "Me gusta".');
      return;
    }

      if (hasLiked) {
        await removeLike(poem._id, token);
        setLikes(likes - 1);
        setHasLiked(false);
      } else {
        await addLike(poem._id, token);
        setLikes(likes + 1);
        setHasLiked(true);
      }
      fetchPoem()
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.playButton} onPress={() => Alert.alert('Reproduciendo el poema...')}>
        <Image source={require('../../../assets/icons/repoducir_poemdetail.webp')} style={styles.icon} />
        <Text style={styles.playText}>Reproducir poema</Text>
      </TouchableOpacity>

      <View style={styles.dateContainer}>
        <Image source={require('../../../assets/icons/fecha_card.webp')} style={styles.icon} />
        <Text style={styles.dateText}>Publicado el: {formatDateToSpanishLong(poem?.createdAt)}</Text>
      </View>

      <View style={styles.viewsContainer}>
        <Image source={require('../../../assets/icons/vistas_poemdetail.webp')} style={styles.icon} />
        <Text style={styles.viewsText}>1234 visualizaciones</Text>
      </View>

      <View style={styles.likesContainer}>
        <TouchableOpacity style={styles.likeButton} onPress={handleLike}>
          <Ionicons 
            name={hasLiked ? "thumbs-up" : "thumbs-up-outline"} 
            size={24} 
            color={hasLiked ? colorPalette.primary : colorPalette.accent} 
            style={styles.icon} 
          />
          <Text style={styles.likeText}>{hasLiked ? "Me gusta (✔️)" : "Me gusta"}</Text>
        </TouchableOpacity>
        <Text style={styles.likesCount}>{likes} Me gusta</Text>
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
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  likeText: {
    fontSize: 14,
    fontWeight: 'bold', 
     color:colorPalette.accent,
     paddingTop:5
  },
  likesCount: {
    fontSize: 14,
    color: '#555',
    paddingTop:5
  }
});

export default PoemDetailOptions;