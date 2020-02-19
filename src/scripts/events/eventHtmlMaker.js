

const eventHtml = {
    makeEventList(event) {
        return `
        <section class="eventListClass" id="">
            <h2>${event.eventName}</h2>
            <p>${event.date}</P>
            <p>${event.location}</p>

            <button id="eventEditBtn--${event.id}">Edit</button>
            <button id="eventDeleteBtn--${event.id}">Delete</button>
        </section>
        `        
    },

    makeNewEventBtn() {
       return` 
        <button id="eventAddBtnId">Add Event</button>
       `
    },

    makeNewEventHtml() {
        return `
        <fieldset>
            <input type="text" id="eventNameInput" placeholder="Event Name">
            <input type="date" id="dateInput" placeholder="Date">
            <input type="text" id="locationInput" placeholder="Location" >
            <input type="hidden" id="" class="hiddenId" value="">
            <input type="hidden" id="" value="" class="hiddenUID">
            <button id="eventSaveBtnId">Save</button>
        </fieldset>
        `
    }

}


export default eventHtml