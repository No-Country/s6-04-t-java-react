import { client, isClientError } from "./httpClient";

export const postRequest = async (requestData: {}, endpoint: string) => {
  try {
    const data = await client.post(endpoint, requestData);
    return data;
  } catch (error) {
    if (isClientError(error)) {
      throw new Error(error.message);
    } else {
      return "An unexpected error occurred";
    }
  }
};

export const getRequest = async (endpoint: string) => {
  try {
    const { data } = await client.get(endpoint);
    return data;
  } catch (error) {
    if (isClientError(error)) {
      console.log("error message: ", error.message);

      throw new Error(error.message);
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};