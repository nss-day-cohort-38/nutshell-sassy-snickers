//API Object
const API = {
    getMessages() {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(response => response.json())
    },
    postNewMessage(newMessage) {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        })
    },
    deleteMessage(id){
        return fetch(`http://localhost:8088/messages/${id}`, {
            method: "DELETE"
        })
    },
    editMessage(updatedMessage, id){
        return fetch(`http://localhost:8088/messages/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: updatedMessage
        })
    })
    .then(res => res.json())
    .then(() => {
        document.querySelector("#messageId").value = "0"
    })
    }
}

export default API