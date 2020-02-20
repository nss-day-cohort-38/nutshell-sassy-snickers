import API from './api.js'
import render from './render.js'
import htmlFactory from './htmlFactory.js';

const events = {
    // Opens the task link button
    openTasks() {
        const tasksButton = document.querySelector("#taskBtnId");

        tasksButton.addEventListener("click", () => {
            API.getTasks().then(render.renderTasks())
        })
    },
    // Opens the "New Task" to return form
    openForm() {
        const addButton = document.querySelector("#addBtn")

        addButton.addEventListener("click", () => {
            render.renderForm()
            this.addPostListener()
        })
    },
    // Saves new task from form from post
    addPostListener() {
        const nameInput = document.querySelector("#taskName");
        const dueDateInput = document.querySelector("#dueDate");
        const saveButton = document.querySelector("#saveButtonId");

        saveButton.addEventListener("click", (event) => {
            const newTaskObject = {
                "task": nameInput.value,
                "expectedDate": dueDateInput.value,
            }
            API.addNewTask(newTaskObject)
                .then(render.renderTasks)
        })
    },
    addDeleteBtnListener() {
        const deleteButtons = document.getElementsByClassName("delete_btn");
        const buttonsArray = Array.from(deleteButtons)

        buttonsArray.forEach(button => {
            button.addEventListener("click", (event) => {
                const taskId = event.target.id.split("--")[1]
                API.deleteTask(taskId)
                    .then(render.renderTasks)
            })
        })
    },
    addEditButtonListener(taskId) {
        const hiddenTaskId = document.querySelector("#taskId")
        const taskNameInput = document.querySelector("#taskName")
        const taskDateInput = document.querySelector("#dueDate")
        const baseURL = "http://localhost:8088";

        fetch(`${baseURL}/Tasks/${taskId}`)
            .then(response => response.json())
            .then(task => {
                hiddenTaskId.value = task.id
                taskNameInput.value = task.task
                taskDateInput.value = task.expectedDate
            })
    },
    addSaveEventListener = () => {
        const saveButton = document.querySelector("#saveTask");

        saveButton.addEventListener("click", () => {
            const hiddenTaskId = document.querySelector("#taskId")
            const taskNameInput = document.querySelector("#taskName")
            const taskDateInput = document.querySelector("#dueDate")

            const task = {
                name: taskInput.value,
                date: taskInput.value
            };
            // task.id = parseInt(taskIdInput.value);
            // apiActions.updateTasks(task)
                .then(() => {
                    apiActions.getTasks()
                        .then(renderTasks)
                });
            }
        }

    }
}

export default events