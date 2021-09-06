import { apiUrl, access } from '../config';
import { fetchWrapper } from '../helpers';

export const loginService = {
    login
};
const baseUrl = `${apiUrl}/ExecuteQuery`;
function login (payload) {
    const body = {
        access: access , 
        queryId: 'home/get_highlight_product' ,
        bindVariables: []
    }
    return fetchWrapper.post(baseUrl, body)
}