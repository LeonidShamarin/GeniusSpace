const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sqlite3 = require("sqlite3").verbose();

const dbName = "tasks.db";
const port = 3000;

const db = new sqlite3.Database(dbName);

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
  db.all("SELECT * FROM tasks", (err, rows) => {
    serverError(err, res);
    return res.status(200).json(rows);
  });
});

const checkExist = (task, res) => {
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
};
const serverError = (err, res) => {
  if (err) {
    //error:"Internal Server Error" - так правильно писати коли в продакшні
    return res.status(500).json({ error: "error: err.message" });
  }
};

app.post("/tasks", (req, res) => {
  // Отримати дані з тіла запиту
  const newTask = req.body;
  // Виконати операцію створення
  // tasks.push(newTask);
  db.run("INSERT INTO tasks (text) VALUES (?)", [newTask.text], function (err) {
    serverError(err, res);
    // Відповісти повідомленням про успіх або новоствореною задачею
    return res.status(201).json({ id: this.lastID });
  });
});

app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  // Знаходимо завдання за отриманим індентифікатором
  // const foundTask = tasks.find((task) => task.id === taskId);

  db.get("SELECT * FROM tasks WHERE id =?", taskId, (err, row) => {
    serverError(err, res);
    checkExist(row, res);
    return res.status(200).json(row);
  });
});

app.put("/tasks/:id", (req, res) => {
  // Отримуємо дані з тіла запиту
  const { text } = req.body;
  const taskId = parseInt(req.params.id, 10);
  // Знаходимо завдання за отриманим індентифікатором

  db.run("UPDATE tasks SET text =? WHERE id =?", [text, taskId], (err) => {
    serverError(err, res);
    return res.status(200).json({ id: taskId, text });
  });
});

app.delete("/tasks/:id", (req, res) => {
  // Отримуємо індитифікатор завдання
  const taskId = parseInt(req.params.id);
  // Виконати операцію видалення
  db.run("DELETE FROM tasks WHERE id =?", taskId, (err) => {
    serverError(err, res);
    // Відповісти повідомленням про успіх
    return res.status(204).send();
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
