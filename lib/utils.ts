import axios from "axios";

let token = null;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token") ?? null
};
export const apiExternal = axios.create({
    baseURL: '/api/external',
    headers: {
      'ContentType': 'application/json',
      Authorization: token
    },
});
