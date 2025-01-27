import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colorPalette from '../../helpers/color_palette';

function SelectorMenu() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
             <View>
      <TouchableOpacity   onPress={() => navigation.navigate("UploadPoem")}  style={styles.option} >
      <Image source={require('../../../assets/icons/writing_5724478.webp')} style={styles.image}  />
      </TouchableOpacity>
          <Text style={styles.descritionText}>Escribir</Text>
      </View>
             <View>
      <TouchableOpacity style={styles.option}>
      <Image source={require('../../../assets/icons/libro.webp')} style={styles.image}  />
      </TouchableOpacity>
      <Text style={styles.descritionText}>Libros</Text>
      </View>
             <View>
      <TouchableOpacity style={styles.option}   onPress={() => navigation.navigate("Radio")}>
        <Image source={require('../../../assets/icons/radio.webp')} style={styles.image}  />
      </TouchableOpacity>
      <Text style={styles.descritionText}>Radio</Text>
      </View>
             <View>
      <TouchableOpacity style={styles.option}>
        <Ionicons name="share-social-outline" size={32} color="black" />
      </TouchableOpacity>
       <Text style={styles.descritionText}>Compartir</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
},
option: {
    width: 58,
    height: 58,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 50, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
},
selectedOption: {
    borderWidth: 2,
    borderColor: colorPalette.accent, 
},
image: {
    width: '100%',
    height: '100%',
},
descritionText: {
    color: colorPalette.accent,
    fontSize: 12,
    margin: 'auto',
}
});

export default SelectorMenu;
