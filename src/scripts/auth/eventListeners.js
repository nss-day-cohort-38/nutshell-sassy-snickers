import authAPI from "./authAPI.js";
import events from "../articles/eventListeners.js";
import eventEventListeners from "../events/eventListeners.js";
import messageBoxEventListeners from "../messages/eventListeners.js";

import welcomeDOM from "./authDOM.js";

const welcomeEvents = {
  startWelcome() {
    welcomeDOM.renderWelcome();
    const loginBtn = document.querySelector("#login");
    loginBtn.addEventListener("click", welcomeEvents.login);
    const registerBtn = document.querySelector("#registerAccount");
    registerBtn.addEventListener("click", welcomeEvents.register);
  },
  login() {
    authAPI.getUsers().then(welcomeEvents.validateLogin);
  },
  validateLogin(users) {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    users.forEach(user => {
      if (user.username === username.value && user.password === password.value) {
        sessionStorage.setItem("user", user.id);
        welcomeDOM.renderHeader();
        events.openEvents();
        events.entryEventListener();
        welcomeEvents.profileBtnEvent();
        eventEventListeners.openEvents();
        messageBoxEventListeners.openEvents();
      } else {
        alert("Username or Password is wrong")
      }
    });
  },
  getProfile(userId) {
    authAPI.getSpecificUser(userId).then(welcomeDOM.renderProfile);
  },
  profileBtnEvent() {
    const profileBtn = document.querySelector("#profileBtn");
    profileBtn.addEventListener("click", () => {
      welcomeEvents.getProfile(sessionStorage.getItem("user"));
    });
  }
};

export default welcomeEvents;
