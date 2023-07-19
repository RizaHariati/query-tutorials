import axios, { AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const request = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`;
  const onSuccess = (response: AxiosResponse<any, any>) => response;

  const onError = (error: Error) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
