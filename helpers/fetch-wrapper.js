import lodash from 'lodash'

export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete,
    fetcherSWR
};

function get(url) {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(url, requestOptions)
}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse)    
}

function fetcherSWR(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse)
}

function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse)
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(url, requestOptions).then(handleResponse)
}

// helper functions

async function handleResponse(response) {
    // const res = await response.json()

    // if(!Object.keys(response).length){
    //     return []
    // }
    const res = await response.json()

    if (res.fatalError && res.fatalError.length > 0 || res.normalError && res.normalError.length > 0) {
        return []
    }
    let result = [];
    if (!res.data) return result;
    res.data.map(item => {  
        let object = {}
        res.headerList.map((key, index) => {
            object[lodash.camelCase(key)] = item[index]
        })
        result.push(object)
    })
    return result;
}