import { $api } from "./Api.js";


export const loginUser = async (data) => {
    const { email, password } = data;
  
    if (email && password) {
      try {
        const result = await $api.post('/auth/login', data);
        return result.data;
      } catch (error) {
        if (error.response) {
          const { code } = error.response.data;
            return code;
            
        } else {
          alert('Error de conexión o problemas en el servidor');
        }
      }
    } else {
      console.error('Hay algún error en el paso de la información del Login.');
    }
  };
