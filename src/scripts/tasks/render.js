const tasksContainer = document.getElementById("tasks_container");

const render = {
  renderAllTasks() {
    API.getAllTasks()
      .then(ideas => {
        tasksContainer.innerHTML = "";
        tasks.forEach(idea => tasksContainer.innerHTML += htmlFactory(task))
      })
  }
}