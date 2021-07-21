import { apiUrl, access } from '../config';
import { fetchWrapper } from '../helpers';

export const productService = {
    getAll
};
const baseUrl = `${apiUrl}/ExecuteQuery`;

function getAll() {
    const body = {
        access: access , 
        queryId: 'home/get_highlight_product' ,
        bindVariables: []
    }
    return fetchWrapper.post(baseUrl, body)
}
