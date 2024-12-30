// components/comentsList/ComentsList.jsx
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

function ComentsList({ comments, comment, setComment, handleCommentSubmit }) {
  return (
    <View style={styles.commentSection}>
      <Text style={styles.commentSectionTitle}>Comentarios</Text>
      {/* Renderizado de los comentarios */}
      {comments.map((item) => (
        <View key={item.id} style={styles.comment}>
          <Image source={{ uri: item.avatar }} style={styles.commentAvatar} />
          <View style={styles.commentContent}>
            <Text style={styles.commentUser}>{item.user}</Text>
            <Text style={styles.commentText}>{item.text}</Text>
          </View>
        </View>
      ))}

      {/* Input y botón para agregar un nuevo comentario */}
      <View style={styles.commentInputSection}>
        <TextInput
          style={styles.commentInput}
          placeholder="Escribe un comentario..."
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.commentButton} onPress={handleCommentSubmit}>
          <Text style={styles.commentButtonText}>Publicar</Text>
        </TouchableOpacity>
      </View>
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
  commentInputSection: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  commentButton: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 10,
  },
  commentButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ComentsList;
