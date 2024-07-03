import axios from "axios";

export const apiExternal = axios.create({
    baseURL: '/api/external',
    headers: {
      'ContentType': 'application/json',
    },
  });
