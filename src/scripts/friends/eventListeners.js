import friendHtml from "./friendFactory.js"
import friendToDom from "./friendManipulator.js"

const friendListeners = {
    openFriends() {
        const friendBtn = document.querySelector("#friendsBtn")
        friendBtn.addEventListener("click", () => {
            friendToDom.writeDom()
        })
    },

    addFriend() {

    }
}

export default friendListeners