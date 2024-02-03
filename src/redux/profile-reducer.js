const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
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
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{

      let newPost = {
        id: 5,
        message: state.newPostText,
        like__count: 0,
      };
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
      case UPDATE_NEW_POST_TEXT:{
        let stateCopy = {...state}
        stateCopy.newPostText = action.newText;
        return stateCopy;
      }
        default:
          return state;
  }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export default profileReducer;
