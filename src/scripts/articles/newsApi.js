/*
    Written by Matthew B
    API calls for getting news entries, adding new entries,
    updating entries, and deleting entries
*/

const newsUrl = "http://localhost:8088/news"

export default {
    getNewsEntries() {
        return fetch(newsUrl)
            .then(resp => resp.json())
    },
    addNewsEntry(entry) {
        return fetch(newsUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    updateNewsEntry(newsEntryId, entry) {
        return fetch(`${newsUrl}/${newsEntryId}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    deleteNewsEntry(newsEntryId) {
        return fetch(`${newsUrl}/${newsEntryId}`, {
            method: "DELETE"
        })
    }
}