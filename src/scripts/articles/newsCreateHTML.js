export default {
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