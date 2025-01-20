import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/header/Header';
import FullWidthPoemCards from '../components/fullWidthPoemCards/FullWidthPoemCards';

function Profile() {
  const { user } = useAuth();

  const [description, setDescription] = useState(user?.description || 'Añade una descripción...');
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveDescription = () => {
    setIsEditing(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{
            uri: user?.avatar || 'https://cdn.icon-icons.com/icons2/11/PNG/256/writer_person_people_man_you_1633.png',
          }}
          style={styles.avatar}
        />
        <Text style={styles.username}>{user?.username || 'Usuario'}</Text>

        <View style={styles.descriptionContainer}>
          {isEditing ? (
            <TextInput
              style={styles.descriptionInput}
              value={description}
              onChangeText={setDescription}
              autoFocus
              multiline
              placeholder="Escribe algo sobre ti..."
            />
          ) : (
            <Text style={styles.descriptionText}>{description}</Text>
          )}
          <TouchableOpacity onPress={isEditing ? handleSaveDescription : toggleEdit} style={styles.editButton}>
            <Ionicons name={isEditing ? 'checkmark' : 'pencil'} size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={styles.statsNumber}>{user?.followers || 0}</Text>
          <Text style={styles.statsLabel}>Seguidores</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsNumber}>{user?.following || 0}</Text>
          <Text style={styles.statsLabel}>Seguidos</Text>
        </View>
      </View>

      <View style={styles.postsSection}>
        <Text style={styles.sectionTitle}>Mis últimos escritos:</Text>
        <FullWidthPoemCards />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 40,
    paddingBottom: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#ddd',
    marginBottom: 15,
  },
  username: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    flex: 1,
  },
  descriptionInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 5,
  },
  editButton: {
    marginLeft: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 15,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  statsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  statsLabel: {
    fontSize: 14,
    color: '#777',
  },
  postsSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});

export default Profile;
