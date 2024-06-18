const gallery = document.querySelector(".gallery");

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
    },
  
];

const makeImageTag = (arr) => {
   return arr.map(({preview, original, description}) => `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      width="360"
      height="300"
    />
  </a>
</li>`).join("")
}

let instance;

const handleClick = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;

instance = basicLightbox.create(`<img src=${event.target.src}>`);
    instance.show();
}

const modalClose = (event) => {

    if (event.key === "Escape") {
        instance.close()
    }
}

gallery.insertAdjacentHTML("afterbegin", makeImageTag(images));
gallery.addEventListener("click", handleClick);
document.addEventListener("keydown", modalClose);