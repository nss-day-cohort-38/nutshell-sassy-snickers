import messageFactories from "./messageFactories.js"
import messageBoxEventListeners from "./eventListeners.js"

const addToDOM = {
    renderMessages (messages) {
        const messageBox = messageFactories.messagesBox
        messageBox.innerHTML = `<section id="chatroom"></section>`
        const allMessages = document.getElementById("chatroom")
        messages.forEach(message => {
            const messagesDOM = messageFactories.postMessage(message)
            allMessages.innerHTML += messagesDOM
        });
        const messageInput = messageFactories.makeInputBox()
        messageBox.innerHTML += messageInput
        messageBoxEventListeners.messageHandlers()
    }   
}

export default addToDOM;