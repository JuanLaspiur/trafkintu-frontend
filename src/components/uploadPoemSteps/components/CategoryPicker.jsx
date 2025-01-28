import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import colorPalette from '../../../helpers/color_palette';

const CategoryPicker = () => {
  const [selectedCategory, setSelectedCategory] = useState('Selecciona una categoría');

  const categories = ['Poesía', 'Ensayo', 'Cuento', 'Novela', 'Periodismo'];

  const handleSelect = (index, value) => {
    setSelectedCategory(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecciona una categoría:</Text>
      <ModalDropdown
        options={categories}
        defaultValue={selectedCategory}
        onSelect={handleSelect}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdown}
        dropdownTextStyle={styles.dropdownItem}
        dropdownTextHighlightStyle={styles.selectedItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: colorPalette.primary,
  },
  dropdownText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 70,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color:colorPalette.accent,
  },
  dropdown: {
    marginTop:-25,
    width:'54%',
    borderWidth: 1,
    borderColor: colorPalette.accent,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  dropdownItem: {
    width: '100%',
    height:'auto',
    fontSize: 16,
    padding: 10,
  },
  selectedItem: {
    color:  colorPalette.accent,
    fontWeight: 'bold',
  },
  icon: {
    width: 22,
    height: 22,
  }
});

export default CategoryPicker;
