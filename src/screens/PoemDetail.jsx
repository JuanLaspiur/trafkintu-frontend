import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useRoute } from '@react-navigation/native';

function PoemDetail() {
  const route = useRoute();
  const { title, image, poemId } = route.params;

  const [comment, setComment] = useState('');
  const comments = [
    { id: '1', user: 'Carlos López', text: 'Hermoso poema, realmente inspirador.', avatar: 'https://this-person-does-not-exist.com/img/avatar-gen840212179ed94ab7d009f6e6b9770fa7.jpg' },
    { id: '2', user: 'Ana García', text: 'Me encanta la metáfora utilizada.', avatar: 'https://this-person-does-not-exist.com/img/avatar-gen648c05f4c576887e2b1b626de498a12b.jpg' },
    { id: '3', user: 'Clara Martínez', text: '¡Qué profundidad en las palabras!', avatar: 'https://this-person-does-not-exist.com/img/avatar-genb90ca300387e39eb0b560bf264386201.jpg' },
  ];

  const handleCommentSubmit = () => {
    console.log('Comentario:', comment);
    setComment(''); // Limpia el campo de entrada después de enviar el comentario
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.poem}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
        Cras venenatis euismod malesuada. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur volutpat 
        ligula vel mauris fermentum, quis viverra orci posuere. Fusce malesuada, velit nec suscipit pulvinar, sem 
        libero tincidunt magna, non suscipit sem nunc a neque.
      </Text>
      <View style={styles.authorContainer}>
        <Image
          source={{ uri: "https://this-person-does-not-exist.com/img/avatar-genaf437f464b793583dc4b2d45066290fa.jpg" }}
          style={styles.authorAvatar}
        />
        <Text style={styles.authorName}>Juan Pérez</Text>
      </View>
      <Text style={styles.commentSectionTitle}>Comentarios</Text>

      {/* Renderizado manual de los comentarios */}
      {comments.map((item) => (
        <View key={item.id} style={styles.comment}>
          <Image source={{ uri: item.avatar }} style={styles.commentAvatar} />
          <View style={styles.commentContent}>
            <Text style={styles.commentUser}>{item.user}</Text>
            <Text style={styles.commentText}>{item.text}</Text>
          </View>
        </View>
      ))}
      
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    paddingVertical: 25,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  poem: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
    paddingVertical: 10,
    paddingHorizontal: 22,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
  authorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  authorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
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

export default PoemDetail;
