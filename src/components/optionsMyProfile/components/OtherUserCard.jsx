import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import colorPalette from '../../../helpers/color_palette';

function OtherUserCard({ user }) {
  const navigation = useNavigation(); 

  const handleNavigate = () => {
    navigation.navigate('OtherUserProfile'); 
  };

  return (
    <TouchableOpacity onPress={handleNavigate}>
      <View style={styles.card}>
        <Image
          source={{ uri:'https://this-person-does-not-exist.com/img/avatar-gence1a1e33fb6a8bb54cea76516040b661.jpg' }}
          style={styles.avatar}
        />
        <Text style={styles.username}>{user.name || 'Username'}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
