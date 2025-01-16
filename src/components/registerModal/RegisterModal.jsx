import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialIcons } from "@expo/vector-icons"; // Asegúrate de instalar @expo/vector-icons

function RegisterModal({
  isModalVisible,
  setIsModalVisible,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  handleRegisterSubmit,
}) {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={handleCloseModal}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Registro</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor="#A1A1A1"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#A1A1A1"
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Contraseña"
              placeholderTextColor="#A1A1A1"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              style={styles.eyeIcon}
            >
              <MaterialIcons
                name={isPasswordVisible ? "visibility" : "visibility-off"}
                size={24}
                color="#A1A1A1"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.termsContainer}>
            <BouncyCheckbox
              size={25}
              fillColor="#25B3AD"
              unfillColor="#FFFFFF"
              text="Acepto los términos y condiciones"
              textStyle={{
                fontFamily: "Roboto_400Regular",
                fontSize: 14,
                fontWeight: "400",
                color: "#FFFFFF",
              }}
              iconStyle={{ borderColor: "#A1A1A1", borderRadius: 5 }}
              isChecked={isTermsAccepted}
              disableText={false}
              onPress={(isChecked) => setIsTermsAccepted(isChecked)}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.modalButton,
              { backgroundColor: isTermsAccepted ? "#25B3AD" : "#A1A1A1" },
            ]}
            onPress={handleRegisterSubmit}
            disabled={!isTermsAccepted}
          >
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCloseModal}>
            <Text style={styles.closeModalText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContainer: {
    backgroundColor: "#4F4F4F",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    maxWidth: 400,
  },
  modalTitle: {
    fontFamily: "Roboto_400Regular",
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#4A4A4A",
    color: "white",
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    height: 48,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4A4A4A",
    borderRadius: 10,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    color: "white",
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 15,
    height: 48,
  },
  eyeIcon: {
    padding: 10,
  },
  modalButton: {
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 19,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  closeModalText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    fontWeight: "400",
    color: "#25B3AD",
    textAlign: "center",
    marginTop: 10,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingLeft: 10,
  },
});

export default RegisterModal;
