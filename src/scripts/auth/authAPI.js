/*
    Written by Matthew B
    API calls for getting users, adding new users,
    and getting specific users
*/

const usersUrl = "http://localhost:8088/users"
export default {
    // Gets all users
    getUsers() {
        return fetch(usersUrl)
            .then(resp => resp.json())
    },
    // Gets specific user depending on id
    getSpecificUser(id) {
        return fetch(`${usersUrl}/${id}`)
            .then(resp => resp.json())
    },
    // Adds new user
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