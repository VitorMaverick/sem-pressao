import axios from 'axios';

const api_wp = axios.create({
    baseURL: 'http://localhost/sem_pressao_wp/wp-json/wp/v2',

});
export default api_wp;