import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox;

export const cleanGallery = () => {
  gallery.innerHTML = '';
};

export const renderImages = images => {
  const card = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<a class="gallery-item" href="${largeImageURL}">
          <div class="photo-card">
            <img src="${webformatURL}" alt="${tags}" />
            <div class="info">
              <p><b>Likes:</b> ${likes}</p>
              <p><b>Views:</b> ${views}</p>
              <p><b>Comments:</b> ${comments}</p>
              <p><b>Downloads:</b> ${downloads}</p>
            </div>
          </div>
        </a>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', card);

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
};
