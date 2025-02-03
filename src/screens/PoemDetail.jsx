import React, { useState, useEffect } from 'react';
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
import { getAllPoemComments } from '../services/poemComment.services';
import { getPoemByPoemId } from '../services/poems.services';

function PoemDetail() {
  const route = useRoute();
  const { poem } = route.params;
  const [ poemDetail, setPoemDetail] = useState({}); 
  const navigation = useNavigation();
  const [comments, setComments] = useState([]);

  const fetchPoem = async()=>{ 
    try {
      const result = await getPoemByPoemId(poem._id);   
    setPoemDetail(result);
    } catch (error) {
      alert('soy error '+error)
    }
    
   }

  useEffect(()=>{
    const fetchPoemComments = async()=>{
    const result = await getAllPoemComments(poem?._id)
    setComments(result.data)  
  }
    fetchPoem()
    fetchPoemComments()
  }, [poem._id])



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
      <Image source={poem.image} style={styles.image} />
      <Text style={styles.title}>{poemDetail?.title}</Text>
      <Text style={styles.poem}>
        {poemDetail?.content ? poemDetail?.content:<></>}
      </Text> 
      <AuthorInfo
        id={poem?.author?._id}
        author = {poem?.author}
      />
      {poemDetail.likes != undefined && 
     <PoemDetailOptions poem={poemDetail} fetchPoem={fetchPoem}/> }
      <CommentSection 
        poemId={poem?._id}
        comments={comments} 
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
