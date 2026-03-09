const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { addDeleteJob } = require("./queue");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

// Fetch mock tasks
app.get("/tasks", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    tasks = response.data;
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// Async delete (queue simulation)
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  addDeleteJob(id, () => {
    tasks = tasks.filter((task) => task.id !== id);
  });

  res.json({ message: "Delete job added to queue" });
});

app.listen(5000, () => console.log("Server running on port 5000"));