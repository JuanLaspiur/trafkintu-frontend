import { $api } from "./Api.js";

export const getUserByToken = async (token) => {
  try {
    const response = await $api.get('/users/authToken', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response;
  } catch (error) {
    throw new Error('Error al traer el usuario por bearer token: ' + error.message); 
  }
};



export const updateMyProfile = async (token, data) => {
  try {
    const response = await $api.put('/users/edit_profile', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response;
  } catch (error) {
    throw new Error('Error al actualizar el perfil: ' + error.message);
  }
};