import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';

function ImagesModal({ visible, onClose }) {
  const images = [
    require('../../../assets/gift/descarga_animation.webp'),
    require('../../../assets/gift/fotografica_animation.webp'),
    require('../../../assets/gift/frida_animation_1.webp'),
    require('../../../assets/gift/gernica_animation_1.webp'),
    require('../../../assets/gift/hYq1Qv6q1_2000x1500__1_animation.webp'),
    require('../../../assets/gift/Muralismo-Mexicano_animation.webp'),
    require('../../../assets/gift/quinquela_animation.webp'),
    require('../../../assets/gift/sin_pan_y_sin_trabajo_animation.webp'),
    require('../../../assets/gift/slide_nort_animation.webp'),
    require('../../../assets/gift/yellow_kiss.webp')
  ];

  const [imagenes, setImagenes] = useState(images);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const seleccionarImagen = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagenes([...imagenes, resultado.assets[0].uri]);
      setImagenSeleccionada(resultado.assets[0].uri);
    }
  };

  return (
    <Modal visible={visible} onRequestClose={onClose} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.header}>Galería de Imágenes</Text>

        <Text style={styles.subHeader}>Imagenes Trafinktu</Text>

        <ScrollView contentContainerStyle={styles.imageContainer}>
          {imagenes.map((image, index) => (
            <View style={styles.imageWrapper} key={index}>
              <TouchableOpacity onPress={() => setImagenSeleccionada(image)}>
                <Image source={image} style={styles.image} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.selectedImageContainer}>
          <Text style={styles.selectedImageLabel}>Imagen Seleccionada:</Text>
          {imagenSeleccionada ? (
            <Image source={{ uri: imagenSeleccionada }} style={styles.selectedImage} />
          ) : (
            <Text style={styles.noImageText}>No hay imagen seleccionada</Text>
          )}
        </View>

        <TouchableOpacity style={styles.uploadButton} onPress={seleccionarImagen}>
          <Ionicons name="add-circle" size={40} color="white" style={styles.icon} />
          <Text style={styles.uploadText}>Subir Imagen</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  imageWrapper: {
    width: '48%',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  selectedImageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  selectedImageLabel: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  selectedImage: {
    width: 200,
    height: 150,
    borderRadius: 8,
  },
  noImageText: {
    color: '#fff',
    fontSize: 14,
    fontStyle: 'italic',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  uploadText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 8,
  },
  closeText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ImagesModal;
