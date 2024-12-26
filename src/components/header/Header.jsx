import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Ionicons } from '@expo/vector-icons'; 

function Header() {
  return (<View>
    <View style={styles.header}>
      <Text style={styles.text}>
              <Image source={require('../../../assets/logo/logo1.png')} style={styles.image} alt='logo'/> 
      </Text>
      <View style={styles.iconContainer}> 
        <Ionicons name="notifications-outline" size={24} color="white" /> 
        <Ionicons name="search-outline" size={24} color="white" style={{ marginLeft: 15 }} /> 
      </View>
    
    </View>
    <View style={styles.optionsContainer}> 
        <TouchableOpacity style={styles.option}>
          <Ionicons name="home-outline" size={24} color={'gray'} />
          <Text style={styles.optionText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} >
          <Ionicons name="person-outline" size={24} color={'gray'} />
          <Text style={styles.optionText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="settings-outline" size={24}  color={'gray'} />
          <Text style={styles.optionText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#CCCCCC',
    paddingTop: '40',
    paddingHorizontal: '15',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: "Roboto_400Regular",
  },
  image:{
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '300', 
  },
  iconContainer: {
    flexDirection: 'row',
  },
  optionsContainer: {
    flexDirection: 'row',
    backgroundColor: '#CCCCCC',
    paddingVertical:'10',
    justifyContent:'center',
    gap:'5'

  },
  option: {
    alignItems: 'center',
    marginLeft: 15, 
    backgroundColor:'#E8E8E8',
    width:'63',
    height:'63',
    borderRadius:'50%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',

  },
  optionText: {
    fontSize: 12,
    marginTop: 5,
    color:'gray'
  },
});

export default Header;