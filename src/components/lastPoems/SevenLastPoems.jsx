import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colorPalette from "../../helpers/color_palette";
import { formatDateToDDMMYYYY } from "../../helpers/formatDate";

function SevenLastPoems({ lastSevenPoems }) {
  const poems = lastSevenPoems;

  const [showAll, setShowAll] = useState(false);

  const visiblePoems = showAll ? poems : poems.slice(0, 4);

  const togglePoems = () => setShowAll(!showAll);

  return (
    <View style={styles.container}>
     <Text style={styles.title}>
       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
         <Image source={require('../../../assets/gift/cuadrado_loading.webp')} style={styles.titleMiniIcon} />
         <Text style={styles.tiitleText}>Últimos tres poemas:</Text>
       </View>
     </Text>
      <View style={styles.cardsContainer}>
        {visiblePoems.map((poem) => (
          <MiniPoemCard
            key={poem._id}
            date={formatDateToDDMMYYYY(poem.createdAt)}
            poem={poem}
          />
        ))}
        {showAll && (
          <MiniCardSeeAll onPress={togglePoems} />
        )}
      </View>
      <TouchableOpacity style={styles.showMoreButton} onPress={togglePoems}>
        <Ionicons
          name={showAll ? "chevron-up" : "chevron-down"}
          size={30}
          color={colorPalette.accent} 
        />
      </TouchableOpacity>
    </View>
  );
}

function MiniPoemCard({  date, poem }) {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("PoemDetail", { poem });
  };

  const dateString = date ? (typeof date === 'string' ? date : formatDateToDDMMYYYY(date)) : '';

  return (
    <TouchableOpacity
      onPress={handleCardPress}
      activeOpacity={0.7}
      style={styles.miniCard}
    >
      <Image source={poem.image} style={styles.miniImage} />
      <Text style={styles.miniCardTitle}>{poem.title}</Text>
      <Text style={styles.miniCardSubtitle}>
        <Image
          source={require('../../../assets/icons/autor_card.webp')}
          style={styles.iconTitleCard}
        />{" "}
       {poem.author.username} • {dateString}
      </Text>
    </TouchableOpacity>
  );
}

function MiniCardSeeAll({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.button}>
      <Text style={styles.buttonText}>Ver todos</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 15,
    paddingHorizontal: 2,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'flex-start', 
  },
  tiitleText:{
    fontSize: 17,
    fontWeight: '600',
    color: colorPalette.primary,  
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
  iconTitleCard: {
    height: 12,
    width: 12,
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
    shadowRadius: 4,
  },
  miniImage: {
    width: "100%",
    height: 80,
  },
  miniCardTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    paddingHorizontal: 10,
    paddingTop: 5,
    marginBottom: -2,
  },
  miniCardSubtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#fff",
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  showMoreButton: {
    marginTop: 15,
    alignItems: "center",
    marginHorizontal: "20%",
    padding: 10,
  },
  button: {
    width: "45%",
    backgroundColor: colorPalette.accent,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginRight: 8,
  },
  titleMiniIcon: {
    width: 20,
    height: 20,
    marginRight: 1, // Para mayor separación entre la imagen y el texto
  },
});

export default SevenLastPoems;

