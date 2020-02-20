import authAPI from "../auth/authAPI.js";
import friendAPI from "../friends/friendsAPI.js";
import API from "./messageAPI.js";
import addToDOM from "./messageDOM.js";
import authFactory from "../auth/authFactories.js";

const messageBoxEventListeners = {
  openEvents() {
    const messageLink = document.querySelector("#messageBtnId");

    messageLink.addEventListener("click", () => {
      API.getMessages().then(addToDOM.renderMessages);
    });
  },
  messageHandlers() {
    const hideyId = document.querySelector("#messageId");
    const messageList = document.querySelector("#chatroom");
    messageList.addEventListener(
      "click",
      messageBoxEventListeners.deleteOrEditMessage
    );
    const input = document.getElementById("chatBox");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        if (input.value != "\n") {
          if (hideyId.value === "0") {
            const stamp = new Date();
            const newMessage = {
              userId: Number(sessionStorage.getItem("user")),
              message: input.value,
              timestamp: stamp.toLocaleString()
            };
            API.postNewMessage(newMessage)
              .then(API.getMessages)
              .then(addToDOM.renderMessages);
          } else {
            API.editMessage(input.value, hideyId.value)
              .then(API.getMessages)
              .then(addToDOM.renderMessages);
          }
        }
      }
    });
  },
  deleteOrEditMessage(event) {
    if (event.target.id.startsWith("deleteMessage--")) {
      const messageId = event.target.id.split("--")[1];
      API.deleteMessage(messageId)
        .then(API.getMessages)
        .then(addToDOM.renderMessages)
        .then(() => {
          document
            .querySelector("#chatroom")
            .removeEventListener("click", this.deleteOrEditMessage);
        });
    } else if (event.target.id.startsWith("editMessage--")) {
      const messageId = event.target.id.split("--")[1];
      const numberId = Number(messageId);
      document
        .querySelector("#chatroom")
        .removeEventListener("click", this.deleteOrEditMessage);
      messageBoxEventListeners.editMessage(numberId);
    } else if (event.target.id.startsWith("chatFriend")) {
      const msgUser = event.target.innerHTML;
      let isFriend = false;
      let isMe = false;
      friendAPI.getFriends().then(friends => {
        friends.forEach(friend => {
          if (friend.loggedInUserId === Number(sessionStorage.getItem("user"))) {
            if (friend.user.username === msgUser) {
              isFriend = true;
            }
          }
        });
        if (!isFriend) {
          authAPI.getUsers().then(users => {
            users.forEach(user => {
              if (user.id === Number(sessionStorage.getItem("user"))) {
                if (user.username === msgUser) {
                  isMe = true;
                }
              } else if (user.username === msgUser) {
                const newFriend = {
                  userId: user.id,
                  loggedInUserId: Number(sessionStorage.getItem("user"))
                }
                if (!isMe) {
                  if (confirm(`Add ${msgUser} as friend?`)) {
                    friendAPI.postNewFriend(newFriend);
                  }
                }
              }
            });
          });
        }
      });
    }
  },
  editMessage(objId) {
    const messageList = document.querySelector("#chatroom");
    messageList.innerHTML = "<h1>Edit your message</h1>";
    const editBox = document.getElementById("chatBox");
    const hideyId = document.querySelector("#messageId");
    API.getMessages().then(messages => {
      messages.forEach(message => {
        if (message.id === objId) {
          editBox.value = message.message;
          hideyId.value = message.id;
        }
      });
    });
  }
};

export default messageBoxEventListeners;
