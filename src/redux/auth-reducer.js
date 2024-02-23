import { getAuthMeName } from "../api/Api";

const SET_USER_DATA = "SET_USER_DATA";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: true,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth:true
      };
    default:
      return state;
  }
};
export const setAuthUserData = (userID, email, login) => ({ type: SET_USER_DATA, data : {userID,email,login} });

export const setAuthUser = () => {
  return (dispatch) => {
    getAuthMeName().then((response) => {
      if(response.data.resultCode === 0){
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login));
       }
    });
  };
};

export default authReducer;
