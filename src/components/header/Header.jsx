import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import colorPalette from '../../helpers/color_palette';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigation, useRoute } from '@react-navigation/native';
import HeaderMenu from './components/HeaderMenu.jsx';

function Header() {
  const { user, token } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.companyContainer}>
          <Image source={require('../../../assets/logo/logo1.png')} style={styles.logoImage} />
        </View>
        {token ? (
          route.name !== 'OtherUserProfile' && <HeaderMenu user={user} />
        ) : (
          <>
            <View style={styles.userContainer}>
              <Text style={styles.greeting}>Ingresar</Text>
            </View>
            <TouchableOpacity onPress={handleLoginPress}>
              <Ionicons name="log-in" size={30} color={colorPalette.accent} style={styles.iconLogin} />
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
    flexDirection: 'row',
    gap: 15,
    paddingTop: 18,
    paddingHorizontal: 15,
  },
  logoImage: {
    height: 50,
    width: 105,
    resizeMode: 'contain',
  },
  companyContainer: {
    flex: 1,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLogin: {
    marginRight: 12,
  },
  greeting: {
    fontSize: 14,
    color: colorPalette.primary,
    marginTop: 5,
  },
});

export default Header;