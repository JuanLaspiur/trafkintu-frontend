import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colorPalette from '../../helpers/color_palette';

function SelectorOtherUserProfile({ selectedOption, handleSelectOption }) {
  const [isFollowing, setIsFollowing] = useState(false); // Estado para seguir/no seguir

  const toggleFollow = () => {
    setIsFollowing((prev) => !prev); 
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.option} onPress={toggleFollow}>
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
          style={[styles.option, selectedOption === 'borrador' && styles.selectedOption]}
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
    borderColor: 'gray',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  descritionText: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default SelectorOtherUserProfile;
