import axios from 'axios';


export function getUsers(params) {
    return axios.get('https://api.github.com/users', params);
}
