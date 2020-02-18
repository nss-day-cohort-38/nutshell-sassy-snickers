import API from './api.js'
import render from './render.js'

const renderButton = document.querySelector("#taskBtnId");
const nameInput = document.querySelector("#taskName");
const dueDateInput = document.querySelector("#dueDate");

const events = {
    addSaveBtnListener() {
        renderButton.addEventListener("click", (event) => {
            const newTaskObject = {
                "task": nameInput.value,
                "expectedDate": dueDateInput.value,
            }
            API.getAllTasks(newTaskObject).then(render.renderAllTasks)
        })
    }
}

export default events