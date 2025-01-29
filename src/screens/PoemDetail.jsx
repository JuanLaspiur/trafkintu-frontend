import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import CommentSection from '../components/commentSection/Index';
import AuthorInfo from '../components/authorInfo/AuthorInfo';
import HeaderProfileLogo from '../components/header/HeaderProfileLogo';
import colorPalette from '../helpers/color_palette';
import PoemDetailOptions from '../components/poemDetailOptions/PoemDetailOptions';

function PoemDetail() {
  const route = useRoute();
  const { title, image, poemId } = route.params;
  const navigation = useNavigation();
  const [comment, setComment] = useState('');
  const comments = [
    { 
      id: '678eb78ab87b538c618cf769', 
      user: 'Carlos López', 
      text: 'Hermoso poema, realmente inspirador.', 
      avatar: 'https://this-person-does-not-exist.com/img/avatar-gen840212179ed94ab7d009f6e6b9770fa7.jpg',
      isOwner: true  
    },
    { 
      id: '678ea05ad3190ab6f7c9ca59', 
      user: 'Ana García', 
      text: 'Me encanta la metáfora utilizada.', 
      avatar: 'https://this-person-does-not-exist.com/img/avatar-gen648c05f4c576887e2b1b626de498a12b.jpg',
      isOwner: false  
    },
    { 
      id: '1678d8d2457a380b578946ba7', 
      user: 'Clara Martínez', 
      text: '¡Qué profundidad en las palabras!', 
      avatar: 'https://this-person-does-not-exist.com/img/avatar-genb90ca300387e39eb0b560bf264386201.jpg',
      isOwner: false  
    },
  ];
  

  const handleCommentSubmit = () => {
    setComment('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
           <HeaderProfileLogo color={colorPalette.neutralDark}/>
            <View style={styles.header}>
      <TouchableOpacity 
          onPress={() => navigation.goBack()} 
        >
          <AntDesign name="left" size={27} color='gray' />
        </TouchableOpacity>
      </View>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.poem}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
        Cras venenatis euismod malesuada. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur volutpat 
        ligula vel mauris fermentum, quis viverra orci posuere. Fusce malesuada, velit nec suscipit pulvinar, sem 
        libero tincidunt magna, non suscipit sem nunc a neque.
      </Text>
      <AuthorInfo
        name="Juan Pérez"
        avatar="https://this-person-does-not-exist.com/img/avatar-genaf437f464b793583dc4b2d45066290fa.jpg"
      />
     <PoemDetailOptions/>
      <CommentSection 
        comments={comments} 
        comment={comment} 
        setComment={setComment} 
        handleCommentSubmit={handleCommentSubmit} 
      />
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
   header:{
    height:60,
    width:'100%',
    justifyContent:'center',
    paddingTop:10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555',
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
});

export default PoemDetail;
