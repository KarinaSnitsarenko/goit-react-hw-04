// import axios from "axios";

// const MY_KEY = "8LcriQQgnLGm2fOvGMkp0hogqSxJXKfSQIqWz8i6fEI";

// export const requesForImages = async (query, page) => {
//   const response = await axios.get(
//     `https://api.unsplash.com/search/photos?client_id=${MY_KEY}&query=${query}&per_page=12&page=${page}`
//   );
//   return response.data;
// };

import axios from "axios";

const API_KEY = "8LcriQQgnLGm2fOvGMkp0hogqSxJXKfSQIqWz8i6fEI";

const getImages = async (query, page) => {
  const response = await axios("https://api.unsplash.com/search/photos", {
    params: {
      client_id: API_KEY,
      query,
      page,
      per_page: 12,
    },
  });
  return response;
};

export default getImages;
