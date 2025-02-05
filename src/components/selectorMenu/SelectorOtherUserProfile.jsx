import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colorPalette from '../../helpers/color_palette';
import { toggleFollow } from '../../services/follow.services';
import { useAuth } from '../../contexts/AuthContext';

function SelectorOtherUserProfile({ selectedOption, handleSelectOption, authorId, followers }) {
  const { user, token, fetchFollowData } = useAuth();
  const [isFollowing, setIsFollowing] = useState(followers.some(follower => follower._id === user._id));

  useEffect(() => {
    if (user && user._id) {
      setIsFollowing(followers.some(follower => follower._id === user._id));
    }
  }, [followers, user]);
  

  const toggleFollowUser = async () => {
    try {
      await toggleFollow(authorId, token);
      await fetchFollowData(user._id)
      setIsFollowing((prev) => !prev); 
    } catch (error) {
      console.error('Error al seguir/dejar de seguir:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.option} onPress={toggleFollowUser}>
          <Image
            source={
              isFollowing
                ? require('../../../assets/icons/dejar-de-seguir.webp')
                : require('../../../assets/icons/seguir.webp')
            }
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.descritionText}>
          {isFollowing ? 'No Seguir' : 'Seguir'}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.option, selectedOption === 'publico' && styles.selectedOption]}
          onPress={() => handleSelectOption('publico')}
        >
          <Image source={require('../../../assets/icons/publicado.webp')} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.descritionText}>Publicó</Text>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.option, selectedOption === 'comentarios' && styles.selectedOption]}
          onPress={() => handleSelectOption('comentarios')}
        >
          <Image source={require('../../../assets/icons/comentario-positivo.webp')} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.descritionText}>Comentó</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="share-social-outline" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.descritionText}>Compartir</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  option: {
    width: 58,
    height: 58,
    alignItems: 'center',
    backgroundColor: colorPalette.accent,
    padding: 12,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: colorPalette.natural,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  descritionText: {
    color: colorPalette.accent,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default SelectorOtherUserProfile;
