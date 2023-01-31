import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (galleryItem) => `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", markup);

list.addEventListener("click", selectImage);

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedImageSrc = event.target.dataset.source;
  const selectedImageAlt = event.target.alt;
  const instance = basicLightbox.create(
    `
    <img src="${selectedImageSrc}" alt="${selectedImageAlt}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keyup", escapeClose);
      },
      onClose: (instance) => {
        window.removeEventListener("keyup", escapeClose);
      },
    }
  );

  instance.show();

  function escapeClose(e) {
    const escapeKeyCode = "Escape";
    const isEscKey = e.code === escapeKeyCode;
    if (isEscKey) {
      instance.close();
    }
  }
}
