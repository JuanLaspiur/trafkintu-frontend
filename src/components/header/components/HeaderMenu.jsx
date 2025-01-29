import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import colorPalette from '../../../helpers/color_palette';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

function HeaderMenu({ user }) {
  const { logout } = useAuth();
  const navigation = useNavigation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleLogoutPress = () => {
    logout();
    setIsMenuVisible(false);
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
    setIsMenuVisible(false);
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings');
    setIsMenuVisible(false);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <View style={styles.userContainer}>
        <Text style={styles.greeting}>Hola, <Text style={styles.name}>{user?.username || 'Usuario'}</Text></Text>
      </View>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuToggle}>
        <Image source={{ uri: user?.imageProfile }} style={styles.icon} />
        <Ionicons name={isMenuVisible ? 'chevron-up' : 'chevron-down'} size={18} color={colorPalette.accent} />
      </TouchableOpacity>
      {isMenuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={handleProfilePress} style={styles.menuItem}>
            <Ionicons name="person" size={20} color={colorPalette.accent} style={styles.menuIcon} />
            <Text style={styles.menuText}>Mi Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSettingsPress} style={styles.menuItem}>
            <Ionicons name="settings" size={20} color={colorPalette.accent} style={styles.menuIcon} />
            <Text style={styles.menuText}>Configuración</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogoutPress} style={styles.menuItem}>
            <Ionicons name="log-out" size={20} color={colorPalette.accent} style={styles.menuIcon} />
            <Text style={styles.menuText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 14,
    color: colorPalette.primary,
  },
  name: {
    fontWeight: 'bold',
  },
  menuToggle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    position: 'absolute',
    top: 75,
    right: 2,
    backgroundColor: colorPalette.neutralDark,
    borderRadius: 8,
    padding: 10,
    elevation: 5,
    zIndex: 999,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  menuText: {
    fontSize: 16,
    color: colorPalette.accent,
  },
  menuIcon: {
    marginRight: 10,
  },
});

export default HeaderMenu;