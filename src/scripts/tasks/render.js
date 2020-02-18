import API from './api.js'
import htmlFactory from './htmlFactory.js'
import events from './eventListeners.js'

const tasksContainer = document.querySelector("#containerTwo");

const render = {
  renderAllTasks() {
    API.getAllTasks()
      .then(tasks => {
        tasksContainer.innerHTML = "";
        tasks.forEach(task => tasksContainer.innerHTML += htmlFactory(task))
        events.addDeleteBtnListeners();
      })
  }
}

export default render