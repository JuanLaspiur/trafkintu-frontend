import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

function HeaderProfileLogo({ color }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo/captus.webp')}
        style={[styles.logo, { backgroundColor: color }]} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 8,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    position: 'relative',
    zIndex: 9999,
  },
});

export default HeaderProfileLogo;
