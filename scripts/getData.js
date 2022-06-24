'use strict';

import { API_URL_PHOTOS,  ACCESS_KEY } from './const.js';

export const getData = ({count, page = 1, idPhoto}) => {
    const url = new URL(API_URL_PHOTOS);

    url.searchParams.set(`client_id`, ACCESS_KEY);
    // console.log(idPhoto);

    if (count && page) {
        url.searchParams.append(`per_page`, count);
        url.searchParams.append(`page`, page);
    }

    if (idPhoto) {
        console.log(url);
        url.pathname += `/${idPhoto}`; 
        console.log(url);      
    }   

    return fetch(url)
        .then((data) => {
            return data.json();
        });
};