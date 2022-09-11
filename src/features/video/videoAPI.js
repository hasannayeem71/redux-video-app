import axios from "../../utils/axios";

export const getVideo = async (id) => {
  const response = await axios.get(`/videos/${id}`);
  return response.data;
};

export const putLike = async (data, id) => {
  const response = await axios.put(`/videos/${id}`, data);
  return response.data;
};

export const putUnlike = async (data, id) => {
  const response = await axios.put(`/videos/${id}`, data);
  return response.data;
};
