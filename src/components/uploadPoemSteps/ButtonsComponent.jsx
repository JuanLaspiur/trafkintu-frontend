// ButtonsComponent.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import colorPalette from '../../helpers/color_palette';

function ButtonsComponent({ step, manejarEnvio, setStep }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={manejarEnvio}>
        <Text style={styles.buttonText}>{step === 1 ? 'Siguiente' : 'Subir Poema'}</Text>
      </TouchableOpacity>
      {step === 1 && (
        <TouchableOpacity style={[styles.button, styles.borradorButton]} onPress={() => setStep(1)}>
          <Text style={styles.buttonText}>Borrador</Text>
        </TouchableOpacity>
      )}
      {step === 2 && (
        <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={() => setStep(1)}>
          <Text style={styles.buttonText}>Regresar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
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
  borradorButton:{
    backgroundColor: '#333',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
});

export default ButtonsComponent;

