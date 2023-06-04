import axios from "axios"


const API_KEY = 'XlnB6h90hjXWqKHvqH8rAMFan3TEzgVSaK2E8UmnH6AqPT06KtsIbqQ2';

const MAX_PHOTO_AMOUNT = 5; // zmienić na 1080!
const photosLimit = 5;

export const getPhotos = async ({ pageParam = 1 }) => {
   const res = await axios.get(`https://picsum.photos/v2/list?limit=${photosLimit}&page=${pageParam}`);
   if (res.status !== 200) {
      throw new Error('Fetch error')
   }
   console.log(pageParam)
   const isNextPage = (pageParam < MAX_PHOTO_AMOUNT / photosLimit) ? pageParam + 1 : undefined;
   return {
      data: res.data,
      isNextPage,
      id: Date.now()
   }
};



//
//
//
// export function getPosts() {
//    return axios
//       .get("http://localhost:3000/posts", { params: { _sort: "title" } })
//       .then(res => res.data)
// }
//
// export function getPostsPaginated(page) {
//    return axios
//       .get("http://localhost:3000/posts", {
//          params: { _page: page, _sort: "title", _limit: 2 },
//       })
//       .then(res => {
//          const hasNext = page * 2 <= parseInt(res.headers["x-total-count"])
//          return {
//             nextPage: hasNext ? page + 1 : undefined,
//             previousPage: page > 1 ? page - 1 : undefined,
//             posts: res.data,
//          }
//       })
// }

// export const getImage = id => {
//    return axios.get(BASE_URL + id).then(res => res.data)
// }

