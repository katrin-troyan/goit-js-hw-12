import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const pixabayKEY = '48935513-8997d7f633aa985d826258f4d';
const pixabayURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page, perPage) => {
  try {
    const response = await axios.get(pixabayURL, {
      params: {
        key: pixabayKEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    iziToast.error({
      message:
        'An error occurred while fetching images. Please try again later.',
      position: 'topRight',
    });
    console.error(error);
  }
};
