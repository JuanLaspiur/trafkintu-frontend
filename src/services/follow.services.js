import { $api } from "./Api.js";

export const toggleFollow = async (followedId, token) => {
    try {
      const response = await $api.post(`/follow`, { followedId }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      alert('Error al seguir/dejar de seguir usuario');
    }
  };

// getFollowedUsers (Usuarios Seguidos)
  export const getFollowedUsers = async (userId) => {
    try {
      const response = await $api.get(`/follow/followed/id/${userId}`);
      alert(JSON.stringify(response.data))
      return response.data;
    } catch (error) {
      console.error('Error al obtener los usuarios seguidos:', error);
      return null;
    }
  };
  
  //Usuarios que te siguen (tus seguidores)
  export const getFollowers = async (userId) => {
    try {
      const response = await $api.get(`/follow/followers/id/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los seguidores:', error);
      return null;
    }
  };
  