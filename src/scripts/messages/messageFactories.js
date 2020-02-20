const messageFactories = {
    element (comp, text, classes) { return `<${comp} class="${classes}">${text}</${comp}>`},
    
    postMessage (message) {
        return `
        <section class="message">
        ${this.element("h2", `${message.user.username}: ${message.message}`, "fullMessage")}
        ${this.element("h1", `${message.timestamp}`, "messageTimestamp")}
        <button type="button" class="deleteButton" id="deleteMessage--${message.id}">Delete</button>
        <button type="button" class="editButton" id="editMessage--${message.id}">Edit</button>
        </section>`
    },
        makeInputBox () {
        return `
        <textarea name="chatBox" id="chatBox" placeholder="Write a new message" cols="60" rows="4"></textarea> 
        <input type="hidden" id="messageId" value="0" />`
    },

    messagesBox: document.querySelector("#containerOne")

}

export default messageFactories