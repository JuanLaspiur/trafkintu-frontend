import React, {useState} from 'react'
import { View } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import ListComent from './ComentsList'
import InputComent from './InputComent'
import { createPoemComment } from '../../services/poemComment.services';

function CommentSection({poemId,  comments }) {
 const { token, user } = useAuth();
   const [comment, setComment] = useState('');
   const handleCommentSubmit = async () => {

    const commentData = {
      poem: poemId,
      content: comment,
      user: user._id, 
    };  
    const result = await createPoemComment(commentData)
    setComment('')
  }
  return (
    <View>
        <ListComent comments={comments}/>
       { token && <InputComent  comment={comment} setComment={setComment} handleCommentSubmit={handleCommentSubmit}/>}
    </View>
  )
}

export default CommentSection