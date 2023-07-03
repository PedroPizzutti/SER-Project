import { AxiosError } from "axios";

export const unauthorizedResponse = (error: AxiosError) => {
  const status = error.response?.status;
  const path = window.location.pathname;
  if (status === 401 && !path.toUpperCase().includes("/auth")) {
    localStorage.clear();
    window.location.href = "/auth/sign-in";
  }
  return Promise.reject(error);
};
