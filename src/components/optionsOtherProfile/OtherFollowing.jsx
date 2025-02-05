import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colorPalette from '../../helpers/color_palette';
import OtherUserCard from './components/OtherUserCard';
import AntDesign from '@expo/vector-icons/AntDesign';
import HeaderWithFilter from './components/HeaderWithFilter';
import Pagination from './components/Pagination';

function OtherFollowing( {followedUsers}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState('');
  const followersPerPage = 5;

  const filteredFollowers = followedUsers.filter((follower) =>
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
        title="Sus Seguidos"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <View style={styles.cardContainer}>
        {currentFollowers.map((follower) => (
           <OtherUserCard
           key={follower._id}
           data={{ name: `${follower?.username} ${follower?.userlastname}` , avatar: follower?.imagenPerfil }}
           author ={follower}
         />
        ))}
        {filteredFollowers.length === 0 && (
          <Text style={styles.noResultsText}>No se encontraron resultados.</Text>
        )}
      </View>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardContainer: {
    height: 500,
  }
});

export default OtherFollowing;
