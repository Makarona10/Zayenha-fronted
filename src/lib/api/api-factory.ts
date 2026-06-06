import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

export const createApiInstance = (
  token?: string,
  locale: string = "ar",
): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1",
    timeout: 10000,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": locale,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & {
        _retry?: boolean;
      };

      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
              return instance(originalRequest);
            })
            .catch((err) => Promise.reject(err));
        }

        originalRequest._retry = true;
        isRefreshing = true;

        return new Promise((resolve, reject) => {
          instance
            .post("/auth/refresh")
            .then(({ data }) => {
              const newToken = data.access_token;

              if (typeof window !== "undefined") {
                Cookies.set("access_token", newToken);
              }

              instance.defaults.headers.common["Authorization"] =
                `Bearer ${newToken}`;
              originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

              processQueue(null, newToken);
              resolve(instance(originalRequest));
            })
            .catch((err) => {
              processQueue(err, null);
              if (typeof window !== "undefined") {
                Cookies.remove("access_token");
                window.location.href = "/login?session=expired";
              }
              reject(err);
            })
            .finally(() => {
              isRefreshing = false;
            });
        });
      }

      return Promise.reject(error.response?.data || error.message);
    },
  );

  return instance;
};
