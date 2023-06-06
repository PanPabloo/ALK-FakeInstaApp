import axios from "axios"

export const getPosts = async ({ pageParam = 1 }) => {
   const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageParam}`);
   if (res.status !== 200) {
      throw new Error('Fetch error')
   }
   return res.data
};