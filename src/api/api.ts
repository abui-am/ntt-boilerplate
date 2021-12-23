import axios from 'axios';

export const bookApi = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_BOOK_API,
    params: {
      key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    },
  });
};
