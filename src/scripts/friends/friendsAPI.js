const friendAPI = {
    getFriends() {
        return fetch("http://localhost:8088/friends?_expand=user")
            .then(response => response.json())
    },
    postNewFriend(newFriend) {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFriend)
        })
    }
}

export default friendAPI