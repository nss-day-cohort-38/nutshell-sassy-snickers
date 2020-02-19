const eventAPI = {
    getEventList() {
        return fetch("http://localhost:8088/events")
        .then(resp => resp.json())
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

    getEventEdit(entry) {
        return fetch(`http://localhost:8088/events/${entry}`)
        .then(resp => resp.json())
    },

    editEventEntry(entry) {
        return fetch(`http://localhost:8088/events/${entry.id}`, {
            method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
        })
    }
}

export default eventAPI