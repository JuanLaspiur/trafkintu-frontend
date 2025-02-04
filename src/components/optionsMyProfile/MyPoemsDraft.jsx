import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import PoemCard from './components/PoemCard';
import colorPalette from '../../helpers/color_palette';
import Pagination from './components/Pagination';

function MyPoemsDraft({ poems }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const poemsPerPage = 5;
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

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
      <Text style={styles.title}>Mis Borradores</Text>
      {loading ? (
        <ActivityIndicator size="large" color={colorPalette.accent} style={styles.loadingIndicator} />
      ) : (
        <>
          {currentPoems.length > 0 ? (
            currentPoems.map((poem, index) => (
              <PoemCard key={index} image={poem.image} title={poem.title} poem={poem} />
            ))
          ) : (
            <Text style={styles.noPoemsText}>No hay borradores disponibles</Text>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={handleNextPage}
            onPrevious={handlePreviousPage}
          />
        </>
      )}
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
  noPoemsText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
    marginTop: 20,
  },
  loadingIndicator:{
    marginTop:40
  }
});

export default MyPoemsDraft;
