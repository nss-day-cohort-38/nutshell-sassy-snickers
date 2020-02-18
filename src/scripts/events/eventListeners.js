import eventAPI from "./eventAPI.js"
import eventDomRender from "./eventDomManipulator.js"

const eventEventListeners = {
    openEvents() {
        const eventLink = document.querySelector("#eventBtnId")

        eventLink.addEventListener("click", () => {
            eventAPI.getEventList()
            .then(data => {
                eventDomRender.renderEvent(data)
                eventDomRender.renderNewEventBtn()
                eventEventListeners.addEvent()
                eventEventListeners.modifyEvents()
            }
                )
            // .then(eventDomRender.renderNewEventBtn)
            // .then(this.addEvent().bind(eventEventListeners))
            // .then(() => eventEventListeners.addEvent())
            console.log("Hello World")
        })
    },

    addEvent() {
        const addEventBtn = document.querySelector("#eventAddBtnId")

        addEventBtn.addEventListener("click", () => {
            eventDomRender.renderEventInput()
            eventEventListeners.saveEvent()
            console.log("Event!!!!")
        })
    }, 

    saveEvent() {
        const saveEventBtn = document.querySelector("#eventSaveBtnId")
        saveEventBtn.addEventListener("click", () => {
          eventDomRender.saveEventForm()

            console.log(saveEventModule)
        })
    },

    modifyEvents() {
        // const editBtn = document.querySelector("#eventEditBtn")
        // const deleteBtn = document.querySelector("#eventDeleteBtn")
        const listenToDom = document.querySelector("#containerTwo")
        listenToDom.addEventListener("click", () => {
            if (event.target.id.startsWith("eventDeleteBtn--")) {
                const deleteBtn = event.target.id
                const deleteArray = deleteBtn.split("--")
                const deleteId = deleteArray[1]
                eventAPI.deleteEventEntry(deleteId)
                .then(() => eventAPI.getEventList())
                .then(data => {
                    eventDomRender.renderEvent(data)
                    eventDomRender.renderNewEventBtn()
                    eventEventListeners.addEvent()
                    eventEventListeners.modifyEvents()})
                console.log("delete")
            } else if (event.target.id.startsWith("eventEditBtn--")) {
                console.log("edit")
            }
        })

        
    }
}

export default eventEventListeners