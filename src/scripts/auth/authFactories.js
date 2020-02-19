const authFactory = {
    welcomeHeader () {
        return `
        <img src="logo.png" alt="" class="logo">
        <h2>Welcome to Synthshell</h2>`
    },
    loggedHeader () {
        return `
        <img src="logo.png" alt="" class="logo">
        <button class="linkBtn">Logout</button>
 	    <button class="linkBtn">Profile</button>
        <button class="linkBtn" id="newsBtn">News</button>
        <button class="linkBtn" id="messageBtnId">Messages</button>
        <button class="linkBtn" id="eventBtnId">Events</button>
        <button class="linkBtn" id="taskBtnId">Tasks</button>
        `
    },
    loginForm () {
        return `
        <fieldset>
            <label for="username">Username: </label><br>
            <input type="text" name="username" id="username" placeholder=Username><br>
            <label for="password">Password: </label><br>
            <input type="password" name="password" id="password" placeholder=Password><br>
            <button type="button" id="login">Login</button>
        </fieldset>`
    },
    regForm () {
        return `
        <fieldset>
            <label for="username">Username: </label><br>
            <input type="text" name="username" id="regUsername" placeholder="Username"><br>
            <label for="email">Email: </label><br>
            <input type="text" name="email" id="regEmail" placeholder=Email><br>
            <label for="password">Password: </label><br>
            <input type="password" name="password" id="regPassword" placeholder=Password><br>
            <label for="confirmPassword">Confirm Password: </label><br>
            <input type="password" name="confirmPassword" id="regConfirmPassword" placeholder="Confirm Password"><br>
            <button type="button" id="registerAccount">Register</button>
        </fieldset>`
    },

    header: document.querySelector(".headerClass"),
    box1: document.getElementById("containerOne"),
    box2: document.getElementById("containerTwo")
}

export default authFactory