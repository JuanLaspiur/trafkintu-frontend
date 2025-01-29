import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { View, Text, StyleSheet, Image } from 'react-native';
import colorPalette from "../../helpers/color_palette";
import Coment from './Coment';

function ListComent({ comments }) {
  const { user , token}  = useAuth()
  return (
    <View style={styles.commentSection}><View style={styles.comentHeader}><Text style={styles.commentSectionTitle}> Comentarios</Text><Image source={require('../../../assets/icons/comentario_poemdetail.webp')} style={styles.icon}/> 
      </View>
      {comments.map((item) => (
        <Coment key={item.id} avatar={item.avatar} user={item.user} text={item.text} isOwner={user?._id == item.id} isLoged={ token ? true : false} authId={user?._id}/>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  commentSection: {
    marginTop: 20,
    width: '100%',
  },
  comentHeader:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center',
    paddingVertical:10
  },
  commentSectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colorPalette.greenFluor,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  icon: {
    marginTop:-5,
    width: 24,
    height: 24,
  }
});

export default ListComent;
