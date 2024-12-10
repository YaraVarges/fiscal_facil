import axios from 'axios';

// Configura a URL base da API
const api = axios.create({
  baseURL: 'https://', // Substitua pela URL da sua API
});

export default api;
