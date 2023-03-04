import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.js-gallery');
const galleryItemMarkup = createGalleryImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemMarkup)

galleryContainer.addEventListener('click', onGalleryContainerClick)

function createGalleryImgMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </div>`;
    })
        .join('');
}

function onGalleryContainerClick(event) {
    event.preventDefault();

    const isImage = event.target.classList.contains('gallery__image');
    if (!isImage) return;

    const imgLinkEl = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${imgLinkEl}" width="1280" height="auto">`, {

        onShow: (instance) => {
            window.addEventListener('keydown', onEscKey);
        },

        onClose: (instance) => {
            window.removeEventListener('keydown', onEscKey);
        },
    });

    instance.show();

    function onEscKey(event) {
        if (event.code === 'Escape') {
            instance.close()
        };
    };
}


// --------------- Варіант 2 -------------------------------

// const galleryContainer = document.querySelector('.js-gallery');
// const galleryItemMarkup = createGalleryImgMarkup(galleryItems);

// galleryContainer.insertAdjacentHTML('beforeend', galleryItemMarkup)

// galleryContainer.addEventListener('click', onGalleryContainerClick)

// function createGalleryImgMarkup(galleryItems) {
//     return galleryItems
//         .map(({ preview, original, description }) => {
//             return `
//         <div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//         <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//         />
//         </a>
//         </div>`;
//         })
//         .join('');
// }

//     function onGalleryContainerClick(event) {
//     event.preventDefault();

//     const isImage = event.target.classList.contains('gallery__image');
//     if (!isImage) return;

//     const imgLinkEl = event.target.dataset.source;
//     const instance = basicLightbox.create(`<img src="${imgLinkEl}" width="1280" height="auto">`);

//     instance.show(window.addEventListener('keydown', onEscKey));

//     function onEscKey(event) {
//         if (event.code === 'Escape') {
//             instance.close(window.removeEventListener('keydown', onEscKey))
//         };
//     };
// }

