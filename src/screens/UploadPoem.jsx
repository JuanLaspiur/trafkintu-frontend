import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import colorPalette from '../helpers/color_palette';
import ImagesModal from '../components/imagesModal/ImagesModal'; 
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

function UploadPoem() {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagen, setImagen] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

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

  const manejarBorrador = () => {
    Alert.alert('Borrador guardado', 'Tu escrito ha sido guardado como borrador');
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
      <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()} 
        >
          <AntDesign name="left" size={27} color='black' />
        </TouchableOpacity>

      <TouchableOpacity onPress={abrirModalImagenes} style={styles.imageWrapper}>
        <Text style={styles.imagePreview}>
          {imagen ? 'Imagen seleccionada' : 'Toca para subir una imagen'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.header}>Subir Escrito</Text>

      <TextInput
        style={styles.input}
        placeholder="Título del escrito"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Escribe tu escrito aquí..."
        value={contenido}
        onChangeText={setContenido}
        multiline
        numberOfLines={6}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={manejarEnvio}>
          <Text style={styles.buttonText}>Subir </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.draftButton]} onPress={manejarBorrador}>
          <Text style={styles.buttonText}>Borrador</Text>
        </TouchableOpacity>
      </View>

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
  backButton: {
    position: 'absolute',
    top: 70,
    left: 18,
    zIndex: 1,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
    flex: 1,
    marginRight: 8,
  },
  submitButton: {
    backgroundColor: colorPalette.primary,
  },
  draftButton: {
    backgroundColor: '#D3D3D3', 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  imageWrapper: {
    marginVertical: 16, 
    marginTop: 100,
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
