const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

let tasks = [
  {
    id: 1,
    text: "Go to shop",
  },
  {
    id: 2,
    text: "By car",
  },
  {
    id: 3,
    text: "Got for a run",
  },
  {
    id: 4,
    text: "Read a book",
  },
  {
    id: 5,
    text: "Call mom",
  },
];

// Перетворити json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Hello, Express!");
});

app.get("/tasks", (req, res) => {
  return res.status(200).json(tasks);
});

const checkExist = (task, res) => {
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
};

app.post("/tasks", (req, res) => {
  // Отримати дані з тіла запиту
  const newTask = req.body;
  // Виконати операцію створення
  tasks.push(newTask);
  // Відповісти повідомленням про успіх або новоствореною задачею
  return res.status(201).json(newTask);
});

app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  // Знаходимо завдання за отриманим індентифікатором
  const foundTask = tasks.find((task) => task.id === taskId);
  checkExist(foundTask, res);
  return res.status(200).json(foundTask);
});

app.put("/tasks/:id", (req, res) => {
  // Отримуємо дані з тіла запиту
  const updatedTask = req.body;
  const taskId = parseInt(req.params.id, 10);
  // Знаходимо завдання за отриманим індентифікатором
  const foundTask = tasks.find((task) => task.id === taskId);
  checkExist(foundTask, res);
  foundTask.text = updatedTask.text; // Оновлюємо текст завдання
  return res.status(200).json(foundTask);
});

app.delete("/tasks/:id", (req, res) => {
  // Отримуємо індитифікатор завдання
  const taskId = parseInt(req.params.id);
  // Виконати операцію видалення
  tasks = tasks.filter((t) => t.id !== taskId);
  // Відповісти повідомленням про успіх
  return res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
