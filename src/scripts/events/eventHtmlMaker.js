const eventHtml = {
  // Html element to display the event list
  makeEventList(event) {
    return `
        <section class="eventListClass" id="">
            <h2>${event.eventName}</h2>
            <p>${event.date}</P>
            <p>${event.location}</p>
            <button class="eventBtnClass" id="eventEditBtn--${event.id}">Edit</button>
            <button class="eventBtnClass" id="eventDeleteBtn--${event.id}">Delete</button>
        </section>
        `;
  },
  // Html element to display the add event button
  makeNewEventBtn() {
    return ` 
        <button class="eventBtnClass" id="eventAddBtnId">Add Event</button>
       `;
  },
  // Html element to display the new event input form
  makeNewEventHtml() {
    return `
        <fieldset>
            <input type="text" id="eventNameInput" placeholder="Event Name">
            <input type="date" id="dateInput" placeholder="Date">
            <input type="text" id="locationInput" placeholder="Location">
            <input type="hidden" id="" class="hiddenId" value="">
            <input type="hidden" id="" value="" class="hiddenUID">
            <button class="eventBtnClass" id="eventSaveBtnId">Save</button>
        </fieldset>
        `;
  }
};

export default eventHtml;
