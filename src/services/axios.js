import axios from "axios";

export const request = axios.create({
  baseURL: `http://test.kitob-ol.uz:8080/api/`,
  timeout: 10000,
  headers: {
    Authorization: "Basic" + " a2l0b2JvbHV6OjhvNUVYVWlxZ2U2UQ==",
  },
});

const errorHandler = (error) => {
  if (error && error.response) {
    console.log(error);
  }

  return Promise.reject(error.response);
};

request.interceptors.response.use((response) => response.data, errorHandler);
