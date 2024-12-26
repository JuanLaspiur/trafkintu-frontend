import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Header from "../components/header/Header";
function Home() {
  return (
    <ScrollView style={styles.container}>
        <Header/>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(37, 179, 173, 0.03)'
  },
});