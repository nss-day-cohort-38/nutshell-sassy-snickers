import authFactory from "./authFactories.js"
import welcomeEvents from "./eventListeners.js"

const welcomeDOM = {
    renderWelcome () {
        this.clearPage()
        authFactory.header.innerHTML = authFactory.welcomeHeader()
        authFactory.box1.innerHTML = authFactory.loginForm()
        authFactory.box2.innerHTML = authFactory.regForm()
    },
    clearPage() {
        authFactory.header.innerHTML = ""
        authFactory.box1.innerHTML = ""
        authFactory.box2.innerHTML = ""
    },
    renderHeader () {
        welcomeDOM.clearPage()
        authFactory.header.innerHTML = authFactory.loggedHeader()
    },
    renderProfile (user) {
        authFactory.box1.innerHTML = authFactory.getProfile(user)
        const logoutBtn = document.querySelector("#logoutBtn")
        logoutBtn.addEventListener("click", welcomeEvents.startWelcome)
    }
}

export default welcomeDOM