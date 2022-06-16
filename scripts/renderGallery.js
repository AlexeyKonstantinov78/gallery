'use strict';

import { createCardPhoto } from "./createCardPhoto.js";

export const renderGallery = (photos) => {
    
    const gallery = document.querySelector(`.grid`);

    // const cards = photos.map(createCardPhoto);
    const cards = photos.map(photo => createCardPhoto(photo));
    gallery.append(...cards);
};