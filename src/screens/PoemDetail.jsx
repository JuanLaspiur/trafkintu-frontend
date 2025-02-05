import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import CommentSection from '../components/commentSection/Index';
import AuthorInfo from '../components/authorInfo/AuthorInfo';
import HeaderProfileLogo from '../components/header/HeaderProfileLogo';
import colorPalette from '../helpers/color_palette';
import PoemDetailOptions from '../components/poemDetailOptions/PoemDetailOptions';
import PoemDetailOptionsSkeleton from '../components/poemDetailOptions/PoemDetailOptionsSkeleton';
import { getAllPoemComments } from '../services/poemComment.services';
import { getPoemByPoemId } from '../services/poems.services';

function PoemDetail() {
  const route = useRoute();
  const { poem } = route.params;
  const [poemDetail, setPoemDetail] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado de carga
  const navigation = useNavigation();

  const fetchPoem = async () => {
    try {
      const result = await getPoemByPoemId(poem._id);
      setPoemDetail(result);
    } catch (error) {
      alert('Error: ' + error);
    }
  };

  useEffect(() => {
    const fetchPoemComments = async () => {
      const result = await getAllPoemComments(poem?._id);
      setComments(result.data);
    };
    fetchPoem();
    fetchPoemComments();
  }, [poem._id]);

  useEffect(() => {
    if (poemDetail.title && poemDetail.content) {
      setIsLoading(false); 
    }
  }, [poemDetail]);

  const renderSkeleton = () => (
    <View style={styles.skeletonContainer}>
      <View style={styles.skeletonImage} />
      <View style={styles.skeletonTitle} />
      <View style={styles.skeletonText} />
      <View style={styles.skeletonAuthor} />
    </View>
  );

  const renderAuthorSkeleton = () => (
    <View style={styles.skeletonAuthorInfo}>
      <View style={styles.skeletonAvatar} />
      <View style={styles.skeletonAuthorName} />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderProfileLogo color={colorPalette.neutralDark} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={27} color="gray" />
        </TouchableOpacity>
      </View>
      
      {isLoading ? (
        renderSkeleton()
      ) : (
        <>
          <Image source={poemDetail.image} style={styles.image} />
          <Text style={styles.title}>{poemDetail?.title}</Text>
          <Text style={styles.poem}>{poemDetail?.content}</Text>
          
          {isLoading ? renderAuthorSkeleton() : (
            <AuthorInfo id={poem?.author?._id} author={poem?.author} />
          )}
      
          {poemDetail.likes !== undefined && (
            <PoemDetailOptions poem={poemDetail} fetchPoem={fetchPoem} isLoading={isLoading}/>
          )}
          {
            isLoading && <PoemDetailOptionsSkeleton/>
          }
          <CommentSection poemId={poem?._id} comments={comments} />
        </>
      )}
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
  header: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    paddingTop: 10,
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
  skeletonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  skeletonImage: {
    width: '100%',
    height: 250,
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    marginBottom: 16,
  },
  skeletonTitle: {
    width: '60%',
    height: 24,
    backgroundColor: '#e0e0e0',
    marginBottom: 12,
  },
  skeletonText: {
    width: '90%',
    height: 16,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
  },
  skeletonAuthor: {
    width: '40%',
    height: 20,
    backgroundColor: '#e0e0e0',
  },

  skeletonAuthorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 18,
  },
  skeletonAvatar: {
    width: 50,
    height: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 25,
    marginRight: 12,
  },
  skeletonAuthorName: {
    width: '40%',
    height: 18,
    backgroundColor: '#e0e0e0',
  },
});

export default PoemDetail;
