import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import colorPalette from '../../helpers/color_palette';

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

  const handleContinuar = () => {
    if (imagenSeleccionada) {
      // Lógica para continuar, como navegar a otra pantalla o hacer algo con la imagen seleccionada
      console.log('Imagen seleccionada:', imagenSeleccionada);
    }
  };

  return (
    <Modal visible={visible} onRequestClose={onClose} animationType="slide">
      <TouchableOpacity onPress={onClose} style={styles.absoluteBack}>
        <AntDesign name="left" size={27} color={colorPalette.accent} />
      </TouchableOpacity>

      <View style={styles.modalContainer}>
        <Text style={styles.header}>Galería de Imágenes</Text>

        <Text style={styles.subHeader}>Imagenes Trafinktu</Text>

        <ScrollView contentContainerStyle={styles.imageContainer}>
          {imagenes.map((image, index) => {
            // Verifica si es la última imagen (la que será el botón)
            if (index === imagenes.length - 1) {
              return (
                <View style={styles.imageWrapper} key={index}>
                  <TouchableOpacity onPress={seleccionarImagen}>
                    <View style={styles.uploadImageWrapper}>
                      <Text style={styles.uploadText}>Subir Imagen</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            } else {
              return (
                <View
                  style={[
                    styles.imageWrapper,
                    imagenSeleccionada === image ? styles.selectedCard : {}
                  ]}
                  key={index}
                >
                  <TouchableOpacity onPress={() => setImagenSeleccionada(image)}>
                    <Image source={image} style={styles.image} />
                  </TouchableOpacity>
                </View>
              );
            }
          })}
        </ScrollView>

        <TouchableOpacity
          style={[styles.continuarButton, !imagenSeleccionada && styles.disabledButton]}
          onPress={handleContinuar}
          disabled={!imagenSeleccionada}
        >
          <Text style={styles.continuarText}>Continuar</Text>
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
  uploadImageWrapper: {
    width: '100%',
    height: 100,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  uploadText: {
    color: '#fff',
    fontSize: 16,
  },
  selectedCard: {
    borderWidth: 3,
    borderColor: '#007BFF',
    borderRadius: 8,
  },
  continuarButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#B0C4DE',
  },
  continuarText: {
    color: '#fff',
    fontSize: 18,
  },
  absoluteBack: {
    position: 'absolute',
    left: 5,
    top: 10,
  },
});

export default ImagesModal;

