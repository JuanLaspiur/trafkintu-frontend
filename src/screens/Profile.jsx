import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/header/Header';
import FullWidthPoemCards from '../components/fullWidthPoemCards/FullWidthPoemCards';

function Profile() {
  const { user } = useAuth();

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
        <Text style={styles.email}>{user?.email || 'Email no disponible'}</Text>
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
    <FullWidthPoemCards/>
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
  email: {
    fontSize: 16,
    color: '#777',
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
  postItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postSnippet: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  noPostsText: {
    fontSize: 14,
    color: '#777',
  },
});

export default Profile;
