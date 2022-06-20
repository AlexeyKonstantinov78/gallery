'use strict';

export const getData = (url) => {
    return fetch(url)
        .then((data) => {
            return data.json();
        });
};