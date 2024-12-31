import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Header from "../components/header/Header";
import LightGreenCard from "../components/llightGreenCard/LightGreenCard";
import colorPalette from "../helpers/color_palette";
import SelectorMenu from "../components/selectorMenu/SelectorMenu";
import LastPoems from "../components/lastPoems/LastPoems";
import SevenLastPoems from "../components/lastPoems/SevenLastPoems";
import LastYoutubeVideo from "../components/lastYoutubeVideo/LastYoutubeVideo";

function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <LightGreenCard />
      <SelectorMenu />
      <LastPoems /> 
       <LastYoutubeVideo videoId="tTfMid0Sweg" /> 
      <SevenLastPoems />
     
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.neutralLight,
  },
});
