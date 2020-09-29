<template>
  <div class="container">
    <h1>Latest Tasks</h1>
    <div class="create-task">
      <label for="create-task">Say something...</label>
      <input
        type="text"
        id="create-task"
        v-model="text"
        placeholder="Create a task"
      />
      <button v-on:click="createTask">Create Task</button>
    </div>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="tasks-container">
      <div
        class="task1"
        v-for="(task, index) in tasks"
        v-bind:key="task._id"
        v-bind:item="task"
        v-bind:index="index"
        v-on:dblclick="deleteTask(task._id)"
      >
        {{
          `${task.createdAt.getDate()}/${task.createdAt.getMonth()}/${task.createdAt.getFullYear()}`
        }}
        <p class="text">{{ task.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TaskService from "../TaskService";
export default {
  name: "TaskService",
  data() {
    return {
      tasks: [],
      error: "",
      text: "",
    };
  },
  async created() {
    try {
      this.tasks = await TaskService.getTasks();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createTask() {
      await TaskService.insertTask(this.text);
      this.tasks = await TaskService.getTasks();
    },
    async deleteTask(id) {
      await TaskService.deleteTask(id);
      this.tasks = await TaskService.getTasks();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.task1 {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 15px;
}

p.text {
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 0;
}
</style>
