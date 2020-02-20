const baseURL = "http://localhost:8088";

const API = {
    getTasks() {
        return fetch(`${baseURL}/Tasks`)
            .then(response => response.json())
    },
    addNewTask(newTask) {
        return fetch(`${baseURL}/Tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        }).then(response => response.json())
    },
    deleteTask(id) {
        return fetch(`${baseURL}/Tasks/${id}`, {
            method: "DELETE"
        })
    },
    editTask(task) {
        return fetch(`${baseURL}/Tasks/${task.id}`), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        }
    }
}

export default API