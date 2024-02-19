import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "dc1a4ac3-0938-47d2-ab93-761a51b35457" },
});

export const getUsers = (currentPage, pageSize) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};

export const postFollow = (userId) => {
  return instance
    .post(`follow/${userId}`)
    .then((response) => response.data);
};

export const deleteUnfollow = (userId) => {
  return instance
    .delete(`follow/${userId}`)
    .then((response) => response.data);
};

export const getProfile = (userId) => {
  return instance
    .get(`profile/` + userId)
    .then((response) => response.data);
};
