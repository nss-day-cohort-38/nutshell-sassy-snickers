import friendHtml from "./friendFactory.js"

const friendToDom = {
    writeDom() {
        const friendContainer = document.querySelector("#containerOne")
        friendContainer.innerHTML = friendHtml.friendsBar()
    }
}

export default friendToDom