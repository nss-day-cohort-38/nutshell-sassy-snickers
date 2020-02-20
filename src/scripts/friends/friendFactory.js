const friendHtml = {
    friendList(friend) {
        return `
            <h2>${friend.user.username}</h2>
        `
    },

    friendsBar() {
        return `
            <input type="text" id="friendsBar">
            <button id="searchFriends">Search</button>
        `
    }
}

export default friendHtml