import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

function InputComent({ comment, setComment, handleCommentSubmit }) {
  return (
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
  );
}

const styles = StyleSheet.create({
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

export default InputComent;
