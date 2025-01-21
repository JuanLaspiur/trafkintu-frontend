import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colorPalette from '../helpers/color_palette';

function OtherUserProfile({ user }) {
  const defaultUser = {
    username: 'Nombre de Usuario',
    email: 'usuario@email.com',
    avatar: 'https://cdn.icon-icons.com/icons2/11/PNG/256/writer_person_people_man_you_1633.png',
    bio: 'Este usuario aún no tiene una biografía.',
  };

  const currentUser = user || defaultUser;

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{
            uri: currentUser.avatar,
          }}
          style={styles.avatar}
        />
        <Text style={styles.username}>{currentUser.username}</Text>
        <Text style={styles.email}>{currentUser.email}</Text>
      </View>

      <View style={styles.bioSection}>
        <Text style={styles.sectionTitle}>Biografía:</Text>
        <Text style={styles.bioText}>{currentUser.bio}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubbles" size={20} color={colorPalette.accent} />
          <Text style={styles.actionButtonText}>Enviar mensaje</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="person-add" size={20} color={colorPalette.accent} />
          <Text style={styles.actionButtonText}>Seguir</Text>
        </TouchableOpacity>
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
  bioSection: {
    backgroundColor: colorPalette.neutralLight,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colorPalette.primary,
    marginBottom: 10,
  },
  bioText: {
    fontSize: 14,
    color: colorPalette.primary,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colorPalette.neutralLight,
    padding: 10,
    borderRadius: 8,
  },
  actionButtonText: {
    fontSize: 16,
    color: colorPalette.accent,
    marginLeft: 10,
  },
});

export default OtherUserProfile;
