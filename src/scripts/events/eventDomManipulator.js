// written by Mike Prince
import eventHtml from "./eventHtmlMaker.js";
import eventAPI from "./eventAPI.js";
import eventEventListeners from "./eventListeners.js";

let eventContainer = "";

const eventDomRender = {
  // renders the list of events to the DOM
  renderEvent(events) {
    const domContainer = document.querySelector("#containerTwo");
    domContainer.innerHTML = `<section id="containerTwoSection"></section>`;
    eventContainer = document.querySelector("#containerTwoSection");
    // sorts the list of events by date
    events.sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      } else if (a.date > b.date) {
        return 1;
      } else {
        return 0;
      }
    });
    events.forEach(event => {
      eventContainer.innerHTML += eventHtml.makeEventList(event);
    });
  },
  // renders the button to add a new event
  renderNewEventBtn() {
    eventContainer.innerHTML += eventHtml.makeNewEventBtn();
  },
  // renders the input field to add a new event
  renderEventInput() {
    eventContainer.innerHTML = "";
    eventContainer.innerHTML = eventHtml.makeNewEventHtml();
  },
  // creating a form to gather the information from the input and send it to the api
  saveEventForm() {
    const currentUserId = Number(sessionStorage.getItem("user"));
    const hiddenId = document.querySelector(".hiddenId");
    const newEventName = document.querySelector("#eventNameInput");
    const newEventDate = document.querySelector("#dateInput");
    const newEventLocation = document.querySelector("#locationInput");
    const saveEventModule = {
      userId: currentUserId,
      eventName: newEventName.value,
      date: newEventDate.value,
      location: newEventLocation.value,
      id: hiddenId.value
    };

    if (hiddenId.value === "") {
      eventAPI.addEventEntry(saveEventModule).then(() => {
        eventAPI.getEventList().then(entry => {
          eventDomRender.renderEvent(entry);
          eventDomRender.renderNewEventBtn();
          eventEventListeners.addEvent();
        });
      });
    } else {
      eventAPI.editEventEntry(saveEventModule).then(() => {
        eventAPI.getEventList().then(entry => {
          eventDomRender.renderEvent(entry);
          eventDomRender.renderNewEventBtn();
          eventEventListeners.addEvent();
        });
      });
    }
  },
  // creates a form to populate the input fields when editing an event
  editEventForm(editId) {
    const currentUserId = document.querySelector(".hiddenUID");
    const hiddenId = document.querySelector(".hiddenId");
    const newEventName = document.querySelector("#eventNameInput");
    const newEventDate = document.querySelector("#dateInput");
    const newEventLocation = document.querySelector("#locationInput");

    eventAPI.getEventEdit(editId).then(event => {
      (currentUserId.value = event.userId),
        (newEventName.value = event.eventName),
        (newEventDate.value = event.date),
        (newEventLocation.value = event.location);
      hiddenId.value = event.id;
    });
  }
};

export default eventDomRender;
