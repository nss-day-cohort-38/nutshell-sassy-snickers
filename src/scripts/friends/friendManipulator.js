import friendHtml from "./friendFactory.js"

const friendToDom = {
    writeDom() {
        const friendContainer = document.querySelector("#containerOne")
        friendContainer.innerHTML = friendHtml.friendTest()
    }
}

export default friendToDom