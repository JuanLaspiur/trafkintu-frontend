import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Coment from './Coment';

function ListComent({ comments }) {
  return (
    <View style={styles.commentSection}>
      <Text style={styles.commentSectionTitle}>Comentarios</Text>
      {comments.map((item) => (
        <Coment key={item.id} avatar={item.avatar} user={item.user} text={item.text} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  commentSection: {
    marginTop: 20,
    width: '100%',
  },
  commentSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
});

export default ListComent;
