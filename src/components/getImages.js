import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
});

const getImages = async (query = "", page = 1) => {
  const { data } = await instance.get(
    `/search/photos?page=${page}&query=${query}&client_id=8LcriQQgnLGm2fOvGMkp0hogqSxJXKfSQIqWz8i6fEI`
  );
  return data;
};

export default getImages;
