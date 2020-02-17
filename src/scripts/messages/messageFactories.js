const messageFactories = {
    element (comp, text, classes) { return `<${comp} class="${classes}">${text}</${comp}>`},
    
    postMessage (message) {
        return `
        <section class="message">
        ${this.element("div", `User: ${message.user.username}`, "messageUsername")}
        ${this.element("div", `${message.message}`, "message")}
        ${this.element("div", `${message.timestamp}`, "messageTimestamp")}
        <button type="button" class="deleteButton" id="deleteMesssage--${message.id}">Delete</button>
        <button type="button" class="editButton" id="editMesssage--${message.id}">Edit</button>
        </section>`
    },
    makeInputBox () {
        return `
        <textarea name="Description" placeholder="Write a new message" cols="60" rows="4"></textarea> `
    },

    messagesBox: document.querySelector("#containerOne")

}

export default messageFactories