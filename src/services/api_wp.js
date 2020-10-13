import axios from 'axios';

const api_wp = axios.create({
    baseURL: 'https://sem-pressao.000webhostapp.com/',

});
export default api_wp;