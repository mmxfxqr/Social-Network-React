import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const getUsersAPI = (currentPage, pageSize) => {
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

export const getProfileAPI = (userId) => {
  return instance
    .get(`profile/` + userId)
    .then((response) => response.data);
};
export const getAuthMeName = () => {
  return instance
    .get(`auth/me`)
    
};
export const getUserStatus = (userId) => {
  return instance.get(`/profile/status/${userId}`)
}
export const updateUserStatus = (status) => {
  return instance.put(`/profile/status`, {status})
}
