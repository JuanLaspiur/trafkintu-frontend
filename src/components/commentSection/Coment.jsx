import React, { useState } from 'react';
import colorPalette from "../../helpers/color_palette";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

// Componente LikeButton
function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.likesContainer}>
      <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
        <FontAwesome name="thumbs-up" size={16} color={colorPalette.greenFluor} />
        <Text style={styles.likeText}>Me gusta</Text>
      </TouchableOpacity>
      <Text style={styles.likeCount}>{likes} me gusta</Text>
    </View>
  );
}

// Componente Coment
function Coment({ avatar, user, text, isOwner, onDelete }) {
  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <View style={styles.comment}>
      <Image source={{ uri: avatar }} style={styles.commentAvatar} />
      <View style={styles.commentContent}>
        <Text style={styles.commentUser}>{user}</Text>
        <Text style={styles.commentText}>{text}</Text>
        
        {!isOwner && <LikeButton />}
        
        {isOwner && (
          <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
            <FontAwesome name="trash" size={16} color={colorPalette.greenFluor} />
            <Text style={styles.deleteText}>Borrar</Text>
          </TouchableOpacity>
        )}
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
    fontWeight: '600',
    color: colorPalette.greenFluor,
  },
  commentText: {
    fontSize: 14,
    color: colorPalette.primary,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  likeText: {
    marginLeft: 5,
    fontSize: 14,
    color: colorPalette.greenFluor,
  },
  likeCount: {
    fontSize: 14,
    color: colorPalette.primary,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  deleteText: {
    marginLeft: 5,
    fontSize: 14,
    color: colorPalette.greenFluor,
  },
});

export default Coment;
