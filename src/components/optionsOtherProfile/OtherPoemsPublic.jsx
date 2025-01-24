import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PoemCard from './components/PoemCard';
import colorPalette from '../../helpers/color_palette';
import AntDesign from '@expo/vector-icons/AntDesign';
import Pagination from './components/Pagination';

function OtherPoemsPublic() {
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
      <Text style={styles.title} >Sus Escritos Públicos </Text>
      {currentPoems.map((poem, index) => (
        <PoemCard key={index} image={poem.image} title={poem.title} />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
      />
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
      
    }
  });
export default OtherPoemsPublic