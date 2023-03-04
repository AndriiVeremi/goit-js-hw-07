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
    
    const imgLinkEl = event.target.dataset.source;
   
    const instance = basicLightbox.create(`<img src="${imgLinkEl}" width="800" height="600">`)
    instance.show()

    
}

