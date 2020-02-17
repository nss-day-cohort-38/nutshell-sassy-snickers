const baseURL = "http://localhost:8088";

const API = {
  getAllTasks() {
    return fetch(`${baseURL}/Tasks`)
      .then(response => response.json())
  },