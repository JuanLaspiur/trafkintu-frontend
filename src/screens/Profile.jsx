import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { Image } from "expo-image";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import colorPalette from '../helpers/color_palette';
import AntDesign from '@expo/vector-icons/AntDesign';

function Profile({ navigation }) {
  const { user } = useAuth();
  const [fontsLoaded] = useFonts({ Roboto_400Regular });
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(user?.description || 'Aún no se ha añadido una descripción personal.');

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSavePress = () => {
    setIsEditing(false);
    // Aquí puedes agregar la lógica para guardar la nueva descripción, por ejemplo, enviarla a la API o al contexto
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        {/* Botón de retroceso con el ícono de "menos" */}
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()} // Volver a la pantalla anterior
        >
          <AntDesign name="left" size={27} color="white" />
        </TouchableOpacity>

        <Image
          source={require('../../assets/gift/fotografica_animation.webp')}
          style={styles.backgroundImage}
          contentFit="cover"
        />
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: user?.avatar || 'https://cdn.icon-icons.com/icons2/11/PNG/256/writer_person_people_man_you_1633.png' }}
            style={styles.avatar}
          />
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginRight: 10,
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
