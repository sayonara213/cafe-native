import axiosInstance from './axios.service';

export const getRequest = async (requestUrl: string) => {
  const { data } = await axiosInstance.get(requestUrl);

  return data;
};

export const postRequest = async (requestUrl: string, payload: object) => {
  const { data } = await axiosInstance.post(requestUrl, payload);

  return data;
};

export const deleteRequest = async (requestUrl: string) => {
  const { data } = await axiosInstance.delete(requestUrl);

  return data;
};

export const putRequest = async (requestUrl: string, payload: object) => {
  const { data } = await axiosInstance.put(requestUrl, payload);

  return data;
};
