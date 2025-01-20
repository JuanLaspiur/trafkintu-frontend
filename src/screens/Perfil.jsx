import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import colorPalette from '../helpers/color_palette';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/header/Header';

function Perfil() {
  const { user } = useAuth();

  const handleEditProfilePress = () => {
    console.log('Editar perfil presionado');
  };

  return (
    <View style={styles.container}>
   <Header/>
      <View style={styles.profileHeader}>
        <Image
          source={{
            uri: user?.avatar || 'https://cdn.icon-icons.com/icons2/11/PNG/256/writer_person_people_man_you_1633.png',
          }}
          style={styles.avatar}
        />
        <Text style={styles.username}>{user?.username || 'Usuario'}</Text>
        <Text style={styles.email}>{user?.email || 'Email no disponible'}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfilePress}>
          <Ionicons name="pencil" size={20} color={colorPalette.accent} />
          <Text style={styles.editButtonText}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Información adicional:</Text>
        <Text style={styles.infoText}>Fecha de registro: {user?.createdAt || 'N/A'}</Text>
        <Text style={styles.infoText}>Rol: {user?.role || 'Usuario'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.neutralDark,
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colorPalette.accent,
  },
  email: {
    fontSize: 16,
    color: colorPalette.primary,
  },
  actions: {
    alignItems: 'center',
    marginBottom: 20,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colorPalette.neutralLight,
    padding: 10,
    borderRadius: 8,
  },
  editButtonText: {
    fontSize: 16,
    color: colorPalette.accent,
    marginLeft: 10,
  },
  infoSection: {
    backgroundColor: colorPalette.neutralLight,
    padding: 15,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colorPalette.primary,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: colorPalette.primary,
    marginBottom: 5,
  },
});

export default Perfil;

