import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Coment({ avatar, user, text }) {
  return (
    <View style={styles.comment}>
      <Image source={{ uri: avatar }} style={styles.commentAvatar} />
      <View style={styles.commentContent}>
        <Text style={styles.commentUser}>{user}</Text>
        <Text style={styles.commentText}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    width: '100%',
  },
  commentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commentUser: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  commentText: {
    fontSize: 14,
    color: '#555',
  },
});

export default Coment;
