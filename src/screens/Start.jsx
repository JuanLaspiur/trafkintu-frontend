import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

function Start() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular
  });

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.text}>Trafkintu.</Text>
        <Text style={styles.textBlack}>Cooperativa de Trabajo </Text>
        <Text style={styles.textBlackSmall}> orientada al campo cultural.</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>
          Ingreso 
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: "black"
  },
  overlay: {
    marginTop: "100",
    padding:'17'
  },
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 57,
    fontWeight: "700",
    color: "white",
    letterSpacing: 3
  },
  textBlack: {
    fontFamily: "Roboto_400Regular",
    fontSize: 30,
    fontWeight: "700",
    color: "#A1A1A1",
    letterSpacing: -2,
    // textShadowColor: '#B0B0B0', // Color de la sombra
    // textShadowOffset: { width: 10, height: 10 }, // Desplazamiento de la sombra
    //  textShadowRadius: 70, // Radio de la sombra
  },
  textBlackSmall: {
    fontFamily: "Roboto_400Regular",
    fontSize: 24,
    marginTop: -2,
    fontWeight: "400",
    color: "#A1A1A1",
    textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 70
  },
  button: {
    marginTop:'150',
    alignSelf: "center",
    backgroundColor: "#25B3AD",
    paddingVertical: 15,
    paddingHorizontal: 72,
    borderRadius: 19
  },
  buttonText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 21,
    fontWeight: "700",
    color: "white"
  },


});

export default Start;
