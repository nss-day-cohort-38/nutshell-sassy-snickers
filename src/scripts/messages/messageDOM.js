import messageFactories from "./messageFactories.js"

const addToDOM = {
    renderMessages (messages) {
        const messageBox = messageFactories.messagesBox
        messageBox.innerHTML = ""
        messages.forEach(message => {
            const messagesDOM = messageFactories.postMessage(message)
            const messageInput = messageFactories.makeInputBox()
            messageBox.innerHTML += messagesDOM
            messageBox.innerHTML += messageInput

        });
    }
}

export default addToDOM;