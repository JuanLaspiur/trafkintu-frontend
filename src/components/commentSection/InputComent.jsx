import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colorPalette from '../../helpers/color_palette';

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
    borderColor: colorPalette.natural,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 9.5,
    backgroundColor: colorPalette.neutralLight,
  },
  commentButton: {
    backgroundColor: colorPalette.secondary,

    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 10,
  },
  commentButtonText: {
    color:colorPalette.ligthBlue,
    fontSize: 16,
  },
});

export default InputComent;
