const eventAPI = {
    getEventList() {
        return fetch("http://localhost:8088/events").then(resp => resp.json())
    },

    addEventEntry(entry) {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(entry)
        })
    },

    deleteEventEntry(entry) {
        return fetch(`http://localhost:8088/events/${entry}`, {
        method: "DELETE"})
    },

    editEventEntry(entry) {

    }
}

export default eventAPI