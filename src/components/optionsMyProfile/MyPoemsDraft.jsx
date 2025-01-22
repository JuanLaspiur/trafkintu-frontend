import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PoemCard from './components/PoemCard';
import colorPalette from '../../helpers/color_palette';
import AntDesign from '@expo/vector-icons/AntDesign';

function MyPoemsDraft() {
    const poems = [
        { title: "Sin Pan ni Trabajo", image: require('../../../assets/gift/sin_pan_y_sin_trabajo_animation.webp') },
        { title: "Poema 2", image: require('../../../assets/gift/fotografica_animation.webp') },
        { title: "Poema 3", image: require('../../../assets/gift/hYq1Qv6q1_2000x1500__1_animation.webp') },
        { title: "Poema 4", image: require('../../../assets/gift/slide_nort_animation.webp') },
        { title: "Poema 5", image: require('../../../assets/gift/Muralismo-Mexicano_animation.webp') },
        { title: "Poema 6", image: require('../../../assets/gift/quinquela_animation.webp') },
        { title: "Poema 7", image: require('../../../assets/gift/descarga_animation.webp') },
        { title: "Poema 8", image: require('../../../assets/gift/sin_pan_y_sin_trabajo_animation.webp') },
        { title: "Poema 9", image: require('../../../assets/gift/sin_pan_y_sin_trabajo_animation.webp') },
      ];
  const [currentPage, setCurrentPage] = useState(1);
  const poemsPerPage = 5;

  const totalPages = Math.ceil(poems.length / poemsPerPage);

  const indexOfLastPoem = currentPage * poemsPerPage;
  const indexOfFirstPoem = indexOfLastPoem - poemsPerPage;
  const currentPoems = poems.slice(indexOfFirstPoem, indexOfLastPoem);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Mis Borradores </Text>
      {currentPoems.map((poem, index) => (
        <PoemCard key={index} image={poem.image} title={poem.title} />
      ))}

      <View style={styles.pagination}>
        <AntDesign
          name="leftcircle"
          size={30}
          color={colorPalette.primary}
          onPress={handlePreviousPage}
          disabled={currentPage === 1}
        />
        <Text style={styles.pageText}>Página {currentPage} de {totalPages}</Text>
        <AntDesign
          name="rightcircle"
          size={30}
          color={colorPalette.primary}
          onPress={handleNextPage}
          disabled={currentPage === totalPages}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    }, 
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        color: colorPalette.accent,
        paddingTop:15,   
         padding:10
      
    },
    pagination: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    pageText: {
      marginHorizontal: 10,
      fontSize: 16,
      color:colorPalette.accent,
    },
  });

export default MyPoemsDraft