const express = require("express");
const mongoose = require("mongoose");
const getTodos = require("./routes/getTodos");
const createTodo = require("./routes/createTodo");

const app = express();
app.use(express.json());

app.use("/api/getListOfTodos", getTodos);
app.use("/api/createTodo", createTodo);

mongoose
  .connect("mongodb://localhost/todo-list-app")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((e) => console.log("Could not connect to MongoDB...", e));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
