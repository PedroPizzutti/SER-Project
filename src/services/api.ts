import axios from "axios";
import { authorizationRequest } from "./interceptors/authorizationRequest";
import { unauthorizedResponse } from "./interceptors/unauthorizedResponse";

const api = axios.create({
  baseURL: "http://172.16.80.17:9415/",
});

api.interceptors.request.use(authorizationRequest);

api.interceptors.response.use((res) => res, unauthorizedResponse);

export { api };
