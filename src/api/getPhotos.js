import axios from "axios"

const MAX_PHOTO_AMOUNT = 1080;
const photosLimit = 10;

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


