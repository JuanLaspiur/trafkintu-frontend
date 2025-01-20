import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import colorPalette from '../../helpers/color_palette';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';

function Header() {
  const { user, logout, token } = useAuth();
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleLogoutPress = () => {
    logout();
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.companyContainer}>
          <Text style={styles.companyName}>Trafkintu</Text>
        </View>

        {token ? (
          <>
            <View style={styles.userContainer}>
              <Text style={styles.greeting}>
                Hola,{' '}
                <Text style={styles.name}>
                  {user?.username || 'Usuario'}
                </Text>
              </Text>
            </View>
            <Image
              source={{
                uri: 'https://media.licdn.com/dms/image/v2/D4D35AQGtDVqcgI4CEw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736971943737?e=1737648000&v=beta&t=72TgEyElW0HClohFiHHb6AcP1Pk9UOSDbtzpBV_-67Y', // Imagen predeterminada
              }}
              style={styles.icon}
            />
            <TouchableOpacity onPress={handleLogoutPress}>
              <Ionicons
                name="log-out"
                size={30}
                color={colorPalette.accent}
                style={styles.iconLogout}
              />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={styles.userContainer}>
              <Text style={styles.greeting}>
                Ingresa,{' '}
                <Text style={styles.name}>POR AQUÍ</Text>
              </Text>
            </View>
            <TouchableOpacity onPress={handleLoginPress}>
              <Ionicons
                name="log-in"
                size={30}
                color={colorPalette.accent}
                style={styles.iconLogin}
                accessibilityLabel="Botón de inicio de sesión"
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 87,
    backgroundColor: colorPalette.neutralDark,
    alignItems: 'center',
    fontFamily: 'Roboto_400Regular',
    flexDirection: 'row',
    gap: 15,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  companyContainer: {
    flex: 1,
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colorPalette.accent,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 39,
    height: 39,
    borderRadius: 25,
    marginRight: 12,
  },
  iconLogin: {
    marginRight: 12,
  },
  iconLogout: {
    marginRight: 12,
  },
  greeting: {
    fontSize: 14,
    color: colorPalette.primary,
    marginTop: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default Header;
