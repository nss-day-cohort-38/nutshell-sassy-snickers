import eventHtml from "./eventHtmlMaker.js"
import eventAPI from "./eventAPI.js"
import eventEventListeners from "./eventListeners.js"

const eventContainer = document.querySelector("#containerTwo")

const eventDomRender = {
    
    renderEvent(events) {
        
        eventContainer.innerHTML = ""
        events.sort((a, b) => {
            if (a.date < b.date) {return -1} 
            else if (a.date > b.date) {return 1}
            else {return 0} 
        })
        events.forEach(event => {
            
            eventContainer.innerHTML += eventHtml.makeEventList(event)
        })
         
    },

    renderNewEventBtn() {
        // const eventContainer = document.querySelector("#containerTwo")
        eventContainer.innerHTML += eventHtml.makeNewEventBtn()
    },

    renderEventInput() {
        eventContainer.innerHTML = ""
        eventContainer.innerHTML = eventHtml.makeNewEventHtml()
    },

    saveEventForm() {
        const currentUserId = 1
        const hiddenId = document.querySelector(".hiddenId")
        const newEventName = document.querySelector("#eventNameInput")
        const newEventDate = document.querySelector("#dateInput")
        const newEventLocation = document.querySelector("#locationInput")
        const saveEventModule = {
         userId: currentUserId,
         eventName: newEventName.value,
         date: newEventDate.value,
         location: newEventLocation.value,
         id: hiddenId.value
        }
        
        if(hiddenId.value === "") {
        eventAPI.addEventEntry(saveEventModule)
        .then(() => {
            eventAPI.getEventList()
            .then(entry => {
                eventDomRender.renderEvent(entry)
                eventDomRender.renderNewEventBtn()
                eventEventListeners.addEvent()
            })
        })} else {eventAPI.editEventEntry(saveEventModule)
                    .then(() => {
                        eventAPI.getEventList()
                            .then(entry => {
                                eventDomRender.renderEvent(entry)
                                eventDomRender.renderNewEventBtn()
                                eventEventListeners.addEvent()
                })
            })
        }
    }, 

    editEventForm(editId) {
        const currentUserId = document.querySelector(".hiddenUID")
        const hiddenId = document.querySelector(".hiddenId")
        const newEventName = document.querySelector("#eventNameInput")
        const newEventDate = document.querySelector("#dateInput")
        const newEventLocation = document.querySelector("#locationInput")

        eventAPI.getEventEdit(editId)
        .then(event => {
         currentUserId.value = event.userId,
         newEventName.value = event.eventName,
         newEventDate.value = event.date,
         newEventLocation.value = event.location
         hiddenId.value = event.id
        })
    }
}

export default eventDomRender