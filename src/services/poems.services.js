import { $api } from "./Api.js";

export const getAllPoems = async () => {
    try {
      const response = await $api.get('/poems');
      return response.data;
    } catch (error) {
      throw new Error('Error al traer todos los escritos ' + error.message); 
    }
  };
  
 export const getAllPoemsByUserId = async()=>{
  try{
    const response = await $api.get('/poems');
    return response.data;
  }catch (error) {
    throw new Error('Error al traer todos los escritos del usuario ' + error.message); 
  }
 } 