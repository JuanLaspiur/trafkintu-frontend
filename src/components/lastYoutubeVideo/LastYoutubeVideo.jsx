import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WebView } from "react-native-webview";
import colorPalette from "../../helpers/color_palette";

const LastYoutubeVideo = ({ videoId }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Último programa de Radio TFK</Text>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
      />
    </View>
  );
};

export default LastYoutubeVideo;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 12,
    backgroundColor: colorPalette.neutralDark,
    textAlign: "center",
    color:colorPalette.primary
  },
  video: {
    width: "100%",
    height: 200,
  },
});
