import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colorPalette from "../../helpers/color_palette";

function SevenLastPoems() {
  const poems = [
    {
      id: 1,
      title: "El eco del bosque",
      author: "Juan Pérez",
      date: "01/01/2025",
      image: require("../../../assets/gift/fotografica_animation.webp"),
      image_route: "../../../assets/gift/fotografica_animation.webp"
    },
    {
      id: 2,
      title: "Amanecer eterno",
      author: "Ana García",
      date: "02/01/2025",
      image: require("../../../assets/gift/frida_animation_1.webp"),
      image_route: "../../../assets/gift/frida_animation_1.webp"
    },
    {
      id: 3,
      title: "Sombras perdidas",
      author: "Luis Fernández",
      date: "03/01/2025",
      image: require("../../../assets/gift/hYq1Qv6q1_2000x1500__1_animation.webp"),
      image_route: "../../../assets/gift/hYq1Qv6q1_2000x1500__1_animation.webp"
    },
    {
      id: 4,
      title: "Raíces profundas",
      author: "María López",
      date: "04/01/2025",
      image: require("../../../assets/gift/quinquela_animation.webp"),
      image_route: "../../../assets/gift/quinquela_animation.webp"
    },
    {
      id: 5,
      title: "La luna y el río",
      author: "Carlos Martínez",
      date: "05/01/2025",
      image: require("../../../assets/gift/yellow_kiss.webp"),
      image_route: "../../../assets/gift/yellow_kiss.webp"
    },
    {
      id: 6,
      title: "Versos en el viento",
      author: "Laura Gutiérrez",
      date: "06/01/2025",
      image: require("../../../assets/gift/slide_nort_animation.webp"),
      image_route: "../../../assets/gift/slide_nort_animation.webp"
    },
    {
      id: 7,
      title: "El faro y la noche",
      author: "Fernando Ruiz",
      date: "07/01/2025",
      image: require("../../../assets/gift/sin_pan_y_sin_trabajo_animation.webp"),
      image_route: "../../../assets/gift/sin_pan_y_sin_trabajo_animation.webp"
    }
  ];

  const [showAll, setShowAll] = useState(false);

  const visiblePoems = showAll ? poems : poems.slice(0, 4);

  const togglePoems = () => setShowAll(!showAll);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Siete últimos más leídos:</Text>
      <View style={styles.cardsContainer}>
        {visiblePoems.map((poem) => (
          <MiniPoemCard
            key={poem.id}
            title={poem.title}
            author={poem.author}
            date={poem.date}
            image={poem.image}
            image_route={poem.image_route}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.showMoreButton} onPress={togglePoems}>
        <Ionicons
          name={showAll ? "chevron-up" : "chevron-down"}
          size={30}
          color={colorPalette.secondary}
        />
      </TouchableOpacity>
    </View>
  );
}

function MiniPoemCard({ title, author, date, image, image_route }) {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("PoemDetail", {
      title,
      image,
      author,
      date,
      image_route
    });
  };

  return (
    <TouchableOpacity
      onPress={handleCardPress}
      activeOpacity={0.7}
      style={styles.miniCard}
    >
      <Image source={image} style={styles.miniImage} />
      <Text style={styles.miniCardTitle}>{title}</Text>
      <Text style={styles.miniCardSubtitle}>
        {author} • {date}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: colorPalette.secondary,
    marginBottom: 15,
    textShadowColor: colorPalette.neutralDark,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10
  },
  miniCard: {
    width: "45%",
    backgroundColor: colorPalette.secondary,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  miniImage: {
    width: "100%",
    height: 80
  },
  miniCardTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    paddingHorizontal: 10,
    paddingTop: 5,
    marginBottom:-2
  },
  miniCardSubtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#fff",
    paddingHorizontal: 10,
    paddingBottom: 5
  },
  showMoreButton: {
    marginTop: 15,
    alignItems: "center",
    marginHorizontal: "20%",
    padding: 10
  }
});

export default SevenLastPoems;
