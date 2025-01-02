import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons'; // Importamos el icono de Ionicons
import colorPalette from '../helpers/color_palette';

function UploadPoem() {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagen, setImagen] = useState(null);

  // Función para seleccionar la imagen
  const seleccionarImagen = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagen(resultado.assets[0].uri);
    }
  };

  // Función para enviar el poema
  const manejarEnvio = () => {
    if (!imagen) {
      Alert.alert('Error', 'La imagen es obligatoria');
      return;
    }

    console.log({ titulo, contenido, imagen });
    Alert.alert('Éxito', '¡Poema subido con éxito!');
    setTitulo('');
    setContenido('');
    setImagen(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagen con ícono flotante de "+" en la esquina inferior derecha */}
      <TouchableOpacity onPress={seleccionarImagen} style={styles.imageWrapper}>
        <Image
          source={imagen ? { uri: imagen } : { uri: 'https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg' }} // Imagen por defecto si no hay una seleccionada
          style={styles.imagePreview}
        />
        <Ionicons name="add-circle" size={20} color="white" style={styles.icon} /> {/* Icono de "+" */}
      </TouchableOpacity>

      <Text style={styles.header}>Subir Poema</Text>

      <TextInput
        style={styles.input}
        placeholder="Título del poema"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Escribe tu poema aquí..."
        value={contenido}
        onChangeText={setContenido}
        multiline
        numberOfLines={6}
      />

      <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={manejarEnvio}>
        <Text style={styles.buttonText}>Enviar Poema</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: colorPalette.primary,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 16,
    elevation: 2,
  },
  textarea: {
    height: 250,
    textAlignVertical: 'top',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
  },
  submitButton: {
    backgroundColor: colorPalette.primary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  imageWrapper: {
    position: 'relative',
    marginVertical: 16,
  },
  imagePreview: {
    width: 200,
    height: 150,
    borderRadius: 8,
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor:colorPalette.primary, 
    padding: 5,
    borderRadius: 20,
  },
});

export default UploadPoem;
