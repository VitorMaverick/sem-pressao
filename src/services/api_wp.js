import axios from 'axios';

const api_wp = axios.create({
    baseURL: 'https://shrouded-cliffs-29775.herokuapp.com/wp-json/wp/v2',

});
export default api_wp;