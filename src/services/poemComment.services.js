import { $api } from "./Api.js";

export const getAllPoemComments = async (poemId) => {
    try {
      const response = await $api.get(`/poem-comments/poemId/${poemId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al traer todos los comentarios del escrito ' + error.message); 
    }
  };