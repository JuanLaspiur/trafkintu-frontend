import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';

function AuthorInfo({ name, avatar }) {
   const navigation = useNavigation();
  return (
    <TouchableOpacity   onPress={() => navigation.navigate("Profile", { name, avatar })} style={styles.authorContainer}>
      <Image source={{ uri: avatar }} style={styles.authorAvatar} />
      <Text style={styles.authorName}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 16,
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
    color: '#333',
  },
});

export default AuthorInfo;
