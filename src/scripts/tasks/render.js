import API from './api.js'
import htmlFactory from './htmlFactory.js'
import events from './eventListeners.js'

const tasksContainer = document.querySelector("#containerTwo");

const render = {
    renderTasks() {
        API.getTasks()
            .then(tasks => {
                tasksContainer.innerHTML = "";
                tasks.forEach(task => tasksContainer.innerHTML += htmlFactory.formResult(task))

                tasksContainer.innerHTML += htmlFactory.addButton()
                events.openForm()
                events.addDeleteBtnListener();
                events.addEditButtonListener();
            })
    },
    renderForm() {
        tasksContainer.innerHTML += htmlFactory.inputForm()
    }
}

export default render