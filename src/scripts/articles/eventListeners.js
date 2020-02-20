/*
    Written by Matthew B
    Event listeners for add, delete, and edit 
    buttons on news entries
*/

import apiActions from "./newsApi.js"
import renderNewsEntries from "./newsDOM.js"
import newsFormFactory from "./newsCreateHTML.js"

// API PUT call to edit news entry
const updateFormFields = entryId => {
    const titleInput = document.querySelector("#title")
    const synopsisInput = document.querySelector("#synopsis")
    const urlInput = document.querySelector("#url")

    fetch(`http://localhost:8088/news/${entryId}`)
        .then(resp => resp.json())
        .then(entry => {
            titleInput.value = entry.title
            synopsisInput.value = entry.synopsis
            urlInput.value = entry.url
        })
}

export default {
    // Makes news article wait to render to DOM until the news button in the header is clicked
    openEvents: () => {
        const eventLink = document.querySelector("#newsBtn")

        eventLink.addEventListener("click", () => {
            apiActions.getNewsEntries().then(renderNewsEntries)
        })
    },
    // Event listener for add, delete, and edit buttons
    entryEventListener: () => {
        const newsList = document.querySelector("#containerOne")

        newsList.addEventListener("click", (event) => {
            // Checks if delete button was clicked and deletes entry
            if (event.target.id.startsWith("deleteEntry--")) {
                const deleteBtnId = event.target.id
                const deleteBtnArray = deleteBtnId.split("--")
                const entryIdToDelete = deleteBtnArray[1]

                let r = confirm("Are you sure you want to delete this entry?")
                if (r === true) {
                apiActions.deleteNewsEntry(entryIdToDelete)
                    .then(apiActions.getNewsEntries)
                    .then(renderNewsEntries)
                }
            // Checks if edit entry button was clicked and lets user edit entry
            } else if (event.target.id.startsWith("editEntry--")) {
                const entryIdToEdit = event.target.id.split("--")[1]
                newsList.innerHTML = newsFormFactory.newsFormFactory()
                const saveButton = document.querySelector("#saveEntry")

                saveButton.addEventListener("click", () => {
                    const titleInput = document.querySelector("#title")
                    const synopsisInput = document.querySelector("#synopsis")
                    const urlInput = document.querySelector("#url")
                    const stamp = new Date()
                    const currentTime = stamp.toLocaleString()

                    const entry = {
                        title: titleInput.value,
                        synopsis: synopsisInput.value,
                        url: urlInput.value,
                        timestamp: currentTime,
                        userId: Number(sessionStorage.getItem("user"))
                    }

                    apiActions.updateNewsEntry(entryIdToEdit, entry)
                    .then(() => {
                        apiActions.getNewsEntries()
                            .then(renderNewsEntries)
                    })
                })
                updateFormFields(entryIdToEdit)

            // Checks if add entry button was clicked and lets user add a new entry
            } else if (event.target.id.startsWith("addEntry")) {
                newsList.innerHTML = newsFormFactory.addNewsArticle()
                const addEntry = document.querySelector("#addEntry")

                addEntry.addEventListener("click", () => {
                    const titleInput = document.querySelector("#title")
                    const synopsisInput = document.querySelector("#synopsis")
                    const urlInput = document.querySelector("#url")
                    const stamp = new Date()
                    const currentTime = stamp.toLocaleString()

                    const entry = {
                        title: titleInput.value,
                        synopsis: synopsisInput.value,
                        url: urlInput.value,
                        timestamp: currentTime,
                        userId: Number(sessionStorage.getItem("user"))
                    }

                    apiActions.addNewsEntry(entry)
                        .then(() => {
                            apiActions.getNewsEntries()
                                .then(renderNewsEntries)
                        })
                })
            }
        })
    }
}

