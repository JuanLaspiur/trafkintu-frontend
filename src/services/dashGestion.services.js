import { $api } from "./Api.js";
// dashgestion
export const getDashGestion = async () => {
    try {
      const response = await $api.get('/dashgestion');
      return response.data[response.data.length -1];
    } catch (error) {
      throw new Error('Error al traer dashgestion ' + error.message); 
    }
};