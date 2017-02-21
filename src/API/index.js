import axios from 'axios';

/**
 * Get list of users
 *
 * @param params
 */
export function getUsers(params) {
    return axios.get('https://api.github.com/users', params);
}
/**
 * Get single user
 *
 * @param username
 */
export function getUser(username) {
    return axios.get('https://api.github.com/users/' + username);
}