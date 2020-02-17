const eventEventListeners = {
    openTask() {
        const eventLink = document.querySelector("#eventBtnId")

        eventLink.addEventListener("click", () => {
            console.log("Hello World")
        })
    }
}

export default eventEventListeners