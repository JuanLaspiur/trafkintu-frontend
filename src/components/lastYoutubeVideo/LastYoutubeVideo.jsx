import React, { useEffect, useState } from "react"; 
import { StyleSheet, View, Text, Image, Animated, Easing } from "react-native";
import { WebView } from "react-native-webview";
import colorPalette from "../../helpers/color_palette";

const LastYoutubeVideo = ({ videoId }) => {
  const [shimmerAnim] = useState(new Animated.Value(0)); 

  useEffect(() => {
    // Iniciar la animación shimmer
    const shimmerLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 400,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 400,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    );
    shimmerLoop.start();

    return () => shimmerLoop.stop();  
  }, [shimmerAnim]);

  const shimmerBackground = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#e0e0e0', '#f5f5f5'], 
  });

  if (!videoId) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}><Image source={require('../../../assets/icons/radio.webp')} style={styles.image} />  Último programa de Radio TFK</Text>
        <Animated.View style={[styles.skeleton, { backgroundColor: shimmerBackground }]}>
        </Animated.View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}><Image source={require('../../../assets/icons/radio.webp')} style={styles.image} />  Último programa de Radio TFK</Text>
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
    color: colorPalette.primary,
  },
  video: {
    width: "100%",
    height: 200,
  },
  image: {
    width: 20,
    height: 20,
  },
  skeleton: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
