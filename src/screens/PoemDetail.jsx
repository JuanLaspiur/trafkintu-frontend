import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useRoute } from '@react-navigation/native';

function PoemDetail() {
  const route = useRoute();
  const { title, image, poemId } = route.params;

  const [comment, setComment] = useState('');

  const handleCommentSubmit = () => {
    console.log('Comment:', comment);
    setComment(''); // Clear input after submission
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
      <Text style={styles.author}>- John Doe</Text>
      <View style={styles.commentSection}>
        <TextInput
          style={styles.commentInput}
          placeholder="Write a comment..."
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.commentButton} onPress={handleCommentSubmit}>
          <Text style={styles.commentButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
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
  author: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#777',
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginTop: 12,
    marginRight: 22,
  },
  commentSection: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 16,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  commentButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  commentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PoemDetail;
