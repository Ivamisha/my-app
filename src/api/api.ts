import axios, {
  Axios,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
// import { URL } from "src/constants";

const api = axios.create({
  withCredentials: true,
  baseURL: "https://api.skilla.ru/mango/",
});

api.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer testtoken`;
  return config;
});

api.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest);
  }
);

export default api;
