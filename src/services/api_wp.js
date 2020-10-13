import axios from 'axios';

const api_wp = axios.create({
    baseURL: 'https://sem-pressao.000webhostapp.com/wp-json/wp/v2',

});
export default api_wp;