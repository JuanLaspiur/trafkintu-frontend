import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';
import { Image } from 'expo-image';
import colorPalette from '../../helpers/color_palette';

function AuthorInfo({ id = '1',name, avatar }) {
  const { user } =useAuth(); 
  const navigation = useNavigation();

  const goToProfile = ()=>{
    if(user && user._id == id) {
      navigation.navigate("Profile", { name, avatar })
      }
      else {
        navigation.navigate("OtherUserProfile", { name, avatar })
      }
  }

  return (
    <TouchableOpacity   onPress={goToProfile} style={styles.authorContainer}>
   
      <Image source={{ uri: avatar }} style={styles.authorAvatar} />
      <Text style={styles.authorName}>{name}</Text> 
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
