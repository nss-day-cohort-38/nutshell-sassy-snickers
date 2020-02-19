import events from "../articles/eventListeners.js";
import eventEventListeners from "../events/eventListeners.js";
import messageBoxEventListeners from "../messages/eventListeners.js";
import apiActions from "./authAPI.js"

import welcomeDOM from "./authDOM.js";

const welcomeEvents = {
  startWelcome() {
    welcomeDOM.renderWelcome();
    const loginBtn = document.querySelector("#login");
    loginBtn.addEventListener("click", this.login);
    const registerBtn = document.querySelector("#registerAccount");
    registerBtn.addEventListener("click", this.register);
  },
  login() {
      welcomeDOM.renderHeader();
      events.openEvents();
      events.entryEventListener();
  
      eventEventListeners.openEvents();
      messageBoxEventListeners.openEvents();
  },
  register() {
    const regUsernameInput = document.querySelector("#regUsername")
    const regEmailInput = document.querySelector("#regEmail")
    const regPasswordInput = document.querySelector("#regPassword")
    const regConfirmPasswordInput = document.querySelector("#regConfirmPassword")

    const newUserEntry = {
      regUsername: regUsernameInput.value,
      regEmail: regEmailInput.value,
      regPassword: regPasswordInput.value,
      regConfirmPassword: regConfirmPasswordInput.value
  }

    apiActions.addNewUser(newUserEntry)
      .then(apiActions.getUsers)
      .then(welcomeEvents.makeNewUser)
      
  },    
  makeNewUser(users) {
    sessionStorage.setItem("user", users[(users.length - 1)].id)
    users.forEach(user => {
      console.log(user)
    })
    welcomeDOM.renderHeader();
    events.openEvents();
    events.entryEventListener();
    // welcomeEvents.profileBtnEvent()
    eventEventListeners.openEvents();
    messageBoxEventListeners.openEvents();

  }
};

export default welcomeEvents;
