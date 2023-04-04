// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');

galleryItems.forEach(picture =>
  galleryList.insertAdjacentHTML(
    'beforeend',
    `<li class="gallery__link"> <a class="gallery__item" href="${picture.original}">
<img class="gallery__image" src="${picture.preview}" title="${picture.description}" />
</a></li>`
  )
);

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
