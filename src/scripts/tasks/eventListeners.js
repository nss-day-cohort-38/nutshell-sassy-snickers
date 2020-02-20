import API from './api.js'
import render from './render.js'
import htmlFactory from './htmlFactory.js';

const taskEvents = {
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
        const hiddenInput = document.querySelector("#taskId");
        const nameInput = document.querySelector("#taskName");
        const dueDateInput = document.querySelector("#dueDate");
        const saveButton = document.querySelector("#saveButtonId");

        saveButton.addEventListener("click", (event) => {
            console.log(hiddenInput.value)
            if (hiddenInput.value == "undefined")  {
                const newTaskObject = {
                    "task": nameInput.value,
                    "expectedDate": dueDateInput.value
                }
                API.addNewTask(newTaskObject)
                .then(render.renderTasks)

            } else {
                const editedTaskObject = {
                    "id": parseInt(hiddenInput.value),
                    "task": nameInput.value,
                    "expectedDate": dueDateInput.value,
                }
                API.editTask(editedTaskObject)
                .then(render.renderTasks)
            }
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
    addEditButtonListener() {
        const editButtons = document.getElementsByClassName("edit_btn");
        const buttonsArray = Array.from(editButtons)

        buttonsArray.forEach(button => {
            button.addEventListener("click", (event) => {
                const taskId = event.target.id.split("--")[1]
                render.renderEditForm(taskId)
                this.addPostListener()
            })
        })
    },
    addSaveEventListener: () => {
        const saveButton = document.querySelector("#saveTask");

        saveButton.addEventListener("click", () => {
            const entryIdToEdit = event.target.id.split("--")
            const hiddenTaskId = document.querySelector("#taskId")
            const taskNameInput = document.querySelector("#taskName")
            const taskDateInput = document.querySelector("#dueDate")

            const task = {
                name: taskInput.value,
                date: taskInput.value
            };
            API.editTask()
                .then(render.renderTasks)
        });
    }
}

//     }
// }

export default taskEvents