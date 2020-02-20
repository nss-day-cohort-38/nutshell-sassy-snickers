/*
    Written by Matthew B
    Creates HTML for the news article layout, adding a new article, and edit article
*/

export default {
    // How the articles will render to the DOM
    newsFactory: (news) => `
        <section class="news">
            <h1>${news.title}</h1>
            <h1>${news.synopsis}</h1>
            <h1>${news.url}</h1>
            <h1>${news.timestamp}</h1>
            <button id="addEntry">Add Entry</button>
            <button id="editEntry--${news.id}">Edit Entry</button>
            <button id="deleteEntry--${news.id}">Delete Entry</button>
        </section>
    `,
    // Form for how new news articles are added
    addNewsArticle: () => `
        <fieldset>
            <label for="title">Title: </label><br>
            <input type="text" name="title" id="title" placeholder="title"><br>
            <label for="synopsis">Synopsis: </label><br>
            <input type="text" name="synopsis" id="synopsis" placeholder="synopsis"><br>
            <label for="url">Url: </label><br>
            <input type="text" name="url" id="url" placeholder="url"><br>
            <button id="addEntry">Add Entry</button>
        </fieldset>
    `,
    // Form for how news articles are edited
    newsFormFactory: () => `
        <form>
            <label for="title">Title: </label><br>
            <input type="text" name="title" id="title" placeholder="title"><br>
            <label for="synopsis">Synopsis: </label><br>
            <input type="text" name="synopsis" id="synopsis" placeholder="synopsis"><br>
            <label for="url">Url: </label><br>
            <input type="text" name="url" id="url" placeholder="url"><br>
            <button type="button" id="saveEntry">Save Entry</button>
        </form>
    `
}