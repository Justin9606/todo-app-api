const express = require("express");
const router = express.Router();

//schema
const Todo = require("../models/todoSchema");

router.use(express.json());

//get All todos
router.get("/", async (req, res) => {
  try {
    const todoList = await Todo.find();

    res.send(todoList);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get single todo with its id
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      res.send(todo);
    } else {
      res.status(404).send("todo not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
