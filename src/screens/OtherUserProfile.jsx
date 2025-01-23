import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { Image } from "expo-image";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import colorPalette from '../helpers/color_palette';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker'; 
import SelectorOtherUserProfile from '../components/selectorMenu/SelectorOtherUserProfile';
import MyPoemsPublic from '../components/optionsMyProfile/MyPoemsPublic';
import MyPoemsDraft from '../components/optionsMyProfile/MyPoemsDraft';
import MyFollowers from '../components/optionsMyProfile/MyFollowers';
import MyFollowing from '../components/optionsMyProfile/MyFollowing';
import { useNavigation } from '@react-navigation/native';

function OtherUserProfile({ otherUser }) {
 const { user } = useAuth();
 const navigation = useNavigation();
  const [fontsLoaded] = useFonts({ Roboto_400Regular });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOption, setSelectedOption] = useState('publico');
  const [description, setDescription] = useState(user?.description || 'Aún no se ha añadido una descripción personal.');
  const [avatar, setAvatar] = useState(user?.avatar || 'https://cdn.icon-icons.com/icons2/11/PNG/256/writer_person_people_man_you_1633.png'); 

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

 


    const handleSelectOption = (option) => {
          setSelectedOption(option);
      };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()} 
        >
          <AntDesign name="left" size={27} color={colorPalette.accent} />
        </TouchableOpacity>

        <Image
          source={require('../../assets/gift/fotografica_animation.webp')}
          style={styles.backgroundImage}
          contentFit="cover"
        />
        <View style={styles.profileInfo}>
          <TouchableOpacity  style={styles.avatarContainer}>
            <Image
              source={{ uri: avatar }}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <Text style={styles.username}>{user?.username || 'Usuario'}</Text>
        </View>
      </View> 

      <View style={styles.descriptionContainer}>    
           <SelectorOtherUserProfile selectedOption={selectedOption} handleSelectOption={handleSelectOption} />
        <Text style={styles.followDescription} ><Text  onPress={() => handleSelectOption('seguidores')} style={ selectedOption === 'seguidores' && styles.selectedText}><AntDesign name="team" size={14} />Sus Seguidores 5</Text>     <Text onPress={() => handleSelectOption('seguidos')} style={ selectedOption === 'seguidos' && styles.selectedText}><AntDesign name="addusergroup" size={14} />Sus Seguidos 10</Text></Text>
        <Text style={styles.descriptionTitle}><AntDesign name="infocirlceo" size={14} /> Su Descripción</Text>
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
    backgroundColor: '#fff',
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
    color:  colorPalette.accent,
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
    backgroundColor:  colorPalette.neutralDark,
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
    color:colorPalette.accent,
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
    color:colorPalette.accent,
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
export default OtherUserProfile;
