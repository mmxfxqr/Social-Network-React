import ava1 from "../images/avatars/1.png"
import ava2 from "../images/avatars/2.png"
import ava3 from "../images/avatars/3.png"
import ava4 from "../images/avatars/4.png"
import ava5 from "../images/avatars/5.png"
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are u", like__count: "15" },
      { id: 2, message: "It's my first post", like__count: "25" },
      { id: 3, message: "Bye", like__count: "35" },
      { id: 4, message: "grq9pogiqrwhregiogrqeiohqgoqghoirqe", like__count: "35" },
      
    ],
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: "Саша", ava: ava1},
      { id: 2, name: "Борис", ava: ava2},
      { id: 3, name: "Денис", ava: ava3},
      { id: 4, name: "Екатерина", ava: ava4},
      { id: 5, name: "Дмитрий", ava: ava5},
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Wat's Up" },
      { id: 3, message: "Bye" },
    ],
  },
};
export default state;
