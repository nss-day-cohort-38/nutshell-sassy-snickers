import authAPI from "./authAPI.js";
import events from "../articles/eventListeners.js";
import eventEventListeners from "../events/eventListeners.js";
import messageBoxEventListeners from "../messages/eventListeners.js";
import apiActions from "./authAPI.js"

import welcomeDOM from "./authDOM.js";
import friendListeners from "../friends/eventListeners.js";

const welcomeEvents = {
  startWelcome() {
    welcomeDOM.renderWelcome();
    const loginBtn = document.querySelector("#login");
    loginBtn.addEventListener("click", welcomeEvents.login);
    const registerBtn = document.querySelector("#registerAccount");
    registerBtn.addEventListener("click", welcomeEvents.register);
     
  },
  register() {
    const regUsernameInput = document.querySelector("#regUsername")
    const regEmailInput = document.querySelector("#regEmail")
    const regPasswordInput = document.querySelector("#regPassword")
    const regConfirmPasswordInput = document.querySelector("#regConfirmPassword")

    const newUserEntry = {
      username: regUsernameInput.value,
      email: regEmailInput.value,
      password: regPasswordInput.value,
      confirmPassword: regConfirmPasswordInput.value
    }

    if (newUserEntry.password === newUserEntry.confirmPassword) {
    apiActions.addNewUser(newUserEntry)
      .then(apiActions.getUsers)
      .then(welcomeEvents.makeNewUser)
    } else {
      alert("Passwords do not match")
    }
  },    
  makeNewUser(users) {
    
    users.forEach(user => {
      sessionStorage.setItem("user", user.id)
    })
    welcomeDOM.renderHeader();
    events.openEvents();
    events.entryEventListener();
    welcomeEvents.profileBtnEvent()
    eventEventListeners.openEvents();
    messageBoxEventListeners.openEvents();
    friendListeners.openFriends();

    // registerBtn.addEventListener("click", welcomeEvents.register);
  },
  login() {
    authAPI.getUsers().then(welcomeEvents.validateLogin);
  },
  validateLogin(users) {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    let validCheck = false
    users.forEach(user => {
      if (user.username === username.value && user.password === password.value) {
        validCheck = true
        sessionStorage.setItem("user", user.id);
        welcomeDOM.renderHeader();
        events.openEvents();
        events.entryEventListener();
        welcomeEvents.profileBtnEvent();
        eventEventListeners.openEvents();
        messageBoxEventListeners.openEvents();
        friendListeners.openFriends();
      }
    })
    if (!validCheck){
      alert("Username or password is wrong")
    }
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
