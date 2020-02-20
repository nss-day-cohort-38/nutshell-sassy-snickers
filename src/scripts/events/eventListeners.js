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
            })
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

        })
    },

    modifyEvents() {
        const listenToDom = document.querySelector("#containerTwoSection")
        listenToDom.addEventListener("click", () => {
            if (event.target.id.startsWith("eventDeleteBtn--")) {
               if( confirm("Are you Sure?")) {
                const deleteBtn = event.target.id
                const deleteArray = deleteBtn.split("--")
                const deleteId = deleteArray[1]
                eventAPI.deleteEventEntry(deleteId)
                .then(() => eventAPI.getEventList())
                .then(data => {
                    eventDomRender.renderEvent(data)
                    eventDomRender.renderNewEventBtn()
                    eventEventListeners.addEvent()
                    eventEventListeners.modifyEvents()})}
                    else {return}
                console.log("delete")
            } else if (event.target.id.startsWith("eventEditBtn--")) {
                const editBtn = event.target.id
                const editArray = editBtn.split("--")
                const editId = editArray[1]
                if (event.target.id.startsWith("eventEditBtn--")) {
                    eventDomRender.renderEventInput()
                    eventDomRender.editEventForm(editId)
                    eventEventListeners.saveEvent()
                }
                console.log("edit")
            }
        })

        
    }
}

export default eventEventListeners