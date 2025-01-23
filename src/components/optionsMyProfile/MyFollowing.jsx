import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colorPalette from '../../helpers/color_palette';
import OtherUserCard from './components/OtherUserCard';
import AntDesign from '@expo/vector-icons/AntDesign';
import HeaderWithFilter from './components/HeaderWithFilter';

const MyFollowing = () => {
  const followers = [
    { id: 1, name: 'User 1', avatar: 'https://this-person-does-not-exist.com/img/avatar-1.jpg' },
    { id: 2, name: 'User 2', avatar: 'https://this-person-does-not-exist.com/img/avatar-2.jpg' },
    { id: 3, name: 'User 3', avatar: 'https://this-person-does-not-exist.com/img/avatar-3.jpg' },
    { id: 4, name: 'User 4', avatar: 'https://this-person-does-not-exist.com/img/avatar-4.jpg' },
    { id: 5, name: 'User 5', avatar: 'https://this-person-does-not-exist.com/img/avatar-5.jpg' },
    { id: 6, name: 'User 6', avatar: 'https://this-person-does-not-exist.com/img/avatar-6.jpg' },
    { id: 7, name: 'User 7', avatar: 'https://this-person-does-not-exist.com/img/avatar-7.jpg' },
    { id: 8, name: 'User 8', avatar: 'https://this-person-does-not-exist.com/img/avatar-8.jpg' },
    { id: 9, name: 'User 9', avatar: 'https://this-person-does-not-exist.com/img/avatar-9.jpg' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState('');

  const followersPerPage = 5;

  // Filtrar los seguidores según el texto ingresado
  const filteredFollowers = followers.filter((follower) =>
    follower.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFollowers.length / followersPerPage);
  const indexOfLastFollower = currentPage * followersPerPage;
  const indexOfFirstFollower = indexOfLastFollower - followersPerPage;
  const currentFollowers = filteredFollowers.slice(indexOfFirstFollower, indexOfLastFollower);

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
      <HeaderWithFilter
        title="Mis Seguidos"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <View style={styles.cardContainer}>
        {currentFollowers.map((follower) => (
          <OtherUserCard
            key={follower.id}
            user={{ name: follower.name, avatar: follower.avatar }}
          />
        ))}
      </View>
      <View style={styles.pagination}>
        <AntDesign
          name="leftcircle"
          size={30}
          color={colorPalette.primary}
          onPress={handlePreviousPage}
          disabled={currentPage === 1}
        />
        <Text style={styles.pageText}>
          Página {currentPage} de {totalPages}
        </Text>
        <AntDesign
          name="rightcircle"
          size={30}
          color={colorPalette.primary}
          onPress={handleNextPage}
          disabled={currentPage === totalPages}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardContainer: {
    height: 500,
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
    color: colorPalette.accent,
  },
});

export default MyFollowing;
