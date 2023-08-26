import axios from "axios";
import { API_VERSION, HOST_PATH } from "../../data/constant";
import { ICredential } from "../../models";

const axiosInstance = axios.create({
    baseURL: HOST_PATH,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        accept: "application/json",
    },
})

export const getToken = () => {
  const auth = localStorage.getItem("persist:auth")
  const authKey = auth != null ? JSON.parse(auth) : null
  if(authKey) {
    return JSON.parse(authKey?.auth)?.data?.token
  }
  return null
}

axiosInstance.defaults.headers.common['Tenant'] = `root`;
axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
axiosInstance.defaults.withCredentials = false

axiosInstance.interceptors.request.use((config) => {
  const auth = localStorage.getItem("persist:auth")
  const authKey = auth != null ? JSON.parse(auth) : null
  if(authKey) {
    config.headers['Authorization'] = `Bearer ${getToken()}`;
  }
  return config;
})


axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error?.config;
      if (error?.response?.status === 401 && !originalRequest.sent) {
        originalRequest.sent = true;
        const response = await axios.get<ICredential>("/api/tokens/refresh", {
          withCredentials: true,
        });
        if (response.status === 403) {
        //   store.dispatch(logout());
        }
        // store.dispatch(login({ user: response.data.user }));
        return axiosInstance(originalRequest);
      }
      return Promise.reject(error);
    }
);
export default axiosInstance;