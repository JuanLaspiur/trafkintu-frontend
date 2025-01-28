import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import CategoryPicker from './components/CategoryPicker';
import RecordAudio from './components/RecordAudio';

const StepTwoCategoryImage = ({ imagen, abrirModalImagenes }) => {
  return (
    <>
    <TouchableOpacity onPress={abrirModalImagenes} style={styles.imageWrapper}>
      <Text style={styles.imagePreview}>
        {imagen ? 'Imagen seleccionada' : 'Selecciona una imagen'}
      </Text>
    </TouchableOpacity>
    <CategoryPicker/>
    <RecordAudio/>
    </>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    marginTop: -17,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    textAlign: 'center',
    lineHeight: 150,
  },
});

export default StepTwoCategoryImage;