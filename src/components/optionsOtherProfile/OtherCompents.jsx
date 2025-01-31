import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colorPalette from '../../helpers/color_palette';
import ComentCard from './components/ComentCard';
import AntDesign from '@expo/vector-icons/AntDesign';
import Pagination from './components/Pagination';

function OtherComponents({commentsList}) {
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 4;

  const totalPages = Math.ceil(commentsList.length / commentsPerPage);
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = commentsList.slice(indexOfFirstComment, indexOfLastComment);

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
      <Text style={styles.title}>Sus comentarios</Text>
        <View style={styles.cardContainer}>
        {commentsList.length === 0 ? (
          <Text style={styles.noCommentsText}>
            No ha comentado nada aún.
          </Text>
        ) : (
          currentComments.map((comment) => (
            <ComentCard key={comment._id} comment={comment} />
          ))
        )}
 
      {commentsList.length > 0 && (
        <View style={styles.pagination}>
           <Pagination
             currentPage={currentPage}
             totalPages={totalPages}
             onNext={handleNextPage}
             onPrevious={handlePreviousPage}
           />
           </View>
      )}
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colorPalette.accent,
    paddingTop: 15,
    padding: 10,
  },
  cardContainer: {
    height: 450,
  },
  noCommentsText: {
    fontSize: 16,
    color: colorPalette.accent,
    paddingVertical:5
  },
  pagination: {
    marginTop: 20,
    position:'absolute',
    width:'100%',
    bottom:0
  },
 
});

export default OtherComponents;
