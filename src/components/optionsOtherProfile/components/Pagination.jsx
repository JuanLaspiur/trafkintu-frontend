import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import PropTypes from 'prop-types';
import colorPalette from '../../../helpers/color_palette';

const Pagination = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <View style={styles.pagination}>
      <AntDesign
        name="leftcircle"
        size={30}
        color={currentPage === 1 ? 'gray' : '#4A90E2'}
        onPress={onPrevious}
        disabled={currentPage === 1}
      />
      <Text style={styles.pageText}>
        Página {currentPage} de {totalPages || 1}
      </Text>
      <AntDesign
        name="rightcircle"
        size={30}
        color={currentPage === totalPages || totalPages === 0 ? 'gray' : colorPalette.primary}
        onPress={onNext}
        disabled={currentPage === totalPages || totalPages === 0}
      />
    </View>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  pageText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: colorPalette.accent,
  },
});

export default Pagination;
