// written by Mike Prince
const eventAPI = {
  // gets the list of event from the api
  getEventList() {
    return fetch("http://localhost:8088/events").then(resp => resp.json());
  },
  // adds a new event to the api
  addEventEntry(entry) {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  },
  // deletes an event from the api
  deleteEventEntry(entry) {
    return fetch(`http://localhost:8088/events/${entry}`, {
      method: "DELETE"
    });
  },
  // gets a single event from the api to edit
  getEventEdit(entry) {
    return fetch(`http://localhost:8088/events/${entry}`).then(resp =>
      resp.json()
    );
  },
  // edits an event in the api
  editEventEntry(entry) {
    return fetch(`http://localhost:8088/events/${entry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  }
};

export default eventAPI;
