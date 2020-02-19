import events from "../articles/eventListeners.js";
import eventEventListeners from "../events/eventListeners.js";
import messageBoxEventListeners from "../messages/eventListeners.js";

import welcomeDOM from "./authDOM.js";

const welcomeEvents = {
  startWelcome() {
    welcomeDOM.renderWelcome();
    const loginBtn = document.querySelector("#login");
    loginBtn.addEventListener("click", this.login);
    const registerBtn = document.querySelector("#registerAccount");
    registerBtn.addEventListener("click", this.login);
  },
  login() {
    welcomeDOM.renderHeader();
    events.openEvents();
    events.entryEventListener();

    eventEventListeners.openEvents();
    messageBoxEventListeners.openEvents();
  }
};

export default welcomeEvents;
