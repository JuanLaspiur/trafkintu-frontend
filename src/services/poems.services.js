import { $api } from "./Api.js";

export const getAllPoems = async () => {
    try {
      const response = await $api.get('/poems');
      return response.data;
    } catch (error) {
      throw new Error('Error al traer todos los escritos ' + error.message); 
    }
  };

 export const getPoemByPoemId =  async(poemId)=>{
  try{
    const response = await $api.get(`/poems/id/${poemId}`);
    return response.data;
  }catch(error){
    throw new Error('Error al traer el escrito por su Id ' + error.message); 
  }
 } 
  
 export const getAllPoemsByUserId = async(authorId)=>{
  try{
    const response = await $api.get('/poems/authorId/'+authorId);
    return response;
  }catch (error) {
  
    throw new Error('Error al traer todos los escritos del usuario ' + error.message); 
  }
 } 
 export const addLike = async (poemId, token) => {   
  try {
    const response = await $api.put(`/poems/like/${poemId}`, {}, {  
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response;

  } catch (error) {
    alert('soy error add like')
  }
};

export const removeLike = async (poemId, token) => {
  try {
    const response = await $api.put('/poems/like/remove/' + poemId, {}, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    alert('soy error add remove like')
  }
};

export const addView = async (poemId, token) => {
  try {
    const response = await $api.put(`/poems/view/${poemId}`, {}, {  
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    alert('soy error add view')
  }
};

