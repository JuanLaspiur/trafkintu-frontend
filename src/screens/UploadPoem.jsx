import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import colorPalette from '../helpers/color_palette';
import ImagesModal from '../components/imagesModal/ImagesModal'; 
import { Image } from 'expo-image';

function UploadPoem() {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagen, setImagen] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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

  const abrirModalImagenes = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const recibirImagen = (imagenSeleccionada) => {
    setImagen(imagenSeleccionada);
    cerrarModal();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={abrirModalImagenes} style={styles.imageWrapper}>
        <Text style={styles.imagePreview}>
          {imagen ? 'Imagen seleccionada' : 'Selecciona una imagen'}
        </Text>
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

      <ImagesModal
        visible={modalVisible}
        onClose={cerrarModal}
        onImageSelect={recibirImagen} 
      />
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
    marginVertical: 16,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: 200,
    height: 150,
    borderRadius: 8,
    textAlign: 'center',
    lineHeight: 150, 
  },
});

export default UploadPoem;
