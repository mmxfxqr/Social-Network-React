import { getProfileAPI, updateUserStatus } from "../api/Api";
import { getUserStatus } from "../api/Api";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are u", like__count: "15" },
    { id: 2, message: "It's my first post", like__count: "25" },
    { id: 3, message: "Bye", like__count: "35" },
    {
      id: 4,
      message: "grq9pogiqrwhregiogrqeiohqgoqghoirqe",
      like__count: "35",
    },
  ],
  newPostText: "",
  profile: null,
  status: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        like__count: 0,
      };
      return { ...state, newPostText: "", posts: [...state.posts, newPost] };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return {...state, status: action.status}
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setStatus = (status) =>  ({type: SET_STATUS, status})


export const getStatus = (userId) => {
  return (dispatch) => {
    getUserStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    updateUserStatus(status).then((response) => {
      if(response.resultCode=== 0)
      dispatch(setStatus(status));
      dispatch(getStatus(30805));
    });
  };
};
export const getProfile = (userId) => {
  return (dispatch) => {
    getProfileAPI(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
export default profileReducer;
