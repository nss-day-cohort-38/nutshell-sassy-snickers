const authFactory = {
    welcomeHeader () {
        return `
        <img src="logo.png" alt="" class="logo">
        <h2 class="synthShell">Welcome to Synth<span class="shellType">Shell</span></h2>`
    },
    loggedHeader () {
        return `
        <img src="logo.png" alt="" class="logo">
        <button class="linkBtn" id="profileBtn">Profile</button>
 	    <button class="linkBtn" id="friendsBtn">Friends</button>
        <button class="linkBtn" id="newsBtn">News</button>
        <button class="linkBtn" id="messageBtnId">Messages</button>
        <button class="linkBtn" id="eventBtnId">Events</button>
        <button class="linkBtn" id="taskBtnId">Tasks</button>
        `
    },
    loginForm () {
        return `
        <fieldset id="loginForm">
            <label for="username">Username: </label><br>
            <input type="text" name="username" id="username" placeholder=Username><br>
            <label for="password">Password: </label><br>
            <input type="password" name="password" id="password" placeholder=Password><br>
            <button type="button" id="login">Login</button>
        </fieldset>`
    },
    regForm () {
        return `
        <fieldset id="regForm">
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
    getProfile (user) {
        return `
        <h1>Username: ${user.username}</h1>
        <h1>Email: ${user.email}</h1>
        <h1>Password: ${user.password}</h1>
        <button id="logoutBtn">Logout</button>
        `
    }, 

    header: document.querySelector(".headerClass"),
    box1: document.getElementById("containerOne"),
    box2: document.getElementById("containerTwo")
}

export default authFactory