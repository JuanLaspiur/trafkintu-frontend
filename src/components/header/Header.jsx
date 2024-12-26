import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colorPalette from '../../helpers/color_palette';

function Header() {
  return (
    <View>
      <View style={styles.header}>
        <View>
          <Text style={styles.companyName}>Trafkintu</Text>
        </View>
        <View>
          <Text style={styles.greeting}>Hola, <Text style={styles.name}>ARIEL GONZÁLES</Text></Text>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 87,
    backgroundColor: colorPalette.neutralDark,
    alignItems: 'center',
    fontFamily: "Roboto_400Regular",
    display: 'flex', 
    flexDirection: 'row',
    gap: 25,
    paddingTop: 15,
    paddingLeft: 15,
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colorPalette.accent, 
  },
  greeting: {
    fontSize: 14,
    color: colorPalette.primary,
    marginTop:5
  },
  name: {
    fontWeight: 'bold',
  },
});

export default Header;
