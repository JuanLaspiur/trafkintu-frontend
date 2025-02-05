import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import colorPalette from '../../../helpers/color_palette';
import { useAuth } from '../../../contexts/AuthContext';

function OtherUserCard({ data, author }) {
  const {user} = useAuth()
  const navigation = useNavigation(); 

  const handleNavigate = () => {
    if(author._id == user._id) {
      navigation.navigate("Profile")
      }
      else {
        navigation.navigate("OtherUserProfile", { author})
      }
  };

  return (
    <TouchableOpacity onPress={handleNavigate}>
      <View style={styles.card}>
        <Image
          source={{ uri:data.avatar }}
          style={styles.avatar}
        />
        <Text style={styles.username}>{data.name || 'Username'}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colorPalette.neutralDark,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 15,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colorPalette.accent,
  },
});

export default OtherUserCard;
