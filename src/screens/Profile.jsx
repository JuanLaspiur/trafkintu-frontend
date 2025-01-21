import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { Image } from "expo-image";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import colorPalette from '../helpers/color_palette';

function Profile() {
  const { user } = useAuth();
  const [fontsLoaded] = useFonts({ Roboto_400Regular });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/gift/fotografica_animation.webp')}
          style={styles.backgroundImage}
          contentFit="cover"
        />
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: user?.avatar || 'https://cdn.icon-icons.com/icons2/11/PNG/256/writer_person_people_man_you_1633.png' }}
            style={styles.avatar}
          />
          <Text style={styles.username}>{user?.username || 'Usuario'}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>20</Text>
          <Text style={styles.statLabel}>Publicaciones</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>91</Text>
          <Text style={styles.statLabel}>Seguidores</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>73</Text>
          <Text style={styles.statLabel}>Seguidos</Text>
        </View>
      </View>   
       <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Descripción</Text>
        <Text style={styles.descriptionText}>
          {user?.description || 'Aún no se ha añadido una descripción personal.'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 30,
    backgroundColor: colorPalette.neutralDark,
    paddingBottom: 20,
    paddingHorizontal: 5,
  },
  profileHeader: {
    position: 'relative',
    marginBottom: 20,
    height: 200,
    borderRadius: 5,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  profileInfo: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: "Roboto_400Regular",
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colorPalette.accent,
  },
  statLabel: {
    fontSize: 11,
    color: colorPalette.accent,
  },
  descriptionContainer: {
    marginHorizontal: 5,
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  descriptionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colorPalette.accent,
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 11,
    color: colorPalette.accent,
    lineHeight: 20,
  },

});

export default Profile;
