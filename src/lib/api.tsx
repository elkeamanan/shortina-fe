import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

interface StoreRedirectionRequest {
  key: string;
  redirection: string;
}

interface StoreRedirectionResponse {
  status: boolean;
}

export async function storeRedirection(
  params: StoreRedirectionRequest
): Promise<StoreRedirectionResponse> {
  try {
    const response = await axiosClient.post("link", params, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data as StoreRedirectionResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Request failed with status ${error.response?.status}: ${
          error.response?.data?.message || `Unknown error ${error}`
        }`
      );
    }
    throw error;
  }
}

interface GetRedirectionRequest {
  key: string;
}

interface GetRedirectionResponse {
  redirection: string;
}
export async function getRedirection(
  params: GetRedirectionRequest
): Promise<GetRedirectionResponse> {
  try {
    const response = await axiosClient.get(`link/${params.key}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Request failed with status ${error.response?.status}: ${
          error.response?.data?.message || `Unknown error ${error}`
        }`
      );
    }
    throw error;
  }
}
