const baseURL = "http://localhost:8088";

const API = {
    getAllTasks() {
        return fetch(`${baseURL}/Tasks`)
            .then(response => response.json())
    },
    addNewTask(newTask) {
        return fetch(`${baseURL}/Tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newApp)
        }).then(response => response.json())
    },
    deleteApp(id) {
        return fetch(`${baseURL}/Tasks/${id}`, {
            method: "DELETE"
        })
    }
}

export default API