// StepOneText.js
import React from 'react';
import { TextInput, Text, StyleSheet, Image } from 'react-native';
import colorPalette from '../../helpers/color_palette';

const StepOneText = ({ titulo, setTitulo, contenido, setContenido }) => {
  return (
    <>
      <Text style={styles.headerText}>
        <Image source={require('../../../assets/icons/archivo.webp')} style={styles.icon} />  Subir Escrito
      </Text>
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
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: '300',
    color: colorPalette.primary,
    marginVertical: 10,
  },
  input: {
    width: '98%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 16,
    elevation: 2,
  },
  textarea: {
    height: '66.5%',
    width: '98%',
    textAlignVertical: 'top',
  },
  icon: {
    width: 22,
    height: 22,
  },
});

export default StepOneText;
