import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useRoute } from '@react-navigation/native';
import colorPalette from '../helpers/color_palette';
import SevenLastPoems from '../components/lastPoems/SevenLastPoems';

function Perfil() {
  const route = useRoute();
  const { name, avatar } = route.params;

  const [isFollowing, setIsFollowing] = useState(false);

  const [followers, setFollowers] = useState(128);
  const [following, setFollowing] = useState(75);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);

    setFollowers((prevFollowers) => 
      isFollowing ? prevFollowers - 1 : prevFollowers + 1
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('../../assets/gift/sin_pan_y_sin_trabajo_animation.webp')} 
        style={styles.coverImage} 
      />
      <View style={styles.profileInfo}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>

        <TouchableOpacity
          style={[
            styles.followButton,
            isFollowing ? styles.followingButton : styles.followButtonDefault,
          ]}
          onPress={handleFollowToggle}
        >
          <Text style={styles.followButtonText}>
            {isFollowing ? 'Siguiendo' : 'Seguir'}
          </Text>
        </TouchableOpacity>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{followers}</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{following}</Text>
            <Text style={styles.statLabel}>Seguidos</Text>
          </View>
        </View> 
         <SevenLastPoems />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: -60,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colorPalette.ligthBlue,
    marginBottom: 12,
  },
  followButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  followButtonDefault: {
    backgroundColor: colorPalette.ligthBlue,
  },
  followingButton: {
    backgroundColor: '#ddd',
  },
  followButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 8,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
});

export default Perfil;
