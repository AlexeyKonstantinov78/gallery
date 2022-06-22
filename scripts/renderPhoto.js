'use strict';

import { createElem } from "./createElem.js";

export const renderPhoto = (photoWrapper, photo) => {
    
    console.log(photoWrapper, photo);

    const img = createElem(`img`, {
        className: `photo__picture`,
        src: photo.urls.full,
        alt: photo.description,
        style: `max-height: 80vh;`
    });

    const linkPhotoAutor =createElem(`a`, {
        className: "photo__author",
        href: photo.user.links.html,
    });

    const imgPhotoAutor = createElem(`img`, {
        loading: "lazy",
        src: photo.user.profile_image.medium,
        alt: photo.user.bio,
        title: photo.user.name
    });

    const userName = createElem(`span`, {
        textContent: photo.user.name
    });

    linkPhotoAutor.append(imgPhotoAutor, userName);

    const divPhotoControl = createElem(`div`, {
        className: `photo__control`
    });

    const buttonPhotoLike = createElem(`button`, {
        id: photo.id,
        className: `photo__like`,
        textContent: photo.likes
    });

    const linkPhotoDownload = createElem(`a`, {
        className: `photo__download`,
        download: true,
        href: photo.links.download,
        target: `_blank`
    });

    divPhotoControl.append(buttonPhotoLike, linkPhotoDownload);

    photoWrapper.append(img, linkPhotoAutor, divPhotoControl);
};