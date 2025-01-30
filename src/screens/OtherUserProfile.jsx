import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,Image as ImageNoGift, TextInput, Alert } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { Image } from "expo-image";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import colorPalette from '../helpers/color_palette';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker'; 
import SelectorOtherUserProfile from '../components/selectorMenu/SelectorOtherUserProfile';
import OtherPoemsPublic from '../components/optionsOtherProfile/OtherPoemsPublic';
import OtherFollowers from '../components/optionsOtherProfile/OtherFollowers.jsx';
import OtherFollowing from '../components/optionsOtherProfile/OtherFollowing.jsx';
import { useNavigation } from '@react-navigation/native';
import OtherComponents from '../components/optionsOtherProfile/OtherCompents.jsx';
import HeaderProfileLogo from '../components/header/HeaderProfileLogo.jsx';
import { useRoute } from '@react-navigation/native';

function OtherUserProfile({ otherUser }) {
 const { user } = useAuth();
 const route = useRoute();
 const { avatar , name, author } = route.params;
 const navigation = useNavigation();
  const [fontsLoaded] = useFonts({ Roboto_400Regular });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOption, setSelectedOption] = useState('publico');
  const [description, setDescription] = useState(author?.description || 'Aún no se ha añadido una descripción personal.');

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }



    const handleSelectOption = (option) => {
          setSelectedOption(option);
      };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
          <HeaderProfileLogo color={'#fff'}/>
      <View style={styles.profileHeader}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()} 
        >
          <AntDesign name="left" size={27} color='#fff' />
        </TouchableOpacity>

        <Image
          source={author?.imagenPortada || require('../../assets/gift/fotografica_animation.webp')}
          style={styles.backgroundImage}
          contentFit="cover"
        />
        <View style={styles.profileInfo}>
          <TouchableOpacity  style={styles.avatarContainer}>
            <ImageNoGift
              source={{ uri: avatar }}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <Text style={styles.username}>{author?.username || 'Usuario'}</Text>
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
      {selectedOption === 'publico' && <OtherPoemsPublic/> }
      {selectedOption === 'comentarios' && <OtherComponents/>}
      {selectedOption === 'seguidores' && <OtherFollowers/>}
      {selectedOption === 'seguidos' && <OtherFollowing/>}
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
