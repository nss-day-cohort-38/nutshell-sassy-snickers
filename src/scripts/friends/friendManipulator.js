import friendHtml from "./friendFactory.js";
import friendAPI from "./friendsAPI.js";

const friendToDom = {
  writeDom() {
    const friendContainer = document.querySelector("#containerTwo");
    friendContainer.innerHTML = "<h2>Your Friends</h2>";
    friendAPI.getFriends().then(friends => {
      friends.forEach(friend => {
        if (friend.loggedInUserId === Number(sessionStorage.getItem("user"))) {
          friendContainer.innerHTML += friendHtml.friendList(friend);
        }
      });
    });
  }
};

export default friendToDom;
