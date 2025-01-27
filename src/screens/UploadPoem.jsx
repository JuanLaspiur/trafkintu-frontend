// UploadPoem.js
import React, { useState } from 'react';
import { View, Alert, TouchableOpacity, ScrollView, StyleSheet, Text } from 'react-native';
import colorPalette from '../helpers/color_palette';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import ImagesModal from '../components/imagesModal/ImagesModal';
import StepOneText from '../components/uploadPoemSteps/StepOneText';
import StepTwoCategoryImage from '../components/uploadPoemSteps/StepTwoCategoryImage';

function UploadPoem() {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagen, setImagen] = useState(null);
  const [step, setStep] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const manejarEnvio = () => {
    if (step === 1) {
      if (!titulo || !contenido) {
        Alert.alert('Error', 'El título y contenido son obligatorios');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!imagen) {
        Alert.alert('Error', 'La imagen es obligatoria');
        return;
      }
      console.log({ titulo, contenido, imagen });
      Alert.alert('Éxito', '¡Poema subido con éxito!');
      setTitulo('');
      setContenido('');
      setImagen(null);
      setStep(1);
    }
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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={27} color={colorPalette.accent} />
        </TouchableOpacity>
      </View>

      {step === 1 && (
        <StepOneText
          titulo={titulo}
          setTitulo={setTitulo}
          contenido={contenido}
          setContenido={setContenido}
        />
      )}

      {step === 2 && (
        <StepTwoCategoryImage
          imagen={imagen}
          abrirModalImagenes={abrirModalImagenes}
        />
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={manejarEnvio}>
          <Text style={styles.buttonText}>{step === 1 ? 'Siguiente' : 'Subir Poema'}</Text>
        </TouchableOpacity>
        {step === 2 && (
          <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={() => setStep(1)}>
            <Text style={styles.buttonText}>Regresar</Text>
          </TouchableOpacity>
        )}
      </View>

      <ImagesModal visible={modalVisible} onClose={cerrarModal} onImageSelect={recibirImagen} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  header: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    paddingTop: 10,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginVertical: 8,
  },
  submitButton: {
    backgroundColor: colorPalette.primary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
});

export default UploadPoem;
