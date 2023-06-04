import axios from "axios"

const API_KEY = 'XlnB6h90hjXWqKHvqH8rAMFan3TEzgVSaK2E8UmnH6AqPT06KtsIbqQ2';

const MAX_PHOTO_AMOUNT = 1; // zmienić na 1080!
const photosLimit = 1;

export const getPhotos = async ({ pageParam = 1 }) => {
   const res = await axios.get(`https://picsum.photos/v2/list?limit=${photosLimit}&page=${pageParam}`);
   if (res.status !== 200) {
      throw new Error('Fetch error')
   }
   const isNextPage = (pageParam < MAX_PHOTO_AMOUNT / photosLimit) ? pageParam + 1 : undefined;
   return {
      data: res.data,
      isNextPage,
      id: res.data[0].id
   }
};


