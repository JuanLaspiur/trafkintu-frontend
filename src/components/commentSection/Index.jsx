import React from 'react'
import { View } from 'react-native';
import ListComent from './ComentsList'
import InputComent from './InputComent'

function CommentSection({comment, comments, setComment, handleCommentSubmit }) {
  return (
    <View>
        <ListComent comments={comments}/>
        <InputComent  comment={comment} setComment={setComment} handleCommentSubmit={handleCommentSubmit}/>
    </View>
  )
}

export default CommentSection