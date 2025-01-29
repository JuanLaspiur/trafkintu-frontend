import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import colorPalette from '../../helpers/color_palette';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigation, useRoute } from '@react-navigation/native';

function Header() {
  const { user, logout, token } = useAuth();
  const navigation = useNavigation();
  const route = useRoute(); // si es OtherUserProfile el nombre de la ruta que no se vea ni nada más que Trafkintu
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleLogoutPress = () => {
    logout();
    setIsMenuVisible(false); 
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile'); 
    setIsMenuVisible(false); 
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.companyContainer}>
        <Image
                source={require('../../../assets/logo/logo1.png')}
                style={styles.logoImage}
              />
        </View>

        {token ? (
          route.name !== 'OtherUserProfile' && <>
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
                source={{ uri: user?.imageProfile } || {
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
                <TouchableOpacity onPress={handleProfilePress} style={styles.menuItem}>
                  <Ionicons
                    name="person"
                    size={20}
                    color={colorPalette.accent}
                    style={styles.menuIcon}
                  />
                  <Text style={styles.menuText}>Mi Perfil</Text>
                </TouchableOpacity>
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
                Ingresar{' '} 
                <Text style={styles.name}></Text>
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
    paddingTop: 18,
    paddingHorizontal: 15,
  },
  logoImage: {
    height: 50,
    width:105,
    resizeMode: 'contain', 
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
    borderRadius: 12,
    marginRight: 12,
    backgroundColor:'#fff'
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
  menudesplegable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
