import axios from 'axios';

const baseAPI = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
  });
};

export default baseAPI;
