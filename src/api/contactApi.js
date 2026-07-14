import api from "./api";

export const sendContactMessageApi = async (data) => {
  const response = await api.post(
    "/contact",
    data
  );

  return response.data;
};