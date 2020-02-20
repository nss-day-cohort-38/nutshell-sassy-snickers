/*
    Written by Matthew B
    Allows the articles to be displayed on the DOM
*/

import newsFactory from "./newsCreateHTML.js"

const container = document.querySelector("#containerOne")

const renderNewsEntries = (entries) => {
    container.innerHTML = ""

    // Loops through each news article and puts each one into the container on the DOM
    entries.forEach(entry => {
        const newsHTML = newsFactory.newsFactory(entry)
        container.innerHTML += newsHTML
    })
}

export default renderNewsEntries