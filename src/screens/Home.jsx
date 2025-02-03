import React, {useState, useEffect} from "react";
import { StyleSheet, ScrollView } from "react-native";
import Header from "../components/header/Header";
import LightGreenCard from "../components/llightGreenCard/LightGreenCard";
import colorPalette from "../helpers/color_palette";
import SelectorMenu from "../components/selectorMenu/SelectorMenu";
import LastPoems from "../components/lastPoems/LastPoems";
import SevenLastPoems from "../components/lastPoems/SevenLastPoems";
import LastYoutubeVideo from "../components/lastYoutubeVideo/LastYoutubeVideo";
import { getAllPoems } from "../services/poems.services";

function Home() {
const [allPoems, setAllPoems] = useState([]);
const [lastThreePoems, setLastThreePoems] =useState([]);
const [lastSevenPoems, setLastSevenPoems] =useState([]);

useEffect(() => {
  const fetchAllPoems = async () => {
    try {
      const result = await getAllPoems();
      const sortedPoems = result.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setAllPoems(sortedPoems);
      setLastThreePoems(sortedPoems.slice(0, 3));
      setLastSevenPoems(sortedPoems.slice(0, 7));
    } catch (error) {
      console.error("Error fetching poems:", error);
    }
  };
  fetchAllPoems();
}, []);
  return (
    <ScrollView style={styles.container}>
      <Header />
      <LightGreenCard />
      <SelectorMenu />
      <LastPoems lastThreePoems={lastThreePoems}/> 
      {/** TO-DO hacer que el video id sea modificable */} 
      <LastYoutubeVideo videoId="tTfMid0Sweg" /> 
      <SevenLastPoems lastSevenPoems={lastSevenPoems}/>
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
