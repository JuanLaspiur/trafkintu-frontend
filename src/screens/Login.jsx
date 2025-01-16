import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { useNavigation } from "@react-navigation/native";
import RegisterModal from '../components/registerModal/RegisterModal.jsx'; 

const { height } = Dimensions.get("window");

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);  
  const [fontsLoaded] = useFonts({
    Roboto_400Regular
  });

  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    navigation.navigate("Home");
  };

  const handleRegister = () => {
    setIsModalVisible(true);  
  };

  const handleRegisterSubmit = () => {
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    setIsModalVisible(false); 
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.text}>Trafkintu.</Text>
        <Text style={styles.textBlack}>Iniciar sesión</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#A1A1A1"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#A1A1A1"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerText}>¿Aún no tienes cuenta? Regístrate aquí</Text>
      </TouchableOpacity>

      <RegisterModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleRegisterSubmit={handleRegisterSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: "black",
    paddingHorizontal: 20,
    justifyContent: "center"
  },
  overlay: {
    marginBottom: 50,
    padding: 20
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
    letterSpacing: -2
  },
  inputContainer: {
    marginBottom: 30
  },
  input: {
    backgroundColor: "#4A4A4A",  
    color: "white",
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#25B3AD",
    paddingVertical: 12,  
    paddingHorizontal: 60,
    borderRadius: 19
  },
  buttonText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 18, 
    fontWeight: "700",
    color: "white"
  },
  registerText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    fontWeight: "400",
    color: "#A1A1A1",
    textAlign: "center",
    marginTop: 20
  }
});

export default Login;
