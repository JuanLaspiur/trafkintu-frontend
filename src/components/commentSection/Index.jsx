import React from 'react'
import { View } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import ListComent from './ComentsList'
import InputComent from './InputComent'

function CommentSection({comment, comments, setComment, handleCommentSubmit }) {
 const { token } = useAuth();
  return (
    <View>
        <ListComent comments={comments}/>
       { token && <InputComent  comment={comment} setComment={setComment} handleCommentSubmit={handleCommentSubmit}/>}
    </View>
  )
}

export default CommentSection