import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Audio } from 'expo-av';
import colorPalette from '../../../helpers/color_palette';

const RecordAudio = () => {
  const [recording, setRecording] = useState(null);
  const [recordingUri, setRecordingUri] = useState(null);

  const startRecording = async () => {
    try {
      console.log('Requesting permissions...');
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status !== 'granted') {
        alert('Permission to access microphone is required!');
        return;
      }

      console.log('Starting recording...');
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
    } catch (error) {
      console.error('Failed to start recording', error);
    }
  };

  const stopRecording = async () => {
    setRecording(null);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setRecordingUri('Grabado con exito');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={recording ? stopRecording : startRecording}
      >
        <View style={styles.buttonContent}>
          {recording ? (
            <Image
              source={require('../../../../assets/icons/detetenerGrabacion...webp')}
              style={styles.icon}
            />
          ) : (
            <Image
              source={require('../../../../assets/icons/iniciarGrabacion.webp')}
              style={styles.icon}
            />
          )}
          <Text style={styles.buttonText}>
            {recording ? 'Detener grabación' : 'Iniciar grabación'}
          </Text>
        </View>
      </TouchableOpacity>
      {recording && (
        <View style={styles.recordingStatus}>
          <Image
            source={require('../../../../assets/icons/grabar.webp')}
            style={styles.icon}
          />
          <Text style={styles.recordingText}>Grabando...</Text>
        </View>
      )}
      {recordingUri && (
        <Text style={styles.recordingText}>
          Audio saved at: {recordingUri}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'gray' ,
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 10,
  },
  recordingStatus: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginTop: 10,
  },
  recordingText: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 8, 
  },
  icon: {
    width: 28,
    height: 28,
  },
});

export default RecordAudio;
