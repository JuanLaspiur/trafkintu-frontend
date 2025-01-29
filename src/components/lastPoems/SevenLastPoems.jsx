import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colorPalette from "../../helpers/color_palette";
import { formatDateToDDMMYYYY } from "../../helpers/formatDate";

function SevenLastPoems({lastSevenPoems}) {
  const poems = lastSevenPoems;
  const [showAll, setShowAll] = useState(false);

  const visiblePoems = showAll ? poems : poems.slice(0, 4);

  const togglePoems = () => setShowAll(!showAll);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Siete últimos más leídos: TO-DO</Text>
      <View style={styles.cardsContainer}>
        {visiblePoems.map((poem) => (
          <MiniPoemCard
            key={poem._id}
            title={poem.title}
            author={poem.author}
            date={formatDateToDDMMYYYY(poem.createdAt)}
            image={poem.image}
            content={poem.content}
            image_route={'../../../assets/gift/fotografica_animation.webp'}
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

function MiniPoemCard({ title, author, date, image, image_route, content }) {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("PoemDetail", {
      title,
      image,
      author,
      date,
      image_route,
      content
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
        <Image source={require('../../../assets/icons/autor_card.webp')} style={styles.iconTitleCard} /> {author} • {date}
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
  },  iconTitleCard:{
    height:12,
    width:12,
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
