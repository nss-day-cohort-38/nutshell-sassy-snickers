import API from "./messageAPI.js"
import addToDOM from "./messageDOM.js"

const messageBoxEventListeners = {
    openEvents() {
        const messageLink = document.querySelector("#messageBtnId")

        messageLink.addEventListener("click", () => {
            API.getMessages().then(addToDOM.renderMessages)
        })
    }
}

export default messageBoxEventListeners