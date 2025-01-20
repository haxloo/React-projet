import axios from 'axios';

const BASE_URL = 'https://wttr.in';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/${city}`, {
      params: { format: 'j1' }, // JSON format
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l’appel API :', error);
    throw error;
  }
};
