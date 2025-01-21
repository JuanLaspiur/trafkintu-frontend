import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { Image } from "expo-image";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import colorPalette from '../helpers/color_palette';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker'; // Importamos el ImagePicker de Expo
import SelectorMenu from '../components/selectorMenu/SelectorMenu';

function Profile({ navigation }) {
  const { user } = useAuth();
  const [fontsLoaded] = useFonts({ Roboto_400Regular });
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(user?.description || 'Aún no se ha añadido una descripción personal.');
  const [avatar, setAvatar] = useState(user?.avatar || 'https://cdn.icon-icons.com/icons2/11/PNG/256/writer_person_people_man_you_1633.png'); // Estado para la imagen de perfil

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleImageEditPress = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled) {
        setAvatar(result.assets[0].uri); 
      }
    } else {
      Alert.alert("Permisos Denegados", "Para cambiar la imagen de perfil debes permitir el acceso a tu galería.");
    }
  };

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSavePress = () => {
    setIsEditing(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()} 
        >
          <AntDesign name="left" size={27} color="white" />
        </TouchableOpacity>

        <Image
          source={require('../../assets/gift/fotografica_animation.webp')}
          style={styles.backgroundImage}
          contentFit="cover"
        />
        <View style={styles.profileInfo}>
          <TouchableOpacity onPress={handleImageEditPress} style={styles.avatarContainer}>
            <Image
              source={{ uri: avatar }}
              style={styles.avatar}
            />
            <Feather name="edit-2" size={16} color="white" style={styles.editIcon} />
          </TouchableOpacity>
          <Text style={styles.username}>{user?.username || 'Usuario'}</Text>
        </View>
      </View> 

      <View style={styles.descriptionContainer}>
        <Text style={styles.followDescription} ><AntDesign name="team" size={14} />Seguidores 5     <AntDesign name="addusergroup" size={14} /> Seguidos 10</Text>
        <Text style={styles.descriptionTitle}><AntDesign name="infocirlceo" size={14} /> Mi Descripción</Text>
        {isEditing ? (
          <TextInput
            style={styles.descriptionTextInput}
            value={description}
            onChangeText={setDescription}
            multiline
          />
        ) : (
          <Text style={styles.descriptionText}>{description}</Text>
        )}
        <TouchableOpacity 
          style={styles.editButton} 
          onPress={isEditing ? handleSavePress : handleEditPress}
        >
          <AntDesign name={isEditing ? "save" : "edit"} size={20} color={colorPalette.accent} />
        </TouchableOpacity>  
     
      </View>
       <SelectorMenu style={styles.barmenu}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 30,
    backgroundColor: colorPalette.neutralDark,
    paddingBottom: 20,
  },
  profileHeader: {
    position: 'relative',
    height: 200,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  profileInfo: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    color: colorPalette.accent,
    padding: 5,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: "Roboto_400Regular",
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  descriptionContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    position: 'relative',
  },
  descriptionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colorPalette.accent,
    paddingTop:15,
  },
  followDescription: {
    fontSize: 14,
    color: colorPalette.accent,
    lineHeight: 20,
    paddingVertical: 10,
    fontWeight: '300',
  },
  descriptionText: {
    fontSize: 11,
    color: colorPalette.accent,
    lineHeight: 20,
  },
  descriptionTextInput: {
    fontSize: 11,
    color: colorPalette.accent,
    lineHeight: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: colorPalette.accent,
    borderRadius: 5,
  },
  editButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 8,
  },

});

export default Profile;
