import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { Image } from "expo-image";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import colorPalette from '../helpers/color_palette';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker'; 
import SelectorMyProfile from '../components/selectorMenu/SelectorMyProfile';
import MyPoemsPublic from '../components/optionsMyProfile/MyPoemsPublic';
import MyPoemsDraft from '../components/optionsMyProfile/MyPoemsDraft';
import MyFollowers from '../components/optionsMyProfile/MyFollowers';
import MyFollowing from '../components/optionsMyProfile/MyFollowing';
import HeaderProfileLogo from '../components/header/HeaderProfileLogo';

function Profile({ navigation }) {
  const { user } = useAuth();
  const [fontsLoaded] = useFonts({ Roboto_400Regular });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOption, setSelectedOption] = useState('publico');
  const [description, setDescription] = useState(user?.description || 'Aún no se ha añadido una descripción personal.');
  const [avatar, setAvatar] = useState(user?.avatar || 'https://cdn.icon-icons.com/icons2/11/PNG/256/writer_person_people_man_you_1633.png'); 

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

    const handleSelectOption = (option) => {
          setSelectedOption(option);
      };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderProfileLogo color={colorPalette.neutralDark}/>
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
           <SelectorMyProfile selectedOption={selectedOption} handleSelectOption={handleSelectOption} />
        <Text style={styles.followDescription} ><Text  onPress={() => handleSelectOption('seguidores')} style={ selectedOption === 'seguidores' && styles.selectedText}><AntDesign name="team" size={14} />Seguidores 5</Text>     <Text onPress={() => handleSelectOption('seguidos')} style={ selectedOption === 'seguidos' && styles.selectedText}><AntDesign name="addusergroup" size={14} /> Seguidos 10</Text></Text>
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
      {selectedOption === 'publico' && <MyPoemsPublic/> }
      {selectedOption === 'borrador' && <MyPoemsDraft/>}
      {selectedOption === 'seguidores' && <MyFollowers/>}
      {selectedOption === 'seguidos' && <MyFollowing/>}
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
    borderRadius: 30,
    backgroundColor: '#fff',
    marginRight: 10,
    shadowColor: '#000', 
    shadowOffset: { width: 2, height: 2 }, 
    shadowOpacity: 0.3,
    shadowRadius: 4, 
    elevation: 5, 
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
    fontFamily: 'Roboto_400Regular',
    textShadowColor: '#000', 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 3, 
  },
  backButton: {
    position: 'absolute',
    top: 12,
    left: 10,
    zIndex: 99999,
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
  selectedText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
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
