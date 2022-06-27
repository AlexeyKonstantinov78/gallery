'use strict';

import { API_URL_PHOTOS } from './const.js';

export const handlerLike = (btnPhotoLike) => {
    const url = new URL(`${API_URL_PHOTOS}/${btnPhotoLike.id}/like`);

    const toggleLike = (data) => {
        console.log(data);
        if (data.photo.liked_by_user) {
            btnPhotoLike.classList.remove('photo__like_o');
        } else {
            btnPhotoLike.classList.add('photo__like_o');
        }

        btnPhotoLike.likedByUser = data.photo.liked_by_user;
        btnPhotoLike.textContent = data.photo.likes;
    };

    fetch(url, {
        method: btnPhotoLike.likedByUser ? 'DELETE' : 'POST',
        headers: { 
            Authorization: `Bearer ${localStorage.getItem('Bearer')}`,
        }
    })
    .then(response => response.json())
    .then(toggleLike);
};