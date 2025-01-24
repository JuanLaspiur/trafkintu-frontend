import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import colorPalette from '../../helpers/color_palette';

function AuthorInfo({ name, avatar }) {
   const navigation = useNavigation();
  return (
    <TouchableOpacity   onPress={() => navigation.navigate("Profile", { name, avatar })} style={styles.authorContainer}>
   
      <Image source={{ uri: avatar }} style={styles.authorAvatar} />
      <Text style={styles.authorName}>{name}</Text>      <Image source={require('../../../assets/icons/autor_card.webp')} style={styles.authorIcon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 18,
  },
  authorIcon:{
    width: 32,
    height: 32,
    marginLeft:10
  },
  authorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  authorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colorPalette.ligthBlue,
  },
});

export default AuthorInfo;
