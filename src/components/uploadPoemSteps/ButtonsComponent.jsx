// ButtonsComponent.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import colorPalette from '../../helpers/color_palette';

function ButtonsComponent({ step, manejarEnvio, setStep }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={manejarEnvio}>
        <View style={styles.content}>
          <Text style={styles.buttonText}>{step === 1 ? 'Siguiente' : 'Subir Poema'}</Text>
          <Image
            source={
              step === 1
                ? require('../../../assets/icons/saltar.webp')
                : require('../../../assets/icons/writing_5724478.webp')
            }
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
      {step === 1 && (
        <TouchableOpacity style={[styles.button, styles.borradorButton]} onPress={() => setStep(1)}>
          <View style={styles.content}>
            <Text style={styles.buttonText}>Borrador</Text>
            <Image
              source={require('../../../assets/icons/borrador (1).webp')}
              style={styles.icon}
            />
          </View>
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
  borradorButton: {
    backgroundColor: 'gray',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  icon: {
    width: 22,
    height: 22,
  },
});

export default ButtonsComponent;
