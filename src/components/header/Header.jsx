import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import colorPalette from '../../helpers/color_palette';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';

function Header() {
  const { user, logout, token } = useAuth();
  const navigation = useNavigation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleLogoutPress = () => {
    logout();
    setIsMenuVisible(false); // Cerrar el menú después de cerrar sesión
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
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
            <TouchableOpacity onPress={toggleMenu} style={styles.menudesplegable}>
              <Image
                source={{
                  uri: 'https://cdn.icon-icons.com/icons2/11/PNG/256/writer_person_people_man_you_1633.png',
                }}
                style={styles.icon}
              />
              <Ionicons
                name={isMenuVisible ? 'chevron-up' : 'chevron-down'}
                size={18}
                color={colorPalette.accent}
                style={styles.menuToggleIcon}
              />
            </TouchableOpacity>
            {isMenuVisible && (
              <View style={styles.menu}>
                <TouchableOpacity onPress={handleLogoutPress} style={styles.menuItem}>
                  <Ionicons
                    name="log-out"
                    size={20}
                    color={colorPalette.accent}
                    style={styles.menuIcon}
                  />
                  <Text style={styles.menuText}>Cerrar sesión</Text>
                </TouchableOpacity>
              </View>
            )}
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
  greeting: {
    fontSize: 14,
    color: colorPalette.primary,
    marginTop: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  menu: {
    position: 'absolute',
    top: 75,
    right: 2,
    backgroundColor: colorPalette.neutralDark,
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex:999
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
  menudesplegable:{
    flexDirection:'row',
    alignItems:'center',
  }
});

export default Header;
