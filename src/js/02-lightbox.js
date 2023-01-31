import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (galleryItem) => `<a class="gallery__item" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
  </a>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
