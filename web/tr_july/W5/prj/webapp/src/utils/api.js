import { BASE_V1_RESOURCE } from '../constants/api';

export const fetchData = (resourceUrl) => fetch(BASE_V1_RESOURCE + resourceUrl, { 'Accept': 'application/json',
    'Content-Type': 'application/json' }).then((response) =>  response.json());

export const postData = (resourceUrl, data) => fetch(BASE_V1_RESOURCE + resourceUrl, { 'method': 'POST',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    body: JSON.stringify(data) 
}).then((response) => response.json());