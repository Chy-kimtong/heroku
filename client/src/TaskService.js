import axios from "axios";

const url = "api/tasklist/";

class TaskService {
  //get the tasks
  static getTasks() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data;
          resolve(
            data.map((task) => ({
              ...task,
              createdAt: new Date(task.createdAt),
            }))
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  // create new task
  static insertTask(text) {
    return axios.post(url, {
      text,
    });
  }

  //delete particular task
  static deleteTask(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default TaskService;
