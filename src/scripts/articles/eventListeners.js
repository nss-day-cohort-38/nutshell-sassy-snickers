import apiActions from "./newsApi.js"
import renderNewsEntries from "./newsDOM.js"
import newsFormFactory from "./newsCreateHTML.js"

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
    openEvents: () => {
        const eventLink = document.querySelector("#newsBtn")

        eventLink.addEventListener("click", () => {
            apiActions.getNewsEntries().then(renderNewsEntries)
        })
    },
    entryEventListener: () => {
        const newsList = document.querySelector("#containerOne")

        newsList.addEventListener("click", (event) => {
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
                        timestamp: currentTime
                    }

                    apiActions.updateNewsEntry(entryIdToEdit, entry)
                    .then(() => {
                        apiActions.getNewsEntries()
                            .then(renderNewsEntries)
                    })
                })
                updateFormFields(entryIdToEdit)

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
                        timestamp: currentTime
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