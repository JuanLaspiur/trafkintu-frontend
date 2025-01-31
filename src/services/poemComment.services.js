import { $api } from "./Api.js";

export const getAllPoemComments = async (poemId) => {
  try {
    const response = await $api.get(`/poem-comments/poemId/${poemId}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return false;
    }
    throw new Error('Error al traer todos los comentarios del escrito ' + error.message);
  }
};

export const createPoemComment = async (data) => {
  try {
    const response = await $api.post(`/poem-comments/`,  data );
    return response.data;
  } catch (error) {
    throw new Error('Error al crear el comentario: ' + error.message);
  }
};

export const deletePoemComment = async (commentId) => {
  try {
    const response = await $api.delete(`/poem-comments/id/${commentId}`);
    return response;
  } catch (error) {
    throw new Error('Error al eliminar el comentario: ' + error.message);
  }
};


export const getCommentsByUserId = async(userid)=>{
  try {
    const response = await $api.get(`/poem-comments/userid/678eb78ab87b538c618cf769`);
    return response.data;
  } catch (error) {
    alert('soy error '+error)
    throw new Error('Error al traer comentarios el comentarios del usuario: ' + error.message);
  }
}
