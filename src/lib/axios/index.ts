import axios from "axios";
import { API_VERSION, HOST_PATH } from "../../data/constant";
import { ICredential } from "../../models";

const axiosInstance = axios.create({
    baseURL: HOST_PATH + API_VERSION,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        accept: "application/json",
    },
})
axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
axiosInstance.defaults.withCredentials = false

axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error?.config;
      if (error?.response?.status === 401 && !originalRequest.sent) {
        originalRequest.sent = true;
        const response = await axios.get<ICredential>("/auth/refresh", {
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