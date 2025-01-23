import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import colorPalette from '../../../helpers/color_palette';

const HeaderWithFilter = ({ title, filterText, setFilterText }) => {
  const [filterVisible, setFilterVisible] = React.useState(false);

  const handleFilterToggle = () => {
    setFilterVisible(!filterVisible);
    setFilterText('');
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Ionicons
        name="filter-outline"
        size={24}
        color={colorPalette.primary}
        onPress={handleFilterToggle}
        style={styles.icon}
      />
      {filterVisible && (
        <TextInput
          style={styles.filterInput}
          placeholder="Buscar"
          value={filterText}
          onChangeText={setFilterText}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colorPalette.accent,
  },
  icon: {
    marginLeft: 10,
  },
  filterInput: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: colorPalette.primary,
    borderRadius: 8,
    padding: 8,
  },
});

export default HeaderWithFilter;
