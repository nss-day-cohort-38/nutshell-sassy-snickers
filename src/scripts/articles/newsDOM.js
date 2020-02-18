import newsFactory from "./newsCreateHTML.js"

const container = document.querySelector("#containerOne")

const renderNewsEntries = (entries) => {
    container.innerHTML = ""

    entries.forEach(entry => {
        const newsHTML = newsFactory.newsFactory(entry)
        container.innerHTML += newsHTML
    })
}

export default renderNewsEntries