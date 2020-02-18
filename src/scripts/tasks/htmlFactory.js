const htmlFactory = {
    formResult(taskResult) {
        return `
    <section>
        <h3>Task: ${taskResult.task}</h3>
        <p>Due Date: ${taskResult.expectedDate}</p>
        <button id="delete--${taskResult.id}" class="delete_btn">Delete</button>
        <button id="edit--${taskResult.id}" class="edit_btn">Edit</button>
    </section>
    `
    },
    // inputForm() {
    //     return`
    //         <fieldset>
    //             <input type="text" id="taskName" placeholder="Task: ">
    //             <input type="date" id="dueDate" placeholder="Date: ">
    //             <button Id="saveButtonId>Save</button>
    //         </fieldset>
    //         `
    // }
}
export default htmlFactory
