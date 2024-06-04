import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "a805cb90-1ec3-43aa-b08b-e6c92ac3fb7b",
  },
});
