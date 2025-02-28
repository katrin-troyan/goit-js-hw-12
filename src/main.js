import { fetchImages } from './js/pixabay-api.js';
import { renderImages, cleanGallery } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('.form-input');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-more');

let page = 1;
let query = '';
let totalHits = 0;

function showLoader() {
  loader.classList.add('active');
}
function hideLoader() {
  loader.classList.remove('active');
}
function showLoadBtn() {
  loadBtn.style.display = 'block';
}
function hideLoadBtn() {
  loadBtn.style.display = 'none';
}

form.addEventListener('submit', async event => {
  event.preventDefault();

  query = input.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a valid search query!',
      position: 'topRight',
    });
    return;
  }

  page = 1;
  cleanGallery();
  showLoader();
  hideLoadBtn();

  try {
    const data = await fetchImages(query, page);
    const images = data.hits;

    hideLoader();

    if (images.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      form.reset();
      return;
    }

    renderImages(images);
    form.reset();
    totalHits = data.totalHits;
    if (totalHits > page * 40) showLoadBtn();
  } catch (error) {
    hideLoader();

    iziToast.error({
      message:
        'An error occurred while fetching images. Please try again later.',
      position: 'topRight',
    });
    console.error(error);
  }
});

loadBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();

  try {
    const data = await fetchImages(query, page);
    const images = data.hits;
    hideLoader();
    renderImages(images);

    const { height } = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();
    window.scrollBy({ top: height * 2, behavior: 'smooth' });

    if (images.length < 40 || page * 40 >= totalHits) {
      hideLoadBtn();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    hideLoader();

    iziToast.error({
      message: 'An error occurred while loading more images.',
      position: 'topRight',
    });
    console.error(error);
  }
});
