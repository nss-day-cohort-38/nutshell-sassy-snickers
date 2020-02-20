const usersUrl = "http://localhost:8088/users"
export default {
    getUsers() {
        return fetch(usersUrl)
            .then(resp => resp.json())
    },
    getSpecificUser(id) {
        return fetch(`${usersUrl}/${id}`)
            .then(resp => resp.json())
    },
    addNewUser(user) {
        return fetch(usersUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
    },
    retrieveUser(userId) {
        return fetch(usersUrl)
    }
}