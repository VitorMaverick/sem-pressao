import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sempressaobackend.herokuapp.com',

});
export default api;