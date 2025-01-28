// UploadPoem.js
import React, { useState } from 'react';
import { View, Alert, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import colorPalette from '../helpers/color_palette';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import ImagesModal from '../components/imagesModal/ImagesModal';
import StepOneText from '../components/uploadPoemSteps/StepOneText';
import StepTwoCategoryImage from '../components/uploadPoemSteps/StepTwoCategoryImage';
import ButtonsComponent from '../components/uploadPoemSteps/ButtonsComponent';

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

      <ButtonsComponent step={step} manejarEnvio={manejarEnvio} setStep={setStep} />

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
    paddingTop:60
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    position:'absolute',
    top:45
  },
});

export default UploadPoem;
