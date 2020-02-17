//API Object
const API = {
    getMessages() {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(response => response.json())
    }
}

export default API