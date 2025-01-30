import { $api } from "./Api.js";

export const getAllPoemComments = async (poemId) => {
    try {
      const response = await $api.get(`/poem-comments/${poemId}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return false;
      }
      throw new Error('Error al traer todos los comentarios del escrito ' + error.message);
    }
  };
  