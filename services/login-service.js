import { apiUrl, access } from '../config';

export const loginService = {
    login
};
const baseUrl = `${apiUrl}/Login`;
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
};
function login(payload) {
    return fetch(baseUrl, {...requestOptions, body: JSON.stringify(payload)}).then(response => response.json())
}